import React from "react";
import Brand from "../assets/brand.png";
import Cheif from "../assets/cheif.png";
import Bread from "../assets/bread.jpg";

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorBackground flex flex-col px-[50px]">
      {/* Header */}
      <div className="w-full flex flex-row items-center justify-between py-[20px] border-b-[1px] border-colorBorder">
        <p className="text-colorBigText text-3xl font-customText font-semibold">
          UCHEF
        </p>
        <div className="flex flex-row gap-8 items-center text-sm capitalize text-colorSmallText ml-44">
          <p>cooking blog</p>
          <p>our new courses</p>
          <p>workshops</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="object-top w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <p className="text-sm text-colorSmallText">Hi, Alex</p>
          <div className="w-[1px] h-8 bg-colorBorder"></div>
          <p className="text-base font-bold text-white bg-colorGreen px-5 py-2 rounded-3xl uppercase">
            get trial
          </p>
        </div>
      </div>

      {/* Main Text */}
      <div className="w-full flex flex-row justify-between items-start">
        <p className="text-[140px] font-customText text-colorBigText uppercase">
          bake
        </p>
        <div className="w-[300px] flex flex-col mt-16">
          <p className="text-sm text-colorSmallText text-left">
            We'll teach you how cook tastier,
            <p>faster and with love</p>
          </p>
          <div className="w-full h-1 bg-colorBigText mt-5"></div>
        </div>
        <p className="text-[140px] font-customText text-colorBigText uppercase">
          cake
        </p>
      </div>

      {/* Second Row */}
      <div className="flex flex-row justify-between my-10">
        {/* Images */}
        <div className="w-full flex flex-col">
          <div className="flex flex-row w-full">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-20 h-20 rounded-full border-4 border-white object-cover object-top"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-20 h-20 rounded-full border-4 border-white object-cover -ml-5"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxwZXJzb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-20 h-20 rounded-full border-4 border-white object-cover -ml-5"
              alt=""
            />
            <div className="w-20 h-20 rounded-full border-4 border-white bg-coloLightGray flex justify-center items-center -ml-5">
              <p className="text-3xl text-colorSmallText font-bold">7k</p>
            </div>
          </div>
          <p className="text-sm text-colorSmallText mr-auto mt-3 tracking-wider">
            + 773 New members every month
          </p>
        </div>

        {/* Text */}
        <div className="w-full ml-20">
          <p className="text-6xl text-colorBigText w-[350px] text-left">
            Perfect Baking In Your Hands
          </p>
        </div>

        {/* brand */}
        <div className="w-full">
          <img src={Brand} className="w-[190px] ml-auto mr-20" alt="" />
        </div>
      </div>

      {/* Third Row */}
      <div className="flex flex-row w-full h-[300px] gap-5 mb-7 mt-20">
        <div className="w-full h-full relative">
          <img
            src={Bread}
            className="w-full h-[300px] rounded-[140px] object-cover"
            alt=""
          />
          <div className="absolute -top-20 left-10 flex flex-col text-left">
            <p className="font-customText text-colorBigText text-2xl">$7.99</p>
            <p className="text-sm text-colorSmallText">per month</p>
          </div>
          <div className="absolute -top-20 left-[430px] w-[150px] h-[150px] rounded-[60px] bg-colorYello -rotate-12 flex justify-center items-center p-2">
            <p className="w-full h-full border-[1px] border-colorBigText text-colorBigText text-base p-4 pt-10 uppercase font-bold rounded-[60px] text-center">
              view courses
            </p>
          </div>
        </div>
        <div className="w-[40%] relative">
          <div className="w-full h-full bg-coloLightGray rounded-[130px] flex justify-center items-center">
            <img
              src={Cheif}
              className="absolute w-[250px] bottom-0 rounded-b-[80px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
