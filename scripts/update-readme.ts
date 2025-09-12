import { resolve } from "path";
import ubuntuJSON from "../ubuntu.json";
import { readFileSync, writeFileSync } from "fs";
import windowsJSON from "../windows.json";
import macosArm64JSON from "../macos-arm64.json";
import INFO from "../info.json";
import { humanSize } from "../web/src/tool";

const mdPath = resolve("./README.md");

type Name = keyof typeof ubuntuJSON.Score

function json2md(data: Record<string, Record<string, string | number>>) {
  const keys = Object.keys(data);

  const engines = Object.keys(data[keys[0]]).sort((a, b) => {
    return (+data["Score"][b]) - (+data["Score"][a]);
  });

  const headerRow = `| Engine | ${engines.join(" | ")} |`;

  const separatorRow = `| ${new Array(engines.length + 1).fill(0).map(() => "---").join(" | ")
    } |`;

  const rows: string[] = [];
  for (const k of keys) {
    const row: (number | string)[] = [k];
    for (const i of engines) {
      const v = data[k][i] || 0;
      const s = k.endsWith(" size") ? humanSize(+v) : v;
      row.push((s || ""));
    }
    rows.push(`| ${row.join(" | ")} |`);
  }

  return [headerRow, separatorRow, ...rows].join("\n");
}

const ubuntuMd = json2md(ubuntuJSON);
const windowsMd = json2md(windowsJSON);
const macosArm64Md = json2md(macosArm64JSON);

function getMdLink(url: string) {
  if (!url) {
    return "❌";
  }
  const v = url.split("/");
  const repo = v.at(-1);
  return `[${repo}](${url})`;
}

function getSupport(name: string) {
  const v = {
    unix: ubuntuJSON,
    macArm: macosArm64JSON,
    windows: windowsJSON,
  };

  const s: string[] = [];
  for (const [k, json] of Object.entries(v)) {
    const icon = +json["Score"][name as keyof typeof json.Score] > 0 ? "✅" : "❌";
    s.push(`${icon}${k}`);
  }
  return s.join("<br>");
}

function getInfo() {
  INFO.sort((a, b) =>
    (+ubuntuJSON["Score"][b.name as Name] || 0) - (+ubuntuJSON["Score"][a.name as Name] || 0)
  );

  const header = ["name", "repo", "score", "platform", "description"];
  const headerMd = "| " + header.join(" | ") + " |" + "\n" + "|" +
    " --- |".repeat(header.length);
  const infoMd = [headerMd];

  for (const i of INFO) {
    const name = i.name;
    const score = ubuntuJSON["Score"][name as Name] || 0;
    const size = ubuntuJSON["Total size"][name as Name] || 0;
    const scoreMB = ubuntuJSON["Score/MB"][name as Name] || 0;
    let url = getMdLink(i.url);
    if (i.install && (i.install != i.url)) {
      url += "<br><br>" + getMdLink(i.install);
    }
    let scoreMd = `${score}<br>${humanSize(size)}`;
    if (scoreMB) {
      scoreMd += `<br>${scoreMB}/M`;
    }
    const v = [
      i.name,
      url,
      scoreMd,
      getSupport(name),
      i.description,
    ];
    infoMd.push("| " + v.join(" | ") + " |");
  }

  return infoMd.join("\n") + "\n";
}

const info = getInfo();

const time = new Date().toLocaleString();
const mdTable = "\n" + info +
  `\n## bench\n${time}\n\n### ubuntu\n${ubuntuMd}\n### macos-arm64\n${macosArm64Md}\n### windows\n${windowsMd}\n`;

const total = INFO.length;
const pass =
  Object.values(ubuntuJSON["Score"]).filter((i) => +i > 0 && !isNaN(+i)).length;
const marker = `## Engine & Runtime (${pass}/${total})\n`;
const mdTpl = readFileSync(mdPath, "utf8");
const markerIndex = mdTpl.indexOf(`## Engine & Runtime`);
const doc = mdTpl.slice(0, markerIndex) + marker + mdTable;

writeFileSync(mdPath, doc);
