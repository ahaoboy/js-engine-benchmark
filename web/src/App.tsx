import { useEffect, useRef, useState } from "react";
import "./App.css";
import * as echarts from "echarts";
import type { ECharts } from "echarts";
import { Button, Checkbox, Flex } from "antd";
import { ConfigProvider, theme } from "antd";

const CheckboxGroup = Checkbox.Group;
const { defaultAlgorithm, darkAlgorithm } = theme;
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

type DataItem = {
  time: number;
  data: Record<string, Record<string, string>>;
};

type Serie = {
  name: string;
  type: string;
  smooth: boolean;
  data: number[];
};

function getNames(data: DataItem[]) {
  const last = data[data.length - 1];
  const legend: string[] = [];
  for (const [k, v] of Object.entries(last.data["Score"])) {
    if (+v) {
      legend.push(k);
    }
  }
  return legend;
}
function getOption(data: DataItem[], engines: string[]) {
  const legend: string[] = getNames(data).filter((i) => engines.includes(i));
  const xAxis = data.map((i) => new Date(i.time).toLocaleDateString());
  const series: Serie[] = [];

  const seriesData: Record<string, number[]> = {};
  for (const i of data) {
    for (const [key, score] of Object.entries(i.data["Score"])) {
      const v = seriesData[key] || [];
      if (+score) {
        v.push(+score);
      }
      seriesData[key] = v;
    }
  }

  for (const i of legend) {
    series.push({
      name: i,
      type: "line",
      smooth: true,
      data: seriesData[i],
    });
  }

  const option = {
    title: {
      text: "js-engine-benchmark",
    },
    tooltip: {
      trigger: "axis",
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

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const chartRef = useRef<ECharts>(null);
  const [engines, setEngines] = useState<string[]>([]);
  const [selectEngines, setSelectEngines] = useState<string[]>([]);

  useEffect(() => {
    fetch("ubuntu.json").then((resp) => resp.json()).then((i: DataItem[]) => {
      const names = getNames(i);
      setData(i);
      setEngines(names);
      setSelectEngines(names.slice(0, 3));
    });
  }, []);

  useEffect(() => {
    update();
  }, [data, engines, selectEngines]);

  function update() {
    if (!chartRef.current) {
      const chartDom = document.getElementById("chart");
      // TODO: dark mode
      const chart = echarts.init(chartDom);
      chartRef.current = chart;
      window.addEventListener("resize", function () {
        chart.resize();
      });
      return;
    }
    if (!data.length) {
      return;
    }
    const option = getOption(data, selectEngines);
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
