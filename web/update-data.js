import fs from "fs";
import path from "path";

const PUBLIC_DIR = "public";
const DATA_DIR = "..";

const NAMES = [
  "macos-arm64",
  "ubuntu",
  "windows",
];

function getPath(name) {
  return path.join(PUBLIC_DIR, name + ".json");
}

const now = +new Date();

function getData(name) {
  const filePath = getPath(name);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const s = fs.readFileSync(filePath, "utf8");
  return JSON.parse(s);
}

function setData(name, data) {
  const filePath = getPath(name);
  const s = JSON.stringify(data);
  fs.writeFileSync(filePath, s);
}

function getNewData(name) {
  const filePath = path.join(DATA_DIR, name + ".json");
  const s = fs.readFileSync(filePath, "utf8");
  return JSON.parse(s);
}

function updateData(name) {
  const data = getData(name);
  const newData = getNewData(name);
  data.push({
    time: now,
    data: newData,
  });

  setData(name, data);
}

for (const name of NAMES) {
  updateData(name);
}
