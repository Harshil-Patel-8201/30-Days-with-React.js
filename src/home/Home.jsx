import React from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaYoutube, FaGoogle, FaTwitter, FaPlay } from "react-icons/fa";
import PlayerImage from "../assets/player.png";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-teal-900 flex flex-col px-40">
        <div className="flex flex-row justify-between py-8 border-b-2 border-gray-200/20">
          <HiOutlineMenuAlt4 className="text-2xl text-white" />
          <div className="flex flex-row gap-8">
            <p className="text-white text-base">Home</p>
            <p className="text-white text-base">Cooperation</p>
            <p className="text-white text-base">Contacts</p>
          </div>
          <div className="flex flex-row gap-5">
            <FaYoutube className="text-slg text-white" />
            <FaGoogle className="text-slg text-white" />
            <FaTwitter className="text-slg text-white" />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col my-5">
            <p className="text-6xl text-white text-left tracking-wider font-bold">
              Johnson
            </p>
            <p className="text-6xl text-white text-left tracking-wider font-bold">
              Patrick
            </p>
            <p className="text-base text-white text-left my-5 w-[300px]">
              Welcome to my personal webiste, here you will learn more about me
            </p>
            <div className="flex flex-row justify-between w-[230px] rounded-full bg-black/20 px-2 py-2 gap-10 items-center">
              <p className="text-white text-base capitalize ml-5">
                watch Video
              </p>
              <div className="h-12 w-12 rounded-full bg-yellow-200/40 items-center justify-center flex">
                <div className="items-center justify-center flex h-8 w-8 rounded-full bg-yellow-300">
                  <FaPlay className="ml-1 text-sm" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <div className="flex flex-col absolute bottom-0 right-0 mr-20 h-[180px]">
              <p className="text-[100px] text-white text-left tracking-wider font-bold">
                53
              </p>
              <p className="text-sm text-white text-left w-[150px]">
                My favorite number, Throughout his career, i remained failthful
                to these figures
              </p>
            </div>
            <div className="absolute">
              <img
                src={PlayerImage}
                className="w-[800px] -ml-16"
                alt="PlayerImage"
              />
            </div>
          </div>
        </div>
        <div className="bg-yellow-300 mx-auto h-[150px] z-50 mt-20 flex flex-row justify-center items-center rounded-lg">
          <p className="text-white w-[200px] h-full bg-yellow-900/40 text-center flex justify-center items-center text-xl font-bold">
            MY CAREER
          </p>
          <div className="w-full flex-row text-center flex justify-center items-center">
            <div className="flex flex-col w-[200px]">
              <p className="text-4xl text-black font-semibold">2014</p>
              <p className="text-sm text-black font-medium">Las Vegas Riders</p>
            </div>
            <div className="w-[100px] h-1 bg-gradient-to-r from-transparent to-black"></div>
            <div className="flex flex-col w-[200px]">
              <p className="text-4xl text-black font-semibold">2018</p>
              <p className="text-sm text-black font-medium">Chicago Bears</p>
            </div>
            <div className="w-[100px] h-1 bg-gradient-to-r from-transparent to-black"></div>
            <div className="flex flex-col w-[200px]">
              <p className="text-4xl text-black font-semibold">2020</p>
              <p className="text-sm text-black font-medium">Devnver Broncos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
