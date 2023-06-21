import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { TfiPlus } from "react-icons/tfi";
import Logo from "../assets/logo.png";
import RedFan from "../assets/fan.png";
import Wave from "../assets/white wave.webp";
import RedStar from "../assets/red star.png";
import Model from "../assets/model.png";
import RedSign from "../assets/red sign.png";
import BlackSign from "../assets/black sign.png";
import EggPlate from "../assets/egg.png";

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorBackground flex flex-col px-[80px]">
      {/* header */}
      <div className="w-full flex flex-row justify-between py-8 items-center">
        <HiMenuAlt4 className="text-3xl text-colorBlack" />
        <img src={Logo} className="w-[150px] ml-20" alt="" />
        <p className="uppercase px-5 py-2 text-colorSubText border-[1px] border-colorSubText rounded-full text-sm font-medium">
          contact us
        </p>
      </div>

      {/* First row */}
      <div className="w-full flex flex-row mt-2 justify-between items-center">
        {/* Fan Section */}
        <div className="relative w-[300px] h-[320px] border-b-[1px] border-colorSubText/40">
          <div className="relative w-full h-full">
            <img
              src={Wave}
              className="ml-10 w-[170px] h-[300px] object-cover"
              alt=""
            />
            <div className="ml-10 w-[170px] h-[300px] absolute bg-gradient-to-b from-transparent via-colorBackground/80 to-colorBackground top-0"></div>
          </div>
          <img
            src={RedFan}
            className="absolute top-0 w-[150px] rotate-45"
            alt=""
          />
          <div className="absolute bottom-10 flex flex-col text-left">
            <p className="font-customText text-4xl text-colorRed flex flex-row items-center gap-3">
              120{" "}
              <span>
                <TfiPlus className="text-xl" />
              </span>
            </p>
            <p className="text-colorBlack font-medium mt-3">RESTAURANTS</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col ml-[200px]">
          <div className="w-full flex flex-row items-center text-xl text-[130px] text-colorBlack font-customText leading-[100px] font-medium">
            <p>M</p>
            <img src={RedStar} className="w-[120px]" alt="" />
            <p>TIONS</p>
          </div>
          <p className="ml-[120px] text-[130px] text-colorBlack font-customText leading-[110px]">
            JAPAN
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="w-full flex flex-row justify-between">
        {/* Text */}
        <div className="flex flex-col text-left">
          <p className="text-colorBlack font-customText uppercase text-2xl mt-[80px] mb-5">
            About
          </p>
          <p className="text-sm text-colorSubText/70 w-[200px]">
            Explore a different side of Japan. Meet the locals and discover
            traditions
          </p>
          <p className="flex flex-col justify-center items-center text-center p-30 bg-colorRed rounded-full text-white uppercase w-[100px] h-[100px] my-[80px] font-medium">
            buy <p>ticket</p>
          </p>
        </div>

        {/* Model Pic */}
        <div className="relative w-[500px] h-[500px">
          <div className="w-[350px] h-[550px] bg-gradient-to-b from-transparent via-red-300/60 to-red-600/60 -mt-10 mx-auto">
            <img
              src={Model}
              className="absolute bottom-0 w-full mx-auto -ml-12"
              alt=""
            />
            <img
              src={RedSign}
              className="absolute top-[100px] w-[80px] left-8"
              alt=""
            />
            <img
              src={BlackSign}
              className="absolute top-[250px] w-[80px] right-8"
              alt=""
            />
          </div>
        </div>

        {/* Egg Section */}
        <div className="w-[300px] h-[300px] bg-white mt-auto">
          <div className="flex flex-col gap-5 items-center -mt-28">
            <img src={EggPlate} className="w-[150px]" alt="" />
            <p className="w-[150px] text-colorBlack text-2xl font-customText uppercase font-medium tracking-tight -mt-3">
              The best resturent in japan
            </p>
            <p className="uppercase text-colorBlack underline underline-offset-4 decoration-colorRed mt-3">
              Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
