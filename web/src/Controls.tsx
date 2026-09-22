import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Kind, OS, REPO_URL } from "./constants";

interface ControlsProps {
  maxCount: number;
  os: string;
  kind: string;
  sort: string;
  onSelectAll: () => void;
  onClearAll: () => void;
  onMaxCountChange: (value: number) => void;
  onOsChange: (value: string) => void;
  onKindChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

const MAX_COUNT_OPTIONS = Array(5)
  .fill(0)
  .map((_, i) => 20 + i * 20);

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function Controls({
  maxCount,
  os,
  kind,
  sort,
  onSelectAll,
  onClearAll,
  onMaxCountChange,
  onOsChange,
  onKindChange,
  onSortChange,
}: ControlsProps) {
  const selectSx = { height: 40 };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-end",
        flexWrap: "wrap",
      }}
    >
      <Button
        variant="outlined"
        size="small"
        sx={selectSx}
        onClick={onSelectAll}
      >
        Select All
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={selectSx}
        onClick={onClearAll}
      >
        Clear All
      </Button>

      <FormControl size="small" sx={{ minWidth: 100 }}>
        <InputLabel id="max-count-label">Max Count</InputLabel>
        <Select
          labelId="max-count-label"
          label="Max Count"
          value={maxCount}
          onChange={(e) => onMaxCountChange(Number(e.target.value))}
          sx={selectSx}
        >
          {MAX_COUNT_OPTIONS.map((val) => (
            <MenuItem key={val} value={val}>{val}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ width: 120 }}>
        <InputLabel id="os-label">OS</InputLabel>
        <Select
          labelId="os-label"
          label="OS"
          value={os}
          onChange={(e) => onOsChange(e.target.value)}
          sx={selectSx}
        >
          {OS.map((i) => <MenuItem key={i} value={i}>{i}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ width: 120 }}>
        <InputLabel id="kind-label">Kind</InputLabel>
        <Select
          labelId="kind-label"
          label="Kind"
          value={kind}
          onChange={(e) => onKindChange(e.target.value)}
          sx={selectSx}
        >
          {Kind.map((i) => <MenuItem key={i} value={i}>{i}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ width: 120 }}>
        <InputLabel id="sort-label">Sort by</InputLabel>
        <Select
          labelId="sort-label"
          label="Sort by"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          sx={selectSx}
        >
          {Kind.map((i) => <MenuItem key={i} value={i}>{i}</MenuItem>)}
        </Select>
      </FormControl>

      <IconButton
        component="a"
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub repository"
        title="GitHub repository"
        sx={selectSx}
      >
        <GitHubIcon />
      </IconButton>
    </Stack>
  );
}
