import type { ChartTheme, DataItem, Serie } from "./types";
import { humanSize } from "./tool";

/** Font size used for axis and bar labels. */
const LABEL_FONT_SIZE = 11;

/** Benchmark kinds ending in " size" hold a byte count, not a score. */
const isSizeKind = (kind: string) => kind.endsWith(" size");

/** Formats a benchmark value for display, using units for byte sizes. */
const formatValue = (kind: string, v: number) =>
  isSizeKind(kind) ? humanSize(v) : String(v);

/** Tooltip chrome shared by both charts, minus the per-chart formatter. */
const tooltipBase = (theme: ChartTheme) => ({
  trigger: "axis" as const,
  // Render the tooltip in <body>: inside the scroll container it would extend
  // past the right edge and create a horizontal scrollbar.
  appendTo: "body" as const,
  // Keep it inside the chart, otherwise it can overflow the viewport and make
  // the whole page scroll horizontally.
  confine: true,
  backgroundColor: theme.tooltipBg,
  borderColor: theme.splitLine,
  textStyle: { color: theme.tooltipText },
});

/** Axis line + label colors, so ECharts text follows the MUI theme. */
const axisStyle = (theme: ChartTheme, labelFontSize?: number) => ({
  axisLabel: {
    color: theme.axis,
    ...(labelFontSize ? { fontSize: labelFontSize } : {}),
  },
  axisLine: {
    lineStyle: { color: theme.splitLine },
  },
});

/** Split-line / grid line color. */
const splitLine = (theme: ChartTheme) => ({
  lineStyle: { color: theme.splitLine },
});

/** Every engine that has a score, sorted best-first. */
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
  v.sort((a, b) => +(last.data["Score"][b] || 0) - +(last.data["Score"][a]));
  return v;
}

/** Latest known value for each engine, scanning time points newest to oldest. */
function getLatestValues(
  data: DataItem[],
  engines: string[],
  kind: string,
): Record<string, number> {
  const values: Record<string, number> = {};
  for (let i = data.length - 1; i >= 0; i--) {
    const kindData = data[i].data[kind];
    if (!kindData) continue;
    for (const engine of engines) {
      if (engine in values) continue;
      const v = +kindData[engine];
      if (v) {
        values[engine] = v;
      }
    }
  }
  return values;
}

/**
 * Horizontal bar chart ranking every engine by its latest value.
 * The best engine is drawn at the top; bars grow to the right.
 */
export function getBarOption(
  data: DataItem[],
  engines: string[],
  kind: string,
  theme: ChartTheme,
) {
  const values = getLatestValues(data, engines, kind);
  const sorted = engines
    .filter((e) => values[e])
    .sort((a, b) => values[b] - values[a]);
  // ECharts draws the first category at the bottom, so reverse for top-down order.
  const names = [...sorted].reverse();
  const format = (v: number) => formatValue(kind, v);
  // The top-ranked engine is the 100% baseline; every other bar is shown as a
  // share of it, which is how far behind the leader it is.
  const best = values[sorted[0]] || 0;
  const formatPercent = (v: number) =>
    best ? `${((v / best) * 100).toFixed(1)}%` : "";

  return {
    textStyle: { color: theme.text },
    title: {
      text: kind,
      left: "center",
      padding: 10,
      textStyle: { color: theme.text },
    },
    tooltip: {
      ...tooltipBase(theme),
      axisPointer: { type: "shadow" as const },
      formatter: (params: {
        name: string;
        value: number;
        marker: string;
      }[]) => {
        const p = params[0];
        const pct = formatPercent(+p.value);
        return `${p.marker} ${p.name}: ${format(+p.value)}${
          pct ? ` (${pct})` : ""
        }`;
      },
    },
    grid: {
      left: 8,
      // Room for the widest "value percentage" label on the longest bar.
      right: 110,
      top: 50,
      bottom: 10,
      containLabel: true,
    },
    xAxis: {
      type: "value" as const,
      ...axisStyle(theme),
      splitLine: splitLine(theme),
    },
    yAxis: {
      type: "category" as const,
      data: names,
      ...axisStyle(theme, LABEL_FONT_SIZE),
    },
    series: [
      {
        type: "bar" as const,
        data: names.map((n) => values[n]),
        barMaxWidth: 18,
        label: {
          show: true,
          position: "right" as const,
          fontSize: LABEL_FONT_SIZE,
          color: theme.text,
          formatter: (p: { value: number }) => {
            const v = +p.value;
            const pct = formatPercent(v);
            return pct ? `${format(v)} ${pct}` : format(v);
          },
        },
      },
    ],
  };
}

/**
 * Multi-series line chart of every selected engine over time.
 * Missing data points stay `undefined` so the line breaks instead of dipping.
 */
export function getOption(
  data: DataItem[],
  engines: string[],
  maxCount: number,
  kind: string,
  theme: ChartTheme,
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
    for (const [key, score] of Object.entries(data[i].data[kind])) {
      if (!legend.includes(key)) {
        continue;
      }
      const v = seriesData[key] || [];
      v[i] = +score || undefined;
      seriesData[key] = v;
    }
  }

  for (const name of legend) {
    series.push({
      name,
      type: "line",
      smooth: true,
      data: seriesData[name].slice(
        Math.max(0, seriesData[name].length - maxCount),
      ),
    });
  }

  series.sort((a, b) => {
    const lastA = a.data[a.data.length - 1];
    const lastB = b.data[b.data.length - 1];
    return (lastB || 0) - (lastA || 0);
  });

  // Version lookup: engine -> version string per time point, shown in tooltips.
  const versions: Record<string, string[]> = {};
  for (let i = 0; i < data.length; i++) {
    const verData = data[i].data["Version"];
    if (!verData) continue;
    for (const [engine, ver] of Object.entries(verData)) {
      if (!legend.includes(engine)) continue;
      (versions[engine] ??= [])[i] = ver;
    }
  }

  const sizeKind = isSizeKind(kind);

  return {
    textStyle: { color: theme.text },
    title: {
      text: "js-engine-benchmark",
      padding: 10,
      textStyle: { color: theme.text },
    },
    tooltip: {
      ...tooltipBase(theme),
      formatter: (params: {
        seriesName: string;
        dataIndex: number;
        value: number;
        marker: string;
        axisValue: string;
      }[]) => {
        const lines = params.map((p) => {
          const val = sizeKind ? (p.value ? humanSize(+p.value) : 0) : p.value;
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
      textStyle: { color: theme.axis },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: 100,
      containLabel: true,
    },
    toolbox: {
      feature: { saveAsImage: {} },
      top: 10,
      right: 10,
    },
    xAxis: {
      type: "category" as const,
      boundaryGap: false,
      data: xAxis,
      ...axisStyle(theme),
    },
    yAxis: {
      type: "value" as const,
      ...axisStyle(theme),
      splitLine: splitLine(theme),
    },
    series,
  };
}
