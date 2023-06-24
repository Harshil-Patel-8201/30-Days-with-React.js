import React from "react";
import Logo from "../assets/logo.png";
import BrownChair from "../assets/img1.png";
import WhiteSofa from "../assets/white sofs.avif";
import Chair from "../assets/chair.png";
import OrangeSofa from "../assets/orange sofa.png";
import { BsArrowRightCircle, BsArrowUpRight, BsPlusLg } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorBackground flex flex-col">
      {/* Header */}
      <div className="w-full flex flex-row justify-between py-[30px] items-center px-[80px]">
        <img src={Logo} className="w-[140px]" alt="" />
        <div className="flex flex-row items-center gap-8 text-sm text-colorBlack/70 capitalize font-semibold tracking-wider">
          <p>Project</p>
          <p>pricing</p>
          <p>blog</p>
          <p>about</p>
        </div>
        <p className="text-white bg-colorBlack px-10 py-3 rounded-full text-sm tracking-wider">
          Consultation
        </p>
      </div>

      {/* first row */}
      <div className="w-full flex flex-row mt-16 px-[80px]">
        <div className="flex flex-col text-left text-7xl font-customText text-colorBlack">
          <p>Brighten every</p>
          <p>nook and corner</p>
          <p>of your home</p>
        </div>
        <img src={BrownChair} className="w-[200px] ml-10" alt="" />
        <p className="text-6xl text-colorBlack font-customText ml-10">'23</p>
        <div className="flex flex-col text-left ml-auto">
          <p className="text-colorBlack/80 text-sm w-[170px] text-left tracking-wider">
            Interior aesthetics shapes the human condition
          </p>
          <p className="text-colorBlack text-sm font-bold underline underline-offset-4 mt-5">
            Our Vision
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="w-full flex flex-row items-center justify-center mt-8 mb-[120px] px-[80px]">
        <div className="flex flex-row w-full">
          <img
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="w-24 h-24 rounded-full object-cover z-20"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
            className="w-24 h-24 rounded-full object-cover -ml-10 z-10"
            alt=""
          />
          <div className="w-24 h-24 rounded-full bg-colorOrnage -ml-10"></div>
        </div>
        <div className="relative flex justify-center items-center w-full">
          <img
            src={WhiteSofa}
            className="w-[120px] h-[150px] object-cover -rotate-12"
            alt=""
          />
          <div className="p-1 rounded-full bg-white border-[1px] border-colorBorder flex flex-row items-center absolute shadow-xl">
            <p className="text-colorBlack text-sm font-medium mr-[100px] ml-8 tracking-wider">
              Book free consultation
            </p>
            <div className="bg-colorOrnage h-14 w-14 rounded-full flex justify-center items-center">
              <BsPlusLg className="text-xl text-white" />
            </div>
          </div>
        </div>
        <div className="relative w-[1000px]">
          <img src={Chair} className="ml-28" alt="" />
          <div className="absolute top-5 left-[160px] w-12 h-12 bg-colorOlive rounded-full flex justify-center items-center">
            <BsArrowUpRight className="text-white" />
          </div>
        </div>
      </div>

      {/* Third row */}
      <div className="h-[250px] w-full bg-colorGreen flex flex-row items-center justify-between">
        {/* First row */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          <p className="w-[250px] text-6xl font-customText text-white text-left">
            480 +
          </p>
          <p className="w-[250px] text-xl uppercase text-white text-left mt-5 bg-colorOrnage p-2">
            BEST INTERIOR DESIGNS CREATED
          </p>
        </div>

        {/* second row */}
        <div className="w-full h-full border-x-[1px] border-white/20 flex flex-col items-center justify-center">
          <div className="w-full h-full relative flex justify-center items-center -mt-[170px]">
            <img
              src={OrangeSofa}
              className="w-[130px] absolute z-20 shadow-2xl"
              alt=""
            />
            <div className="w-[110px] h-[130px] bg-slate-200 rotate-12 ml-16 mb-14"></div>
          </div>
          <div className="flex flex-row gap-5 items-center -mb-5">
            <p className="text-white text-xl tracking-wider">Projects</p>
            <BsArrowRightCircle className="text-3xl text-white" />
          </div>
        </div>

        {/* third row */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-row w-[250px]">
            <div className="w-12 h-12 rounded-full bg-colorOrnage"></div>
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-12 h-12 rounded-full object-cover z-20 -ml-4"
              alt=""
            />
          </div>
          <p className="w-[270px] text-sm text-white tracking-wider font-medium mt-5 text-left">
            It's our way of life. Stelion's designers create entirely new
            individual interiors and objects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
