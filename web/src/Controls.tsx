import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Kind, OS } from "./constants";

interface ControlsProps {
  engines: string[];
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
    </Stack>
  );
}
