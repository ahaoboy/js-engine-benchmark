const fs = require("fs")
const path = require('path')

const distPath = path.resolve("./dist")
const jsPath = path.join(distPath, "bench.js")
const codeRoot = path.resolve("./v8-v7")
const runPath = path.join(codeRoot, "run.js")

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath)
}

let txt = fs.readFileSync(runPath, 'utf8')

for (const i of txt.matchAll(/load\('([^']+)'\);/g)) {
  const s = i[0]
  const name = i[1]
  const code = fs.readFileSync(path.join(codeRoot, name), 'utf8')
  txt = txt.replace(s, code)
}


fs.writeFileSync(jsPath, txt)