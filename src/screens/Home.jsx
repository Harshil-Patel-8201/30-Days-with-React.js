import React from "react";
import Logo from "../assets/logo.png";
import bgImage from "../assets/bg-image.jpg";
import { CgMenuRight } from "react-icons/cg";
import { HiViewGrid } from "react-icons/hi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-bgColor/95 overflow-x-hidden">
      <div className="relative w-full">
        <div className="w-[100%] absolute z-20">
          {/*Header */}
          <div className="w-full flex flex-row justify-between items-center px-20 py-5">
            <img src={Logo} className="w-[150px]" alt="Logo" />
            <div className="flex flex-row gap-3 items-center justify-center">
              <p className="text-base font-medium text-white">Menu</p>
              <CgMenuRight className="text-lg text-white" />
              <p className="text-white h-8 w-8 rounded-full bg-black/70 flex items-center justify-center uppercase text-xs">
                EN
              </p>
              <div className="h-8 w-8 rounded-full bg-black/70 flex items-center justify-center">
                <HiViewGrid className="text-white" />
              </div>
            </div>
          </div>

          {/* Title Text */}
          <div className="w-full flex flex-col ml-32 mt-5">
            <p className="font-headText text-left text-white text-7xl tracking-wider font-medium">
              Luxury Interior
            </p>

            <p className="font-headText text-left text-white text-7xl tracking-wider font-medium">
              Design
            </p>
            <p className="w-[320px] text-left text-sm text-white my-8">
              The specialist of our studio have all the necessary skills to
              create unique and luxurios interiors
            </p>

            {/* view works button */}
            <div className="flex flex-row gap-5">
              <p className="text-left text-sm text-white my-2 font-semibold">
                VIEW WORKS
              </p>
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <FiArrowRight className="text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* background Image */}
        <div className="relative w-[800px] h-[500px] ml-auto">
          {/* arrow buttons */}
          <div className="absolute w-full bottom-0 left-0 flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <div className="w-14 h-10 bg-white flex justify-center items-center">
                <FiArrowLeft className="text-xl" />
              </div>
              <div className="w-14 h-10 bg-gray-300 flex justify-center items-center">
                <FiArrowRight className="text-xl" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3 mr-5">
              <p className="capitalize text-black text-sm font-medium">
                scle down
              </p>
              <div className="h-8 w-8 rounded-full bg-black/80 flex items-center justify-center">
                <MdKeyboardDoubleArrowDown className="text-white" />
              </div>
            </div>
          </div>

          <img
            src={bgImage}
            className="w-[800px] h-[500px] object-cover ml-auto"
            alt="BGImage"
          />
        </div>
      </div>

      {/* About section */}
      <div className="w-full h-48 flex flex-row">
        <div className="flex justify-center items-center w-20 h-full"></div>
        <p className="text-left text-white text-5xl tracking-wider font-bold flex justify-center items-center ml-12 mr-20">
          About Us
        </p>
        <div className="h-full w-[2px] bg-gray-300/25"></div>
        <p className="w-[500px] text-left text-sm text-white my-8 flex justify-center items-center mx-auto">
          Tired of living in a dull concrete box? Do you have a dream to turn it
          into a cozy and functional home? Then you've come to the right place!
          3D-Style interior design Studio provides a full range of services in
          the field of interior design and complex turnkey repairs with author's
          supervision.
        </p>
      </div>
    </div>
  );
};

export default Home;
