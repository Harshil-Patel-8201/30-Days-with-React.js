import React from "react";
import Logo from "../assets/logo.png";
import SuitMan from "../assets/suit_man.png";
import Coat from "../assets/coat.png";
import ExploreMore from "../assets/more.png";
import { HiMenuAlt4 } from "react-icons/hi";
import {CgArrowLongDown} from 'react-icons/cg'

const Home = () => {
  return (
    <div className="flex flex-col w-screen h-auto bg-bgBrown px-[70px] py-[20px]">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <img src={Logo} className="w-[80px]" alt="" />
        <div className="flex flex-row gap-10 items-center">
          <p className="text-sm font-light text-white">Home</p>
          <p className="text-sm font-light text-white">About Us</p>
          <p className="text-sm font-light text-white">Services</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <p className="text-black bg-yelloWhite px-5 py-3 text-sm rounded-full font-semibold">
            Contact Us
          </p>
          <HiMenuAlt4 className="text-yelloWhite text-3xl" />
        </div>
      </div>

      {/* Heading Text */}
      <div className="flex flex-col relative text-left mt-20">
        <p className="font-titleText text-7xl text-white">Individual Men's</p>
        <p className="font-titleText text-7xl text-white">Tailoring</p>
        <p className="w-[300px] text-sm text-white my-10 tracking-wider">
          High-quality tailoring of men's clothing in a short time
        </p>
        <div className="flex flex-row gap-20 bg-bgLable px-2 py-2 items-center rounded-lg mr-auto">
          <p className="text-white">(020) xxxx xxxx</p>
          <p className="text-black text-xs px-4 py-3 bg-yelloWhite rounded-lg font-bold">
            Call Me
          </p>
        </div>

        <div className="relative w-[320px] h-[200px] bg-yelloWhite rounded-2xl mt-[130px] mb-10 flex flex-row justify-between">
          <img
            src={SuitMan}
            className="absolute w-[200px] object-cover bottom-0"
            alt=""
          />
          <div className="mt-5 h-[160px] absolute flex flex-col justify-between right-0">
            <p className="w-[100px] text-sm font-medium text-black tracking-wide">
              Suit for wedding events
            </p>
            <p className="text-black text-sm font-medium underline">
              Explore More
            </p>
          </div>
        </div>

        {/* Coat Instruction */}
        <div className="absolute right-0 top-[140px]">
          <div className="w-[550px] h-[350px] bg-bgRed rounded-3xl relative">
            <img
              src={Coat}
              className="absolute bottom-0 right-0 h-[550px]"
              alt=""
            />
            <div className="h-[320px] flex flex-col justify-between">
              <div className="flex flex-col my-7 mx-9">
                <p className="text-white text-xl font-semibold">2005</p>
                <p className="text-white text-xl font-semibold">London,</p>
                <p className="text-white text-xl font-semibold">
                  Great Britain
                </p>
              </div>
              <img src={ExploreMore} className="w-[120px] ml-7" alt="" />
            </div>
          </div>
          <div className="flex flex-row my-10 justify-between items-center">
            <div className="w-[430px] flex flex-col gap-5">
              <p className="text-white font-bold text-2xl">
                We create clothes for:
              </p>
              <p className="text-white ">
                Bright, strong personalities, for real women, for the best
                representatives of their generation. We create clothes that will
                make vou feel perfect.
              </p>
            </div>
            <div className="h-[80px] w-[50px] border border-white rounded-full flex justify-center items-center">
              <CgArrowLongDown className="text-7xl text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
