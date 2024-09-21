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
  // "jerry",
  // "dukTape",
]

const subCmd = {
  "tjs": "run"
}

// for better display
const nameMap = {
  'qjs-ng': "qjs(ng)"
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

const data = { 'Executable size': {} }

async function main() {
  for (const i of execList) {
    try {
      const execPath = execSync(`which ${i}`).toString().trim()
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
      data['Executable size'][i] = size
    } catch (e) {

    }
  }

  // sort by score
  const keys = Object.keys(data)
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
