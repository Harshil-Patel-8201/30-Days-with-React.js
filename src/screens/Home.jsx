import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbNorthStar } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import HandMobile from '../assets/hand.png'
import Piggi from '../assets/piggi.webp'

const Home = () => {
  return (
    <div className="w-screen h-screen bg-colorShadeWhite px-[100px]">
      {/* Header */}
      <div className="w-full flex flex-row justify-between items-center py-[20px]">
        <p className="text-3xl text-colorBlack font-semibold">bank.c</p>
        <div className="flex flex-row gap-8 items-center text-sm font-semibold text-colorBlack">
          <p>Pricing</p>
          <p>Blog</p>
          <p>Features</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-row items-center gap-5 text-colorBlack">
          <CgNotes className="text-xl" />
          <MdOutlineNotificationsNone className="text-2xl" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            className="w-10 h-10 rounded-full"
            alt=""
          />
        </div>
      </div>

      {/* Middel part */}
      <div className="w-full flex flex-row justify-between items-center gap-5 mt-[80px]">
        {/* First row */}
        <div className="w-full flex flex-col text-left">
          <div className="flex flex-row text-colorViolen items-center gap-3 font-semibold">
            <TbNorthStar />
            <p>30 Days free trial</p>
          </div>
          <div className="flex flex-col text-colorBlack text-5xl text-left font-extrabold gap-3 py-[30px]">
            <p>The Best</p>
            <p>Payment</p>
            <p>Exprience</p>
          </div>

          <p className="text-xs text-colorBlack/50 font-semibold">
            Make your daily routine easier by managing
            <p> money and transactions with the Bank Card.</p>
          </p>

          <div className="my-[20px] flex flex-row w-full items-center justify-between border-2 border-colorBlack rounded-full">
            <p className="px-[20px] text-colorBlack/60 text-xs">
              Enter your email
            </p>
            <p className="text-xs text-colorWhite px-[20px] bg-colorBlack py-[15px] rounded-full font-semibold">
              Get started
            </p>
          </div>

          <div className="flex flex-col text-left">
            <p className="text-colorBlack/60 text-base font-styleText font-semibold">
              Send Money to
            </p>
            <div className="flex flex-row gap-3 mt-[10px]">
              <div className="flex flex-col justify-center items-center w-[100px] h-[130px] bg-colorBlack rounded-lg gap-5">
                <div className="bg-colorWhite rounded-full flex justify-center items-center">
                  <AiOutlinePlus className="text-colorBlack" />
                </div>
                <p className="text-colorWhite text-xs text-center">
                  Add new contact
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[100px] h-[130px] bg-colorShadeWhite shadow-lg rounded-lg gap-5 px-[20px]">
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    className="w-[40px] h-[40px] rounded-xl"
                    alt=""
                  />
                </div>
                <p className="text-colorBlack text-xs text-center">
                  Steve Donald
                </p>
              </div>
              <div className="flex flex-col justify-center items-center w-[100px] h-[130px] bg-colorShadeWhite shadow-lg rounded-lg gap-5 px-[20px]">
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                    className="w-[40px] h-[40px] rounded-xl object-cover"
                    alt=""
                  />
                </div>
                <p className="text-colorBlack text-xs text-center">
                  Nahai Nolan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative w-full">
          <img
            src={HandMobile}
            className="absolute w-[800px] h-[600px] object-cover z-50"
            alt=""
          />
          <div className="w-[300px] h-[500px] rounded-t-full bg-slate-500"></div>
        </div>

        {/* Third Row */}
        <div className="w-[400px] flex flex-col text-left">
          <img src={Piggi} className="w-[300px]" alt="" />
          <p className="text-colorBlack text-2xl font-semibold">
            World Class <p>Experts</p>
          </p>

          <p className="text-5xl text-colorBlack font-semibold font-styleText mt-[60px]">
            12k+
          </p>
          <p className="text-xs font-semibold text-colorGray">
            Users already register and signing up for using it.
          </p>
          <p className="text-5xl text-colorBlack font-semibold font-styleText mt-[60px]">
            0%
          </p>
          <p className="text-xs font-semibold text-colorGray">
            Zore-percen fee to ny transaction for your daily needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
