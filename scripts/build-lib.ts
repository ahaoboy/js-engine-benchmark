import { readFileSync, writeFileSync } from "fs";
const code = readFileSync("./dist/run.js", "utf8");

const lib = `
export function v8v7(print){
${code}
}
`.trim();
writeFileSync("./dist/lib.js", lib);
