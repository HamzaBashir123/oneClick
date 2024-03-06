// "use client";
// import { Autocomplete, TextField } from "@mui/material";
// import { ToWords } from "to-words";
// import AutoImage from "../assets/health/healthcampiegn_img_3.png";
// import Image from "next/image";
// import React, { useState } from "react";



// const carYear = [
//     "2024",
//     "2023",
//     "2022",
//     "2021",
//     "2020",
//     "2019",
//     "2018",
//     "2017",
//     "2016",
//     "2015",
//     "2014",
//     "2013",
//     "2012",
//     "2011",
//     "2010",
//     "2009",
//     "2008",
//     "2007",
//     "2006",
//     "2005",
// ];
// function Health() {
//     const [filteredModels, setFilteredModels] = useState([]);
//     const [converter, setConverter] = useState("");
//     const [formData, setFormData] = useState({
//         name: "",
//         tel: "",
//         email: "",
//         carBrand: "",
//         carModel: "",
//         carYear: "",
//         carValue: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));

//         setFormData({ ...formData, [e.target.name]: e.target.value });

//         if (name === "carValue" && !isNaN(value) && value !== "") {
//             const words = toWords.convert(value, { currency: true });
//             setConverter(words);
//         } else {
//             setConverter("");
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({
//             ...formData,
//         });
//     };

//     // Number Convert Into Text
//     const toWords = new ToWords({
//         localeCode: "en-IN", // For Indian English
//         converterOptions: {
//             currency: true,
//             ignoreDecimal: false,
//             ignoreZeroCurrency: false,
//             doNotAddOnly: false,
//             currencyOptions: {
//                 name: "Rupee",
//                 plural: "Rupees",
//                 symbol: "₹",
//                 fractionalUnit: {
//                     name: "Paisa",
//                     plural: "Paise",
//                     symbol: "",
//                 },
//             },
//         },
//     });
//     return (
//         <>
//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center mx-4 md:mx-8 lg:mx-28 my-10">
//                 {/* Image Section */}
//                 <div className="hidden lg:block xl:block mx-auto">
//                     <Image src={AutoImage} alt="side_bg" />
//                     <h1 className="text-3xl py-5">Get the Best Health plan for</h1>
//                     <h1 className="text-3xl py-5">Yourself, Family or Parents</h1>
//                 </div>
//                 {/* Form Section  */}
//                 <div className="max-w-sm m-auto bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4 drop-shadow-2xl">
//                     <form onSubmit={(e) => handleSubmit(e, formData)}>

//                         <fieldset className="grid grid-cols-2 gap-4 mb-5">
//                             <legend className="sr-only">Gender</legend>

//                             <div>
//                                 <label
//                                     htmlFor="DeliveryMale"
//                                     className="block cursor-pointer rounded-md border border-gray-300 bg-white p-4  font-medium shadow-sm hover:border-gray-200
//                has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
//                                 >
//                                     <div>
//                                         <p className="text-neutral-600 font-light">Male</p>
//                                     </div>

//                                     <input
//                                         type="radio"
//                                         name="gender"
//                                         value="male"
//                                         id="DeliveryMale"
//                                         className="sr-only"
//                                         checked={formData.gender === "male"}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>

//                             <div>
//                                 <label
//                                     htmlFor="DeliveryFemale"
//                                     className="block cursor-pointer rounded-md border border-gray-300 bg-white p-4  font-medium shadow-sm hover:border-gray-200
//                has-[:checked]:ring-blue-500    has-[:checked]:border-white has-[:checked]:ring-1"
//                                 >
//                                     <div>
//                                         <p className="text-neutral-600 font-light">Female</p>
//                                     </div>

//                                     <input
//                                         type="radio"
//                                         name="gender"
//                                         value="female"
//                                         id="DeliveryFemale"
//                                         className="sr-only"
//                                         checked={formData.gender === "female"}
//                                         onChange={handleChange}
//                                     />
//                                 </label>
//                             </div>
//                         </fieldset>
//                         <div className="flex gap-2 w-full">
//                             {/* Full-Name  */}
//                             <TextField
//                                 name="name"
//                                 value={formData.name}
//                                 label="Your Full Name"
//                                 id="outlined-size-small"
//                                 defaultValue=""
//                                 size="medium"
//                                 fullWidth
//                                 onChange={handleChange}
//                             />

//                             {/* Phone Number  */}
//                             <TextField
//                                 name="tel"
//                                 value={formData.tel}
//                                 type="number"
//                                 label="Phone Number"
//                                 id="outlined-size-small"
//                                 defaultValue=""
//                                 size="medium"
//                                 fullWidth
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         {/* Email  */}
//                         <TextField
//                             name="email"
//                             value={formData.email}
//                             type="email"
//                             label="Email"
//                             id="outlined-size-small"
//                             defaultValue=""
//                             size="medium"
//                             fullWidth
//                             sx={{ marginTop: 2, marginBottom: 2 }}
//                             onChange={handleChange}
//                         />

//                         {/* Car-Brand  */}
//                         <Autocomplete
//                             options={carBrand}
//                             onChange={(e, value) => {
//                                 handleChange({ target: { name: "carBrand", value } });
//                                 setFilteredModels(carModel[value] || []);
//                             }}
//                             renderInput={(params) => (
//                                 <TextField
//                                     {...params}
//                                     label="Bike Make"
//                                     size="medium"
//                                     name="carBrand"
//                                     value={formData.carBrand}
//                                     variant="outlined"
//                                     fullWidth
//                                     sx={{ marginBottom: 2 }}
//                                 />
//                             )}
//                         />
//                         {/* Car-Model  */}
//                         <Autocomplete
//                             options={filteredModels}
//                             onChange={(e, value) => {
//                                 handleChange({ target: { name: "carModel", value } });
//                             }}
//                             renderInput={(params) => (
//                                 <TextField
//                                     {...params}
//                                     label="Engine CC"
//                                     size="medium"
//                                     name="carModel"
//                                     value={formData.carModel}
//                                     variant="outlined"
//                                     fullWidth
//                                     sx={{ marginBottom: 2 }}
//                                 />
//                             )}
//                         />

//                         {/* Car-Manufacturing-Year  */}
//                         <Autocomplete
//                             options={carYear}
//                             onChange={(e, value) => {
//                                 handleChange({ target: { name: "carYear", value } });
//                             }}
//                             renderInput={(params) => (
//                                 <TextField
//                                     {...params}
//                                     label="Manufacturing Year"
//                                     size="medium"
//                                     name="carYear"
//                                     value={formData.carYear}
//                                     variant="outlined"
//                                     fullWidth
//                                     sx={{ marginBottom: 2 }}
//                                 />
//                             )}
//                         />

//                         {/* Current-Value  */}
//                         <div className="mb-4 relative">
//                             <TextField
//                                 name="carValue"
//                                 value={formData.carValue}
//                                 type="number"
//                                 label="Enter Current Value"
//                                 id="outlined-size-small"
//                                 defaultValue=""
//                                 size="medium"
//                                 fullWidth
//                                 onChange={handleChange}
//                             />
//                             <p className="text-xs text-blue-500 font-sans mx-1 mt-1">
//                                 {converter}
//                             </p>
//                         </div>

//                         {/* Button-View-Quotes  */}
//                         <div className="flex items-center justify-between">
//                             <button
//                                 className=" w-full bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 hover:scale-95 transition-all text-white  py-2 px-4 rounded "
//                                 type="submit"
//                             >
//                                 View Quotes
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Health;

"use client";

import { Person } from "@mui/icons-material";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
const age = [1,2,3,4,5,6]
const HealthInsuranceForm = () => {
  const [activeTab, setActiveTab] = useState("self");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-xl mx-auto mt-20">
      {/* Tabs */}
      <div className="mb-8 mx-auto">
        <div className="flex gap-4">
          <button
            className={`w-1/4 py-4 flex  items-center justify-center ${
              activeTab === "self"
                ? "border border-blue-500 ring-1 shadow-xl text-black"
                : "border border-gray-200 text-neutral-500"
            } font-medium rounded-md focus:outline-none`}
            onClick={() => handleTabChange("self")}
          >
            <Person className="mb-1" />
            <span>Self</span>
          </button>

          <button
            className={`w-1/4 py-4 flex  items-center justify-center ${
              activeTab === "family"
                ? "border border-blue-500 ring-1 shadow-xl text-black"
                : "border border-gray-200 text-neutral-500"
            } font-medium rounded-md focus:outline-none`}
            onClick={() => handleTabChange("family")}
          >
            <Person className="mb-1" />
            <span>Family</span>
          </button>

          {/* <button
            className={`w-1/3 py-4 text-center ${
              activeTab === "parents"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } font-medium rounded-tr-lg focus:outline-none`}
            onClick={() => handleTabChange("parents")}
          >
            Parents
          </button> */}
          <button
            className={`w-1/4 py-4 flex  items-center justify-center ${
              activeTab === "parents"
                ? "border border-blue-500 ring-1 shadow-xl text-black"
                : "border border-gray-200 text-neutral-500"
            } font-medium rounded-md focus:outline-none`}
            onClick={() => handleTabChange("parents")}
          >
            <Person className="mb-1" />
            <span>Parents</span>
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <form>
        {/* Self Tab */}
        <div className={`tab-content ${activeTab !== "self" && "hidden"}`}>
          <div className="mb-4">
            <Autocomplete
                options={age}
              //   onChange={(e, value) => {
              //     handleChange({ target: { name: "familyRoles", value } });
              //   }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Age"
                  size="medium"
                  name="age"
                  //   value={formData.familyRoles}
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              )}
            />
          
          </div>
          {/* <div className="mb-4">
            <label
              htmlFor="selectGender"
              className="block text-gray-700 font-medium mb-1"
            >
              Select Gender
            </label>
            <select
              id="selectGender"
              name="selectGender"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div> */}
        </div>

        {/* Family Tab */}
        <div className={`tab-content ${activeTab !== "family" && "hidden"}`}>
          <div className="mb-4">{/* Add inputs for Family tab */}</div>
        </div>

        {/* Parents Tab */}
        <div className={`tab-content ${activeTab !== "parents" && "hidden"}`}>
          <div className="mb-4">
            <label
              htmlFor="selectParentAge"
              className="block text-gray-700 font-medium mb-1"
            >
              Select Age
            </label>
            <select
              id="selectParentAge"
              name="selectParentAge"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Age</option>
              {/* Populate age options */}
            </select>
          </div>
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
  );
};

export default HealthInsuranceForm;