import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoPlaySharp } from "react-icons/io5";
import { ImLocation } from "react-icons/im";
import { MdArrowOutward } from "react-icons/md";
import IconLogo from '../assets/digital logo.png'
import Statue from '../assets/redStatue.png'

const Home = () => {
  return (
    <div className="w-screen h-full bg-gradient-to-tl from-colorGredientStart via-colorGredientVia to-colorGredientEnd flex flex-col px-[80px]">
      {/* Header */}
      <div className="w-full flex flex-row items-center justify-between py-[30px] border-b-[1px] border-white/20">
        <div className="flex flex-row items-center gap-10 uppercase text-white text-sm">
          <p>cases</p>
          <p>security</p>
          <p>about</p>
        </div>
        <p className="text-xl text-white uppercase font-medium">emonti</p>
        <div className="flex flex-row items-center gap-10">
          <p className="uppercase text-colorDarkGray px-5 py-2 bg-white text-xs font-semibold">
            CONTACT
          </p>
          <FiMenu className="text-xl text-white" />
        </div>
      </div>
      {/* Main Objects */}
      <div className="w-full h-full flex flex-row relative">
        {/* First Column */}
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-col my-28 w-[140px]">
            <img
              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              className="w-[140px] h-[210px] object-cover"
              alt=""
            />
            <div className="flex justify-center items-center w-10 h-10 bg-colorOrange rounded-full ml-[120px] -mt-20">
              <IoPlaySharp className="ml-1 text-white text-sm" />
            </div>
            <p className="mt-20 uppercase text-base text-white font-bold text-left">
              - Get to know the team better
            </p>
          </div>
          <div className="w-full flex flex-row gap-5 my-[30px] items-center">
            <div className="w-12 h-12 bg-colorDarkGray flex justify-center items-center">
              <MdArrowOutward className="text-xl text-white" />
            </div>
            <div className="flex flex-col text-left">
              <p className="text-white text-base font-medium">Appointment</p>
              <p className="text-white/40 text-base ">Book Now</p>
            </div>
          </div>
          <div className="flex flex-col text-left text-white my-16 text-2xl font-bold">
            <p>TIME TO DEFEND YOUR</p>
            <p>RIGHTS WITH EXPERIENCED</p>
            <p>I AWYERS</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="absolute w-screen top-[100px] ml-[290px]">
          <img
            src={Statue}
            className="w-[500px] h-[600px] object-contain"
            alt=""
          />
          <div className="w-[300px] h-2 bg-white -mt-[52px] ml-[110px]"></div>
        </div>

        {/* third Column */}
        <div className="w-full flex flex-col text-right">
          <img src={IconLogo} className="w-[100px] my-28 ml-auto mr-6" alt="" />
          <img
            src="https://images.unsplash.com/photo-1579419964575-8c5d90b6522b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            className="w-[150px] h-[250px] object-cover ml-auto"
            alt=""
          />
          <div className="w-12 h-12 bg-colorDarkGray flex justify-center items-center ml-auto mr-32 -mt-[270px]">
            <ImLocation className="text-xl text-white" />
          </div>
          <p className="text-base text-white ml-auto mr-36 mt-[180px] -rotate-90">
            Central
          </p>
          <p className="text-left my-20 text-white text-base ml-auto">
            From complex litigation to everyday legal{" "}
            <p>
              matters, our dedicated team of lawyers has{" "}
              <p>the knowledge and experience to deliver</p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
