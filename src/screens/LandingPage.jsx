import React from "react";
import Logo from "../assets/Logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { AiOutlineShopping } from "react-icons/ai";
import JacketMan from "../assets/jacket_man.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const LandingPage = () => {
  return (
    <div className="w-full h-[700px] bg-greenBg flex flex-col px-20">
      {/* Header */}
      <div className="flex flex-row justify-between py-3 items-center">
        <img src={Logo} className="w-[150px]" alt="CompanyLogo" />
        <div className="flex flex-row gap-4 items-center">
          <p className="text-sm text-white">Home</p>
          <p className="text-sm text-gray-400">New</p>
          <p className="text-sm text-gray-400">Store</p>
          <p className="text-sm text-gray-400">Contacts</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm text-white">Menu</p>
          <CgMenuLeft className="text-sm text-white" />
          <div className="h-8 w-8 bg-lightYello rounded-full flex justify-center items-center">
            <AiOutlineShopping className="text-black" />
          </div>
        </div>
      </div>

      {/* Heading Text & Image area */}
      <div className="flex flex-row">
        {/* heading text */}
        <div className="flex flex-col justify-start ml-12 mt-16">
          <p className="text-left text-[60px] py-1 text-gray-300/75 font-semibold italic">
            2022
          </p>
          <p className="text-left text-[90px] text-white font-semibold">
            Autumn
          </p>
          <p className="text-left text-[90px] text-white font-semibold -mt-8">
            Jackets
          </p>
          <p className="text-left text-white text-xl">
            Autumn Sale / Up to 50% OFF
          </p>
          <p className="text-left text-black text-xs px-5 py-3 bg-lightYello mr-auto my-4 rounded-xl">
            Open Collection
          </p>
        </div>

        {/* Jacket Man Image */}
        <div className="mt-[200px] ml-[150px] relative">
          <div className="h-[300px] w-[500px] bg-green-950/90 rounded-full rotate-[30deg]"></div>
          <img
            src={JacketMan}
            className="absolute top-0 -mt-[195px] w-[900px]"
            alt="Jacket Man"
          />
          <p className="absolute z-20 text-white text-4xl font-medium top-0 right-0 -mt-20 mr-10">
            $299
          </p>
          <div className="absolute w-[100px] h-[100px] top-0 right-0 mr-16 -mt-8 bg-lightYello flex items-center justify-center rounded-full">
            <p className="text-center mr-8 w-[30px] text-black font-semibold text-2xl">
              -40% OFF
            </p>
          </div>
          <div className="absolute ml-20 mt-10 flex flex-row w-[350px] justify-between">
            <BsArrowLeftCircle className="text-gray-400 text-4xl" />
            <BsArrowRightCircle className="text-white text-4xl" />
          </div>
          <div className="absolute right-0 top-10 -mr-10 flex flex-col justify-center items-center gap-4">
            <div className="h-4 w-4 bg-white rounded-full"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
