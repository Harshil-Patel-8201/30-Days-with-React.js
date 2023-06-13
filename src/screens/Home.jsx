import React from "react";
import Logo from "../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
import Locker from "../assets/locker.png";
import Triangle from "../assets/triangle.png";
import Coin from "../assets/coin.png";
import Ball from "../assets/ball.png";
import Bag from "../assets/bag.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="h-full w-screen bg-white flex flex-col px-[80px]">
      {/* Header */}
      <div className="w-full flex flex-row justify-between items-center py-[20px] ">
        {/* Logo */}
        <div className="flex flex-row gap-10 items-center">
          <img src={Logo} className="w-[100px]" alt="" />
          <div className="flex flex-row items-center gap-8 text-sm text-colorGray font-medium">
            <p>Browse</p>
            <p>3D Assets</p>
            <p>All-Access Pass</p>
            <p className="flex flex-row items-center gap-2">
              Freebies{" "}
              <p className="text-xs text-white bg-colorGreen px-[8px] py-[2px] rounded-full">
                new
              </p>
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex flex-row gap-5 items-center text-xl text-colorGray">
          <FiSearch />
          <MdFavoriteBorder />
          <SlHandbag />
          <div className="relative">
            <div className="absolute top-0 right-0 h-[14px] w-[14px] rounded-full bg-colorOrange border-[3px] border-white"></div>
            <img
              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="h-[35px] w-[35px] rounded-full object-cover object-top"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Locker Row */}
      <div className="w-full flex flex-row justify-between items-center">
        {/* Locker */}
        <div className="w-[350px] relative">
          <div className="w-full h-[480px] rounded-2xl bg-gradient-to-b from-colorGredientStart to-colorGredientEnd flex justify-center items-center my-[40px]">
            <img src={Locker} className=" w-[200px]" alt="" />
            <img
              src={Triangle}
              className="absolute w-[60px] top-[70px] left-[60px]"
              alt=""
            />
            <img
              src={Ball}
              className="absolute w-[40px] top-[120px] -right-[20px]"
              alt=""
            />
            <img
              src={Coin}
              className="absolute w-[60px] bottom-[70px] left-[80px]"
              alt=""
            />
            <div className="absolute bottom-8 flex flex-row px-[40px] items-center bg-white rounded-lg shadow-lg w-[120px] h-[25px] justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-colorOrange/20"></div>
              <div className="h-2 w-2 rounded-full bg-colorOrange"></div>
              <div className="h-2 w-2 rounded-full bg-colorOrange/20"></div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="w-[50%] flex flex-col gap-[50px]  text-left">
          <p className="text-6xl text-colorBlack font-medium">
            Access 6.9M+ Vector Icons & Illustrations
          </p>
          <p className="w-[470px] text-sm text-colorGray font-medium">
            Download free icons and stickers for your projects. Resources made
            by and for pro designers.
          </p>
          <div className="w-full flex flex-row gap-10 items-center">
            <p className="text-sm text-white bg-colorOrange px-[50px] py-[15px] rounded-full font-medium">
              Join now
            </p>
            <p className="text-sm text-colorBlack bg-gradient-to-b from-slate-200/60 to-colorWhiteBackground  px-[50px] py-[15px] rounded-full font-medium">
              Discover
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full h-[200px] border-[2px] border-colorBorder rounded-2xl flex flex-row mt-[10px] mb-[30px]">
        {/* Arrow column */}
        <div className="w-[110px] flex flex-col border-r-[2px] border-colorBorder">
          <div className="relative w-full h-full border-b-[2px] border-colorBorder flex items-center justify-center">
            <IoIosArrowForward className="text-xl text-colorGray" />
            <p className="absolute top-2 left-2 text-sm text-colorGray font-medium">
              01
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <IoIosArrowBack className="text-xl text-colorGray" />
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center px-[18px]">
          {/* Text */}
          <div className="flex flex-col text-left gap-8 px-[30px]">
            <p className="text-xl text-colorBlack font-semibold">
              Simple and flexible integration
            </p>

            <p className="text-left text-sm text-colorGray font-medium">
              Integrate with us and price your product independently.
              <p>
                Filter results by license, style or category. Formats: SVG,
                <p> PNG and many more.</p>
              </p>
            </p>
          </div>

          {/* Image */}
          <img src={Bag} className="w-[330px] rounded-xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
