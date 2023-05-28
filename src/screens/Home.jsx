import React from "react";
import Logo from "../assets/logo.png";
import Diamond from "../assets/diamond.png";
import StyleBg from "../assets/styleBg.jpg";
import Women from "../assets/women.png" 
import {HiOutlineArrowUturnRight} from "react-icons/hi2"

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorBackground flex flex-col px-[50px]">
      {/* Header */}
      <div className="w-full flex flex-row justify-between items-center border-[1.5px] rounded-full border-gray-600 my-[30px]">
        <img src={Logo} className="w-[80px] ml-8" alt="" />
        <div className="flex flex-row items-center gap-8 text-white/80 text-sm">
          <p>EXHIBITION</p>
          <p>ARTISTS</p>
          <p>PRESS</p>
          <p>SHOP</p>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <p className="text-white/80 text-sm">CART</p>
          <p className="h-14 w-14 text-black bg-colorYello p-3 rounded-full flex justify-center items-center text-2xl font-styleText">
            0
          </p>
        </div>
      </div>

      {/* Middel part */}
      <div className="flex flex-row py-[50px] mx-auto">
        {/* Text */}
        <div className="h-[580px] w-[380px] bg-colorDark rounded-full flex flex-col  justify-center items-center gap-[60px] z-10 border-colorYello/50 border-2">
          <img src={Diamond} className="w-7" alt="" />
          <p className="text-white font-styleText text-7xl">
            The<p>Gallery</p>
          </p>
          <p className="text-black bg-colorYello px-[30px] py-[20px] rounded-full text-sm font-bold">
            DISCOVER
          </p>
        </div>

        {/* bg style */}
        <div className="relative h-[580px] w-[380px] -ml-10 ">
          <img
            src={StyleBg}
            className="w-full h-full rounded-full border-white/50 border-2"
            alt=""
          />
          <div className="absolute rotate-45 top-[250px] left-[150px] bg-colorDark h-20 w-20 flex justify-center items-center">
            <p className="text-white -rotate-45 font-styleText text-5xl">&</p>
          </div>
        </div>

        {/* Women */}
        <div className="relative h-[580px] w-[380px] -ml-10 z-10 rounded-full border-b-[1.5px] border-r-[1.5px] border-gray-600">
          <img
            src={Women}
            className="absolute bottom-0 right-0 rounded-br-[200px] rounded-l-[200px] w-[580px] h-[580px] object-cover"
            alt=""
          />
          <p className="absolute top-0 right-5 text-white text-5xl text-left  font-styleText">
            21st. <p>century</p>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-row w-full justify-between py-[50px] px-[50px] items-center mb-[10px]">
        <p className="text-white font-styleText text-left text-3xl">
          Absolutely unique <p>bodv of work</p>
        </p>
        <p className="text-sm text-white/70 w-[400px] text-justify">
          We creating connections between painting and sculpture in urban
          settings, our artists adopt a thoroughly innovative approach in
          artistic fusions in balanced combination of classical and
          contemporary.
        </p>
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-16 h-16 object-cover rounded-full"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-16 h-16 object-cover rounded-full -ml-5"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-16 h-16 object-cover rounded-full -ml-5"
              alt=""
            />
          </div>
          <HiOutlineArrowUturnRight className="text-2xl text-colorYello"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
