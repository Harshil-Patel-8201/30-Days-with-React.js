import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";
import { TbShieldCheck } from "react-icons/tb";
import Logo from "../assets/Logo.png";
import { HiArrowSmRight } from "react-icons/hi";

export const BottomDetails = () => {
  return (
    <div className="flex flex-col w-full h-auto bg-brandBg pt-[50px]">
      {/* options */}
      <div className="flex flex-row justify-between px-[150px]">
        <div className="flex flex-col items-center gap-5">
          <MdOutlineLocalShipping className="text-white text-3xl" />
          <p className="capitalize text-white text-xs">
            Free shiping & returns
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <AiOutlineDollarCircle className="text-white text-3xl" />
          <p className="capitalize text-white text-xs">
            Free shiping & returns
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <BsArrowRepeat className="text-white text-3xl" />
          <p className="capitalize text-white text-xs">
            Free shiping & returns
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <TbShieldCheck className="text-white text-3xl" />
          <p className="capitalize text-white text-xs">
            Free shiping & returns
          </p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-500 my-[70px]"></div>

      {/* contacts */}
      <div className="flex flex-row px-[150px] justify-between items-start mb-16">
        <img src={Logo} className="w-[150px] h-[50px]" alt="" />
        <div className="flex flex-col text-left gap-1">
          <p className="text-white text-sm font-semibold mb-5">
            Help & Informtaion
          </p>
          <p className="text-xs text-gray-400">Help</p>
          <p className="text-xs text-gray-400">Track order</p>
          <p className="text-xs text-gray-400">Delivery & return</p>
        </div>
        <div className="flex flex-col text-left gap-1">
          <p className="text-white text-sm font-semibold mb-5">About Etalon</p>
          <p className="text-xs text-gray-400">About us</p>
          <p className="text-xs text-gray-400">Career of Etalon</p>
          <p className="text-xs text-gray-400">Investor's site</p>
        </div>
        <div className="flex flex-col text-left gap-1">
          <p className="text-white text-sm font-semibold mb-5">
            More from Etalon
          </p>
          <p className="text-xs text-gray-400">Mobile and Etalon apps</p>
          <p className="text-xs text-gray-400">Gift vauchers</p>
          <p className="text-xs text-gray-400">Black Friday</p>
        </div>
      </div>

      {/* copyrights lable */}
      <div className="flex flex-row justify-between bg-black px-[150px] py-2">
        <p className="text-xs text-white/70">
          Copyrights © 2022 Etalon. All Right Reserved.
        </p>
        <div className="-mt-5 h-8 w-8 bg-lightYello rounded-full flex justify-center items-center">
          <HiArrowSmRight className="text-lg text-black -rotate-90" />
        </div>
        <p className="text-xs text-white/70">
          Privacy & Cookies | Ts&Cs | Accessibilty
        </p>
      </div>
    </div>
  );
};
