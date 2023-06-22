import React from "react";
import Logo from "../assets/logo.png";
import { ImPlay3 } from "react-icons/im";
import Model from "../assets/model.avif";
import Bin from "../assets/bin.png";
import Box from "../assets/cream box.png";
import { AiFillStar } from "react-icons/ai";

const Home = () => {
  return (
    <div className="w-screen h-full bg-gradient-to-r from-colorGradient1 via-colorGradient2 to-colorGradient1 flex flex-col px-[70px]">
      {/* Header */}
      <div className="w-full flex flex-row items-center justify-between py-[30px]">
        <div className="flex flex-row gap-8 items-center text-sm uppercase text-white font-medium">
          <p>products</p>
          <p>about</p>
        </div>
        <img src={Logo} className="w-[150px]" alt="" />
        <div className="flex flex-row gap-8 items-center text-sm uppercase text-white font-medium">
          <p>ROUTINES</p>
          <p>JOURNAL</p>
        </div>
      </div>

      {/* Main Part */}
      <div className="relative w-full flex flex-row justify-between mt-16 mb-10">
        {/* Left Part */}
        <div className="w-full flex flex-col">
          <div className="relative w-[170px] h-[110px] flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGJhbmFuYSUyMGxlYWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <ImPlay3 className="text-black ml-1" />
            </div>
          </div>
          <div className="flex flex-col text-left text-white text-8xl tracking-tighter font-customText my-20">
            <p>Gene</p>
            <p>skincare</p>
            <p>treatment</p>
            <p className="text-sm underline underline-offset-4 font-sans tracking-normal font-semibold mt-10">
              LEARN MORE
            </p>
          </div>
          <div className="flex flex-col mt-10">
            <p className="text-xs text-white px-8 py-3 border-[1px] border-white rounded-full mr-auto my-1">
              🫐 Clinically-proven
            </p>
            <div className="flex flex-row">
              <p className="text-xs text-white px-8 py-3 border-[1px] border-white rounded-full mr-2 my-1">
                🥒 Vegan formulas
              </p>
              <p className="text-xs text-black px-8 py-3 bg-white rounded-full mr-auto my-1">
                🧬 DNA-based
              </p>
            </div>
            <p className="text-xs text-white px-8 py-3 border-[1px] border-white rounded-full mr-auto my-1">
              🌿 Personal skincare programs
            </p>
          </div>
        </div>

        {/* middel Part */}
        <div className="relative w-[850px] h-[530px] rounded-full flex flex-col ring ring-white/90 ring-offset-[10px] ring-offset-colorGradient2 justify-center items-center">
          <img
            src={Model}
            className="w-[850px] h-[530px] rounded-full object-cover"
            alt=""
          />
          <div className="absolute bottom-0 h-[110px] w-[110px] rounded-full bg-colorDark -mb-14 flex justify-center items-center z-50">
            <p className="uppercase text-white font-bold -rotate-12">
              shop <p> now</p>
            </p>
          </div>
        </div>

        {/* last Part */}
        <div className="w-full flex flex-col items-center">
          <img src={Bin} className="w-[150px] ml-auto mr-[100px] mb-5" alt="" />
          <p className="text-white text-sm w-[170px] ml-16">
            Gene-personalized skincare that combines science and beauty
          </p>
          <div className="w-[250px] h-[370px] bg-white/80 mt-[100px] rounded-full flex flex-col justify-center items-center gap-[30px] ml-20">
            <p className="text-sm text-black font-medium">OUR ESSENTIALS</p>
            <img src={Box} className="w-[150px]" alt="" />
            <p className="text-black text-2xl font-extrabold tracking-tighter w-[150px]">
              SKIN RESET FACE SERUM
            </p>
            <AiFillStar className="text-xs text-black" />
          </div>
          <p className="text-right text-7xl font-customText text-white mt-10 mr-10">
            Innovative formulatinns
          </p>
        </div>

        {/* Boxes */}
        <div className="absolute top-[535px] left-[300px] rounded-2xl w-[270px] h-[200px] border-b-[1px] border-r-[1px] border-white/90"></div>
      </div>
    </div>
  );
};

export default Home;
