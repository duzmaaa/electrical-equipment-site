import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface SingleSelectProps {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

const options = ["scania", "man", "iveco", "renault"];

const SingleSelect: React.FC<SingleSelectProps> = ({
  selectedType,
  setSelectedType,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value);
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
      <InputLabel id="single-select-label">Filter tipa</InputLabel>
      <Select
        labelId="single-select-label"
        value={selectedType}
        onChange={handleChange}
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
        <MenuItem value="">Svi</MenuItem>
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
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelect;
