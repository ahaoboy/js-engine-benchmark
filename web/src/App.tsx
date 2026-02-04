import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import * as echarts from "echarts";
import type { ECharts } from "echarts";
import {
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { humanSize } from "./tool";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";

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
  v.sort((a, b) =>
    +(last.data["Score"][b] || 0) - +(last.data["Score"][a]) || 0
  );
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

  series.sort((a, b) => {
    const lastA = a.data[a.data.length - 1];
    const lastB = b.data[b.data.length - 1];
    return (lastB || 0) - (lastA || 0);
  });

  const option = {
    title: {
      text: "js-engine-benchmark",
      padding: 10,
    },
    tooltip: {
      trigger: "axis",
      valueFormatter: (value: number) =>
        kind.endsWith(" size") ? `${value ? humanSize(+value) : 0}` : +value,
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
  const [selectEngines, setSelectEngines] = useQueryState<string[]>(
    "selectEngines",
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  const [maxCount, setMaxCount] = useQueryState(
    "maxCount",
    parseAsInteger.withDefault(60),
  );
  const [os, setOs] = useQueryState("os", parseAsString.withDefault("ubuntu"));
  const [kind, setKind] = useQueryState(
    "kind",
    parseAsString.withDefault("Score"),
  );
  const [sort, setSort] = useQueryState(
    "sort",
    parseAsString.withDefault("Score"),
  );

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  }), [prefersDarkMode]);

  useEffect(() => {
    fetch(`${os}.json`).then((resp) => resp.json()).then((i: DataItem[]) => {
      const names = getNames(i);
      setData(i);
      const last = i[i.length - 1]?.data[sort];
      if (!last) {
        return;
      }
      const v = names.sort((a, b) => {
        return +(last[b] || 0) - +(last[a] || 0);
      });
      setEngines(v);
      if (!selectEngines.length) {
        setSelectEngines(v.slice(0, 3));
      }
    });
  }, [os]);

  useEffect(() => {
    update();
  }, [data, engines, selectEngines, maxCount, os, kind]);

  function update() {
    if (!chartRef.current) {
      const chartDom = document.getElementById("chart");
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
  useEffect(() => {
    const last = data[data.length - 1]?.data[sort];
    if (!last) {
      return;
    }
    const v = engines.sort((a, b) => {
      return +(last[b] || 0) - +(last[a] || 0);
    });
    setEngines([...v]);
  }, [sort]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack gap={2} className="auto-size" sx={{ p: 2, height: "100vh" }}>
        <Stack gap={2}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <FormGroup row>
              {engines.map((engine) => (
                <FormControlLabel
                  key={engine}
                  control={
                    <Checkbox
                      checked={selectEngines.includes(engine)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectEngines([...selectEngines, engine]);
                        } else {
                          setSelectEngines(
                            selectEngines.filter((s) => s !== engine),
                          );
                        }
                      }}
                    />
                  }
                  label={engine}
                />
              ))}
            </FormGroup>
          </Box>
          <Stack
            direction="row"
            gap={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <Button
              variant="outlined"
              onClick={() => setSelectEngines([...engines])}
            >
              Select All
            </Button>
            <Button variant="outlined" onClick={() => setSelectEngines([])}>
              Clear All
            </Button>
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <InputLabel>Max Count</InputLabel>
              <Select
                label="Max Count"
                value={maxCount}
                onChange={(e) => setMaxCount(Number(e.target.value))}
              >
                {Array(5).fill(0).map((_, i) => {
                  const val = 20 + i * 20;
                  return <MenuItem key={val} value={val}>{val}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ width: 120 }}>
              <InputLabel>OS</InputLabel>
              <Select
                label="OS"
                value={os}
                onChange={(e) => setOs(e.target.value as string)}
              >
                {OS.map((i) => <MenuItem key={i} value={i}>{i}</MenuItem>)}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ width: 120 }}>
              <InputLabel>Kind</InputLabel>
              <Select
                label="Kind"
                value={kind}
                onChange={(e) => setKind(e.target.value as string)}
              >
                {Kind.map((i) => <MenuItem key={i} value={i}>{i}</MenuItem>)}
              </Select>
            </FormControl>
            <Box display="flex" alignItems="center" gap={1}>
              <span>Sort by:</span>
              <FormControl size="small" sx={{ width: 120 }}>
                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as string)}
                >
                  {Kind.map((i) => <MenuItem key={i} value={i}>{i}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Stack>
        <Box flex={1} className="auto-size">
          <div id="chart"></div>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
