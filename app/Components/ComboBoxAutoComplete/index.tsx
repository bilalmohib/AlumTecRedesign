import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface ComboBoxAutoCompleteProps {
  label: string;
}

export default function ComboBoxAutoComplete({
  label
}: ComboBoxAutoCompleteProps) {
  return (
    <Autocomplete
      id="country-select-dropdown"
      fullWidth={true}
      options={dropdownData}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`${option.blogImage}`}
            alt="blog image"
          />
          {option.phone}
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

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const dropdownData = [
  { blogImage: 'AD', label: 'Andorra', phone: '376' },
  {
    blogImage: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
  { blogImage: 'AF', label: 'Afghanistan', phone: '93' },
];
