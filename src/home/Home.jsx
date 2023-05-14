import React from "react";
import Logo from "../assets/logo.png"
import {HiMenuAlt4} from 'react-icons/hi'
import ManDrink from "../assets/man_drink.png"
import {BsFillPlayFill} from 'react-icons/bs'
import GreenBGImg from '../assets/green_bg.png'
import DrinkImg from "../assets/drink.png"

const Home = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col px-16">
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-10 pt-5">
        <img src={Logo} className="w-20" alt="CompanyLogo" />
        <div className="flex flex-row gap-10">
          <p className="text-sm text-blck">Home</p>
          <p className="text-sm text-blck">Coopration</p>
          <p className="text-sm text-blck">Products</p>
          <p className="text-sm text-blck">Contacts</p>
        </div>
        <HiMenuAlt4 className="text-lg"/>
      </div>

      {/* More Energy */}
      <p className="text-black text-9xl font-headText uppercase">More Energy</p>

      {/* drink area */}
      <div className="flex flex-row justify-between">

        {/* video area */}
        <div className="flex flex-col w-[250px] justify-start mt-3">
          <p className="text-sm text-left">Forget about fatigue, getting instant enrgy from our drink</p>
          <div className="w-[250px] h-[180px] relative my-10">
            <div className="absolute left-0 right-0 top-0 bottom-0  flex items-center justify-center ">
              <div className="bg-white/30 h-16 w-16 rounded-full flex justify-center items-center">
                <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center">
                  <BsFillPlayFill className="text-black text-3xl pl-1"/>
                </div>
              </div>
            </div>
          <img src={ManDrink} className="w-full h-full rounded-3xl " alt="ManDrink" />
          </div>
          <p className="text-sm text-left">Those who like to try new things and strive to implements original ideas.</p>
          <p className="w-[150px] text-black px-6 py-3 text-sm bg-greenBg rounded-xl mt-6">Explore More</p>
        </div>

        {/* drink image */}
        <div className="flex flex-col w-[500px] h-[500px] mt-24">
          <div className="relative flex justify-center items-center">
            <img src={DrinkImg} className="absolute z-20 w-[230px] h-[500px] rotate-12" alt="DrinkImage" />
            <img src={GreenBGImg} className="w-[550px] rotate-12 mt-10" alt="GreenBgImage" />
          </div>
        </div>

        {/* 18+ text */}
        <div className="flex flex-col justify-between w-[250px] h-[500px]">
          <p className="text-lime-600/70 text-3xl font-headText text-left">energy drink</p>
          <div className="flex flex-col">
            <p className="text-8xl text-black text-left font-bold">18+</p>
            <p className="w-[150px] text-sm text-left">It is forbidden to drink under the age of 18, beacuse of harmful effect.</p>
          </div>
        </div>
      </div>

      {/* Bottom area */}
      <div className="bg-black/80 h-[200px] w-[900px] mx-auto rounded-t-[50px] flex flex-row justify-between items-center px-24">
        <div className="flex flex-col items-center">
          <p className="text-white text-4xl font-extrabold my-3">800+</p>
          <p className="text-white text-sm w-[120px] text-center">Large stores around the world</p>
        </div>
        <div className="h-[100px] w-[2px] bg-white"></div>
        <div className="flex flex-col items-center">
          <p className="text-white text-4xl font-extrabold my-3">30+</p>
          <p className="text-white text-sm w-[110px] text-center">Cooperation with contries</p>
        </div>
        <div className="h-[100px] w-[2px] bg-white"></div>
        <div className="flex flex-col items-center">
          <p className="text-white text-4xl font-extrabold my-3">700K+</p>
          <p className="text-white text-sm w-[130px] text-center">Satisfied customers all over the world</p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
