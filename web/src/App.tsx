import { useEffect, useMemo, useState } from "react";
import {
  Box,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
import type { DataItem } from "./types";
import { getNames } from "./data";
import { useChart } from "./useChart";
import { EngineCheckboxes } from "./EngineCheckboxes";
import { Controls } from "./Controls";

function App() {
  const [data, setData] = useState<DataItem[]>([]);
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
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? "dark" : "light" },
      }),
    [prefersDarkMode],
  );

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
    const sorted = engines.sort(
      (a, b) => +(last[b] || 0) - +(last[a] || 0),
    );
    setEngines([...sorted]);
  }, [sort]);

  useChart(data, selectEngines, maxCount, kind);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack sx={{ gap: 2, p: 2, width: "100%", height: "100vh" }}>
        <Stack sx={{ gap: 2 }}>
          <EngineCheckboxes
            engines={engines}
            selected={selectEngines}
            onChange={setSelectEngines}
          />
          <Controls
            engines={engines}
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
        <Box sx={{ flex: 1, width: "100%", height: "100%" }}>
          <Box id="chart" sx={{ width: "100%", height: "100%" }} />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
