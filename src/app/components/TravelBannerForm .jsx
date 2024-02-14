// import  { useState } from 'react';

// const DropdownMenu = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [groupOptions, setGroupOptions] = useState([
//     { id: 1, label: 'Option 1' },
//     { id: 2, label: 'Option 2' },
//     { id: 3, label: 'Option 3' },
//     { id: 4, label: 'Option 4' },
//   ]);

//   const [countryOptions, setCountryOptions] = useState([
//     { id: 'usa', label: 'USA' },
//     { id: 'canada', label: 'Canada' },
//     { id: 'uk', label: 'United Kingdom' },
//     // Add more countries as needed
//   ]);

//   return (
//     <div className="dropdown-menu">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="group-options">
//         <h3>Group</h3>
//         {groupOptions.map((option) => (
//           <label key={option.id}>
//             <input type="checkbox" />
//             {option.label}
//           </label>
//         ))}
//       </div>

//       <div className="country-options">
//         <h3>Countries</h3>
//         {countryOptions
//           .filter((country) =>
//             country.label.toLowerCase().includes(searchTerm.toLowerCase())
//           )
//           .map((country) => (
//             <label key={country.id}>
//               <input type="checkbox" />
//               {country.label}
//             </label>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default DropdownMenu;
