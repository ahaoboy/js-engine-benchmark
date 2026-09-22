export type DataItem = {
  time: number;
  data: Record<string, Record<string, string>>;
};

/** One entry of the repository's info.json. */
export type EngineInfo = {
  name: string;
  url?: string;
  install?: string;
  bin?: string;
  subcmd?: string;
  description?: string;
  lang?: string;
};

export type Serie = {
  name: string;
  type: string;
  smooth: boolean;
  data: (number | undefined)[];
};

/** Colors handed to ECharts so its text stays legible in light and dark mode. */
export type ChartTheme = {
  text: string;
  axis: string;
  splitLine: string;
  tooltipBg: string;
  tooltipText: string;
};

