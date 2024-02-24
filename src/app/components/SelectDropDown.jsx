"use client";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";

const SelectDropDown = ({ data }) => {
  const animalOptions = Array.isArray(data) ? data : [];
  const [selectedValue, setSelectedValue] = useState("");
  



  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setSelectedValue(newValue);
    console.log("Selected Value:", newValue);
  };

  return (
    <Select
      className="w-full leading-10 py-1"
      placeholder={animalOptions[0]== 'Suzuki' ? 'Select Make' : animalOptions[0] == 2024 ? "Select Year" : 'Select Model'}
      indicator={<KeyboardArrowDown />}
      onChange={event => setSelectedValue(event.target.value)}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {animalOptions.map((animal, index) => (
        <Option
          key={index}
          value={animal[0].toLowerCase() + animal.slice(1).toLowerCase()}
        >
          {animal}
        </Option>
      ))}
    </Select>
  );
};

export default SelectDropDown;
