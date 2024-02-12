import React from "react";
import phone from "../assets/About/phone.webp";
import message from "../assets/About/message.webp";
import callagent from "../assets/About/callagent.webp";
import handshake from "../assets/About/handshake.webp";
import main from "../assets/About/main.webp";

import Image from "next/image";
import "../globals.css";

const AboutUs = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-7  text-black bg-slate-300">
          <div className="mainImageSet h-96  bg-gray-200 lg:col-span-4 ">
            <Image className="ImgItem " src={main} width={600} height={150} />
          </div>
          <div className="headingCenter h-96 bg-gray-200 lg:col-span-3 ">
            <span className="text-[#515151] text-2xl mb-0 ">
              Let's find the
            </span>

            <div className="mt-2">
              <span className="text-[#515151] text-3xl font-bold ">best </span>
              <span className="text-[#e91431] text-3xl font-bold">
                Takaful Plan
              </span>
            </div>
            <p>Pakistan's only Digital Takaful Solution for All</p>
          </div>
        </div>
        <div className="headingCenter text-center p-12 h-80 mt-12">
          <div className="">
            <span className="text-[#515151] text-2xl font-bold">How We</span>{" "}
            <span className="text-[#e91431] text-2xl font-bold">Started?</span>
          </div>
          <p className="p-5 text-[#515151]">
            Takaful Bazaar was envisioned as a first-of-its-kind online platform
            for comparing and purchasing Takaful products. Found in 2022, we are
            revolutionizing the way we protect our assets and in-turn, our
            well-being. The founders of Takaful Bazaar dreamed of reimagining
            Takaful, so they brought an easy and user-friendly platform to bring
            the Takaful process into the digital age.
          </p>
        </div>
      </div>

      {/* second section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-200 text-black text-center ">
        <div className="phoneImg h-96  ">
          <Image className="ImgItem" src={phone} width={150} height={150} />
          <h1 className="text-xl mt-5 font-semibold text-[#515151] ">Vision</h1>
          <p className=" p-6 ">
            To transform the insurance industry and extend the safety net to the
            masses by offering a fully digital and Shariah-compliant takaful
            ecosystem
          </p>
        </div>
        <div className="phoneImg h-96    ">
          <Image className="ImgItem" src={message} width={150} height={150} />
          <h1 className="text-xl mt-5 font-semibold text-[#515151]">Mission</h1>
          <p className=" p-6 ">
            To Develop a digital marketplace that provides a wide range of
            takaful products to as many people in Pakistan as possible
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className=" text-center pt-10 text-3xl ">
        <span className="text-[#515151]  font-bold">Brand</span>{" "}
        <span className="text-[#e91431] font-bold">values</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
        <div className="h-96 phoneImg">
          <Image className="ImgItem" src={callagent} width={150} height={150} />
          <h1 className="text-xl mt-5 font-semibold ">
            Transparency and Reliability
          </h1>
          <p className=" p-2">
            We make sure you know everything you need to make an informed
            decision
          </p>
        </div>
        <div className="h-96 phoneImg">
          <Image className="ImgItem" src={handshake} width={150} height={150} />
          <h1 className="text-xl mt-5 font-semibold ">Accuracy</h1>
          <p className=" p-2">
            We collect all data directly from our Takaful partners to ensure you
            have the correct information
          </p>
        </div>
        <div className="h-96 phoneImg">
          <Image className="ImgItem" src={phone} width={150} height={150} />
          <h1 className="text-xl mt-5 font-semibold ">One Stop Solution</h1>
          <p className=" p-2">
            We have designed our platform so that you have a one-window solution
            for Takaful information, comparisons and purchasing
          </p>
        </div>
      </div>

      {/* Fifth Section */}

      <div className=" text-center p-12 bg-gray-200 ">
        <span className="text-[#515151] text-2xl font-bold">What</span>{" "}
        <span className="text-[#e91431] text-2xl font-bold">We Offer</span>
        <p className="p-5">
          Takaful Bazaar is a one-stop shop for fulfilling all your Takaful
          needs. We offer exclusive auto, health, travel and family Takaful
          products at affordable prices. With attractive features for our
          Takaful plans, including 24/7 customer service, extensive claims
          support, add-on covers, a user-friendly app interface, tailored policy
          recommendation, and affordable prices, customers can compare and
          purchase a variety of takaful products based on their needs.
        </p>
      </div>
      <div className=" text-center p-12  ">
        <span className="text-[#515151] text-2xl font-bold">Our</span>{" "}
        <span className="text-[#e91431] text-2xl font-bold">Way Forward</span>
        <p className="p-5">
          We at Takaful Bazaar want our customers to have a broad choice of
          Takaful options. Although we are happy with the change we are bringing
          to Insurtech in Pakistan, there are still many opportunities to
          explore. Therefore, we are constantly working to introduce new
          technology and improvements to the Takaful ecosystem so that we can
          facilitate more households & businesses in Pakistan.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
