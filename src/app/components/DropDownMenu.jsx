import * as React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

function MenuSection({ children, label }) {
  return (
    <MenuSectionRoot role="group">
      <MenuSectionLabel>{label}</MenuSectionLabel>
      <ul>{children}</ul>
    </MenuSectionRoot>
  );
}

MenuSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

export default function WrappedMenuItems() {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Extract country names and create an array
    const countryNames = data.map(country => country.name.common);

    // Log the array of country names
    console.log(countryNames);

    // Use the country data to generate a map (implementation depends on your requirements)
    generateMap(data);
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to generate a map (you need to implement this based on your map library or approach)
function generateMap(data) {
  // Implement map generation logic here
  console.log('Map generation logic goes here');
}

    };
  };

  return (
   
      
      <Menu slots={{ listbox: Listbox }}>
        <MenuSection label="Groups" className="font-bold text-2xl">
        <div className="space-y-2">
    <label htmlFor="Option6" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option1" />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> John Clapton </strong>
      </div>
    </label>

    <label htmlFor="Option7" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option2" />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Peter Mayer </strong>
      </div>
    </label>

    <label htmlFor="Option8" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option3" />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Eric King </strong>
      </div>
    </label>
  </div>
        </MenuSection>
        <MenuSection label="Groups" className="font-bold text-2xl">
        <div className="space-y-2">
    <label htmlFor="Option6" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option6" />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Domestic </strong>
      </div>
    </label>

    <label htmlFor="Option7" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option7" />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Hajj Umrah and Ziarat </strong>
      </div>
    </label>

    <label htmlFor="Option8" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option8" />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Schengen Countries </strong>
      </div>
    </label>
    <label htmlFor="Option9" className="flex cursor-pointer items-start gap-4">
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id="Option9" />
      </div>

      <div>
        <strong className="font-medium text-gray-900"> Worldwide </strong>
      </div>
    </label>
  </div>
        </MenuSection>
        
        
      </Menu>
    
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };
  z-index: 1;
  `,
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }
`,
);

const MenuSectionRoot = styled('li')`
  list-style: none;

  & > ul {
    padding-left: 1em;
  }
`;

const MenuSectionLabel = styled('span')`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;