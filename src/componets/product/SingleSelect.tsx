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
  { label: "DAF", value: "daf" },
  { label: "Mercedes", value: "mercedes" },
  { label: "Volvo", value: "volvo" },
  {
    label: "Građevinske mašine i plovila",
    value: "Građevinske mašine i plovila",
  },
  { label: "Poljoprivredne mašine", value: "Poljoprivredne mašine" },
  { label: "Prikolice i poluprikolice", value: "Prikolice i poluprikolice" },
];

const SingleSelect: React.FC<SingleSelectProps> = ({
  selectedType,
  setSelectedType,
}) => {
  const [focused, setFocused] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value);
  };

  const handleClear = () => {
    setSelectedType("");
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleOpen = () => {
    setOpen(true);
    setFocused(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFocused(false);
  };

  // Determine if label should be shrunk
  const shouldShrink = Boolean(selectedType) || focused;

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
        size="small"
        sx={{
          m: 1,
          minWidth: 250,
          width: { sm: 250, lg: 300 },
          "& .MuiInputLabel-root": {
            color: "#f4e69a",
            // Ensure proper positioning
            zIndex: 1,
          },
          "& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root.MuiInputLabel-shrink":
            {
              color: "#fff176",
            },
          "& .MuiOutlinedInput-root": {
            bgcolor: "#2a2a2a",
            color: "#f4e69a",
            borderRadius: 1,
            "& fieldset": {
              borderColor: "#f4e69a",
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: "#fff176",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff176",
              borderWidth: "2px",
            },
            "& .MuiSelect-select": {
              color: selectedType ? "#f4e69a" : "rgba(244, 230, 154, 0.7)",
              paddingRight: selectedType ? "48px" : "32px",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
            },
          },
          "& .MuiSelect-icon": {
            color: "#f4e69a",
            fontSize: 20,
          },
        }}
      >
        <InputLabel
          id="single-select-label"
          shrink={shouldShrink}
          // Add notched prop to ensure proper border behavior
          variant="outlined"
        >
          Filter tipa
        </InputLabel>
        <Select
          labelId="single-select-label"
          value={selectedType}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          label="Filter tipa"
          displayEmpty
          // Add notched prop for proper border handling
          notched={shouldShrink}
          renderValue={(selected) => {
            if (!selected && focused) return "Unesi proizvod";
            if (!selected) return "";
            const found = options.find((opt) => opt.value === selected);
            return found ? found.label : "";
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#1d1d1d",
                color: "#f4e69a",
                borderRadius: 1,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              },
            },
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            // Ensure consistent positioning
            disablePortal: false,
          }}
        >
          <MenuItem value="" disabled hidden>
            {/* Hidden placeholder */}
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: 14,
                color: "#f4e69a",
                padding: "8px 16px",
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
            right: 32,
            top: "50%",
            transform: "translateY(-50%)",
            padding: "4px",
            minWidth: 20,
            height: 20,
            color: "#f4e69a",
            backgroundColor: "transparent",
            zIndex: 2,
            "&:hover": {
              backgroundColor: "rgba(244, 230, 154, 0.1)",
            },
            "& svg": {
              fontSize: "14px",
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
