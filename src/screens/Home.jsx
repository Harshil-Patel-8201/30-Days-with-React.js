import React from "react";
import Car from "../assets/car.png";
import Apple from "../assets/apple.png";
import { BsMouse } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from 'react-icons/go'
import {FiSearch} from "react-icons/fi"

const Home = () => {
  return (
    <div className="relative w-screen h-[900px] flex flex-row">
      {/* Background color */}
      <div className="w-full h-full bg-bgBlack"></div>
      <div className="w-[2000px] h-full bg-gradient-to-r from-bgGrayDark via-bgGrayLight to-bgGrayDark"></div>
      <div className="w-full h-full bg-bgBlack"></div>

      {/* hover objects */}
      <div className="absolute flex flex-col">
        {/* Header */}
        <div className="w-screen flex flex-row justify-between px-[100px] py-[20px] items-center">
          {/* Logo */}
          <div className="flex flex-row gap-3">
            <p className="text-4xl font-titleText text-bgLightGreen">r</p>
            <p className="text-4xl font-titleText text-white">e</p>
            <p className="text-4xl font-titleText text-bgLightGreen">n</p>
            <p className="text-4xl font-titleText text-white">t</p>
          </div>

          <div className="flex flex-row gap-12">
            <p className="text-base text-white font-semibold">Home</p>
            <p className="text-base text-gray-400 font-semibold">Cars</p>
            <p className="text-base text-gray-400 font-semibold">
              Our Services
            </p>
          </div>

          <p className="text-black px-7 py-2 bg-white shadow-2xl shadow-gray-100/30 rounded-lg font-semibold">
            Contact Us
          </p>

          <div className="absolute flex flex-col top-[170px] left-[100px] gap-20">
            <div className="flex flex-col text-left">
              <p className="text-5xl font-titleText text-white">100+</p>
              <p className="text-smallText text-base font-semibold">
                Types of machines
              </p>
            </div>
            <div className="flex flex-col text-left">
              <p className="text-5xl font-titleText text-white">20k+</p>
              <p className="text-smallText text-base font-semibold">
                Clients served
              </p>
            </div>
          </div>
          <p className="absolute w-[500px] mx-auto left-0 right-0 top-[150px] text-6xl font-titleText text-white">
            Rent the best cars
          </p>
          <p className="absolute w-[230px] top-[220px] ml-auto right-24 text-smallText text-base font-semibold text-justify">
            We want you to have a stress-free rental experience, so we make it
            easy to hire a car - by providing simple search tools, customer
            reviews and plenty of pick-up locations across the city.
          </p>
          <img
            src={Car}
            className="absolute top-0 bottom-0 right-0 left-0 mx-auto w-[800px] mt-[180px]"
            alt=""
          />
        </div>
        <div className="absolute w-screen top-[530px] px-[100px] flex flex-row justify-between items-center">
          <img src={Apple} className="w-[250px] -ml-10" alt="" />
          <p className="h-[40px] text-bgGrayDark px-7 py-2 bg-bgLightGreen shadow-2xl shadow-bgLightGreen rounded-lg font-semibold -ml-28">
            Open Catalog
          </p>
          <BsMouse className="text-white text-4xl" />
        </div>

        {/* Bottom Bar */}
        <div className="w-full h-[250px] rounded-t-[100px] bg-blurGray mt-[650px] flex justify-center items-center">
          <div className="w-full h-[130px] rounded-3xl bg-blurLightGrar mx-24 flex flex-row items-center justify-between px-[50px]">
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-3">
                <GoLocation className="text-white text-2xl" />
                <p className="text-white text-lg font-semibold">
                  Choose a location
                </p>
                <MdKeyboardArrowDown className="text-white text-2xl" />
              </div>
              <p className="text-smallText text-sm font-semibold">
                London, Great Britain
              </p>
            </div>
            <div className="w-[1px] h-[60px] bg-white"></div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-3">
                <GoLocation className="text-white text-2xl" />
                <p className="text-white text-lg font-semibold">Pick-up date</p>
                <MdKeyboardArrowDown className="text-white text-2xl" />
              </div>
              <p className="text-smallText text-sm font-semibold">
                Dec 08, 10:00 PM
              </p>
            </div>
            <div className="w-[1px] h-[60px] bg-white"></div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-3">
                <GoLocation className="text-white text-2xl" />
                <p className="text-white text-lg font-semibold">Return date</p>
                <MdKeyboardArrowDown className="text-white text-2xl" />
              </div>
              <p className="text-smallText text-sm font-semibold">
                Dec 08, 10:00 PM
              </p>
            </div>
            <div className="px-10 py-6 bg-bgLightGreen shadow-2xl shadow-bgLightGreen rounded-lg flex flex-row justify-center items-center gap-3 ml-24">
              <FiSearch className="text-2xl text-bgGrayDark" />
              <p className="text-bgGrayDark text-base font-semibold">Search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
