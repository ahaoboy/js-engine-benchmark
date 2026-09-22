import { Box, Checkbox, Link, Stack } from "@mui/material";

interface EngineCheckboxesProps {
  engines: string[];
  selected: string[];
  urls: Record<string, string>;
  onChange: (engines: string[]) => void;
}

export function EngineCheckboxes({
  engines,
  selected,
  urls,
  onChange,
}: EngineCheckboxesProps) {
  const toggle = (engine: string, checked: boolean) => {
    if (checked) {
      onChange([...selected, engine]);
    } else {
      onChange(selected.filter((s) => s !== engine));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 1.5,
      }}
    >
      {engines.map((engine) => {
        const url = urls[engine];
        return (
          <Stack
            key={engine}
            sx={{ flexDirection: "row", alignItems: "center" }}
          >
            <Checkbox
              size="small"
              checked={selected.includes(engine)}
              onChange={(e) => toggle(engine, e.target.checked)}
              slotProps={{ input: { "aria-label": engine } }}
            />
            {url ? (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: "text.primary" }}
              >
                {engine}
              </Link>
            ) : (
              <Box component="span">{engine}</Box>
            )}
          </Stack>
        );
      })}
    </Box>
  );
}
