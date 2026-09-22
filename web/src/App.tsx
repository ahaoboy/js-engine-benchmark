import { useEffect, useMemo, useState } from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  Tab,
  Tabs,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import type { ChartTheme, DataItem, EngineInfo } from "./types";
import { getBarOption, getNames, getOption } from "./data";
import { INFO_URL } from "./constants";
import { useEChart } from "./useEChart";
import { EngineCheckboxes } from "./EngineCheckboxes";
import { Controls } from "./Controls";

/** Vertical space each engine needs in the ranking chart, plus chart chrome. */
const BAR_ROW_HEIGHT = 22;
const BAR_CHART_PADDING = 80;
const MIN_BAR_CHART_HEIGHT = 240;
/** Smallest sensible height for the trend chart. */
const MIN_TREND_HEIGHT = 320;

function App() {
  const [data, setData] = useState<DataItem[]>([]);
  const [engines, setEngines] = useState<string[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});
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
  const [chart, setChart] = useQueryState(
    "chart",
    parseAsString.withDefault("trend"),
  );

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? "dark" : "light" },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              // The trend chart fills the viewport exactly, so the page sits on
              // the "does it overflow?" knife edge and the scrollbar can flicker
              // on sub-pixel rounding. Each flicker changes the content width by
              // the scrollbar width and makes ECharts resize back and forth.
              // Reserving the gutter keeps the width (and the chart) stable.
              html: {
                scrollbarGutter: "stable",
              },
            },
          },
        },
      }),
    [prefersDarkMode],
  );

  // ECharts does not follow the MUI theme, so hand it matching text colors.
  const chartTheme: ChartTheme = useMemo(
    () => ({
      text: theme.palette.text.primary,
      axis: theme.palette.text.secondary,
      splitLine: theme.palette.divider,
      tooltipBg: theme.palette.background.paper,
      tooltipText: theme.palette.text.primary,
    }),
    [theme],
  );

  // Fetch engine repository urls from the repo's info.json once.
  useEffect(() => {
    fetch(INFO_URL)
      .then((resp) => (resp.ok ? resp.json() : []))
      .then((info: EngineInfo[]) => {
        const map: Record<string, string> = {};
        for (const item of info) {
          if (item.name && item.url) {
            map[item.name] = item.url;
          }
        }
        setUrls(map);
      })
      .catch(() => setUrls({}));
  }, []);

  // Fetch data when OS changes
  useEffect(() => {
    fetch(`${os}.json`)
      .then((resp) => resp.json())
      .then((items: DataItem[]) => {
        const names = getNames(items);
        setData(items);
        const last = items[items.length - 1]?.data[sort];
        if (!last) return;
        const sorted = names.sort(
          (a, b) => +(last[b] || 0) - +(last[a] || 0),
        );
        setEngines(sorted);
        if (!selectEngines.length) {
          setSelectEngines(sorted.slice(0, 3));
        }
      });
  }, [os]);

  // Sort engines when sort criteria changes
  useEffect(() => {
    const last = data[data.length - 1]?.data[sort];
    if (!last) return;
    const sorted = [...engines].sort((a, b) => +(last[b] || 0) - +(last[a] || 0));
    setEngines(sorted);
  }, [sort]);

  const showTrend = chart === "trend";

  // Options are built only for the active tab; the hidden one renders nothing.
  const trendOption = useMemo(
    () =>
      showTrend && data.length
        ? getOption(data, selectEngines, maxCount, kind, chartTheme)
        : null,
    [showTrend, data, selectEngines, maxCount, kind, chartTheme],
  );
  const barOption = useMemo(
    () =>
      !showTrend && data.length
        ? getBarOption(data, engines, kind, chartTheme)
        : null,
    [showTrend, data, engines, kind, chartTheme],
  );

  useEChart("chart", trendOption, showTrend);
  useEChart("bar-chart", barOption, !showTrend);

  // Height needed so every engine bar fits without squeezing them together.
  const barHeight = Math.max(
    MIN_BAR_CHART_HEIGHT,
    engines.length * BAR_ROW_HEIGHT + BAR_CHART_PADDING,
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*
        minHeight (not height) so the page grows with the ranking chart and the
        browser supplies a single page-level scrollbar instead of a nested
        scrollbar inside a container.
        Do NOT set overflow here: giving only one axis a non-visible value makes
        the other compute to `auto`, which would turn this Stack into its own
        scroll container and reclaim the scrollbar we want on the page.
      */}
      <Stack
        sx={{
          gap: 2,
          p: 2,
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Stack sx={{ gap: 2 }}>
          <EngineCheckboxes
            engines={engines}
            selected={selectEngines}
            urls={urls}
            onChange={setSelectEngines}
          />
          <Controls
            maxCount={maxCount}
            os={os}
            kind={kind}
            sort={sort}
            onSelectAll={() => setSelectEngines([...engines])}
            onClearAll={() => setSelectEngines([])}
            onMaxCountChange={setMaxCount}
            onOsChange={setOs}
            onKindChange={setKind}
            onSortChange={setSort}
          />
        </Stack>
        <Tabs
          value={chart}
          onChange={(_, value: string) => setChart(value)}
          centered
          sx={{ minHeight: 36 }}
        >
          <Tab label="Trend" value="trend" sx={{ minHeight: 36 }} />
          <Tab label="Ranking" value="ranking" sx={{ minHeight: 36 }} />
        </Tabs>
        <Box
          id="chart"
          sx={{
            width: "100%",
            // Grow to fill whatever vertical space is left in the viewport.
            // Together with the parent's minHeight this keeps the trend chart
            // exactly viewport-tall (no page scroll), while still letting the
            // page scroll when the header wraps into many rows.
            flex: showTrend ? 1 : "0 0 0",
            minHeight: showTrend ? MIN_TREND_HEIGHT : 0,
            display: showTrend ? "block" : "none",
          }}
        />
        <Box
          id="bar-chart"
          sx={{
            width: "100%",
            // Natural height for every bar; the page scrolls when it exceeds
            // the viewport instead of scrolling inside this box.
            height: showTrend ? 0 : barHeight,
            display: showTrend ? "none" : "block",
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
