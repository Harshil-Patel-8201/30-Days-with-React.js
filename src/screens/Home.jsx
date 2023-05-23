import React from "react";
import { FiMenu } from "react-icons/fi";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Dimond from "../assets/dimond.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import Brand from "../assets/brand.png";
import Ring from "../assets/ring.png";
import Lady1 from "../assets/lady1.png";
import Lady from "../assets/lady.png";
import Jewellery from "../assets/jewellery.png"

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorBackground flex flex-col">
      {/* Header */}
      <div className="flex flex-row justify-between items-center px-[80px] border-b-[1px] border-colorBorder">
        {/* Logo */}
        <p className="uppercase text-colorGold text-2xl tracking-wider mr-16">
          Precious
        </p>
        <div className="flex items-center justify-center rounded-full border-[1px] border-colorBorder">
          <FiMenu className="text-colorGold text-[80px] px-5 py-5" />
        </div>
        <div className="flex flex-row gap-4 text-colorGold text-sm font-subText">
          <p>Collection</p>
          <p>Brands</p>
          <p>Program</p>
        </div>
      </div>

      {/* Jewelry Reimagined */}
      <div className="flex flex-row justify-between">
        {/* Pic */}
        <div className="w-full flex flex-row items-center border-b-[1px] border-colorBorder py-10 gap-10 px-[80px]">
          <div className="flex flex-col items-center">
            <img
              src={Lady1}
              className="w-[120px] h-[120px] object-contain mt-10 border-b-[1px] border-colorBorder"
              alt=""
            />
            <div className="flex flex-row py-2 items-center">
              <VscDebugBreakpointLog className="text-sm text-colorGold" />
              <VscDebugBreakpointLog className="text-sm text-colorBorder" />
              <VscDebugBreakpointLog className="text-sm text-colorBorder" />
            </div>
          </div>
          <div className="flex flex-col w-[10px] text-left text-colorGold gap-4 mt-8">
            <p className="text-4xl">12.01</p>
            <p className="text-xs font-subText text-colorGold/40">
              ELISABETH WALSH
            </p>
          </div>
        </div>

        {/* Dimond */}
        <div className="w-full border-[1px] border-colorBorder flex flex-col rounded-t-full text-center -ml-24 py-16">
          <img
            src={Dimond}
            className="w-[100px] h-[100px] object-contain mx-auto"
            alt=""
          />
          <p className="text-colorGold text-5xl tracking-wider">Jewelry</p>
          <p className="text-colorGold text-5xl tracking-wider">Reimagined</p>
        </div>

        {/* Brand */}
        <div className="w-full flex flex-col justify-center items-center mt-[110px]">
          <div className="h-10 w-10 bg-colorRed rotate-45 flex justify-center items-center -mb-6">
            <HiArrowNarrowRight className="text-colorGold -rotate-45 text-lg" />
          </div>
          <div className="flex flex-col justify-center items-center border-[1px] border-colorBorder rounded-t-full">
            <img src={Brand} className="w-[220px] p-[50px]" alt="" />
          </div>
        </div>
      </div>

      {/* Ring Lady */}
      <div className="flex flex-row justify-between">
        {/* Ring */}
        <div className="w-full flex flex-col justify-start items-center px-[8px] py-[70px]">
          <div className="w-[165px] h-[270px] rounded-full bg-colorLightWhite flex flex-col justify-center items-center z-20 -ml-10">
            <img
              src={Ring}
              className="w-[300px] h-[250px] object-cover"
              alt=""
            />
          </div>
          <div className="w-[165px] h-[270px] rounded-full bg-colorBackgroundDark -mt-[270px] ml-[80px]"></div>
          <p className="text-sm text-colorGold/70 tracking-wider w-[250px] font-subText mt-20 text-justify">
            One of America's finest venues for fine art, is opening its doors
            for a jewelry expo
          </p>
        </div>

        {/* Lady */}
        <div className="w-full border-x-[1px] border-colorBorder">
          <div className="mx-5 border-x-[1px] border-t-[1px] border-colorBorder rounded-t-full h-[550px] bg-gradient-to-b from-colorRedGredient1 via-colorRedGredient2 to-colorRedGredient3 flex flex-col gap-5 justify-between">
            <div className="flex flex-col text-center text-sm text-colorGold font-subText mt-12">
              <p>TRACE YOUR FAVOURITE MV</p>
              <p>PIECES FROM CONCEPTION</p>
              <p>TO COMPLETION.</p>
            </div>
            <img src={Lady} className="w-[350px] mx-auto -mt-12" alt="" />
          </div>
        </div>

        {/* Jewellery */}
        <div className="w-full flex flex-col">
          <div className="mx-auto w-[220px] h-[200px] rounded-b-full bg-colorBackgroundDark mt-1 flex justify-center items-center">
            <img src={Jewellery} className="w-[150px] mt-14" alt="" />
          </div>
          <p className="text-3xl w-[230px] text-left text-colorGold tracking-wider font-extralight mx-auto mt-[180px]">Time to make sombody happy!</p>
          <div className="w-[230px] h-[6px] bg-gradient-to-r from-colorRedGredient2 to-colorRed mx-auto mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
