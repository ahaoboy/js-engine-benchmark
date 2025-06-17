const path = require('path')
const fs = require('fs')

const ubuntuJSON = require("../ubuntu.json")
const windowsJSON = require("../windows.json")
const macosAmd64JSON = require("../macos-amd64.json")
const macosArm64JSON = require("../macos-arm64.json")
const mdPath = path.resolve("./README.md")
const INFO = require("../info.json")

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


function getMdLink(url) {
  if (!url) {
    return "❌"
  }
  const v = url.split('/')
  const repo = v.at(-1)
  return `[${repo}](${url})`
}

function getSupport(name) {
  const v = {
    unix: ubuntuJSON,
    macArm: macosArm64JSON,
    macAmd: macosAmd64JSON,
    windows: windowsJSON
  }

  const s = []
  for (const [k, json] of Object.entries(v)) {
    const icon = json['Score'][name] > 0 ? '✅' : "❌"
    s.push(`${icon}${k}`);
  }
  return s.join('<br>')
}

function getInfo() {
  const info = require("../info.json");
  info.sort((a, b) => (ubuntuJSON['Score'][b.mdName ?? b.name] || 0) - (ubuntuJSON['Score'][a.mdName ?? a.name] || 0))

  const header = ["name", "repo", "score", "platform", "description",]
  const headerMd = '| ' + header.join(' | ') + ' |' + "\n" + "|" + " --- |".repeat(header.length)
  const infoMd = [headerMd]

  for (const i of info) {
    const name = i.mdName ?? i.name
    const score = ubuntuJSON['Score'][name] || ''
    const size = ubuntuJSON['Total size'][name] || ''
    const scoreMB = ubuntuJSON['Score/MB'][name] || ''
    let url = getMdLink(i.url)
    if (i.install && (i.install != i.url)) {
      url += ("<br><br>" + getMdLink(i.install))
    }
    let scoreMd = `${score}<br>${size}`
    if (scoreMB) {
      scoreMd += `<br>${scoreMB}/M`
    }
    const v = [
      i.name,
      url,
      scoreMd,
      getSupport(name),
      i.description
    ]
    infoMd.push('| ' + v.join(" | ") + " |")
  }

  return infoMd.join('\n') + "\n"
}

const info = getInfo()

const time = new Date().toLocaleString()
const mdTable = "\n" + info + `\n## bench\n${time}\n\n### ubuntu\n${ubuntuMd}\n### macos-arm64\n${macosArm64Md}\n### macos-amd64\n${macosAmd64Md}\n### windows\n${windowsMd}\n`

const total = INFO.length
const pass = Object.values(ubuntuJSON['Score']).filter(i=>i>0).length
const marker = `## Engine & Runtime (${pass}/${total})\n`
const mdTpl = fs.readFileSync(mdPath, 'utf8')
const markerIndex = mdTpl.indexOf(`## Engine & Runtime`)
const doc = mdTpl.slice(0, markerIndex) + marker + mdTable

fs.writeFileSync(mdPath, doc)
