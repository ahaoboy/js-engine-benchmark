const fs = require("fs");
const code = fs.readFileSync("./dist/run.js", "utf8");

const lib = `
export function v8v7(print){
${code}
}
`.trim();
fs.writeFileSync("./dist/lib.js", lib);
