import React from "react";
import Logo from "../assets/logo.png";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";
import IconsBall from "../assets/icons.png";
import Nets from '../assets/net.png'
import { BsArrowUpRight } from "react-icons/bs";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  return (
    <div className="w-screen h-[900px] bg-colorBackground">
      <div className="relative w-full h-full bg-colorBackground">
        {/* Orange Picture */}
        <div className="absolute right-0 top-0">
          <div className="relative bg-colorOrange flex justify-center items-center ml-auto px-12 py-24 pb-28">
            <img src={Img2} className="w-[200px]" alt="" />
            <div className="absolute bottom-3 left-3 w-full flex flex-row justify-between pr-10 items-end">
              <div className="flex flex-row">
                <p className="text-colorWhite text-8xl font-customText -tracking-wider">
                  5.0
                </p>
                <p className="text-colorWhite text-xl -rotate-90 font-customText pt-2 pr-6 tracking-wider">
                  VERISON
                </p>
              </div>
              <BsArrowUpRight className="text-4xl text-colorWhite pb-2" />
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="absolute z-10 w-full flex flex-col top-0 px-[80px]">
          {/* Header */}
          <div className="w-full flex flex-row justify-between py-[20px] items-center">
            {/* Logo */}
            <img src={Logo} className="w-[180px]" alt="" />
            <div className="flex flex-row items-center gap-5 text-sm text-colorSmallText">
              <p>Apps & Games</p>
              <p>Resourses</p>
              <p>Contact Us</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p className="text-sm text-colorWhite font-semibold">LOG IN</p>
              <div className="w-12 h-12 flex justify-center items-center bg-colorWhite">
                <RiLoginBoxLine className="text-colorOrange text-xl" />
              </div>
            </div>
          </div>

          {/* Middel Part */}
          <div className="w-full flex flex-row justify-between items-center my-10 mb-20">
            {/* Text */}
            <div className="w-full flex flex-col px-7 uppercase text-colorWhite text-left -ml-5">
              <p className="text-9xl font-customText -tracking-wide">
                it's virtual
              </p>
              <p className="text-9xl font-customText -tracking-wider">
                World time
              </p>
              <div className="flex flex-row gap-10 uppercase text-xs tracking-wider font-semibold mt-10 items-center">
                <p className="px-14 py-4 bg-colorWhite text-colorBackground">
                  get strted
                </p>
                <p className="text-colorWhite underline underline-offset-8">
                  join the community
                </p>
              </div>
            </div>

            {/* Image */}
            <img src={Img1} className="w-[280px] mr-[90px]" alt="" />

            {/* Image */}
            <img
              src={IconsBall}
              className="w-[100px] ml-10 mt-[400px]"
              alt=""
            />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-row justify-between">
            {/* Robot image section */}
            <div className="relative w-[400px] h-[170px] border-[1px] border-colorBorder">
              <img
                src={Img3}
                className="w-[140px] absolute -top-10 left-8 z-20"
                alt=""
              />
              <div className="absolute left-[130px] -top-6 w-12 h-12 bg-colorOrange rounded-full flex justify-center items-center">
                <AiOutlinePlus className="text-2xl text-colorBackground" />
              </div>
              <p className="absolute right-7 top-8 text-colorWhite font-customText tracking-[0.15em] text-xl font-medium">
                UPGRADE YOUR HERO
              </p>
              <p className="text-colorSmallText/60 text-xs absolute right-[70px] top-16">
                Only for pro plan users
              </p>
              <img
                src={Nets}
                className="absolute bottom-0 right-0 w-[280px]"
                alt=""
              />
            </div>

            {/* Text Section */}
            <div className="w-[500px] flex flex-col">
              <div className="w-full flex flex-col">
                <div className="w-full h-[1px] bg-colorBorder"></div>
                <div className="flex flex-row justify-between items-start text-sm py-[25px]">
                  <p className="text-colorWhite font-semibold">Players</p>
                  <p className="w-[230px] text-colorSmallText font-light">
                    Creating the personal avatar, and independently exploring
                    the world
                  </p>
                  <p className="text-colorSmallText font-light">/2022</p>
                </div>
              </div>
              <div className="w-full flex flex-col">
                <div className="w-full h-[1px] bg-colorBorder"></div>
                <div className="flex flex-row justify-between items-start text-sm py-[25px]">
                  <p className="text-colorWhite font-semibold">Showcase</p>
                  <p className="w-[230px] text-colorSmallText font-light">
                    Virtual spaces can serve a variety of research and
                    educational goals
                  </p>
                  <p className="text-colorSmallText font-light">/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
