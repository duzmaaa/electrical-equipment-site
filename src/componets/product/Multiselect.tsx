import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material";

interface MultiSelectProps {
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
}

const options = ["scania", "man", "iveco", "renault"];

const MultiSelect: React.FC<MultiSelectProps> = ({
  selectedTypes,
  setSelectedTypes,
}) => {
  const handleChange = (event: SelectChangeEvent<typeof selectedTypes>) => {
    setSelectedTypes(event.target.value as string[]);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 200,
        backgroundColor: "#2a2a2a",
        borderRadius: 1,
        "& .MuiInputLabel-root": {
          color: "#f4e69a",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#f4e69a",
        },
        "& .MuiOutlinedInput-root": {
          color: "#f4e69a",
          "& fieldset": {
            borderColor: "#f4e69a",
          },
          "&:hover fieldset": {
            borderColor: "#fff176",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#fff176",
          },
        },
        "& .MuiSvgIcon-root": {
          color: "#f4e69a",
        },
      }}
    >
      <InputLabel id="multi-select-label">Filter tipa</InputLabel>
      <Select
        labelId="multi-select-label"
        multiple
        value={selectedTypes}
        onChange={handleChange}
        renderValue={(selected) => (selected as string[]).join(", ")}
        label="Filter tipa"
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "#1d1d1d",
              color: "#f4e69a",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              "&:hover": {
                backgroundColor: "#374151",
              },
            }}
          >
            <Checkbox
              checked={selectedTypes.indexOf(option) > -1}
              sx={{
                color: "#f4e69a",
                "&.Mui-checked": {
                  color: "#fff176",
                },
              }}
            />
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
