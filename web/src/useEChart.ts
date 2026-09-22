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

    // A window `resize` listener is not enough: when a scrollbar appears it
    // steals width from the container without the window changing size, so
    // ECharts would keep painting at the old width.
    //
    // The resize is deferred to the next frame because resizing the chart
    // synchronously inside the callback re-triggers the observer in the same
    // tick, and the browser then reports "ResizeObserver loop completed with
    // undelivered notifications".
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!chart.isDisposed()) {
          chart.resize();
        }
      });
    });
    observer.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [containerId, option, active]);

  return chartRef;
}
