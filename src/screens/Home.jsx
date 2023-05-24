import React from "react";
import YelloSofa from "../assets/yello_sofa.jpg";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import ManChild from "../assets/man_child.jpg";
import Mobile from "../assets/phone.png";

const Home = () => {
  return (
    <div className="w-screen h-[800px] flex flex-row">
      {/* Black */}
      <div className="relative w-full h-full flex flex-col bg-black">
        {/* Header */}
        <div className="flex flex-row justify-between px-[30px] py-[30px] items-center">
          <div className="flex flex-row gap-14 items-center">
            <p className="flex flex-row text-white font-bold text-sm">
              INTERIOR<span className="text-colorYello">LABS</span>
            </p>
            <div className="flex flex-row gap-5 text-xs text-white/70">
              <p>Services</p>
              <p>Clients</p>
              <p>About us</p>
              <p>Portfolio</p>
              <p>Mobile app</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <div className="bg-white/70 p-[5px] flex justify-center items-center rounded-full text-xs">
              <BsInstagram />
            </div>
            <div className="bg-white/70 p-[5px] flex justify-center items-center rounded-full text-xs">
              <AiOutlineGoogle />
            </div>
            <div className="bg-white/70 p-[5px] flex justify-center items-center rounded-full text-xs">
              <FaFacebookF />
            </div>
          </div>
        </div>

        <div className="w-screen z-20 absolute top-[100px] left-[50px] flex flex-col text-white font-medium text-[90px] leading-[100px] text-left">
          <p className="text-colorYello">We create</p>
          <p className="ml-[180px]">more than</p>
          <p className="ml-[360px]">just interior</p>
        </div>

        {/* Let's talk */}
        <div className="absolute -left-[100px] top-[220px] flrx justify-center items-center border-[2px] border-white/70 rounded-full px-[150px] py-[200px]">
          <div className="flex flex-row items-center">
            <div className="w-8 h-8 rounded-full bg-colorYello"></div>
            <HiArrowLongRight className="text-4xl text-white -ml-3" />
            <p className="text-white text-sm ml-3">LET'S TALK</p>
          </div>
        </div>

        {/* Bottom Portfolio */}
        <div className="absolute bottom-0 z-10 w-full h-[300px] flex flex-row bg-white">
          {/* Man & Child */}
          <img src={ManChild} className="w-full h-full object-cover" alt="" />
          <div className="w-full h-full flex flex-row">
            {/* Text */}
            <div className="w-full flex flex-col">
              <div className="flex flex-row items-center gap-3 pt-[20px]">
                <div className="w-4 h-3 bg-colorYello"></div>
                <p className="text-colorBlack text-sm font-semibold">
                  PHILOSOPHY
                </p>
              </div>
              <p className="text-colorBlack/60 text-xs text-left px-[27px] pt-[15px]">
                We create a space where people can control every parameter they
                need. The relationship between form and function is at the heart
                of our philosophy.
              </p>
              <p className="text-colorBlack flex flex-row text-xs items-center gap-3 mt-[110px] px-[27px]">
                About us{" "}
                <span>
                  <HiArrowLongRight className="text-xl" />
                </span>
              </p>
            </div>

            {/* Mobile */}
            <div className="w-full">
              <img src={Mobile} className="w-full h-full object-cover" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Photo */}
      <div className="w-[630px] h-full flex flex-col">
        {/* Image */}
        <div className="relative">
          <img src={YelloSofa} className="w-full h-[600px]" alt="" />
          <div className="absolute flex flex-row gap-5 bottom-5 left-5 text-white text-4xl">
            <HiArrowLongLeft />
            <HiArrowLongRight />
          </div>
        </div>

        {/* Row Text */}
        <div className="w-full flex flex-row">
          <div className="w-full h-[200px] bg-white">
            <div className="flex flex-col px-[20px] text-colorBlack text-left py-[15px]">
              <p className="text-5xl font-numberText">16</p>
              <p className="text-sm font-normal text-colorBlack/70">
                parameters to regulate in our mobile app
              </p>
              <p className="flex flex-row text-sm items-center gap-3 mt-14">
                More about app{" "}
                <span>
                  <HiArrowLongRight className="text-xl" />
                </span>
              </p>
            </div>
          </div>
          <div className="w-full h-[200px] bg-colorYello">
            <div className="flex flex-col px-[20px] text-colorBlack text-left py-[15px]">
              <p className="text-5xl font-numberText">263</p>
              <p className="text-sm font-normal text-colorBlack/70">
                happy families
              </p>
              <p className="flex flex-row text-sm items-center gap-3 mt-[75px]">
                Our portfolio{" "}
                <span>
                  <HiArrowLongRight className="text-xl" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
