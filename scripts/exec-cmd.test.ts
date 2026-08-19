import { afterEach, beforeEach, expect, test } from "bun:test";
import { existsSync } from "fs";
import { rm } from "fs/promises";
import os from "os";
import path from "path";
import { randomUUID } from "crypto";
import { CommandTimeoutError, execCmd } from "./exec-cmd";

const temporaryFiles: string[] = [];
let originalConsoleError: typeof console.error;

beforeEach(() => {
  originalConsoleError = console.error;
  console.error = () => {};
});

afterEach(async () => {
  console.error = originalConsoleError;
  await Promise.all(
    temporaryFiles.splice(0).map((file) => rm(file, { force: true })),
  );
});

function bunCommand(source: string) {
  const encoded = Buffer.from(source).toString("base64");
  return `${JSON.stringify(process.execPath)} -e "eval(Buffer.from('${encoded}', 'base64').toString())"`;
}

test("execCmd returns trimmed stdout", async () => {
  const output = await execCmd(
    bunCommand("console.log('ok')"),
    undefined,
    "successful command",
    1_000,
  );

  expect(output).toBe("ok");
});

test(
  "execCmd times out and kills the engine process tree",
  async () => {
    const marker = path.join(os.tmpdir(), `exec-cmd-${randomUUID()}`);
    temporaryFiles.push(marker);

    const descendant = Buffer.from(`
      setTimeout(() => Bun.write(${JSON.stringify(marker)}, "alive"), 1_000);
      setInterval(() => {}, 10_000);
    `).toString("base64");
    const parent = `
      Bun.spawn([process.execPath, "-e", "eval(Buffer.from('${descendant}', 'base64').toString())"], {
        stdin: "inherit",
        stdout: "inherit",
        stderr: "inherit",
      });
      setInterval(() => {}, 10_000);
    `;

    const startedAt = Date.now();
    const error = await execCmd(
      bunCommand(parent),
      undefined,
      "hung engine benchmark",
      100,
    ).then(
      () => null,
      (reason) => reason,
    );

    expect(error).toBeInstanceOf(CommandTimeoutError);
    expect(error).toMatchObject({
      label: "hung engine benchmark",
      timeoutMs: 100,
    });
    expect(Date.now() - startedAt).toBeLessThan(3_000);

    await Bun.sleep(1_300);
    expect(existsSync(marker)).toBe(false);
  },
  5_000,
);
