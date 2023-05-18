import React from "react";
import Logo from "../assets/logo.png"
import ManPhoto from "../assets/man.png"
import { FiArrowUpRight } from "react-icons/fi"
import Jacket from '../assets/white_jacket.png'
import Shoes from "../assets/shoes.png"
import Cap from '../assets/cap.png'

const Home = () => {
  return (
    <div className="w-screen h-[820px] bg-white px-[100px] py-[10px] flex flex-col">
      {/* Header */}
      <div className="flex flex-row justify-between items-center">
        <div className="h-[60px] w-[100px] bg-colorBlack flex justify-center items-center rounded-xl">
          <img src={Logo} className="w-[40px]" alt="" />
        </div>
        <div className="flex flex-row gap-10">
          <p className="text-sm text-black">Home</p>
          <p className="text-sm text-black/40 font-thin">Trends</p>
          <p className="text-sm text-black/40 font-thin">Store</p>
          <p className="text-sm text-black/40 font-thin">Coopration</p>
        </div>
        <p className="text-white bg-colorBlack px-5 py-2 text-sm font-thin rounded-lg">
          Contact Us
        </p>
      </div>

      {/* man picture row */}
      <div className="relative w-full h-full">
        <div className="absolute right-5 top-5">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-transparent via-white to-gray-300/50 flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] rounded-full flex bg-gradient-to-r from-transparent to-white justify-center items-center"></div>
          </div>
        </div>

        {/* Title text */}
        <div className="absolute flex flex-col top-20 text-left gap-10">
          <p className="text-black text-7xl font-semibold w-[300px] text-left tracking-wider">
            Men's Autumn Collection
          </p>
          <p className="text-xs text-white bg-colorBlue rounded-lg px-7 py-3 mr-auto shadow-xl shadow-colorBlue/30">
            Open Catelog
          </p>
        </div>

        {/* Man Photo */}
        <div className="relative text-right">
          <img
            src={ManPhoto}
            className="w-[550px] absolute -top-[200px] -right-10"
            alt=""
          />
          <div className="absolute w-[230px] h-[150px] bg-black/70 rounded-2xl right-[200px] top-[270px] px-5 py-3 flex flex-col text-left justify-between">
            <p className="text-white text-lg font-normal">
              All Jackets are discounted
            </p>
            <div className="flex flex-row items-center gap-3 justify-between">
              <p className="text-6xl font-bold text-colorYello">35%</p>
              <div className="px-3 py-3 rounded-lg border border-white flex justify-center items-center">
                <FiArrowUpRight className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="absolute z-30 w-full h-[250px] rounded-3xl top-[470px] bg-gray-300/80 flex flex-row px-10 justify-between items-center">
          <div className="flex flex-col text-left justify-between">
            <p className="text-black tracking-wider font-semibold text-4xl">
              Popular
            </p>
            <p className="text-black tracking-wider font-semibold text-4xl">
              Products
            </p>
            <div className="w-full h-[1px] bg-colorBlack/70 my-5"></div>
            <p className="text-colorBlack/70 text-2xl">Autum-Winter 2022</p>
          </div>

          {/* jacket */}
          <div className="relative w-[230px] h-[180px] rounded-2xl bg-colorBlack flex justify-center items-center">
            <img src={Jacket} className="w-[120px]" alt="" />
            <div className="absolute flex flex-col justify-between h-[120px] mt-5 right-0">
              <p className="text-white text-[18px] font-medium -rotate-90">
                jackets
              </p>
              <div className="px-2 py-2 rounded-lg bg-white flex justify-center items-center mx-auto">
                <FiArrowUpRight className="text-2xl text-black" />
              </div>
            </div>
          </div>

          {/* shoes */}
          <div className="relative w-[230px] h-[180px] rounded-2xl bg-white flex justify-center items-center">
            <img src={Shoes} className="w-[120px]" alt="" />
            <div className="absolute flex flex-col justify-between h-[120px] mt-5 -right-2">
              <p className="text-black text-[18px] font-medium -rotate-90">
                sneakers
              </p>
              <div className="px-2 py-2 rounded-lg bg-colorBlack flex justify-center items-center mx-auto">
                <FiArrowUpRight className="text-2xl text-white" />
              </div>
            </div>
          </div>

          {/* cap */}
          <div className="relative w-[230px] h-[180px] rounded-2xl bg-colorBlue flex justify-center items-center">
            <img src={Cap} className="w-[120px]" alt="" />
            <div className="absolute flex flex-col justify-between h-[120px] mt-5 right-3">
              <p className="text-white text-[18px] font-medium -rotate-90">
                caps
              </p>
              <div className="px-2 py-2 rounded-lg bg-white flex justify-center items-center mx-auto">
                <FiArrowUpRight className="text-2xl text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
