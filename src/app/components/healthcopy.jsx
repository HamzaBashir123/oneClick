"use client"

import { useState } from 'react';
import AutoImage from "../assets/health/healthcampiegn_img_3.png";
import Image from "next/image";
import {EscalatorWarning, FamilyRestroom, Person } from "@mui/icons-material";
import { Autocomplete, TextField } from '@mui/material';



const ageOptions = [];

for (let index = 18; index < 76; index++) {
    ageOptions.push(index + " Years");
}

const genderOptions = ['male', 'female',]



const HealthInsuranceForm = () => {
    const [activeTab, setActiveTab] = useState('self');
    const [formData, setFormData] = useState({
        name: "",
        tel: "",
        email: "",
        carBrand: "",
        carModel: "",
        carYear: "",
        carValue: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };


    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center md:mx-8 my-10 p-10 border-2 border-indigo-600">
                {/* Image Section */}
                <div className="hidden lg:block xl:block mx-auto    ">
                    <Image src={AutoImage} alt="side_bg" />
                    <h1 className="text-3xl py-5">Get the Best Health plan for</h1>
                    <h1 className="text-3xl py-5">Yourself, Family or Parents</h1>
                </div>
                {/* Form Section  */}
                <div className="max-w-md p-8  rounded-md border bg-white shadow-md drop-shadow-lg">
                    {/* Tabs */}
                    <div className="mb-8">
                        <div className="flex gap-4">
                            <button
                                className={`w-1/3 py-4 flex  items-center justify-center ${activeTab === "self"
                                    ? "border border-blue-500 ring-1 shadow-xl text-black"
                                    : "border border-gray-200 text-neutral-500"
                                    } font-medium rounded-md focus:outline-none`}
                                onClick={() => handleTabChange("self")}
                            >
                                <Person className="mb-1" />
                                <span>Self</span>
                            </button>

                            <button
                                className={`w-1/3 py-4 flex  items-center justify-center gap-1 ${activeTab === "family"
                                    ? "border border-blue-500 ring-1 shadow-xl text-black"
                                    : "border border-gray-200 text-neutral-500"
                                    } font-medium rounded-md focus:outline-none`}
                                onClick={() => handleTabChange("family")}
                            >
                              <FamilyRestroom className="mb-1"/>
                                <span>Family</span>
                            </button>
                            <button
                                className={`w-1/3 py-4 flex  items-center justify-center gap-1 ${activeTab === "parents"
                                    ? "border border-blue-500 ring-1 shadow-xl text-black"
                                    : "border border-gray-200 text-neutral-500"
                                    } font-medium rounded-md focus:outline-none`}
                                onClick={() => handleTabChange("parents")}
                            >
                                <EscalatorWarning className="mb-1"/>
                                <span>Parents</span>
                            </button>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <form>
                        {/* Self Tab */}
                        <div className={`tab-content ${activeTab !== 'self' && 'hidden'}`}>
                            <Autocomplete
                                options={ageOptions}
                                // onChange={(e, value) => {
                                //     handleChange({ target: { name: "carBrand", value } });
                                //     setFilteredModels(carModel[value] || []);
                                // }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Select Age"
                                        size="medium"
                                        name="carBrand"
                                        // value={formData.carBrand}
                                        variant="outlined"
                                        fullWidth
                                        sx={{ marginBottom: 2 }}
                                    />
                                )}
                            />
                            <div className="mb-4">
                                <Autocomplete
                                    options={genderOptions}
                                    // onChange={(e, value) => {
                                    //     handleChange({ target: { name: "carBrand", value } });
                                    //     setFilteredModels(carModel[value] || []);
                                    // }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select Age"
                                            size="medium"
                                            name="carBrand"
                                            // value={formData.carBrand}
                                            variant="outlined"
                                            fullWidth
                                            sx={{ marginBottom: 2 }}
                                        />
                                    )}
                                />

                                <h1 className='mx-1 mb-2 font-sans'>Select Hospitalization Limit (PKR)</h1>
                                <fieldset className="grid grid-cols-3 gap-4 mb-5">
                                    <legend className="sr-only">Gender</legend>

                                    <div>
                                        <label
                                            htmlFor="DeliveryMale"
                                            className="block cursor-pointer rounded-md border border-gray-300 bg-white p-3  font-medium shadow-sm hover:border-gray-200
                                          has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
                                        >
                                           
                                                <p className="text-neutral-700 font-sans text-center">60k - 2Lac</p>
                                           

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                id="DeliveryMale"
                                                className="sr-only"
                                                checked={formData.gender === "male"}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="DeliveryFemale"
                                            className="block cursor-pointer rounded-md border border-gray-300 bg-white p-3  font-medium shadow-sm hover:border-gray-200
               has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
                                        >
                                            
                                                <p className="text-neutral-700 font-sans text-center">2Lac - 5Lac</p>
                                           

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                id="DeliveryFemale"
                                                className="sr-only"
                                                checked={formData.gender === "female"}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="DeliveryOption"
                                            className="block cursor-pointer rounded-md border border-gray-300 bg-white p-3  font-medium shadow-sm hover:border-gray-200
                                          has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
                                        >
                                           
                                                <p className="text-neutral-700 font-sans text-center">5Lac - 10Lac</p>
                                           

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="option"
                                                id="DeliveryOption"
                                                className="sr-only"
                                                checked={formData.gender === "option"}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>


                        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}
                        {/* Family Tab */}
                        <div className={`tab-content ${activeTab !== 'family' && 'hidden'}`}>
                            <div className="mb-4">
                                {/* Add inputs for Family tab */}
                            </div>
                        </div>

                        {/* Parents Tab */}
                        <div className={`tab-content ${activeTab !== 'parents' && 'hidden'}`}>
                        <Autocomplete
                                options={ageOptions}
                                // onChange={(e, value) => {
                                //     handleChange({ target: { name: "carBrand", value } });
                                //     setFilteredModels(carModel[value] || []);
                                // }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Select Age"
                                        size="medium"
                                        name="carBrand"
                                        // value={formData.carBrand}
                                        variant="outlined"
                                        fullWidth
                                        sx={{ marginBottom: 2 }}
                                    />
                                )}
                            />
                             <h1 className='mx-1 mb-2 font-sans'>Select Hospitalization Limit (PKR)</h1>
                                <fieldset className="grid grid-cols-3 gap-4 mb-5">
                                    <legend className="sr-only">Gender</legend>

                                    <div>
                                        <label
                                            htmlFor="DeliveryMale"
                                            className="block cursor-pointer rounded-md border border-gray-300 bg-white p-3  font-medium shadow-sm hover:border-gray-200
                                          has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
                                        >
                                           
                                                <p className="text-neutral-700 font-sans text-center">60k - 2Lac</p>
                                           

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                id="DeliveryMale"
                                                className="sr-only"
                                                checked={formData.gender === "male"}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="DeliveryFemale"
                                            className="block cursor-pointer rounded-md border border-gray-300 bg-white p-3  font-medium shadow-sm hover:border-gray-200
               has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
                                        >
                                            
                                                <p className="text-neutral-700 font-sans text-center">2Lac - 5Lac</p>
                                           

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                id="DeliveryFemale"
                                                className="sr-only"
                                                checked={formData.gender === "female"}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="DeliveryOption"
                                            className="block cursor-pointer rounded-md border border-gray-300 bg-white p-3  font-medium shadow-sm hover:border-gray-200
                                          has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
                                        >
                                           
                                                <p className="text-neutral-700 font-sans text-center">5Lac - 10Lac</p>
                                           

                                            <input
                                                type="radio"
                                                name="gender"
                                                value="option"
                                                id="DeliveryOption"
                                                className="sr-only"
                                                checked={formData.gender === "option"}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                </fieldset>


                        </div>
                            
                        

                        {/* Button-View-Quotes  */}
                        <div className="flex items-center justify-between">
                            <button
                                className=" w-full bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 hover:scale-95 transition-all text-white  py-2 px-4 rounded "
                                type="submit"
                            >
                                View Quotes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};

export default HealthInsuranceForm;