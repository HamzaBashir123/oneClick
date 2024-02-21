import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Domestic',
  'Hajj Umrah and Ziarat',
  'Schengen Countries',
  'Worldwide',
  
];

let countriesName = [];

export default function MultipleSelectCheckmarks() {
    const [personName, setPersonName] = React.useState([]);
    const [countriesName, setCountriesName] = React.useState([]);
  

  try {
    fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Extract country names and create an array
    // console.log(data);
    const countryNames = data.map(country => country.name.common);

    // Log the array of country names
    console.log(countryNames);

    // Use the country data to generate a map (implementation depends on your requirements)
    // generateMap(data);
    setCountriesName(countryNames)
  console.log(countriesName);

  })
  .catch(error => console.error('Error fetching data:', error));
    
  } catch (error) {
    
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: '100%' }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Groups / Countries</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          >
            <b className='ms-2'>Groups</b>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
            
          ))}
           <b className='ms-2'>Countries</b>
         
          {countriesName.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
            
          ))}
        </Select>
     
      </FormControl>
    </div>
  );
}