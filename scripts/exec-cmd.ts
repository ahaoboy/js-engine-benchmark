import {
  exec,
  execFile,
  execFileSync,
  type ChildProcess,
} from "child_process";

// The slowest healthy Ubuntu command is about four minutes. Keep enough margin
// for runner variance while bounding a hung engine well below the job timeout.
export const DEFAULT_COMMAND_TIMEOUT_MS = 10 * 60 * 1000;

export class CommandTimeoutError extends Error {
  constructor(
    readonly command: string,
    readonly label: string,
    readonly timeoutMs: number,
  ) {
    super(`${label} timed out after ${timeoutMs}ms: ${command}`);
    this.name = "CommandTimeoutError";
  }
}

function getCommandTimeoutMs() {
  const timeoutMs = Number(process.env.JS_ENGINE_TIMEOUT_MS);
  return Number.isSafeInteger(timeoutMs) && timeoutMs > 0
    ? timeoutMs
    : DEFAULT_COMMAND_TIMEOUT_MS;
}

function killProcessTree(child: ChildProcess) {
  const pid = child.pid;
  if (!pid) {
    return;
  }

  if (process.platform === "win32") {
    execFile(
      "taskkill",
      ["/pid", String(pid), "/T", "/F"],
      { windowsHide: true },
      (error) => {
        if (error && child.exitCode === null) {
          child.kill("SIGKILL");
        }
      },
    );
    return;
  }

  const childrenByParent = new Map<number, number[]>();
  try {
    const processes = execFileSync("ps", ["-A", "-o", "pid=,ppid="], {
      encoding: "utf8",
    });
    for (const line of processes.split("\n")) {
      const [processId, parentId] = line.trim().split(/\s+/).map(Number);
      if (!processId || !parentId) {
        continue;
      }
      const children = childrenByParent.get(parentId) || [];
      children.push(processId);
      childrenByParent.set(parentId, children);
    }
  } catch (error) {
    console.error("failed to inspect process tree", { pid, error });
  }

  const descendants: number[] = [];
  const collectDescendants = (parentId: number) => {
    for (const processId of childrenByParent.get(parentId) || []) {
      collectDescendants(processId);
      descendants.push(processId);
    }
  };
  collectDescendants(pid);

  for (const processId of descendants) {
    try {
      process.kill(processId, "SIGKILL");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== "ESRCH") {
        console.error("failed to kill descendant process", { processId, error });
      }
    }
  }

  try {
    // exec() starts a shell. detached makes it the leader of a new process
    // group, so a negative PID kills both the shell and the engine process.
    process.kill(-pid, "SIGKILL");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ESRCH") {
      console.error("failed to kill process group", { pid, error });
    }
    child.kill("SIGKILL");
  }
}

export function execCmd(
  cmd: string,
  cwd?: string,
  label = cmd,
  timeoutMs = getCommandTimeoutMs(),
) {
  const startedAt = Date.now();
  console.error("cmd:", { cmd, cwd, label, timeoutMs });

  return new Promise<string>((resolve, reject) => {
    let settled = false;
    const child = exec(
      cmd,
      { cwd, detached: process.platform !== "win32" },
      (err, stdout, stderr) => {
        clearTimeout(timer);
        const elapsedMs = Date.now() - startedAt;
        console.error("exec output", { err, stdout, stderr, elapsedMs, label });

        if (settled) {
          return;
        }
        settled = true;

        const name =
          cmd.split(" ")[0].replaceAll("\\", "/").split("/").at(-1) || "";
        let output = stdout?.trim() || "";

        // boa output last value
        if (
          ["boa", "boa.exe"].some((engine) => name.endsWith(engine)) &&
          output.endsWith("\nundefined")
        ) {
          output = output.split("\n").slice(0, -1).join("\n");
        }

        // goja output to stderr
        if (["goja", "goja.exe"].some((engine) => name.endsWith(engine))) {
          output = stderr?.trim() || "";
        }

        console.error("execCmd output", output);
        resolve(output);
      },
    );

    const timer = setTimeout(() => {
      if (settled) {
        return;
      }
      settled = true;
      console.error("exec timeout", {
        cmd,
        cwd,
        label,
        timeoutMs,
        elapsedMs: Date.now() - startedAt,
        pid: child.pid,
      });
      try {
        killProcessTree(child);
      } catch (error) {
        console.error("failed to kill timed-out command", { child, error });
      } finally {
        reject(new CommandTimeoutError(cmd, label, timeoutMs));
      }
    }, timeoutMs);
  });
}
