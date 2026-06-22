import type { DataItem, Serie } from "./types";
import { humanSize } from "./tool";

export function getNames(data: DataItem[]): string[] {
  const s = new Set<string>();
  for (const i of data) {
    for (const [k, v] of Object.entries(i.data["Score"])) {
      if (+v) {
        s.add(k);
      }
    }
  }

  const v = [...s];
  const last = data[data.length - 1];
  v.sort((a, b) =>
    +(last.data["Score"][b] || 0) - +(last.data["Score"][a]) || 0,
  );
  return v;
}

export function getOption(
  data: DataItem[],
  engines: string[],
  maxCount: number,
  kind: string,
) {
  const names = getNames(data);
  const legend: string[] = names.filter((i) => engines.includes(i));
  const start = Math.max(0, data.length - maxCount);
  const xAxis = data.map((i) => new Date(i.time).toLocaleDateString()).slice(
    start,
  );

  const series: Serie[] = [];

  const seriesData: Record<string, (number | undefined)[]> = {};
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    for (const [key, score] of Object.entries(item.data[kind])) {
      if (!legend.includes(key)) {
        continue;
      }
      const v = seriesData[key] || [];
      if (+score) {
        v[i] = +score;
      } else {
        v[i] = undefined;
      }
      seriesData[key] = v;
    }
  }

  for (const i of legend) {
    const start = Math.max(0, seriesData[i].length - maxCount);
    series.push({
      name: i,
      type: "line",
      smooth: true,
      data: seriesData[i].slice(start),
    });
  }

  series.sort((a, b) => {
    const lastA = a.data[a.data.length - 1];
    const lastB = b.data[b.data.length - 1];
    return (lastB || 0) - (lastA || 0);
  });

  // Build version lookup: engine -> array of version strings per time point
  const versions: Record<string, string[]> = {};
  for (let i = 0; i < data.length; i++) {
    const verData = data[i].data["Version"];
    if (!verData) continue;
    for (const [engine, ver] of Object.entries(verData)) {
      if (!legend.includes(engine)) continue;
      (versions[engine] ??= [])[i] = ver;
    }
  }

  const sizeKind = kind.endsWith(" size");

  return {
    title: {
      text: "js-engine-benchmark",
      padding: 10,
    },
    tooltip: {
      trigger: "axis" as const,
      formatter: (params: {
        seriesName: string;
        dataIndex: number;
        value: number;
        marker: string;
        axisValue: string;
      }[]) => {
        const lines = params.map((p) => {
          const val = sizeKind
            ? (p.value ? humanSize(+p.value) : 0)
            : p.value;
          const ver = versions[p.seriesName]?.[start + p.dataIndex];
          return ver
            ? `${p.marker} ${p.seriesName}(${ver}): ${val}`
            : `${p.marker} ${p.seriesName}: ${val}`;
        });
        return `${params[0].axisValue}<br/>${lines.join("<br/>")}`;
      },
    },
    legend: {
      data: legend,
      top: 40,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 100,
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
      top: 10,
      right: 10,
    },
    xAxis: {
      type: "category" as const,
      boundaryGap: false,
      data: xAxis,
    },
    yAxis: {
      type: "value" as const,
    },
    series,
  };
}
