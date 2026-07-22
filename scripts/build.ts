import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { join, resolve, basename } from "path";

const distPath = resolve("./dist");
const codeRoot = resolve("./v8-v7");
const runPath = join(codeRoot, "run.js");

if (!existsSync(distPath)) {
  mkdirSync(distPath);
}

// Parse all load() calls and read their source files
const runContent = readFileSync(runPath, "utf8");
const loadRegex = /load\('([^']+)'\);/g;
const loadMatches = [...runContent.matchAll(loadRegex)];

const fileContents: Record<string, string> = {};
for (const match of loadMatches) {
  const name = match[1];
  fileContents[name] = readFileSync(join(codeRoot, name), "utf8");
}

// Extract the runner code after the last load() call
const lastLoadMatch = loadMatches[loadMatches.length - 1];
const lastLoadEnd =
  (lastLoadMatch.index ?? 0) + lastLoadMatch[0].length;
const runnerCode = runContent.slice(lastLoadEnd);

// 1. Inline all dependencies → dist/run.js
let fullRun = runContent;
for (const match of loadMatches) {
  fullRun = fullRun.replace(match[0], fileContents[match[1]]);
}
writeFileSync(join(distPath, "run.js"), fullRun);
console.log("✓ Generated dist/run.js (all tests)");

// 2. Separate base.js from individual test suites
const baseName = "base.js";
const testNames = loadMatches
  .map((m) => m[1])
  .filter((name) => name !== baseName);

// 3. Generate standalone files: base.js + one test + runner
for (const testName of testNames) {
  const testBaseName = basename(testName, ".js");
  const individualContent = [
    fileContents[baseName],
    fileContents[testName],
    runnerCode,
  ].join("\n");
  const outPath = join(distPath, `${testBaseName}.js`);
  writeFileSync(outPath, individualContent);
  console.log(`✓ Generated dist/${testBaseName}.js`);
}

// 4. Package run.js + all standalone tests into a zip archive
const zipName = "v7v8.zip";
const zipFiles = [
  "run.js",
  ...testNames.map((n) => basename(n, ".js") + ".js"),
];

execSync(
  `zip -j "${zipName}" ${zipFiles.join(" ")}`,
  { cwd: distPath, stdio: "pipe" },
);
console.log(`✓ Generated dist/${zipName}`);
