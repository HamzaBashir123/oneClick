'use client'
import React from "react";
import Image from "next/image";
import travelImg from "../assets/Takaful/travelside.svg";
import "../globals.css";

import Example from "./TravelBannerForm ";
import DropdownMenu from "./TravelBannerForm ";
import BasicDateRangeField from "./DateRange";
import DateValidationShouldDisableMonth from "./DatePicker";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import { ArrowDropDown } from "@mui/icons-material";
import WrappedMenuItems from "./DropDownMenu";


const Form = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-3 lg:py-12 flex">
              <Image
                className="background-color p-4  bg-gradient-to-t from-cyan-500 to-blue-500 rounded-lg mx-5"
                src={travelImg}
                width={350}
                height={50}
              />
              <div className="textAlignCenter text-black mx-2 ">
                <div>
                <span className="text-[#515151] text-3xl font-bold ">
                  Travel{" "}
                </span>
                <span className="text-[#e91431] text-3xl font-bold">
                  Takaful Plan
                </span></div>
                <p>Digital Takaful Solution for All</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-2 lg:p-4 ">
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="Option4"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option4"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm">Single Trip </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option5"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option5"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Multiple Trip </span>
                    </label>
                  </div>
                </div>
                <hr />

                <div className="grid grid-cols-1 gap-2 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Student </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm"> Individual </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="  block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex="0"
                    >
                      <input
                        className="sr-only "
                        id="Option3"
                        type="radio"
                        tabIndex="-1"
                        name="option"
                      />

                      <span className="text-sm">Family </span>
                    </label>
                  </div>
                </div>
                {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

                {/* <label
                  htmlFor="DateofRange"
                  className="relative block rounded-md border border-gray-200 shadow-lg focus-within:border-grey-700 focus-within:ring-1 focus-within:ring-grey-600"
                >
                  <input
                    type="date"
                    id="DateofRange"
                    className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 leading-10 w-full px-5 py-2"
                    placeholder="Select Date Range"
                  />

                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                    Select Date Range
                  </span>
                </label>
                 */}
                 <BasicDateRangeField/>
                {/* ////////////////////////////////////////////////////// */}

                {/* <DropdownMenu/> */}
                <Dropdown>
                              <MenuButton
                                variant="plain"
                                size="sm"
                                endDecorator={<ArrowDropDown/>}
                                className="text-lg font-light leading-10 hover:bg-transparent hover:text-slate-300 border-solid border-2 border-gray-200 w-full  rounded-lg"
                              >
                                Takaful & Insurance
                              </MenuButton>
                              <Menu size="sm">
                                <WrappedMenuItems/>
                              </Menu>
                            </Dropdown>

                {/* ////////////////////////////////////////////////////// */}

                <DateValidationShouldDisableMonth/>

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

export default Form;
