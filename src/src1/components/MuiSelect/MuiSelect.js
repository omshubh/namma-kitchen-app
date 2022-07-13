import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants(props) {
  const { availabilityOptions } = props;
  const [availability, setAvailability] = React.useState(availabilityOptions.length > 0 ? availabilityOptions[0] : '');
  const handleChange = (event) => {
    setAvailability(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label" >Availability</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={availability}
        onChange={handleChange}
        label="Availability"
      >
        {
          availabilityOptions.map((availabilityOption, index) =>
            <MenuItem value={availabilityOption} key={index}>{availabilityOption}</MenuItem>
          )
        }
      </Select>
    </FormControl>
  );
}
