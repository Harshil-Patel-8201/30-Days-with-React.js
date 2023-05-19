import React from "react";
import Logo from "../assets/logo.png";
import AppleLogo from "../assets/apple.png";
import { IoMdMail } from "react-icons/io";
import Circle from "../assets/blue_circle.png"
import HandPhone from "../assets/mobile.png"
import Icon1 from  "../assets/icon1.png"
import Icon2 from  "../assets/icon2.png"
import Icon3 from  "../assets/icon3.png"

const Home = () => {
  return (
    <div className="relative w-screen h-auto bg-colorWhite flex flex-col px-[100px]">
      {/* Header */}
      <div className="w-full flex flex-row py-5 items-center justify-between">
        <img src={Logo} className="w-[120px]" alt="" />
        <div className="flex flex-row gap-7">
          <p className="text-sm text-black font-semibold">Home</p>
          <p className="text-sm text-gray-400 font-semibold">About</p>
          <p className="text-sm text-gray-400 font-semibold">Price</p>
          <p className="text-sm text-gray-400 font-semibold">Download</p>
        </div>
        <img src={AppleLogo} className="w-[150px]" alt="" />
      </div>

      {/* Main Area */}
      <div className="flex flex-row">
        {/* Text */}
        <div className="w-[380px] flex flex-col text-left mt-20">
          <p className=" text-left text-5xl font-bold text-balck tracking-wider">
            Mobile Banking and Invoicing
          </p>
          <p className="text-black text-lg font-light tracking-wide py-10">
            Control expenses, manage payments and cards on the go.
          </p>
          <div className="w-full bg-white rounded-lg h-[60px] flex flex-row justify-between px-1 py-1 items-center">
            <div className="flex flex-row items-center gap-2 ml-4">
              <IoMdMail className="text-gray-300 text-xl" />
              <p className="text-black text-sm tracking-wider">
                mehmet@gmail.com
              </p>
            </div>
            <p className="text-white bg-colorBlue px-3 py-3 rounded-lg mr-1">
              Try it now
            </p>
          </div>
          <div className="w-[250px] my-20 flex flex-row rounded-xl bg-colorBlue text-right justify-between shadow-lg shadow-gray-400">
            <img
              src={Circle}
              className="w-[100px] h-[100px] -mt-8 -ml-2"
              alt=""
            />
            <p className="w-[150px] text-white font-semibold text-base text-left my-7">
              More than 5000 happy customers
            </p>
          </div>
        </div>

        {/* Immage */}
        <img src={HandPhone} className="ml-auto w-[450px]" alt="" />
      </div>

      {/* Icons */}
      <img
        src={Icon1}
        className="absolute w-[100px] right-[120px] top-[200px]"
        alt=""
      />
      <img
        src={Icon2}
        className="absolute w-[80px] right-[300px] top-[600px]"
        alt=""
      />
      <img
        src={Icon3}
        className="absolute w-[80px] right-[600px] top-[300px]"
        alt=""
      />
    </div>
  );
};

export default Home;
