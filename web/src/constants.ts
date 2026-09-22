export const REPO_URL = "https://github.com/ahaoboy/js-engine-benchmark";

/** Raw source of truth for engine metadata (name -> repository url). */
export const INFO_URL =
  "https://raw.githubusercontent.com/ahaoboy/js-engine-benchmark/main/info.json";

export const OS = [
  "ubuntu",
  "windows",
  "macos-arm64",
] as const;

export const Kind = [
  "Total size",
  "Exe size",
  "Dll size",
  "Richards",
  "DeltaBlue",
  "Crypto",
  "RayTrace",
  "EarleyBoyer",
  "RegExp",
  "Splay",
  "NavierStokes",
  "Score",
  "Score/MB",
  "Time(s)",
] as const;
