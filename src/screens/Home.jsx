import React from "react";
import Logo from "../assets/logo.png";
import img1 from "../assets/img1.png";
import blackLogo from "../assets/black logo.png";
import { ImPlus } from "react-icons/im";
import Building from "../assets/building.jpg";
import { ImArrowDownRight } from "react-icons/im";
import { IoMdPlay } from "react-icons/io";

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorBackground flex flex-col px-[80px]">
      {/* Header*/}
      <div className="flex flex-row w-full items-center justify-between border-b-[1px] border-colorBorder py-[20px]">
        <img src={Logo} className="w-[80px]" alt="" />
        <div className="flex flex-row items-center gap-14 capitalize text-sm text-colorTextShade/80 font-medium">
          <p className="text-black">home</p>
          <p>About</p>
          <p>prices</p>
          <p>gallery</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="h-6 w-[1.5px] bg-black"></div>
          <p className="text-black uppercase text-sm font-extrabold">
            get started
          </p>
        </div>
      </div>

      {/* first row */}
      <div className="flex flex-row w-full justify-between">
        {/* Text */}
        <div className="flex flex-col text-left text-black text-9xl font-extrabold font-customText mt-28">
          <div className="w-10 h-10 bg-colorOrange ml-[267px] -mb-[9px]"></div>
          <p>new ai </p>
          <p>creator</p>
        </div>

        {/* Pics */}
        <div className="flex flex-row gap-3 mt-20">
          <img src={img1} className="w-[320px] h-[450px]" alt="" />
          <div className="h-[105px] w-[100px] bg-gradient-to-b from-white to-transparent flex flex-col justify-center items-center gap-5">
            <img src={blackLogo} className="w-[50px]" alt="" />
            <p className="text-black text-sm font-semibold uppercase">
              digital <p>awards</p>
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-row w-full">
        <div className="w-[688px] bg-colorWhite h-[380px] flex flex-row justify-between relative">
          {/* Text */}
          <div className="flex flex-col w-[320px] p-[50px] h-full justify-between">
            <div className="flex flex-row gap-3 items-center">
              <p className="text-6xl text-black font-extrabold">2000</p>
              <ImPlus className="text-3xl text-colorOrange" />
            </div>
            <p className="text-base text-black/80 text-left">
              AUTOMATICALLY CREATE UNIQUE AND HIGH-QUALITY ILLUSTRATIONS
            </p>
          </div>

          {/* Pic */}
          <img src={Building} alt="" />

          {/* Learn More */}
          <div className="w-24 h-24 absolute bottom-7 right-[210px] bg-colorOrange rounded-full flex justify-center items-center">
            <p className="text-black font-semibold p-2">LEARN MORE</p>
          </div>
        </div>

        <div className="flex flex-row w-[430px]">
          {/* Try it */}
          <div className="w-[320px] h-[150px] border-[1px] border-colorBorder flex flex-row">
            <div className="w-full h-full flex justify-center items-center p-3 border-r-[1px] border-colorBorder">
              <div className="w-full h-full bg-colorOrange flex flex-col text-black text-xl font-extrabold p-3">
                <p className="mr-auto">TRY IT</p>
                <p className="mr-auto">FREE</p>
                <ImArrowDownRight className=" mt-5 ml-auto" />
              </div>
            </div>
            <div className="w-full h-full"></div>
          </div>
          <div className="w-[110px] h-[200px] border-[1px] border-colorBorder mt-[150px] flex flex-col gap-5 items-center justify-center p-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-white to-transparent flex items-center justify-center">
              <IoMdPlay className="text-2xl" />
            </div>
            <div className="w-5 h-1 bg-black"></div>
            <p className="text-black text-sm uppercase font-extrabold">see how to work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
