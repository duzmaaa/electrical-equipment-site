import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SingleSelectProps {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

const options = [
  { label: "Scania", value: "scania" },
  { label: "Man", value: "man" },
  { label: "Iveco", value: "iveco" },
  { label: "Renault", value: "renault" },
];

const SingleSelect: React.FC<SingleSelectProps> = ({
  selectedType,
  setSelectedType,
}) => {
  const [focused, setFocused] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value);
  };

  const handleClear = () => {
    setSelectedType("");
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <FormControl
        variant="outlined"
        sx={{
          m: 1,
          width: { sm: 250, lg: 300 },
          backgroundColor: "#2a2a2a",
          borderRadius: 1,
          height: 40,
          "& .MuiInputLabel-root": {
            color: "#f4e69a",
          },
          "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiInputLabel-shrink":
            {
              color: "#fff176",
            },
          "& .MuiOutlinedInput-root": {
            height: 40,
            paddingRight: "32px", // prostor za X ikoncu
            color: selectedType ? "#f4e69a" : "rgba(244, 230, 154, 0.7)", // placeholder boja
            fontSize: 14,
            "& fieldset": {
              borderColor: "#f4e69a",
            },
            "&:hover fieldset": {
              borderColor: "#fff176",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff176",
              borderWidth: 2,
            },
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              height: "40px",
              padding: "8px 14px",
              // placeholder je lagano providan ako nema vrednost
              color: selectedType ? "#f4e69a" : "rgba(244, 230, 154, 0.7)",
            },
          },
          "& .MuiSvgIcon-root": {
            color: "#f4e69a",
            fontSize: 20,
          },
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <InputLabel
          id="single-select-label"
          shrink={selectedType !== "" || focused}
        >
          Filter tipa
        </InputLabel>
        <Select
          labelId="single-select-label"
          value={selectedType}
          onChange={handleChange}
          label="Filter tipa"
          displayEmpty
          renderValue={(selected) => {
            if (!selected) return "Unesi proizvod"; // placeholder tekst
            const found = options.find((opt) => opt.value === selected);
            return found ? found.label : "";
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#1d1d1d",
                color: "#f4e69a",
              },
            },
          }}
        >
          <MenuItem value="" disabled hidden>
            {/* Placeholder */}
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: 14,
                "&:hover": {
                  backgroundColor: "#374151",
                },
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedType && (
        <IconButton
          onClick={handleClear}
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            padding: "2px",
            minWidth: 24,
            height: 24,
            color: "#f4e69a",
            backgroundColor: "transparent",
            opacity: focused ? 1 : 0,
            transition: "opacity 0.2s",
            "&:hover": {
              opacity: 1,
              backgroundColor: "transparent",
            },
            "& svg": {
              fontSize: "16px",
            },
          }}
          tabIndex={-1}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default SingleSelect;
