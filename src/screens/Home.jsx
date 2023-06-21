import React from "react";
import blackLines from "../assets/black line.png";
import { FiArrowUpRight } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import Model from "../assets/model.png";
import Flower from "../assets/flowers.webp";

const Home = () => {
  return (
    <div className="w-screen h-[900px] flex flex-row relative">
      {/* Dark Part */}
      <div className="w-full h-full bg-colorDarkGray"></div>

      {/* Yello Part */}
      <div className="w-[45%] h-full bg-colorSceen flex flex-col items-center justify-center">
        <img src={blackLines} className="w-[250px] mt-[140px]" alt="" />
        <p className="ml-14 my-10 w-[170px] text-left text-black text-base font-medium">
          MODART OFFERS A DIVERSE RANGE OF ARTS THAT REFLECT THE CULTURAL AND
          SOCIAL ISSUES OF OUR TIMES.
        </p>
        <div className="flex flex-row items-center my-5 mb-[120px]">
          <p className="text-base text-black font-semibold underline">
            Exhibitions
          </p>
          <FiArrowUpRight className="text-xl" />
        </div>
        <div className="relative w-[300px] h-[200px] bg-colorWhiteShade">
          <img
            src={Model}
            className="absolute bottom-0 w-[250px] left-5"
            alt=""
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full h-full absolute flex flex-col px-[80px]">
        {/* Header */}
        <div className="w-full flex flex-row justify-between py-[40px] items-center">
          <p className="text-xl font-extrabold text-white">MODART</p>
          <div className="flex flex-row items-center gap-10 text-sm text-colorWhiteShade/60">
            <p className="text-white underline">Home</p>
            <p>About us</p>
            <p>Tickets</p>
          </div>
          <p className="text-white bg-black px-8 py-3 text-sm">Contact us</p>
        </div>

        {/* Main Design */}
        <div className="w-full relative">
          <p className="absolute top-7 left-[100px] text-colorSceen text-8xl font-customText font-extrabold tracking-wide text-left z-50">
            CONTEMPORARY <p> ART</p>
          </p>
        </div>

        {/* Flowers */}
        <div className="absolute top-[320px] left-[300px] flex flex-row gap-5">
          <img src={Flower} className="w-[300px] h-[380px] object-" alt="" />
          <div className="w-[300px] h-[380px] bg-colorYello flex flex-col justify-center items-center text-colorDarkGray">
            <p className="text-base font-medium">Yearly</p>
            <p className="text-xl font-semibold tracking-tight">
              Works exhibited
            </p>
            <p className="text-6xl font-medium my-[70px]">128k</p>
            <div className="flex flex-row text-sm text-colorDarkGray items-center">
              <RxDotFilled />
              <RxDotFilled className="text-3xl" />
              <RxDotFilled />
            </div>
          </div>
        </div>

        {/* Text */}
        <p className="relative uppercase text-colorDarkGray font-semibold bg-colorLightViolien px-8 py-3 mx-auto text-sm top-[148px] left-[50px]">
          since 2021
        </p>
      </div>

      {/* Text */}
      <p className="absolute top-[670px] left-[230px] flex flex-row uppercase text-colorSceen text-3xl px-4 py-8 rounded-full border border-colorSceen">
        m - a
      </p>

      {/* Last Text */}
      <div className="absolute left-[320px] top-[800px] flex flex-row gap-10 items-end">
        <div className="flex flex-col text-sm uppercase text-colorSceen text-left">
          <p>ELEVATE YOUR SENSES</p>
          <p>WITH THE CONTEMPORARY ART</p>
        </div>
        <div className="w-[200px] h-[3px] bg-colorSceen mb-2"></div>
      </div>
    </div>
  );
};

export default Home;
