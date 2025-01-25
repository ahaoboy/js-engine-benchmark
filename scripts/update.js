const fs = require('fs')
const path = require('path')
const { exec, execSync } = require('child_process');

const execList = [
  "llrt",
  "qjs",
  "qjs-ng",
  "tjs",
  'mujs',
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

function getFileSize(p) {
  const ls = execSync(`ls -l ${p}`).toString().trim();
  if (ls.includes(' -> ')) {
    p = ls.split(" -> ")[1].trim()
  }
  return +execSync(`du ${p}`).toString().split(" ")[0].split("\t")[0].trim()
}
function getDllSize(p) {
  let list = []
  try {
    list = execSync(`ldd ${p}`).toString().trim().split("\n")
  } catch (e) {
    //         not a dynamic executable
    return 0
  }

  let dllSize = 0

  for (const line of list) {
    const path = line.split(' => ')?.[1]?.split(" (")?.[0]
    if (!path) {
      continue
    }
    if (
      path.startsWith("/lib/") ||
      path.startsWith("/lib64/") ||
      path.startsWith("/c/WINDOWS/")
    ) {
      continue
    }
    dllSize += getFileSize(path)
  }
  return dllSize

}

function humanSize(n) {
  if (n === 0) {
    return '0'
  }
  if (n < 1024) {
    return `${n}K`
  }
  if (n < 1024 * 1024) {
    return `${(n / 1024).toFixed(1)}M`
  }
  return `${(n / 1024 / 1024).toFixed(1)}G`
}

async function main() {
  for (const i of execList) {
    try {
      const execPath = execSync(`which ${i}`).toString().trim()

      const test = await execCmd(`${i} ${subCmd[i] || ""} ./scripts/test.js`)
      console.error(test)

      const out = await execCmd(`${i} ${subCmd[i] || ""} ./dist/run.js`)
      const json = toJSON(out)

      for (const [k, v] of Object.entries(json)) {
        const obj = data[k] || {}
        obj[i] = v
        data[k] = obj
      }

      // console.warn("execPath: ", execPath)
      const fileSize = getFileSize(execPath)
      const dllSize = getDllSize(execPath)
      // console.warn("size: ", size)
      if (!('Exe size' in data)) {
        data['Exe size'] = {}
      }
      if (!('Dll size' in data)) {
        data['Dll size'] = {}
      }
      if (!('Total size' in data)) {
        data['Total size'] = {}
      }
      if (!('version' in data)) {
        data['version'] = {}
      }
      data['Exe size'][i] = humanSize(fileSize)
      data['Dll size'][i] = humanSize(dllSize)
      data['Total size'][i] = humanSize(fileSize + dllSize)
      data['version'][i] = (await getVersion(i)) || ''
    } catch (e) {

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
