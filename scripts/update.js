const fs = require('fs')
const path = require('path')
const { exec, execSync } = require('child_process');
const os = require('os');

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
  // "dukTape",
]

const subCmd = {
  "tjs": "run"
}

// for better display
const nameMap = {
  'qjs-ng': "qjs(ng)",
  'mujs-one': "mujs(one)",
  'd8': "v8",
  'js': "spidermonkey",
}

function toJSON(data) {
  const json = {}
  for (const line of data.split("\n")) {
    if (line.includes(':')) {
      const [k, v] = line.split(':').map(i => i.trim())
      json[k] = +v
    }
  }

  return json
}

async function execCmd(cmd) {
  return new Promise(r => {
    exec(cmd, (err, stdout, stderr) => {
      r(stdout)
    })
  })
}

async function getVersion(cmd) {
  if (['primjs', 'rquickjs'].includes(cmd)) {
    return ''
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
    const text = await execCmd(`echo "exit" | ${cmd}`)
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

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (err) {
    return 0;
  }
}

function getDllSize(programPath) {
  let dependencies = [];

  try {
    if (platform === 'darwin') {
      const output = execSync(`otool -L "${programPath}"`, { encoding: 'utf-8' });
      dependencies = output
        .split('\n')
        .slice(1)
        .map(line => line.trim().split(' ')[0])
        .filter(dep => dep && !dep.startsWith('('));
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
    return 0;
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

async function main() {
  for (const i of execList) {
    try {
      const execPath = execSync(`which ${i}`).toString().trim()

      const test = await execCmd(`${i} ${subCmd[i] || ""} ./scripts/test.js`)
      console.error(execPath, test)

      const fileSize = getFileSize(execPath)
      const dllSize = getDllSize(execPath)
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
      data['Version'][i] = (await getVersion(i)) || ''
      data['Total size'][i] = humanSize(fileSize + dllSize)
      data['Exe size'][i] = humanSize(fileSize)
      data['Dll size'][i] = humanSize(dllSize)
      const out = await execCmd(`${i} ${subCmd[i] || ""} ./dist/run.js`)
      const json = toJSON(out)
      for (const [k, v] of Object.entries(json)) {
        const obj = data[k] || {}
        obj[i] = v
        data[k] = obj
      }
      if (!('Score/MB' in data)) {
        data['Score/MB'] = {}
      }
      data['Score/MB'][i] = (data['Score'][i] / (fileSize + dllSize) * 1024 * 1024) | 0
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
      const name = nameMap[e] ?? e
      obj[name] = data[i][e] ?? ""
    }
    data[i] = obj
  }

  console.log(JSON.stringify(data))
}

main()
