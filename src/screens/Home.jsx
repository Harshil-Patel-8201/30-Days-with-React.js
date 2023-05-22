import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineDownload,
  HiPlusSm,
} from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import { TbAdjustmentsFilled, TbLockOff } from "react-icons/tb";
import { BsBookmarkPlusFill } from "react-icons/bs";
import Dog from "../assets/dog.png";
import Cycle from "../assets/cycle.png";
import ninja from "../assets/ninja.png";

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorWhite px-[100px] flex flex-col">
      {/* Header */}
      <div className="w-full flex flex-row justify-between items-center py-[30px]">
        {/* Left Header */}
        <div className="flex flex-row items-center gap-5">
          <p className="text-colorBlack text-base font-extrabold bg-colorYello pl-2 pt-3  pr-1 rounded-md">
            MR
          </p>
          <p className="text-colorgray text-sm font-medium">Vectors</p>
          <p className="text-colorgray text-sm font-medium">Photos</p>
          <p className="text-colorgray text-sm font-medium">PSD</p>
          <p className="text-colorgray text-sm font-medium">Videos</p>
          <p className="text-colorBlack text-sm font-bold flex flex-row items-center">
            More{" "}
            <span>
              <MdOutlineArrowDropDown className="text-lg" />
            </span>
          </p>
        </div>

        {/* Right Header */}
        <div className="flex flex-row items-center gap-2">
          <p className="flex flex-row items-center gap-1 text-colorgray font-semibold text-sm px-3 py-2 rounded-lg border border-colorgray mr-5">
            <span>
              <HiPlusSm />
            </span>
            Submit
          </p>
          <img
            src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-Logo.jpg"
            className="w-8 h-8 rounded-full object-contain bg-white shadow-xl"
            alt=""
          />
          <img
            src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png"
            className="w-8 h-8 rounded-full object-contain bg-white shadow-xl"
            alt=""
          />
        </div>
      </div>

      {/* title text */}
      <p className="text-colorBlack text-3xl py-5">Popular Pro Stock Vectors</p>
      <p className="text-colorgray font-medium text-sm">
        High quality Vectors with worry-free licensing for
      </p>
      <p className="text-colorgray font-medium text-sm">
        personal and commercial use.
      </p>

      {/* Seacrh Bar */}
      <div className="w-[400px] bg-white rounded-lg flex flex-row mx-auto my-[20px] p-2 items-center shadow-lg shadow-black/5">
        <p className="flex flex-row items-center gap-1 text-colorBlack font-medium text-sm px-3 py-2 rounded-lg border border-colorgray mr-5">
          Vectors
          <span>
            <MdKeyboardArrowDown className="text-lg" />
          </span>
        </p>
        <div className="w-full flex flex-row justify-between items-center mr-3">
          <p className="text-xs text-colorgray">Search Vectors...</p>
          <FiSearch />
        </div>
      </div>

      {/* Filters */}
      <div className="w-full flex flex-row justify-between">
        {/* Text */}
        <div className="flex flex-row gap-5 items-center font-medium text-[15px] text-colorBlack">
          <p className="flex flex-row gap-5">
            Latest
            <span className="text-colorRed -ml-5">
              <GoPrimitiveDot />
            </span>
          </p>
          <p>Popular</p>
          <div className="h-4 w-[2px] bg-colorgray rounded-full"></div>
          <p className="text-colorRed">Premium</p>
          <p className="text-colorBlue">Free</p>
        </div>

        {/* icon */}
        <div className="text-colorBlack text-lg gap-3 flex flex-row items-center">
          <TbAdjustmentsFilled className="rotate-90" />
          <BsBookmarkPlusFill />
        </div>
      </div>

      {/* Stickers */}
      <div className="flex flex-row justify-center gap-8 py-[20px]">
        {/*  Dog */}
        <div className="w-[300px] h-[340px] flex flex-col p-4 bg-white rounded-xl shadow-md">
          {/* Img */}
          <div className="relative w-full h-[200px] bg-colorWhite rounded-lg flex justify-center items-center">
            <img
              src={Dog}
              className="w-[150px] h-[150px] object-contain"
              alt=""
            />
            <p className="absolute top-3 right-3 flex flex-row text-[11px] items-center gap-2 text-colorgray font-extrabold">
              <span>
                <TbLockOff className="text-base" />
              </span>
              Premium
            </p>
          </div>

          <p className="text-colorgray/90 text-lg mt-[10px]">
            <span className="text-4xl text-colorBlack">D</span>og illustration
          </p>
          <p className="text-xl font-extrabold text-colorBlack flex flex-row gap-3 mx-auto items-center underline py-[12px]">
            Download
            <span>
              <HiOutlineDownload className="text-2xl" />
            </span>
          </p>
        </div>

        {/*  Astronaut */}
        <div className="w-[300px] h-[340px] flex flex-col p-4 bg-white rounded-xl shadow-2xl">
          {/* Img */}
          <div className="relative w-full h-[200px] bg-colorWhite rounded-lg flex justify-center items-center">
            <img
              src={Cycle}
              className="w-[150px] h-[150px] object-contain"
              alt=""
            />
            <p className="absolute top-3 right-3 flex flex-row text-[11px] items-center gap-2 text-colorgray font-extrabold">
              <span>
                <TbLockOff className="text-base" />
              </span>
              Premium
            </p>
          </div>

          <p className="text-colorgray/90 text-lg mt-[10px]">
            <span className="text-4xl text-colorBlack">A</span>stronaut riding
          </p>
          <p className="text-xl font-extrabold text-colorBlack flex flex-row gap-3 mx-auto items-center underline py-[12px]">
            Download
            <span>
              <HiOutlineDownload className="text-2xl" />
            </span>
          </p>
        </div>

        {/*  Ninja */}
        <div className="w-[300px] h-[340px] flex flex-col p-4 bg-white rounded-xl shadow-md">
          {/* Img */}
          <div className="relative w-full h-[200px] bg-colorWhite rounded-lg flex justify-center items-center">
            <img
              src={ninja}
              className="w-[150px] h-[150px] object-contain"
              alt=""
            />
            <p className="absolute top-3 right-3 flex flex-row text-[11px] items-center gap-2 text-colorgray font-extrabold">
              <span>
                <TbLockOff className="text-base" />
              </span>
              Premium
            </p>
          </div>

          <p className="text-colorgray/90 text-lg mt-[10px]">
            <span className="text-4xl text-colorBlack">R</span>ockstar guitarist
          </p>
          <p className="text-xl font-extrabold text-colorBlack flex flex-row gap-3 mx-auto items-center underline py-[12px]">
            Download
            <span>
              <HiOutlineDownload className="text-2xl" />
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full flex flex-row justify-between py-[30px]">
        {/* Left side */}
        <div className="flex flex-row gap-3 items-center">
          <p className="flex flex-col text-colorBlack text-base underline font-medium">
            Discover All<p>Colletions</p>
          </p>
          <div className="flex flex-row">
            <img
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-10 h-10 object-cover rounded-md border-[2px] border-white"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-10 h-10 object-cover rounded-md border-[2px] border-white -ml-5"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1627672360124-4ed09583e14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbiUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-10 h-10 object-cover rounded-md border-[2px] border-white -ml-5"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-10 h-10 object-cover rounded-md border-[2px] border-white -ml-5"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnRvb24lMjBjaGFyYWN0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-10 h-10 object-cover rounded-md border-[2px] border-white -ml-5"
              alt=""
            />
          </div>
        </div>

        {/* Center Side */}
        <p className="flex flex-row gap-3 font-medium text-colorBlack text-base items-center bg-white px-5 py-2 rounded-md">
          Next page
          <span>
            <HiOutlineArrowNarrowRight className="text-xl" />
          </span>
        </p>

        {/* Right Side */}
        <div className="flex flex-row items-center">
          <p className="text-xs text-colorgray font-bold">Page</p>
          <div className="flex flex-row gap-1 mx-4">
            <MdKeyboardArrowLeft className="h-6 w-6 rounded-md bg-white/80 text-colorgray" />
            <p className="h-6 w-6 rounded-md bg-white border-[1px] border-colorgray/70 text-colorBlack">
              1
            </p>
            <MdKeyboardArrowRight className="h-6 w-6 rounded-md bg-white/80 text-colorBlack" />
          </div>
          <p className="text-xs text-colorgray font-bold">of 120</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
