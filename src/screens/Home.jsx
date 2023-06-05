import React from "react";
import Logo from "../assets/logo.png";
import BigImage from "../assets/balls.png";
import Arrow from "../assets/arrow.png";
import ReactPic from "../assets/react.png";
import Balls from "../assets/balls_mini.png";
import Sops from "../assets/sops.png";

const Home = () => {
  return (
    <div className="w-scren h-full bg-white flex flex-col px-[100px] py-[20px]">
      {/* Header */}
      <div className="flex flex-row w-full justify-between items-center">
        <img src={Logo} className="w-[70px]" alt="" />
        <div className="flex flex-row gap-8 text-base text-colorSmallText/80 font-semibold">
          <p className="text-colorBlack">Home</p>
          <p>Key Features</p>
          <p>Pricing</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <p className="text-sm px-8 py-3 text-white bg-colorBlue rounded-md font-medium">
          Log in
        </p>
      </div>

      {/* Text - big image */}
      <div className="flex flex-row items-center justify-between py-[20px]">
        {/* Text */}
        <div className="w-full flex flex-col text-left items-center gap-5">
          <div className="w-full text-left flex flex-col text-7xl text-colorBlack font-bold">
            <p>Benefits of</p>
            <p>regular</p>
            <p>exercise</p>
          </div>
          <div className="w-full text-left flex flex-row items-center gap-3">
            <div className="w-[60px] h-[4px] bg-colorSmallText/40"></div>
            <p className="text-colorPink text-3xl">What we Do</p>
          </div>
          <p className="w-full text-left text-colorBlack text-sm">
            At our fitness studio, vou can experience the
            <p> best level of customer service.</p>
          </p>
          <p className="text-left text-base px-8 py-3 text-white bg-colorBlue rounded-md font-semibold mr-auto">
            Contact Us
          </p>
        </div>

        {/* image */}
        <img src={BigImage} className="w-[50%]" alt="" />
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-[230px] bg-colorGray rounded-3xl mb-[20px] flex flex-row justify-between px-[25px] py-[20px]">
        {/* option */}
        <div className="flex flex-col text-left w-[230px] px-[20px] h-full justify-between">
          <img src={Arrow} className="w-[80px]" alt="" />
          <p className="uppercase text-colorBlack font-bold">QUALITY SERVICE</p>
          <p className="flex flex-row text-colorSmallText items-center">
            At our fitness/{""}
            <p className="text-white bg-colorOrange rounded-full px-[8px] py-[1px]">
              studio
            </p>
          </p>
          <p className="text-base text-colorBlack font-bold px-[16px] py-[2px] rounded-full bg-white mr-auto mb-4">
            Pro
          </p>
        </div>

        {/* option */}
        <div className="flex flex-col text-left w-[230px] px-[20px] rounded-xl bg-white shadow-xl h-full justify-between">
          <img src={ReactPic} className="w-[80px]" alt="" />
          <p className="uppercase text-colorBlack font-bold">SPACIOUS GYM</p>
          <p className="flex flex-row text-colorSmallText items-center">
            At our fitness/{""}
            <p className="text-white bg-colorGreen rounded-full px-[8px] py-[1px]">
              studio
            </p>
          </p>
          <p className="text-base text-colorBlack font-bold px-[16px] py-[2px] rounded-full bg-colorGray mr-auto mb-4">
            Pro
          </p>
        </div>

        {/* option */}
        <div className="flex flex-col text-left w-[230px] px-[20px]  h-full justify-between">
          <img src={Balls} className="w-[80px]" alt="" />
          <p className="uppercase text-colorBlack font-bold">UNIQUE PROGRAMS</p>
          <p className="flex flex-row text-colorSmallText items-center">
            At our fitness/{""}
            <p className="text-white bg-colorGreen rounded-full px-[8px] py-[1px]">
              studio
            </p>
          </p>
          <p className="text-base text-colorBlack font-bold px-[16px] py-[2px] rounded-full bg-white mr-auto mb-4">
            Pro
          </p>
        </div>

        {/* option */}
        <div className="flex flex-col text-left w-[230px] px-[20px]  h-full justify-between">
          <img src={Sops} className="w-[80px]" alt="" />
          <p className="uppercase text-colorBlack font-bold">GROUP CLASSES</p>
          <p className="flex flex-row text-colorSmallText items-center">
            At our fitness/{""}
            <p className="text-white bg-colorGreen rounded-full px-[8px] py-[1px]">
              studio
            </p>
          </p>
          <p className="text-base text-colorBlack font-bold px-[16px] py-[2px] rounded-full bg-white mr-auto mb-4">
            Pro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
