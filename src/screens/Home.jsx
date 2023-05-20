import React from "react";
import BgPic from "../assets/mountain.jpg";
import Logo from "../assets/logo.png";
import { BsMoonStarsFill } from "react-icons/bs";
import Man from "../assets/man.jpg"
import Beach from "../assets/beach.jpg"
import Tree from "../assets/tree.jpg"

const Home = () => {
  return (
    <div className="relative w-screen h-auto">
      {/*Background*/}
      <img src={BgPic} className="w-scrren h-full object-contain" alt="" />
      <div className="absolute w-full h-full z-20 flex flex-row top-0">
        <div className="w-full h-full bg-white/90"></div>
        <div className="w-[500px] h-full bg-gradient-to-b from-emerald-200/80 via-orange-300/40 to-transparent"></div>
        <div className="w-full h-full bg-white/90"></div>
      </div>

      <div className="absolute w-full h-full z-30 top-0 px-[80px]">
        {/*header*/}
        <div className="flex flex-row justify-between w-full py-[30px] items-center">
          <div className="flex flex-row gap-8 text-xs font-semibold text-black/80 items-center">
            <p>School</p>
            <p>About Us</p>
            <p>Our Camp</p>
          </div>
          <img src={Logo} className="w-[60px]" alt="" />
          <div className="flex flex-row gap-8 text-xs font-semibold text-colorBlack items-center">
            <p>Activities</p>
            <p>Contact Us</p>
            <div className="flex flex-row gap-2 rounded-full px-[2px] py-[2px] items-center border-2 border-black">
              <BsMoonStarsFill className="text-sm ml-1" />
              <div className="h-4 w-4 rounded-full bg-orange-600"></div>
            </div>
          </div>
        </div>
        <p className="absolute text-[220px] font-styleText font-extrabold -rotate-12 ml-[140px] top-[150px] text-colorBlack">
          Adventure
        </p>

        {/*text*/}
        <div className="absolute top-[150px] w-[240px] text-left flex flex-col gap-5">
          <p className="text-xs uppercase font-bold text-colorBlack">
            WE CREATE TRAVELS THAT FEEL LIKE REAL ADVENTURES - IN MOST EXCITING
            EARTH'S CORNERS
          </p>
          <p className="text-gray-500 text-xs font-semibold">Explore</p>
        </div>
        <p className="text-xs text-gray-400 absolute right-[300px] mt-[50px] font-semibold">
          © EST.1961
        </p>
        <div className="flex flex-row items-center absolute right-[100px] top-[400px]">
          <img
            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="h-20 w-20 rounded-full flex items-center justify-center object-cover border-[3px] border-white"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="h-20 w-20 rounded-full flex items-center justify-center object-cover border-[3px] border-white -ml-4"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            className="h-20 w-20 rounded-full flex items-center justify-center object-cover border-[3px] border-white -ml-4"
            alt=""
          />
        </div>
        <div className="absolute top-[600px] flex flex-row w-full justify-between items-start z-50 pr-[150px] ">
          <div className="w-[200px] flex flex-col gap-5 text-left">
            <p className="text-gray-400 text-sm">OUR MISSION</p>
            <p className="text-colorBlack text-lg font-bold">Travel experience with a positive impact</p>
            <p className="text-xs text-white bg-black px-5 py-2 rounded-full mr-auto">How to start</p>
          </div>
          <img src={Man} className="w-[200px] h-[200px] object-cover" alt="" />
          <img src={Beach} className="w-[200px] h-[200px] object-cover" alt="" />
          <img src={Tree} className="w-[200px] h-[200px] object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
