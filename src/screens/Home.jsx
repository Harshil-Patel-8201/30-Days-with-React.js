import React from "react";
import { TbMenu } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import Img1 from "../assets/nft.png";
import { GiWrappingStar } from "react-icons/gi";
import Dots from "../assets/dots.png";

const Home = () => {
  return (
    <div className="w-screen h-full bg-black flex flex-row p-2 gap-1">
      {/* drawer */}
      <div className="w-[70px] h-auto bg-gradient-to-b from-colorGrediantDark1 to-colorGrediantDark2 rounded-xl flex flex-col items-center py-5">
        <TbMenu className="text-white text-2xl" />
        <p className="text-white text-xs mt-[130px]">/01</p>
        <p className="text-white text-sm -rotate-90 w-[100px] mt-auto mb-7">
          © ART Place
        </p>
      </div>

      <div className="flex flex-col w-full h-full gap-1">
        {/* header */}
        <div className="w-full h-[80px] bg-gradient-to-r from-colorGrediantDark1 to-colorGrediantDark2 rounded-xl flex flex-row justify-between items-center px-[70px]">
          <p className="text-white text-2xl font-light font-customText">
            CREON
          </p>
          <div className="flex flex-row items-center gap-[80px] uppercase text-white text-sm">
            <p>Explore</p>
            <p>collections</p>
            <p>community</p>
            <div className="flex flex-row gap-[20px] items-center">
              <TfiWorld className="text-xl" />
              <p className="px-2 py-[2px] rounded-full border-[1px] border-white">
                CONNECT WALLET
              </p>
            </div>
          </div>
        </div>

        {/* first container */}
        <div className="w-full h-[550px] rounded-xl px-[70px] relative bg-gradient-to-br from-colorGrediantDark1 via-colorGrediantDark2 to-colorGrediantDark1">
          <img src={Img1} className="absolute w-[400px] right-0" alt="" />
          <p className="absolute top-[50px] left-18 text-white text-[110px] font-customText">
            CREATE
          </p>
          <p className="absolute top-[150px] left-[250px] text-white text-[110px] font-customText">
            AND SELL
          </p>
          <p className="absolute top-[200px] left-[70px] w-[130px] bg-colorGreen text-black text-sm tracking-tight px-4 py-4 rounded-full uppercase font-bold">
            start now
          </p>
          <div className="flex flex-row absolute top-[350px] left-[70px] items-center">
            <div className="w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center z-10">
              <GiWrappingStar className="text-3xl" />
            </div>
            <div className="w-[80px] h-[80px] bg-black rounded-full -ml-6"></div>
            <div className="h-[2px] w-[70px] bg-white z-50 -ml-6"></div>
            <div className="flex flex-col ml-5">
              <p className="text-white text-5xl font-bold">150+</p>
              <p className="text-sm text-white/70">Unique Products</p>
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="flex flex-row w-full h-[300px] gap-1">
          {/* blue box */}
          <div className="w-full h-full bg-gradient-to-br from-colorGrediantDark1 via-colorGrediantDark2 to-colorGrediantDark2 rounded-xl flex justify-center items-center flex-col text-left gap-2">
            <p className="text-base text-white capitalize rounded-full border-[1px] bprder-white px-4 py-1 mr-auto ml-16">
              Digital artwork
            </p>
            <div className="flex flex-row gap-2 mr-auto ml-16">
              <p className="text-base text-white capitalize rounded-full border-[1px] bprder-white px-4 py-1">
                Videos
              </p>
              <p className="text-base text-white capitalize rounded-full border-[1px] bprder-white px-4 py-1">
                Photography
              </p>
            </div>
            <div className="flex flex-row gap-2 mr-auto ml-16">
              <p className="text-base text-white capitalize rounded-full border-[1px] bprder-white px-4 py-1">
                Utility
              </p>
              <p className="text-base text-white capitalize rounded-full border-[1px] bprder-white px-4 py-1">
                More...
              </p>
            </div>
            <p className="text-xs text-white/70 mr-auto mt-16 ml-16">
              Top NFTs here.
            </p>
          </div>

          {/* yello box */}
          <div className="w-full h-full bg-gradient-to-b from-colorGrediant1 via-colorGrediant2 to-colorGrediant3 rounded-xl flex flex-col">
            <p className="text-base text-black font-semibold text-justify px-[60px] mt-10">
              The web3 NFT Marketplace where traders and collectors have earned
              over $2.3 Billion in rewards
            </p>
            <div className="px-[60px] mt-20 flex flex-row items-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1663931932715-56facc4a5b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="w-12 h-12 rounded-full border-[1px] border-white"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1664022617645-cf71791942e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG5mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="w-12 h-12 rounded-full border-[1px] border-white -ml-3"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1672911640671-65d5dfa97d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fG5mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                className="w-12 h-12 rounded-full border-[1px] border-white -ml-3"
                alt=""
              />
              <p className="text-sm ml-10 text-black font-semibold text-left tracking-tighter">
                EXPLORE COLLECTIONS
              </p>
            </div>
          </div>

          {/* light blue box */}
          <div className="w-full h-full bg-colorBlue rounded-xl flex flex-col text-left">
            <p className="text-4xl text-black font-bold px-[70px] mt-10">
              WEB 3.0
            </p>
            <p className="text-xs text-black/40 font-semibold px-[70px] mt-2">
              Buy & Sell NFTs, Get Rewards
            </p>
            <img src={Dots} className="w-[300px] mx-auto mt-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
