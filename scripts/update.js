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
  // "jerry",
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

const data = {}

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
      const size = execSync(`du -h ${execPath}`).toString().split(" ")[0].split("\t")[0].trim()
      // console.warn("size: ", size)
      if (!('Executable size' in data)) {
        data['Executable size'] = {}
      }
      data['Executable size'][i] = size
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
