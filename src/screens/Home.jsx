import React from "react";
import { FiSearch } from "react-icons/fi";
import User from "../assets/user.jpg";
import { SlHandbag } from "react-icons/sl";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Girl2 from "../assets/girl2.png";
import Girl from "../assets/girl.png";
import { ImLocation } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <div className="relative w-screen h-[800px] flex flex-row">
      <div className="w-full h-full bg-colorGreen"></div>
      <div className="w-full h-full bg-colorBrown"></div>

      <div className="w-full absolute flex flex-col px-[80px]">
        {/* Header */}
        <div className="w-full flex flex-row justify-between items-center py-[20px]">
          {/* Search */}
          <div className="flex flex-row gap-5 items-center text-sm font-semibold text-colorSmallText">
            <div className="px-1 py-1 rounded-full border-[1px] border-colorSmallText flex items-center justify-center">
              <FiSearch className="text-lg" />
            </div>
            <p>Catalog</p>
            <p>Collection points</p>
            <p>Who we are</p>
          </div>

          {/* Freecycle */}
          <p className="text-xl font-styleText tracking-wider text-colorTitleText font-semibold ml-11">
            FREECYCLE
          </p>

          {/* Profile */}
          <div className="flex flex-row items-center gap-5 text-colorSmallText text-sm font-semibold">
            <p>Delivery</p>
            <p>Orders</p>
            <p>
              Balance{" "}
              <span className="text-colorTitleText font-extrabold">
                21 points
              </span>
            </p>
            <img
              src={User}
              className="w-8 h-8 rounded-full border-[1px] object-cover border-colorLightYello"
              alt=""
            />
            <div className="px-2 py-2 rounded-full flex items-center justify-center bg-colorPurple">
              <SlHandbag className="text-lg text-black" />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-colorSmallText"></div>
        <p className="text-right text-colorSmallText text-sm font-semibold py-[12px]">
          You got a
          <span className="text-colorTitleText font-extrabold">
            {" "}
            10% bonus{" "}
          </span>
          as a loyal user
        </p>

        {/* Title Text */}
        <div className="absolute left-[80px] top-[180px] flex flex-col w-[350px] text-left">
          <p className="text-5xl text-colorTitleText font-styleText">
            Free clothes for those who care of nature
          </p>
          <p className="w-[304px] text-sm text-colorSmallText py-[25px] font-semibold">
            Get{" "}
            <span className="text-colorTitleText font-extrabold">
              1 point for 1 kilo of plastic
            </span>{" "}
            which you bring to our collection points. Then choose any clothes
            made of recycled materials from our catalog.
          </p>
          {/* View Catalog */}
          <p className="text-xs font-styleText font-semibold bg-colorPurple px-8 py-5 rounded-lg mr-auto text-black/80 z-10">
            VIEW CATALOG
          </p>
          <div className="-mt-[43px] ml-[7px] w-[155px] h-[50px] bg-transparent border-[1px] border-white/80 rounded-lg mr-auto"></div>
        </div>

        {/* Image */}
        <img
          src={Girl}
          className="absolute z-50 w-[550px] ml-[300px] mt-[55px]"
          alt=""
        />

        {/* image text */}
        <div className="absolute z-30 top-[530px] left-[380px] w-[120px] h-[120px] rounded-full bg-colorLightYello flex justify-center items-center text-center">
          <p className="w-[100px] text-sm text-balck/80 font-extrabold">
            Dress made from recycled materials
            <span className="text-balck/60 font-light">16 points</span>
          </p>
        </div>

        {/* Right side */}
        <div className="absolute right-0 flex flex-col top-[180px] w-[250px] text-left">
          <div className="flex flex-row items-baseline">
            <div className="w-8 h-8 px-1 py-1 rounded-full border-[1px] border-colorSmallText flex items-center justify-center mr-2">
              <MdKeyboardArrowLeft className="text-base text-colorTitleText" />
            </div>
            <div className="w-8 h-8 px-2 py-2 rounded-full flex items-center justify-center bg-colorPurple border-colorTitleText">
              <MdKeyboardArrowRight className="text-base text-balck/80" />
            </div>
            <p className="text-5xl font-styleText text-colorTitleText ml-14">
              01<span className="text-sm text-colorSmallText">/05</span>
            </p>
          </div>
          <img
            src={Girl2}
            className="w-full h-[300px] object-cover bg-colorLightYello mt-4 rounded-l-md"
            alt=""
          />
          <p className="text-colorLightYello text-sm font-bold pt-[10px]">
            Violet striped dress
          </p>
          <p className="text-colorSmallText text-sm font-bold">12 points</p>
        </div>

        {/* Bottom Bar */}
        <div className="absolute top-[720px] w-full right-0 flex flex-row justify-between px-[80px]">
          <div className="flex flex-row gap-5 items-center">
            <ImLocation className="text-3xl text-colorLightYello" />
            <div className="flex flex-col text-left">
              <p className="text-sm font-semibold text-colorTitleText">
                The nearest plastic collection point
              </p>
              <p className="text-xs text-colorSmallText font-bold">
                5542 Thunderbird La Jolla, California
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <p className="text-colorLightYello text-sm font-medium">
              <span className="textsm text-colorTitleText font-bold">
                1 extra point
              </span>{" "}
              for sharing
            </p>
            <BsFacebook className="text-colorLightYello text-xl" />
            <AiFillGoogleCircle className="text-colorLightYello text-xl" />
            <AiFillInstagram className="text-colorLightYello text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
