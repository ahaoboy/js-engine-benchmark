import fs, { existsSync, unlink } from "fs";
import path from "path";
import { exec, execSync } from "child_process";
import os from "os";
import info from "../info.json";

const TEST_JS_PATH = path.join(__dirname, "test.js");
const RUN_JS_PATH = path.join(__dirname, "..", "dist", "run.js");


function toJSON(data: string): Record<string, string | number> {
  const json: Record<string, string | number> = {};
  const offset =
    data.split("\n").find((i) => i.includes("----"))?.indexOf("----") || 0;
  for (const line of data.split("\n").filter((i) => i.trim().length)) {
    if (line.includes(":") && !line.includes("----")) {
      // ladybird: "Richards: 292"
      // goja: 2025/03/29 16:43:06 DeltaBlue: 525
      const [k, v] = line.slice(offset)
        .replaceAll('"', "")
        // rhino: INFO Richards: 56.3
        .replaceAll("INFO ", "")
        .split(":")
        .map((i) => i.trim());

      if (
        ![
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
        ].includes(k)
      ) {
        continue;
      }
      const n = +v;
      json[k] = isNaN(n) ? 0 : n | 0;
    }
  }

  return json;
}

function execCmd(cmd: string, cwd?: string) {
  console.error(`cmd:`, { cmd, cwd });
  return new Promise<string>((r) => {
    // exec(`bash -c "${cmd}"`, { cwd }, (err, stdout, stderr) => {
    exec(cmd, { cwd }, (err, stdout, stderr) => {
      console.error("exec output", { err, stdout, stderr });
      const name = cmd.split(" ")[0].replaceAll("\\", '/').split('/').at(-1) || ""
      let s = stdout?.trim() || ''
      // boa output last value
      if (['boa', 'boa.exe'].some(e => name.endsWith(e))) {
        s = s.split('\n').slice(0, - 1).join('\n')
      }
      // goja output to stderr
      if (['goja', 'goja.exe'].some(e => name.endsWith(e))) {
        s = stderr?.trim() || ''
      }

      console.error("execCmd output", s);
      r(s);
    });
  });
}

async function getVersion(cmd: string) {
  if (
    ["primjs", "rquickjs", "ladybird", "goja", "mozjs", "jint-cli"].includes(
      cmd,
    )
  ) {
    return "";
  }
  if (cmd === "engine262") {
    // engine262 v0.0.1-5dece49950e94360d45198df59f3adf4ceb94cb4
    const text = (await execCmd(`${cmd} -h`)).trim();
    return text.match(/v(\d+\.\d+\.\d+)/)?.[1].trim();
  }
  if (cmd === "ch" || cmd === "dune" || cmd === "ringo") {
    // ch version 1.13.0.0-beta
    const text = await execCmd(`${cmd} --version`);
    return text.split(" ").at(-1)?.trim() || "";
  }
  if (cmd === "llrt") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/v([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "qjs") {
    const text = await execCmd(`${cmd} -h`);
    return text.match(/version (\d{4}-\d{2}-\d{2})/)?.[1].trim();
  }
  if (cmd === "qjs-ng") {
    const text = await execCmd(`${cmd} -h`);
    return text.match(/version (\d+\.\d+\.\d+)/)?.[1].trim();
  }
  if (cmd === "tjs" || cmd === "lo") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/v([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "mujs") {
    const text = await execCmd(`echo "exit" | ${cmd}`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim().slice(0, -1);
  }
  if (cmd === "boa") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "hermes") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/Hermes release version: (\d+\.\d+\.\d+)/)?.[1].trim();
  }
  if (cmd === "xst") {
    const text = await execCmd(`${cmd} -v`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }

  if (cmd === "deno") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "node") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/v([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "bun") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "graaljs") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "jsc") {
    // FIXME: get jsc version by cli
    return "";
  }
  if (cmd === "d8") {
    const cwd = path.dirname(getExePath("d8"));
    const text = await execCmd(`echo "exit" | ${cmd}`, cwd);
    return text.match(/version ([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "js") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/JavaScript-C([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "jerry") {
    const text = await execCmd(`${cmd} --version`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "duk" || cmd == "kiesel") {
    const text = await execCmd(`echo "exit" | ${cmd}`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "jjs") {
    const text = await execCmd(`echo 'exit()' | ${cmd} -v`);
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim();
  }
  if (cmd === "njs") {
    const text = await execCmd(`${cmd} -v`);
    return text.trim();
  }
  return "";
}

const data: Record<string, Record<string, string | number>> = {};
const platform = os.platform();

function isMsys() {
  return !!process.env["MSYSTEM"];
}
function toMsysPath(s: string) {
  s = s.replaceAll("\\", "/");
  s = s.replace(/^([A-Za-z]):\//, (_, drive) => `/${drive.toLowerCase()}/`);
  return s;
}
function fromMsysPath(s: string) {
  if (!isMsys() || !s.startsWith("/")) {
    return s;
  }
  s = s.replace(/^\/([A-Za-z])\//, (_, drive) => `${drive.toUpperCase()}:/`);
  return s;
}

function getJavaSize() {
  const v = [
    "/usr/lib/jvm",
    "C:/Program Files/Java",
    "/Library/Java/JavaVirtualMachines",
    "C:/hostedtoolcache/windows/Java_Temurin-Hotspot_jdk/21.0.7-6.0/x64",
    "/opt/hostedtoolcache/Java_Temurin-Hotspot_jdk/21.0.7-6/x64",
    "/Users/runner/hostedtoolcache/Java_Temurin-Hotspot_jdk/21.0.7-6.0/x64/Contents/Home",
    "/Users/runner/hostedtoolcache/Java_Temurin-Hotspot_jdk/21.0.7-6.0/arm64/Contents/Home",
  ];

  for (const i of v) {
    try {
      const n = +execSync(`du -s "${i}"`).toString().split("\t")[0].split(
        " ",
      )[0];
      if (n > 0) {
        return n * 1000;
      }
    } catch (e) {
      // console.error('error: ', e.me)
    }
  }
  return 0;
}
const UNKNOWN_LIST = ['ringo', "rhino", "jjs", "engine262", 'quickjs-emscripten']
function getFileSize(filePath: string) {
  try {
    if (UNKNOWN_LIST.some(i => filePath.includes(i))) {
      return 0;
    }
    let p = isMsys() ? fromMsysPath(filePath) : filePath;
    if (!fs.existsSync(p) && isMsys() && fs.existsSync(p + ".exe")) {
      p = p + ".exe";
    }
    const stats = fs.statSync(p);
    return stats.size;
  } catch (err) {
    // console.error(err)
    return 0;
  }
}

function getDllSize(programPath: string) {
  if (UNKNOWN_LIST.some(i => programPath.includes(i))) {
    return 0;
  }
  if (isMsys()) {
    programPath = fromMsysPath(programPath);
  }

  let dependencies: string[] = [];

  // JavaScriptCore
  if (programPath.endsWith("jsc")) {
    const dir = path.dirname(programPath);
    const dllPath = dir + "/JavaScriptCore.framework/Versions/A/JavaScriptCore";
    dependencies.push(dllPath);
  }

  if (programPath.includes("graaljs")) {
    const dir = path.dirname(path.dirname(programPath));
    for (const d of ["lib", "modules"]) {
      if (!existsSync(path.join(dir, d))) {
        continue
      }
      for (const i of fs.readdirSync(path.join(dir, d))) {
        dependencies.push(path.join(dir, d, i));
      }
    }
  }

  // libChakraCore.so or libChakraCore.dylib
  if (programPath.endsWith("ch")) {
    const dir = path.dirname(programPath);
    for (const i of fs.readdirSync(dir)) {
      if (i.includes("libChakraCore")) {
        dependencies.push(path.join(dir, i));
      }
    }
  }

  try {
    if (platform === "darwin") {
      const output = execSync(`otool -L "${programPath}"`, {
        encoding: "utf-8",
      });
      dependencies = dependencies.concat(
        output
          .split("\n")
          .slice(1)
          .map((line) => line.trim().split(" ")[0])
          .filter((dep) => dep && !dep.startsWith("(")),
      );
    } else if (platform === "linux" || platform === "win32") {
      const output = execSync(`ldd "${programPath}"`, { encoding: "utf-8" });
      for (const line of output.split("\n")) {
        const path = line.split("=>")?.[1]?.trim().split(" (")?.[0];
        if (!path) {
          continue;
        }
        if (
          path.startsWith("/lib/") ||
          path.startsWith("/lib64/") ||
          path.startsWith("/c/WINDOWS/") ||
          path.startsWith("linux-")
        ) {
          continue;
        }
        dependencies.push(path);
      }
    }
  } catch (err: any) {
    console.error(`Error getting dependencies: ${err.message}`);
    return dependencies.reduce((pre, cur) => pre + getFileSize(cur), 0);
  }

  return dependencies.reduce((pre, cur) => pre + getFileSize(cur), 0);
}

function getExePath(i: string) {
  const execPath = execSync(`which ${i}`).toString().trim();
  const fullPath = existsSync(execPath + '.exe') ? execPath + '.exe' : execPath;
  return fromMsysPath(fullPath);
}

const JS_BINS = [
  "engine262",
  "quickjs-emscripten-cli",
]

// async function strip(p: string) {
//   const s = await execCmd(`strip "${p}"`)
//   console.error(`strip: ${p} ${s}`)
// }

// engine262 is so slow that we skip it for now
const SKIP_LIST = ["engine262"]

async function main() {
  for (const item of info) {
    try {
      const bin = item.bin || item.name
      if (SKIP_LIST.includes(bin)) {
        continue
      }
      const name = item.name
      const { subcmd = "" } = item
      const execPath = getExePath(bin);

      // await strip(execPath)

      const execDir = path.dirname(execPath);
      const test = (await execCmd(
        `${execPath} ${subcmd} ${TEST_JS_PATH}`,
        execDir,
      )).trim();

      const isJS = JS_BINS.includes(bin)
      const fileSize = isJS ? 0 : getFileSize(execPath);
      const dllSize = isJS ? 0 : getDllSize(execPath);

      console.error("execPath", { execPath, execDir, test, fileSize, dllSize });

      if (!("Version" in data)) {
        data["Version"] = {};
      }
      if (!("Total size" in data)) {
        data["Total size"] = {};
      }
      if (!("Exe size" in data)) {
        data["Exe size"] = {};
      }
      if (!("Dll size" in data)) {
        data["Dll size"] = {};
      }

      const version = ((await getVersion(bin)) || "").replaceAll("-", ".");
      data["Version"][name] = version;
      console.error("version: ", version);
      data["Total size"][name] = fileSize + dllSize;
      data["Exe size"][name] = fileSize;
      data["Dll size"][name] = dllSize;
      const startTime = +new Date();
      const out = await execCmd(
        `${bin} ${subcmd} ${RUN_JS_PATH}`,
        execDir,
      );
      const endTime = +new Date();
      console.error("out: ", out);

      const json = toJSON(out);
      console.error("json:", JSON.stringify(json));
      // if (!json['Score']) {
      //   continue
      // }
      for (const [k, v] of Object.entries(json)) {
        const obj = data[k] || {};
        obj[name] = v;
        data[k] = obj;
      }
      if (!("Score" in data)) {
        data["Score"] = {};
      }
      if (!("Score/MB" in data)) {
        data["Score/MB"] = {};
      }
      const score = data["Score"][name];
      data["Score/MB"][name] = (+score / (fileSize + dllSize) * 1024 * 1024) | 0;

      if (!("Time(s)" in data)) {
        data["Time(s)"] = {};
      }
      data["Time(s)"][name] = ((endTime - startTime) / 1000) | 0;
    } catch (e) {
      console.error("error:", e);
    }
  }

  // sort by score
  const keys = Object.keys(data);
  if (!keys.length) {
    console.error("no keys", JSON.stringify(data));
    return;
  }

  console.error(JSON.stringify(data));
  console.log(JSON.stringify(data));
}

main();
