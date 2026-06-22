import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { ECharts } from "echarts";
import type { DataItem } from "./types";
import { getOption } from "./data";

export function useChart(
  data: DataItem[],
  selectEngines: string[],
  maxCount: number,
  kind: string,
) {
  const chartRef = useRef<ECharts | null>(null);

  useEffect(() => {
    if (!chartRef.current) {
      const chartDom = document.getElementById("chart");
      if (!chartDom) return;
      const chart = echarts.init(chartDom);
      chartRef.current = chart;
      globalThis.addEventListener("resize", () => chart.resize());
      return;
    }
    if (!data.length) return;

    const option = getOption(data, selectEngines, maxCount, kind);
    chartRef.current.setOption(option, true);
    chartRef.current.resize();
  }, [data, selectEngines, maxCount, kind]);

  return chartRef;
}
