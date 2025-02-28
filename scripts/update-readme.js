const path = require('path')
const fs = require('fs')

const ubuntuJSON = require("../ubuntu.json")
const windowsJSON = require("../windows.json")
const macosAmd64JSON = require("../macos-amd64.json")
const macosArm64JSON = require("../macos-arm64.json")
const mdPath = path.resolve("./readme.md")

function json2md(data) {
  const keys = Object.keys(data)

  const engines = Object.keys(data[keys[0]]).sort((a, b) => {
    return (+data['Score'][b]) - (+data['Score'][a])
  })

  const headerRow = `| Engine | ${engines.join(' | ')} |`;

  const separatorRow = `| ${new Array(engines.length + 1).fill(0).map(() => '---').join(' | ')} |`;

  const rows = []
  for (const k of keys) {
    const row = [k]
    for (const i of engines) {
      row.push(data[k][i] || 0)
    }
    rows.push(`| ${row.join(' | ')} |`)
  }

  return [headerRow, separatorRow, ...rows].join('\n');
}

const ubuntuMd = json2md(ubuntuJSON)
const windowsMd = json2md(windowsJSON)
const macosAmd64Md = json2md(macosAmd64JSON)
const macosArm64Md = json2md(macosArm64JSON)

const time = new Date().toLocaleString()
const md = `\n${time}\n\n### ubuntu\n${ubuntuMd}\n### macos-arm64\n${macosArm64Md}\n### macos-amd64\n${macosAmd64Md}\n### windows\n${windowsMd}\n`
const marker = "\n## bench\n"
const doc = fs.readFileSync(mdPath, 'utf8').split(marker)[0] + marker + md

fs.writeFileSync(mdPath, doc)
