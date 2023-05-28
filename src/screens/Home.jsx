import React from "react";
import { GiDiamonds } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";
import Women from '../assets/women.png'
import Sofa from '../assets/sofa.png'
import Apple from "../assets/apple.png"
import WoodSide from "../assets/woodside_logo.png"

const Home = () => {
  return (
    <div className="relative w-screen h-full bg-colorBlack flex flex-col px-[30px]">
      <GiDiamonds className="absolute z-10 top-[85px] right-[303px] text-colorTitle text-2xl" />
      <GiDiamonds className="absolute z-10 top-[185px] left-[298px] text-colorTitle text-2xl" />
      <GiDiamonds className="absolute z-10 top-[630px] left-[30px] text-colorTitle text-2xl" />

      {/* Header */}
      <div className="w-full flex flex-row border-b-[1px] border-colorText/80 items-center">
        <div className="w-[100%] flex flex-row justify-between items-center border-r-[1px] border-colorText/80 pr-[70px] py-[30px]">
          <p className="text-colorTitle text-3xl -tracking-wide">WOODSIDE</p>
          <div className="flex flex-row gap-8 text-colorText/70 text-sm">
            <p>About us</p>
            <p>Lifestyle</p>
            <p>Boutiques & Staff</p>
          </div>
        </div>
        <div className="w-[30%] flex items-center justify-center text-colorTitle px-[20px]">
          <p>CONSULT ONLINE NOW</p>
        </div>
      </div>

      {/* Home now */}
      <div className="flex flex-row items-start mx-auto my-[10px] gap-10">
        <p className="text-colorTitle text-[120px] font-extrabold">HOME</p>
        <div className="flex flex-col">
          <p className="text-sm text-colorText/70 text-left mt-10">
            Online platform for mordern <p>home renovtion</p>
            <div className="w-full h-[3px] bg-colorTitle mt-2"></div>
          </p>
        </div>
        <p className="text-colorTitle text-[120px] font-extrabold">NOW</p>
      </div>

      {/* join as pro */}
      <div className="flex flex-row my-[50px] justify-between mx-[50px] items-center">
        <div className="flex flex-col items-center gap-[180px]">
          <div className="flex flex-row bg-colorDarkGreen rounded-full gap-4 w-[140px] h-[100px] items-center justify-between -rotate-12">
            <GoPrimitiveDot />
            <p className="text-base font-semibold uppercase text-colorText ">
              Join as <p>a pro</p>
            </p>
            <GoPrimitiveDot />
          </div>
          <p className="text-left text-colorTitle text-sm">
            Home Design Ideas
            <p className="text-colorTitle/40 text-xs">
              Find interior design inspiration.
            </p>
          </p>
        </div>
        <div className="flex flex-col text-left ">
          <p className="text-6xl text-colorTitle capitalize ">start</p>
          <p className="text-6xl text-colorTitle capitalize ">Building</p>
          <p className="text-6xl text-colorTitle capitalize ">Your</p>
          <p className="text-6xl text-colorTitle capitalize ">Comfort</p>

          <p className="text-colorText/80 underline text-sm mt-[50px]">
            Get ideas
          </p>
        </div>
        <div className="flex flex-col text-left gap-5 -rotate-12">
          <div className="relative w-[150px] h-[150px] rounded-3xl bg-neutral-700">
            <img
              src={Women}
              className="absolute bottom-0 w-[150px] h-[170px] object-cover"
              alt=""
            />
          </div>
          <p className="text=left text-sm text-colorText">
            OUR <p>DESIGNERS</p>
          </p>
        </div>
      </div>

      {/* Bottom pic bar */}
      <div className="w-full flex flex-row mb-[50px] mt-[10px]">
        <img
          src={Sofa}
          className="h-[200px] w-[850px] rounded-full object-cover bg-no-repeat bg-bottom"
          alt=""
        />
        <div className="relative flex justify-center items-center w-[33%] h-[200px] rounded-full border-[1px] border-colorText/70">
          <img src={Apple} className="w-[130px]" alt="" />
          <img src={WoodSide} className="absolute w-[150px] -top-[72px] right-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
