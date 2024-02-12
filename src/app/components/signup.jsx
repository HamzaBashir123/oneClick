import React from 'react'
import Image from "next/image";
import location from "../assets/About/location.png"
import email from "../assets/About/email.png"
import call from "../assets/About/call.png"
import income from '../assets/About/income.png'

const Signup = () => {
  return (
    <>
     <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12 p-2  ">
              <h1 className="text-5xl font-bold sm:text-3xl text-black mb-5">
                Get in touch
              </h1>
              <p className="max-w-xl font-light text-black">
                On the other hand we denounce righteous indignation moralized
                bite the HR charms of pleasure.
              </p>

              <div className="mt-8">
                <div className="form-details flex my-5">
                  <Image
                    className="background-color p-4  bg-gradient-to-t from-cyan-500 to-blue-500 rounded-lg mx-5"
                    src={location}
                    width={60}
                    height={50}
                  />
                  <div className="text-black mx-2 ">
                    <h3 className="font-medium text-2xl">Office Address</h3>
                    <p>
                      R-613, Block 15, Dastagir, FB Area, Karachi - Pakistan
                    </p>
                  </div>
                </div>
                <div className="form-details flex my-10">
                  <Image
                    className="background-color p-4 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-lg mx-5"
                    src={email}
                    width={60}
                    height={50}
                  />
                  <div className="text-black mx-2">
                    <h3 className="font-medium text-2xl">Email Us</h3>
                    <p>info@theoneclickdigital.com</p>
                  </div>
                </div>
                <div className="form-details flex my-5">
                  <Image
                  className="background-color p-4 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-lg mx-5"
                  src={call}
                  width={60}
                  height={50}
                  />
                  <div className="text-black mx-2">
                    <h3 className="font-medium text-2xl">Phone Call</h3>
                    <p>+92 319 599 5775</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 border-solid border-2 border-sky-400 text-black">
              <form action="" className="space-y-6">
                <div>
                <Image
                  className=""
                  src={income}
                  width={80}
                  height={80}
                  />

                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="number"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input
                      className="peer sr-only"
                      id="option1"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <label
                      htmlFor="option1"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-none peer-checked:bg-gradient-to-t from-cyan-500 to-blue-500 peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm"> User </span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option2"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <label
                      htmlFor="option2"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-none peer-checked:bg-gradient-to-t from-cyan-500 to-blue-500 peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm"> Client</span>
                    </label>
                  </div>

                  <div>
                    <input
                      className="peer sr-only"
                      id="option3"
                      type="radio"
                      tabIndex="-1"
                      name="option"
                    />

                    <label
                      htmlFor="option3"
                      className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-none peer-checked:bg-gradient-to-t from-cyan-500 to-blue-500 peer-checked:text-white"
                      tabIndex="0"
                    >
                      <span className="text-sm">Admin </span>
                    </label>
                  </div>
                </div>

               
                <div>
                    <label className="sr-only" htmlFor="phone">
                      Password
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm text-black"
                      placeholder="Password"
                      type="password"
                      id=""
                    />
                  </div>
                  <div > 
                    <p className="text-black"> Already have an account? <span className="text-green hover:cursor-pointer">Sign In</span> </p>
                  </div>


                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-gradient-to-t from-cyan-500 to-blue-500 px-8 py-3 font-medium text-white sm:w-auto"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Signup;


