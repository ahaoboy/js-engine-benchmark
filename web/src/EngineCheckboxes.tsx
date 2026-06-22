import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface EngineCheckboxesProps {
  engines: string[];
  selected: string[];
  onChange: (engines: string[]) => void;
}

export function EngineCheckboxes({
  engines,
  selected,
  onChange,
}: EngineCheckboxesProps) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <FormGroup row>
        {engines.map((engine) => (
          <FormControlLabel
            key={engine}
            control={
              <Checkbox
                checked={selected.includes(engine)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onChange([...selected, engine]);
                  } else {
                    onChange(selected.filter((s) => s !== engine));
                  }
                }}
              />
            }
            label={engine}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
