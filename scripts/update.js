const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');


const mdPath = path.resolve("./readme.md")
const jsonPath = path.resolve("./bench.json")

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


function json2md(data) {
  const keys = Object.keys(data)
  const header = Object.keys(data[keys[0]])

  const headerRow = `| Engine | ${header.join(' | ')} |`;

  const separatorRow = `| ${new Array(header.length + 1).fill(0).map(() => '---').join(' | ')} |`;

  const rows = []
  for (const k of keys) {
    const row = [k]
    for (const i of header) {
      row.push(data[k][i] || 0)
    }
    rows.push(`| ${row.join(' | ')} |`)
  }

  return [headerRow, separatorRow, ...rows].join('\n');
}

const execList = [
  "llrt",
  "qjs",
  "qjs-ng",
  "tjs",
  'mujs',
  "boa",
  "jerry",
  "hermes",
  "xst",
  'deno',
  'node',
]

function exec(cmd) {
  try {
    return execSync(cmd).toString()
  } catch (e) {
    return e.toString()
  }
}

const data = { 'Executable size': {} }
for (const i of execList) {
  const out = exec(`${i} ./dist/bench.js`)
  const json = toJSON(out)
  for (const [k, v] of Object.entries(json)) {
    const obj = data[k] || {}
    obj[i] = v
    data[k] = obj
  }

  const execPath = execSync(`which ${i}`).toString().trim()
  const size = execSync(`du ${execPath} -sh`).toString().split(" ")[0].split("\t")[0].trim()
  data['Executable size'][i] = size
}
console.table(data)
const md = json2md(data)

const marker = "\n## bench\n"
const doc = fs.readFileSync(mdPath, 'utf8').split(marker)[0] + marker + md

fs.writeFileSync(mdPath, doc)

fs.writeFileSync(jsonPath, JSON.stringify(data))