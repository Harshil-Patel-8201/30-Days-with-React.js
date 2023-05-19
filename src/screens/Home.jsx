import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "../assets/img.png";
import { BsCalendar2Date } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { GiSpellBook } from "react-icons/gi";

const Home = () => {
  return (
    <div className="w-screem h-auto flex flex-col px-[80px] bg-white">
      {/* Header */}
      <div className="flex flex-row justify-between items-center py-[20px]">
        <BiMenuAltLeft className="text-3xl text-colorDarkBlue" />
        <div className="flex flex-row items-center gap-8">
          <p className="text-xs text-colorSmallText">Workouts & Programs</p>
          <p className="text-xs text-colorSmallText">Nutrition Plans</p>
          <p className="text-xs text-colorSmallText">Community</p>
        </div>
      </div>

      {/* title & image */}
      <div className="flex flex-row justify-between">
        <div className="text-left flex flex-col w-[380px]">
          <p className="text-colorDarkBlue text-6xl font-[900] tracking-wider pt-[80px]">
            It's Time to Regain Your Fitness
          </p>
          <p className="w-[260px] text-colorSmallText text-base font-medium py-[30px]">
            Do fitness anvwhere and anvtime with our training videos
          </p>
          <p className="text-white bg-colorPink px-9 py-3 text-sm mr-auto rounded-lg capitalize tracking-wider font-semibold">
            Try it for free
          </p>
        </div>
        <img src={Image} className="w-[600px] mt-10" alt="" />
      </div>

      {/* icons and text */}
      <div className="flex flex-row justify-between gap-20 my-10">
        <div className="flex flex-col text-left">
          <BsCalendar2Date className="text-3xl text-colorYelloIcon mb-3" />
          <p className="text-sm text-colorDarkBlue font-semibold py-2">
            Daily Workouts 7 Days a Week
          </p>
          <p className="text-xs text-colorSmallText">
            Get personalized workouts on a daily basis from professionals.
          </p>
        </div>

        <div className="flex flex-col text-left">
          <MdDevices className="text-3xl text-colorPinkIcon mb-3" />
          <p className="text-sm text-colorDarkBlue font-semibold py-2">
            Access From Any Platform
          </p>
          <p className="text-xs text-colorSmallText">
            Use all the benefits of the service anywhere and on any device.
          </p>
        </div>

        <div className="flex flex-col text-left">
          <GiSpellBook className="text-3xl text-colorBlueIcon mb-3" />
          <p className="text-sm text-colorDarkBlue font-semibold py-2">
            Guides & Community
          </p>
          <p className="text-xs text-colorSmallText">
            A private community where we help each other.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
