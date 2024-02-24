"use client";
import React, { useState } from "react";
import Image from "next/image";
import autoImg from "../assets/Takaful/autoside.svg";
import "../globals.css";
import BasicDateRangeField from "./DateRange";
import DateValidationShouldDisableMonth from "./DatePicker";
import MultipleSelectCheckmarks from "./DropDownMenu";
import SelectDropDown from "./SelectDropDown";

const AutoForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const carsOptions = [
    "Suzuki",
    "Toyota",
    "Honda",
    "Kia",
    "Peugeot",
    "Hyundai",
    "Chargan",
    "MG",
  ];
  const carsModels = [
    "Suzuk",
    "Toyota",
    "Honda",
    "Kia",
    "Peugeot",
    "Hyundai",
    "Chargan",
    "MG",
  ];
  const yearRange = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
  ];

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-3 lg:py-12 flex">
              <Image
                className="background-color p-4  bg-gradient-to-t from-cyan-500 to-blue-500 rounded-lg mx-5"
                src={autoImg}
                width={350}
                height={50}
              />
              <div className="textAlignCenter text-black mx-2 ">
                <div>
                  <span className="text-[#515151] text-3xl font-bold ">
                    Auto{" "}
                  </span>
                  <span className="text-[#e91431] text-3xl font-bold">
                    Takaful Plan
                  </span>
                </div>
                <p>Digital Takaful Solution for All</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-2 lg:p-4 ">
              <form action="#" className="space-y-4">
                <SelectDropDown data={carsOptions} />
                <SelectDropDown data={carsModels} />
                <SelectDropDown data={yearRange} />
                
                <div >
                <label
                  htmlFor="AcceptConditions"
                  className=" relative  h-8 w-14 cursor-pointer rounded-full transition duration-300 ease-in-out"
                >
                  <input
                    type="checkbox"
                    id="AcceptConditions"
                    className="peer sr-only"
                    onChange={handleCheckboxChange}

                  />

                  <span className="absolute border border-sky-700 inset-y-0 left-0 m-1 h-6 w-6 rounded-full bg-sky-600 ring-[6px] ring-inset ring-white transition-all peer-checked:left-8 peer-checked:w-2 peer-checked:bg-blue-500 peer-checked:ring-transparent"></span>
                </label>
                <span className="ms-12 p-2  ">I already have an existing Takaful / Insurance cover</span>

                </div>

            
                <br />

               {isChecked && <DateValidationShouldDisableMonth />}

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-screen rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-full  "
                  >
                    View Quotes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoForm;
