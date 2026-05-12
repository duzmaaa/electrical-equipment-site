import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { List, ListItem } from "@mui/material";

interface ChildItem {
  title: string;
  desc: string;
}
interface ProductItem {
  id: number;
  title: string;
  type: string;
  desc: string;
  child?: ChildItem[];
}
interface SearchAutocompleteProps {
  productItems: ProductItem[];
  searchValue: ProductItem | null;
  handleSearchChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: ProductItem | null,
  ) => void;
  inputValue: string;
  handleInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => void;
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  productItems,
  searchValue,
  handleSearchChange,
  inputValue,
  handleInputChange,
}) => {
  return (
    <Autocomplete
      sx={{
        minWidth: 250,
        width: {
          sm: 250,
          lg: 300,
        },
        "& .MuiOutlinedInput-root": {
          bgcolor: "#2a2a2a",
          color: "#f4e69a",
          borderRadius: 1,
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
        },
        "& .MuiInputLabel-root": {
          color: "#f4e69a",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#fff176",
        },
        "& .MuiAutocomplete-clearIndicator": {
          color: "#fff176", // <-- Dodano za boju x dugmeta

          "&:hover": {
            color: "#fff176",
          },
        },
        "& .MuiAutocomplete-popupIndicator": {
          color: "#fff176", // <-- Dodano za boju strelice
          "&:hover": {
            color: "#fff176",
          },
        },
      }}
      size="small"
      options={productItems}
      getOptionLabel={(option) => option.title}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      value={searchValue}
      onChange={handleSearchChange}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      clearOnEscape
      ListboxComponent={(props) => (
        <List
          {...props}
          sx={{
            backgroundColor: "#1d1d1d",
            marginTop: 0,
            borderRadius: 1,
            paddingTop: 0,
            paddingBottom: 0,
          }}
        />
      )}
      renderOption={(props, option) => (
        <ListItem
          {...props}
          key={option.id}
          sx={{
            color: "#f4e69a",
            fontSize: "1rem",
            padding: "8px",
            "&:hover": {
              backgroundColor: "#374151",
            },
          }}
        >
          {option.title}{" "}
          {/*<span style={{ opacity: 0.7, textTransform: "capitalize" }}>*/}
          {/*  ({option.type})*/}
          {/*</span>*/}
        </ListItem>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pretraga"
          variant="outlined"
          placeholder="Unesi proizvod"
          sx={{
            input: { color: "#f4e69a" },
            "& .MuiInputLabel-root": { color: "#f4e69a" },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff176",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#f4e69a",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff176",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff176",
              borderWidth: 2,
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#f4e69a",
              opacity: 0.7,
            },
          }}
        />
      )}
    />
  );
};

export default SearchAutocomplete;
