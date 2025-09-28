import { useEffect, useRef, useState } from "react";
import "./App.css";
import * as echarts from "echarts";
import type { ECharts } from "echarts";
import { Button, Checkbox, Flex, Select } from "antd";
import { ConfigProvider, theme } from "antd";
import { humanSize } from "./tool";
import { parseAsInteger, useQueryState, parseAsArrayOf, parseAsString } from 'nuqs'

const CheckboxGroup = Checkbox.Group;
const { defaultAlgorithm, darkAlgorithm } = theme;
const isDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;

type DataItem = {
  time: number;
  data: Record<string, Record<string, string>>;
};

type Serie = {
  name: string;
  type: string;
  smooth: boolean;
  data: (number | undefined)[];
};

function getNames(data: DataItem[]): string[] {
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
  v.sort((a, b) => +last.data["Score"][b] - +last.data["Score"][a]);
  return v;
}

function getOption(
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

  const option = {
    title: {
      text: "js-engine-benchmark",
    },
    tooltip: {
      trigger: "axis",
      valueFormatter: (value: number) =>
        kind.endsWith(" size") ? `${humanSize(+value)}` : +value,
    },
    legend: {
      data: legend,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxis,
    },
    yAxis: {
      type: "value",
    },
    series,
  };

  return option;
}

const OS = [
  "ubuntu",
  "windows",
  "macos-arm64",
];

const Kind = [
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
];
function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const chartRef = useRef<ECharts>(null);
  const [engines, setEngines] = useState<string[]>([]);
  const [selectEngines, setSelectEngines] = useQueryState<string[]>('selectEngines', parseAsArrayOf(parseAsString).withDefault([]));
  const [maxCount, setMaxCount] = useQueryState("maxCount", parseAsInteger.withDefault(60));
  const [os, setOs] = useQueryState("os", parseAsString.withDefault('ubuntu'));
  const [kind, setKind] = useQueryState("kind", parseAsString.withDefault('Score'));

  useEffect(() => {
    fetch(`${os}.json`).then((resp) => resp.json()).then((i: DataItem[]) => {
      const names = getNames(i);
      setData(i);
      setEngines(names);
      setSelectEngines(names.slice(0, 3));
    });
  }, [os]);

  useEffect(() => {
    update();
  }, [data, engines, selectEngines, maxCount, os, kind]);

  function update() {
    if (!chartRef.current) {
      const chartDom = document.getElementById("chart");
      // TODO: dark mode
      const chart = echarts.init(chartDom);
      chartRef.current = chart;
      globalThis.addEventListener("resize", function () {
        chart.resize();
      });
      return;
    }
    if (!data.length) {
      return;
    }
    const option = getOption(data, selectEngines, maxCount, kind);
    chartRef.current.setOption(option, true);
    chartRef.current.resize();
  }
  return (
    <ConfigProvider
      theme={{ algorithm: isDark ? darkAlgorithm : defaultAlgorithm }}
    >
      <Flex gap="middle" vertical className="auto-size">
        <Flex gap="middle" vertical>
          <Flex gap="middle" align="center" justify="center">
            <CheckboxGroup
              options={engines}
              value={selectEngines}
              onChange={(e) => {
                setSelectEngines(e);
              }}
            />
          </Flex>
          <Flex gap="middle" align="center" justify="center">
            <Button onClick={() => setSelectEngines([...engines])}>
              Select All
            </Button>
            <Button onClick={() => setSelectEngines([])}>Clear tAll</Button>
            <Select
              onChange={(e) => setMaxCount(e)}
              value={maxCount}
              options={Array(5).fill(0).map((_, i) => ({
                label: 20 + i * 20,
                value: 20 + i * 20,
              }))}
            />
            <Select
              style={{ width: "120px" }}
              value={os}
              onChange={(e) => setOs(e)}
              options={OS.map((i) => ({
                label: i,
                value: i,
              }))}
            />
            <Select
              style={{ width: "120px" }}
              value={kind}
              onChange={(e) => setKind(e)}
              options={Kind.map((i) => ({
                label: i,
                value: i,
              }))}
            />
          </Flex>
        </Flex>
        <Flex gap="middle" className="auto-size">
          <div id="chart"></div>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
}

export default App;
