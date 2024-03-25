import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { BlogDataTypes } from "@/app/pageComponents/Blog/BlogBody/types";

interface ComboBoxAutoCompleteProps {
  label: string;
  dropdownData: BlogDataTypes[];
  value: BlogDataTypes | null;
  setValue: (value: BlogDataTypes | null) => void;
}

export default function ComboBoxAutoComplete({
  label,
  dropdownData,
  value,
  setValue,
}: ComboBoxAutoCompleteProps) {
  const [inputValue, setInputValue] = React.useState<string>("");

  React.useEffect(() => {
    console.log("dropdownData ==> ", value);
  }, [inputValue]);

  return (
    <Autocomplete
      id="country-select-dropdown"
      fullWidth={true}
      options={dropdownData}
      autoHighlight
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`${option.coverImage}`}
            alt="blog image"
          />
          {option.title}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}