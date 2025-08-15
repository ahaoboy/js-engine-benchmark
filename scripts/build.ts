import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join, resolve } from "path";

const distPath = resolve("./dist");
const jsPath = join(distPath, "run.js");
const codeRoot = resolve("./v8-v7");
const runPath = join(codeRoot, "run.js");

if (!existsSync(distPath)) {
  mkdirSync(distPath);
}

let txt = readFileSync(runPath, "utf8");

for (const i of txt.matchAll(/load\('([^']+)'\);/g)) {
  const s = i[0];
  const name = i[1];
  const code = readFileSync(join(codeRoot, name), "utf8");
  txt = txt.replace(s, code);
}

writeFileSync(jsPath, txt);
