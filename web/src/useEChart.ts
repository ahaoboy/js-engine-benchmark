import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { ECharts, EChartsCoreOption } from "echarts";

/**
 * Render an ECharts option into a container element.
 *
 * `active` gates every chart operation: a hidden tab has a zero-sized
 * container, so ECharts would measure it wrongly and keep painting at that
 * size. Charts are therefore created lazily the first time their tab is shown.
 *
 * The option is typed as `EChartsCoreOption` because that is what `setOption`
 * accepts — the stricter `EChartsOption` rejects tooltip formatter callbacks
 * with hand-narrowed parameter types.
 */
export function useEChart(
  containerId: string,
  option: EChartsCoreOption | null,
  active: boolean,
) {
  const chartRef = useRef<ECharts | null>(null);

  useEffect(() => {
    if (!active) return;

    const el = document.getElementById(containerId);
    if (!el) return;

    // Reuse the instance that may already live on this DOM node so the chart
    // survives React remounts instead of leaving two instances fighting.
    const existing = echarts.getInstanceByDom(el);
    const chart = existing && !existing.isDisposed()
      ? existing
      : echarts.init(el);
    chartRef.current = chart;

    if (option) {
      chart.setOption(option, true);
    }
    chart.resize();

    // Two triggers, because they catch different cases:
    //  - ResizeObserver on the container also catches layout-driven changes
    //    that leave the window size untouched, e.g. a scrollbar appearing and
    //    stealing width, or the header wrapping into more rows.
    //  - window `resize` is the conventional fallback for browsers/situations
    //    where ResizeObserver notifications are delayed or not delivered.
    // Both are coalesced into one animation frame: resizing synchronously
    // inside the callback re-triggers the observer in the same tick, and the
    // browser then reports "ResizeObserver loop completed with undelivered
    // notifications".
    let frame = 0;
    const scheduleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!chart.isDisposed()) {
          chart.resize();
        }
      });
    };

    const observer = new ResizeObserver(scheduleResize);
    observer.observe(el);
    globalThis.addEventListener("resize", scheduleResize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      globalThis.removeEventListener("resize", scheduleResize);
    };
  }, [containerId, option, active]);

  return chartRef;
}
