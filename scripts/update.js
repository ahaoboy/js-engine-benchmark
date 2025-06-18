const fs = require('fs')
const path = require('path')
const { exec, execSync } = require('child_process');
const os = require('os');
const info = require("../info.json")

const TEST_JS_PATH = path.join(__dirname, "test.js")
const RUN_JS_PATH = path.join(__dirname, "..", "dist", "run.js")

const execList = [
  "llrt",
  "qjs",
  "primjs",
  "rquickjs",
  "qjs-ng",
  "tjs",
  'mujs',
  'mujs-one',
  "boa",
  "hermes",
  "xst",
  'deno',
  'node',
  "bun",
  "graaljs",
  'jsc',
  'd8',
  'js',
  "jerry",
  "ch",
  "engine262",
  "ladybird",
  "goja",
  "kiesel",
  "mozjs",
  "jint-cli",
  "dune",
  "jjs",
  "rhino"
  // "dukTape",
]

const subCmd = {
  "tjs": "run",
  "dune": "run",
}

function toJSON(data) {
  const json = {}
  const offset = data.split('\n').find(i => i.includes('----'))?.indexOf('----') || 0;
  for (const line of data.split("\n").filter(i => i.trim().length)) {
    if (line.includes(':') && !line.includes('----')) {
      // ladybird: "Richards: 292"
      // goja: 2025/03/29 16:43:06 DeltaBlue: 525
      const [k, v] = line.slice(offset).replaceAll('"', '')
        .split(':')
        .map(i => i.trim())
      json[k] = +v
    }
  }

  return json
}

async function execCmd(cmd, cwd) {
  return new Promise(r => {
    exec(`bash -c "${cmd}"`, { cwd }, (err, stdout, stderr) => {
    // exec(cmd, { cwd }, (err, stdout, stderr) => {
      console.error(stdout, stderr)

      // goja output to stderr
      r(stdout || stderr)
    })
  })
}

async function getVersion(cmd) {
  if (['primjs', 'rquickjs', 'ladybird', "goja", "mozjs", "kiesel", "jint-cli"].includes(cmd)) {
    return ''
  }
  if (cmd === "engine262") {
    // engine262 v0.0.1-5dece49950e94360d45198df59f3adf4ceb94cb4
    const text = (await execCmd(`${cmd} -h`)).trim()
    return text.match(/v(\d+\.\d+\.\d+)/)?.[1].trim()
  }
  if (cmd === 'ch') {
    // ch version 1.13.0.0-beta
    const text = await execCmd(`${cmd} --version`)
    return text.split(' ').at(-1)?.trim() || ""
  }
  if (cmd === 'llrt') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/v([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'qjs') {
    const text = await execCmd(`${cmd} -h`)
    return text.match(/version (\d{4}-\d{2}-\d{2})/)?.[1].trim()
  }
  if (cmd === 'qjs-ng') {
    const text = await execCmd(`${cmd} -h`)
    return text.match(/version (\d+\.\d+\.\d+)/)?.[1].trim()
  }
  if (cmd === 'tjs') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/v([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'mujs') {
    const text = await execCmd(`echo "exit" | ${cmd}`)
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim().slice(0, -1)
  }
  if (cmd === 'boa') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'hermes') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/Hermes release version: (\d+\.\d+\.\d+)/)?.[1].trim()
  }
  if (cmd === 'xst') {
    const text = await execCmd(`${cmd} -v`)
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }

  if (cmd === 'deno') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'node') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/v([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'bun') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'graaljs') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'jsc') {
    // FIXME: get jsc version by cli
    return ''
  }
  if (cmd === 'd8') {
    const cwd = path.dirname(getExePath('d8'))
    const text = await execCmd(`echo "exit" | ${cmd}`, cwd)
    return text.match(/version ([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'js') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/JavaScript-C([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  if (cmd === 'jerry') {
    const text = await execCmd(`${cmd} --version`)
    return text.match(/([\d.]+(?:-[a-zA-Z0-9]+)?)/)?.[1].trim()
  }
  return ''
}

const data = {}
const platform = os.platform();

function isMsys() {
  return !!process.env['MSYSTEM']
}
function toMsysPath(s) {
  s = s.replaceAll('\\', '/')
  s = s.replace(/^([A-Za-z]):\//, (_, drive) => `/${drive.toLowerCase()}/`)
  return s
}
function fromMsysPath(s) {
  if (!isMsys() || !s.startsWith('/')) {
    return s;
  }
  s = s.replace(/^\/([A-Za-z])\//, (_, drive) => `${drive.toUpperCase()}:/`);
  return s;
}

function getFileSize(filePath) {
  try {
    let p = isMsys() ? fromMsysPath(filePath) : filePath
    if (!fs.existsSync(p) && isMsys() && fs.existsSync(p + '.exe')) {
      p = p + '.exe'
    }
    const stats = fs.statSync(p);
    return stats.size;
  } catch (err) {
    return 0;
  }
}

function getDllSize(programPath) {
  if (isMsys()) {
    programPath = fromMsysPath(programPath)
  }

  let dependencies = [];

  // JavaScriptCore
  if (programPath.endsWith("jsc")) {
    const dir = path.dirname(programPath)
    const dllPath = dir + '/JavaScriptCore.framework/Versions/A/JavaScriptCore'
    dependencies.push(dllPath)
  }

  if (programPath.includes("graaljs")) {
    const dir = path.dirname(path.dirname(programPath))
    for (const d of ['lib', 'modules']) {
      for (const i of fs.readdirSync(path.join(dir, d))) {
        dependencies.push(path.join(dir, d, i))
      }
    }
  }

  // libChakraCore.so or libChakraCore.dylib
  if (programPath.endsWith("ch")) {
    const dir = path.dirname(programPath)
    for (const i of fs.readdirSync(dir)) {
      if (i.includes('libChakraCore')) {
        dependencies.push(path.join(dir, i))
      }
    }
  }

  try {
    if (platform === 'darwin') {
      const output = execSync(`otool -L "${programPath}"`, { encoding: 'utf-8' });
      dependencies = dependencies.concat(output
        .split('\n')
        .slice(1)
        .map(line => line.trim().split(' ')[0])
        .filter(dep => dep && !dep.startsWith('(')));
    } else if (platform === 'linux' || platform === 'win32') {
      const output = execSync(`ldd "${programPath}"`, { encoding: 'utf-8' });
      for (const line of output.split('\n')) {
        const path = line.split('=>')?.[1]?.trim().split(" (")?.[0]
        if (!path) {
          continue
        }
        if (
          path.startsWith("/lib/") ||
          path.startsWith("/lib64/") ||
          path.startsWith("/c/WINDOWS/") ||
          path.startsWith("linux-")
        ) {
          continue
        }
        dependencies.push(path)
      }
    }
  } catch (err) {
    console.error(`Error getting dependencies: ${err.message}`);
    return dependencies.reduce((pre, cur) => pre + getFileSize(cur), 0);
  }

  return dependencies.reduce((pre, cur) => pre + getFileSize(cur), 0);
}

function toFixed(n) {
  const fixed = n.toFixed(1);
  if (fixed.endsWith('.0')) {
    return parseInt(fixed);
  }
  return fixed
}
function humanSize(n) {
  if (n === 0) {
    return '0'
  }
  n = n / 1024
  if (n < 1024) {
    return `${toFixed(n)}K`
  }
  if (n < 1024 * 1024) {
    return `${toFixed((n / 1024))}M`
  }
  return `${toFixed((n / 1024 / 1024))}G`
}

function getExePath(i) {
  const execPath = execSync(`which ${i}`).toString().trim()
  return fromMsysPath(execPath)
}

async function main() {
  for (const i of execList) {
    try {
      const execPath = getExePath(i)
      const execDir = path.dirname((execPath))
      const test = await execCmd(`${execPath} ${subCmd[i] || ""} ${TEST_JS_PATH}`, execDir)

      const fileSize = getFileSize(execPath)
      const dllSize = getDllSize(execPath)

      console.error(execPath, execDir, test, fileSize, dllSize)

      if (!('Version' in data)) {
        data['Version'] = {}
      }
      if (!('Total size' in data)) {
        data['Total size'] = {}
      }
      if (!('Exe size' in data)) {
        data['Exe size'] = {}
      }
      if (!('Dll size' in data)) {
        data['Dll size'] = {}
      }

      data['Version'][i] = ((await getVersion(i)) || '').replaceAll("-", ".")
      data['Total size'][i] = humanSize(fileSize + dllSize)
      data['Exe size'][i] = humanSize(fileSize)
      data['Dll size'][i] = humanSize(dllSize)
      const startTime = +new Date()
      const out = await execCmd(`${i} ${subCmd[i] || ""} ${RUN_JS_PATH}`, execDir)
      const endTime = +new Date()
      const json = toJSON(out)
      if (!json['Score']) {
        continue
      }
      for (const [k, v] of Object.entries(json)) {
        const obj = data[k] || {}
        obj[i] = v
        data[k] = obj
      }
      if (!('Score/MB' in data)) {
        data['Score/MB'] = {}
      }
      data['Score/MB'][i] = (data['Score'][i] / (fileSize + dllSize) * 1024 * 1024) | 0

      if (!('Time(s)' in data)) {
        data['Time(s)'] = {}
      }
      data['Time(s)'][i] = ((endTime - startTime) / 1000) | 0
    } catch (e) {
      console.error(e)
    }
  }

  // sort by score
  const keys = Object.keys(data)
  if (!keys.length) {
    console.log(JSON.stringify(data))
    return
  }
  const engines = Object.keys(data[keys[0]]).sort((a, b) => {
    return (+data['Score'][b]) - (+data['Score'][a])
  })

  for (const i in data) {
    const obj = {}
    for (const e of engines) {
      const item = info.find(i => i.bin == e || i.name == e)
      const name = item.mdName ?? item.name
      obj[name] = data[i][e] ?? ""
    }
    data[i] = obj
  }

  console.log(JSON.stringify(data))
}

main()
