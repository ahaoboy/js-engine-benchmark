import { exec, execSync } from "child_process";
import { existsSync, readdirSync, statSync } from "fs";
import { platform } from "os";
import { dirname, join } from "path";
import info from "../info.json";

const TEST_JS_PATH = join(__dirname, "test.js");
const RUN_JS_PATH = join(__dirname, "..", "dist", "run.js");

const PLATFORM = platform();

/** Engines whose binary size cannot be measured. */
const UNKNOWN_SIZE_BINS = ["ringo", "rhino", "jjs", "engine262", "quickjs-emscripten", "cyjs"];

/** Engines implemented in JavaScript, for which a binary size is meaningless. */
const JS_BINS = new Set(["engine262", "quickjs-emscripten-cli", "cyjs"]);

/** Engines that are too slow or fail to run, so are skipped entirely. */
const SKIP_BINS = new Set(["engine262", "rhino", "hako", "nova", "JerryScript"]);

/** Engines that do not report a version. */
const NO_VERSION_BINS = new Set(["primjs", "rquickjs", "goja", "mozjs", "jint-cli", "jsc", "cyjs"]);

/** Benchmark fields kept in the final result. */
const RESULT_FIELDS = new Set([
  "Version",
  "Total size",
  "Exe size",
  "Dll size",
  "Richards",
  "DeltaBlue",
  "Crypto",
  "RayTrace",
  "EarleyBoyer",
  "RegExp",
  "Splay",
  "NavierStokes",
  "Score",
  "Score/MB",
  "Time(s)",
]);

const VERSION_RE = /([\d.]+(?:-[a-zA-Z0-9]+)?)/;
const V_VERSION_RE = /v([\d.]+(?:-[a-zA-Z0-9]+)?)/;

/** Extract the first capture group of `re`, trimmed, or an empty string. */
function capture(text: string, re: RegExp): string {
  return text.match(re)?.[1]?.trim() ?? "";
}

function isBin(name: string, base: string): boolean {
  return name === base || name === `${base}.exe`;
}

function toJSON(output: string): Record<string, number> {
  const json: Record<string, number> = {};
  const lines = output.split("\n");
  // Some engines prefix every line with a timestamp; skip past it.
  const offset = lines.find((line) => line.includes("----"))?.indexOf("----") ?? 0;

  for (const line of lines) {
    if (!line.trim() || !line.includes(":") || line.includes("----")) {
      continue;
    }
    // ladybird: "Richards: 292"
    // goja: 2025/03/29 16:43:06 DeltaBlue: 525
    // rhino: INFO Richards: 56.3
    const [key, value] = line
      .slice(offset)
      .replaceAll('"', "")
      .replaceAll("INFO ", "")
      .split(":")
      .map((part) => part.trim());

    if (!RESULT_FIELDS.has(key)) {
      continue;
    }
    const n = Number(value);
    json[key] = Number.isNaN(n) ? 0 : n | 0;
  }

  return json;
}

function execCmd(cmd: string, cwd?: string): Promise<string> {
  console.error("cmd:", { cmd, cwd });
  return new Promise((resolve) => {
    exec(cmd, { cwd }, (_err, stdout, stderr) => {
      const name = cmd.split(" ")[0].replaceAll("\\", "/").split("/").at(-1) ?? "";
      let output = stdout.trim();

      // boa prints a trailing `undefined`
      if (isBin(name, "boa") && output.endsWith("\nundefined")) {
        output = output.split("\n").slice(0, -1).join("\n");
      }
      // goja prints the benchmark output to stderr
      if (isBin(name, "goja")) {
        output = stderr.trim();
      }

      console.error("execCmd output:", output);
      resolve(output);
    });
  });
}

async function getVersion(cmd: string): Promise<string> {
  if (NO_VERSION_BINS.has(cmd)) {
    return "";
  }

  const run = (args: string, cwd?: string) => execCmd(`${cmd} ${args}`, cwd);

  switch (cmd) {
    // `<cmd> --version`, full output
    case "es5":
    case "quanta":
      return (await run("--version")).trim();

    // `<cmd> --version`, last whitespace separated token
    case "ch": // ch version 1.13.0.0-beta
    case "dune":
    case "ringo":
    case "lo":
    case "ladybird":
      return (await run("--version")).split(" ").at(-1)?.trim() ?? "";

    // `<cmd> --version`, `v` prefixed version
    case "llrt":
    case "tjs":
    case "paserati":
    case "node":
      return capture(await run("--version"), V_VERSION_RE);

    // `<cmd> --version`, bare version
    case "boa":
    case "deno":
    case "bun":
    case "graaljs":
    case "jerry":
    case "qjs-oxide":
      return capture(await run("--version"), VERSION_RE);

    case "ant":
      return (await run("--version-raw")).trim().replace(" ", ".");
    case "goant":
      // goant v0.1.0-7ed32b3.dirty -> v0.1.0-7ed32b3
      return (await run("--version")).match(V_VERSION_RE)?.[0].trim() ?? "";
    case "es6":
    case "lumen": {
      // lumen 0.1.2-nightly (c9a0729) -> 0.1.2-c9a0729
      const text = await run("--version");
      const version = text.match(/(\d+\.\d+\.\d+)/);
      const hash = text.match(/[+( ]([a-f0-9]{7,})/);
      return version && hash ? `${version[1]}-${hash[1]}` : capture(text, VERSION_RE);
    }
    case "engine262":
      // engine262 v0.0.1-5dece49950e94360d45198df59f3adf4ceb94cb4 -> 0.0.1
      return capture(await run("-h"), /v(\d+\.\d+\.\d+)/);
    case "qjs":
      return capture(await run("-h"), /version (\d{4}-\d{2}-\d{2})/);
    case "qjs-ng":
      return capture(await run("-h"), /version (\d+\.\d+\.\d+)/);
    case "hermes":
      return capture(await run("--version"), /Hermes release version: (\d+\.\d+\.\d+)/);
    case "js":
      return capture(await run("--version"), /JavaScript-C([\d.]+(?:-[a-zA-Z0-9]+)?)/);
    case "xst":
      return capture(await run("-v"), VERSION_RE);
    case "zjs":
      return (await run("--print-config-signature")).trim();
    case "njs":
      return (await run("-v")).trim();
    case "d8":
      return capture(
        await execCmd(`echo "exit" | ${cmd}`, dirname(getExePath("d8"))),
        /version ([\d.]+(?:-[a-zA-Z0-9]+)?)/,
      );

    // Engines that only print their version on startup
    case "mujs":
      return capture(await execCmd(`echo "exit" | ${cmd}`), VERSION_RE).slice(0, -1);
    case "duk":
    case "kiesel":
      return capture(await execCmd(`echo "exit" | ${cmd}`), VERSION_RE);
    case "jjs":
      return capture(await execCmd(`echo 'exit()' | ${cmd} -v`), VERSION_RE);

    default:
      return "";
  }
}

function isMsys(): boolean {
  return !!process.env["MSYSTEM"];
}

/** Convert an MSYS/Cygwin path (e.g. `/c/foo`) to a Windows path. */
function fromMsysPath(s: string): string {
  if (!isMsys() || !s.startsWith("/")) {
    return s;
  }
  return s.replace(/^\/([A-Za-z])\//, (_, drive: string) => `${drive.toUpperCase()}:/`);
}

function getFileSize(filePath: string): number {
  if (UNKNOWN_SIZE_BINS.some((bin) => filePath.includes(bin))) {
    return 0;
  }
  try {
    let p = fromMsysPath(filePath);
    if (isMsys() && !existsSync(p) && existsSync(`${p}.exe`)) {
      p = `${p}.exe`;
    }
    return statSync(p).size;
  } catch {
    return 0;
  }
}

function getDllSize(programPath: string): number {
  if (UNKNOWN_SIZE_BINS.some((bin) => programPath.includes(bin))) {
    return 0;
  }
  programPath = fromMsysPath(programPath);

  const dependencies: string[] = [];

  // JavaScriptCore
  if (programPath.endsWith("jsc")) {
    dependencies.push(
      join(dirname(programPath), "JavaScriptCore.framework/Versions/A/JavaScriptCore"),
    );
  }

  // GraalJS
  if (programPath.includes("graaljs")) {
    const dir = dirname(dirname(programPath));
    for (const sub of ["lib", "modules"]) {
      const subDir = join(dir, sub);
      if (!existsSync(subDir)) {
        continue;
      }
      for (const entry of readdirSync(subDir)) {
        dependencies.push(join(subDir, entry));
      }
    }
  }

  // libChakraCore.so or libChakraCore.dylib
  if (programPath.endsWith("ch")) {
    const dir = dirname(programPath);
    for (const entry of readdirSync(dir)) {
      if (entry.includes("libChakraCore")) {
        dependencies.push(join(dir, entry));
      }
    }
  }

  try {
    if (PLATFORM === "darwin") {
      const output = execSync(`otool -L "${programPath}"`, { encoding: "utf-8" });
      dependencies.push(
        ...output
          .split("\n")
          .slice(1)
          .map((line) => line.trim().split(" ")[0])
          .filter((dep) => dep && !dep.startsWith("(")),
      );
    } else if (PLATFORM === "linux" || PLATFORM === "win32") {
      const output = execSync(`ldd "${programPath}"`, { encoding: "utf-8" });
      for (const line of output.split("\n")) {
        const dep = line.split("=>")?.[1]?.trim().split(" (")?.[0];
        if (!dep) {
          continue;
        }
        if (
          dep.startsWith("/lib/") ||
          dep.startsWith("/lib64/") ||
          dep.startsWith("/c/WINDOWS/") ||
          dep.startsWith("linux-")
        ) {
          continue;
        }
        dependencies.push(dep);
      }
    }
  } catch (err: any) {
    console.error(`Error getting dependencies: ${err.message}`);
  }

  return dependencies.reduce((total, dep) => total + getFileSize(dep), 0);
}

function getExePath(bin: string): string {
  const execPath = execSync(`which ${bin}`).toString().trim();
  return fromMsysPath(existsSync(`${execPath}.exe`) ? `${execPath}.exe` : execPath);
}

const data: Record<string, Record<string, string | number>> = {};

function ensureRows(...keys: string[]) {
  for (const key of keys) {
    data[key] ??= {};
  }
}

async function main() {
  for (const item of info) {
    try {
      const bin = item.bin || item.name;
      if (SKIP_BINS.has(bin)) {
        continue;
      }
      const name = item.name;
      const subcmd = item.subcmd ? ` ${item.subcmd}` : "";
      const execPath = getExePath(bin);
      const execDir = dirname(execPath);

      // Warm up the engine with a trivial script before benchmarking.
      await execCmd(`${execPath}${subcmd} ${TEST_JS_PATH}`, execDir);

      const isJS = JS_BINS.has(bin);
      const fileSize = isJS ? 0 : getFileSize(execPath);
      const dllSize = isJS ? 0 : getDllSize(execPath);
      const totalSize = fileSize + dllSize;

      const version = ((await getVersion(bin)) || "").replaceAll("-", ".");

      ensureRows("Version", "Total size", "Exe size", "Dll size");
      data["Version"][name] = version;
      data["Total size"][name] = totalSize;
      data["Exe size"][name] = fileSize;
      data["Dll size"][name] = dllSize;

      const startTime = Date.now();
      const out = await execCmd(`${bin}${subcmd} ${RUN_JS_PATH}`, execDir);
      const elapsed = ((Date.now() - startTime) / 1000) | 0;

      const json = toJSON(out);
      console.error("json:", JSON.stringify(json));
      for (const [key, value] of Object.entries(json)) {
        (data[key] ??= {})[name] = value;
      }

      ensureRows("Score", "Score/MB", "Time(s)");
      data["Score/MB"][name] = ((+data["Score"][name] / totalSize) * 1024 * 1024) | 0;
      data["Time(s)"][name] = elapsed;
    } catch (e) {
      console.error("error:", e);
    }
  }

  if (!Object.keys(data).length) {
    console.error("no keys", JSON.stringify(data));
    return;
  }

  console.error(JSON.stringify(data));
  console.log(JSON.stringify(data));
}

main();
