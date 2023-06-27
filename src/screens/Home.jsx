import React from "react";
import Maze from "../assets/maze.png";
import AfterPay from "../assets/afterpay.png";
import BaseCamp from "../assets/basecamp.png";
import { BsDot } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { IoCall, IoLocation, IoMail, IoPlay } from "react-icons/io5";
import { MdKeyboardArrowDown, MdNotifications } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-screen h-full bg-colorBackground flex flex-col px-[70px] font-medium">
      {/* header */}
      <div className="w-full flex flex-row items-center justify-between py-[30px]">
        {/* left side */}
        <div className="flex flex-row gap-[80px] items-center">
          {/* logo */}
          <div className="flex flex-row gap-2 items-center">
            <div className="w-[30px] h-[30px] rounded-br-full rounded-l-[1000px] rounded-t-[1000px] bg-colorGreen flex justify-center items-center">
              <div className="w-[15px] h-[15px] rounded-br-full rounded-l-[1000px] rounded-t-[1000px] bg-black flex justify-center items-center"></div>
            </div>
            <p className="text-black text-[20px] font-bold">boostim</p>
          </div>

          {/* options */}
          <div className="flex flex-row items-center gap-8 text-black/70">
            <div className="flex flex-row gap-1 items-center capitalize text-sm font-semibold">
              <div className="flex flex-row items-center gap-2">service</div>
              <MdKeyboardArrowDown className="text-base" />
            </div>
            <div className="flex flex-row gap-1 items-center capitalize text-sm font-semibold">
              <div className="flex flex-row items-center gap-2">Agency</div>
              <MdKeyboardArrowDown className="text-base" />
            </div>
            <div className="flex flex-row gap-1 items-center capitalize text-sm font-semibold">
              <div className="flex flex-row items-center gap-2">case study</div>
              <MdKeyboardArrowDown className="text-base" />
            </div>
            <div className="flex flex-row gap-1 items-center capitalize text-sm font-semibold">
              <div className="flex flex-row items-center gap-2">resources</div>
              <MdKeyboardArrowDown className="text-base" />
            </div>
            <div className="flex flex-row gap-1 items-center capitalize text-sm font-semibold">
              <div className="flex flex-row items-center gap-2">contact</div>
              <MdKeyboardArrowDown className="text-base" />
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-row gap-2 items-center">
          <p className="text-base font-bold border-[1px] border-black/70 rounded-full px-[25px] py-[7px]">
            Get started
          </p>
          <div className="w-10 h-10 flex justify-center items-center bg-black rounded-full">
            <MdNotifications className="text-white text-xl" />
          </div>
        </div>
      </div>

      {/* main text */}
      <div className="w-full flex flex-row justify-between mt-12">
        {/* text */}
        <div className="flex flex-col ">
          <div className="flex flex-col text-left text-6xl gap-1 font-bold">
            <p>Stay ahead of the</p>
            <p>curve with our</p>
            <p>forward-thinking</p>
          </div>
          <div className="text-sm text-black/40 text-left mt-5">
            <p>
              An award-winning SEO agency with disciplines in digital marketing,
            </p>
            <p>
              design, and website development. focused on understanding you.
            </p>
          </div>
        </div>

        {/* img and text */}
        <div className="flex flex-row gap-3">
          <div className="relative h-[250px] w-[270px]">
            <img
              src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
              className="w-full h-full rounded-tl-full rounded-b-[300px]
              rounded-r-[300px] object-cover"
              alt=""
            />
            <div className="absolute -top-8 right-10 h-[80px] w-[80px] bg-black rounded-full flex items-center justify-center">
              <GiProgression className="text-colorLightGreen text-2xl" />
            </div>
          </div>
          <div className="h-[250px] w-[215px] rounded-xl bg-colorLightWhite flex flex-col justify-center items-center px-[23px]">
            <p className="text-6xl font-semibold mr-auto">230+</p>
            <p className="text-sm text-black/50 text-left mt-3">
              some big companies that we work with, and trust us very much
            </p>
            <div className="w-full h-[6px] bg-colorBarBackground mt-8 flex j items-center ">
              <div className="w-[110px] h-[6px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>

      {/* scheducle */}
      <div className="w-full h-[180px] flex flex-row justify-between items-center mt-5 mb-14">
        <div className="h-full flex flex-col justify-between py-5">
          <div className="flex flex-row items-center gap-10">
            <div className="flex flex-row bg-black px-7 py-3 rounded-full items-center gap-7">
              <p className="text-sm text-white">Schedule Call</p>
              <CgArrowLongRight className="text-xl text-white" />
            </div>
            <p className="text-sm capitalize underline underline-offset-4 font-semibold">
              View Case Study
            </p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-xs w-[150px] text-left">
              trusted by the world's biggest brands
            </p>
            <img src={AfterPay} className="w-[80px] ml-20" alt="" />
            <img src={BaseCamp} className="w-[100px] ml-5" alt="" />
            <img src={Maze} className="w-[80px] ml-5" alt="" />
          </div>
        </div>
        <div className="ml-auto w-[500px] h-[180px] bg-black rounded-xl pt-8 px-8 flex flex-row">
          <div className="flex flex-col w-[250px] text-left">
            <div className="flex flex-row items-center gap-3">
              <div className="w-8 h-[1px] bg-white/70"></div>
              <p className="text-white text-sm">Drive More Traffic and Sales</p>
            </div>
            <p className="text-2xl text-white font-semibold mt-8">
              Drive more traffic and product sales
            </p>
          </div>
          <div className="flex flex-row items-end gap-2 ml-4">
            <div className="w-14 h-[60px] bg-colorPiller1 rounded-t-sm"></div>
            <div className="w-14 h-[100px] bg-colorPiller2 rounded-t-sm"></div>
            <div className="w-14 h-[140px] bg-colorPiller3 rounded-t-sm"></div>
          </div>
        </div>
      </div>

      {/* provide best service */}
      <div className="w-full flex flex-row justify-between items-center gap-8 my-5">
        <p className="text-4xl font-bold w-full text-left">
          Provide the best service with <p> out of the boxideas</p>
        </p>
        <p className="w-[900px] text-sm text-black/40 text-left">
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </p>
      </div>

      {/* how we work */}
      <div className="w-full h-[320px] gap-5 my-5 mb-16 flex flex-row">
        <div className="w-[360px] h-full rounded-3xl bg-black flex flex-col p-7 text-left">
          <div className="flex flex-row items-end text-white text-7xl font-semibold">
            <p>920</p>
            <p className="text-6xl ml-2 text-colorPiller1">+</p>
          </div>
          <p className="text-white/60 text-sm">Project finish with superbly</p>
          <div className="flex flex-row mt-24 items-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              className="w-16 h-16 rounded-full border-2 border-white/60 object-cover object-top"
              alt=""
            />
            <img
              src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              className="w-16 h-16 rounded-full border-2 border-white/60 object-cover object-top -ml-5"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              className="w-16 h-16 rounded-full border-2 border-white/60 object-cover object-top -ml-5"
              alt=""
            />
            <img
              src="https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              className="w-16 h-16 rounded-full border-2 border-white/60 object-cover object-top -ml-5"
              alt=""
            />
            <p className="font-bold text-white/90 ml-2 text-5xl mt-2">+</p>
          </div>
        </div>
        <div className="w-[800px] h-full rounded-3xl bg-black relative flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            className="w-full h-full rounded-3xl object-cover"
            alt=""
          />
          <p className="absolute uppercase text-5xl text-white font-semibold tracking-widest">
            how we work
          </p>
          <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full border-[10px] border-colorBackground flex justify-center items-center bg-colorGreenCircle">
            <IoPlay className="text-5xl text-black" />
          </div>
        </div>
      </div>

      {/* real world example */}
      <div className="w-full h-[700px] rounded-3xl bg-black my-5 flex flex-col px-[20px] truncate">
        <p className="text-white text-[38px] font-semibold pt-[50px]">
          Real-world examples of how we have helped companies
        </p>
        <p className="text-white text-[38px] font-semibold pb-[50px]">
          achieve their marketing objectives.
        </p>
        <div className="flex flex-row w-full gap-5 items-center justify-center -mt-5">
          <p className="w-[220px] text-sm text-white rounded-full border-[1px] border-white/70 px-10 py-2">
            All Work [20]
          </p>
          <p className="w-[220px] text-sm text-black rounded-full bg-colorPiller2 px-10 py-2">
            UI/UX Design [10]
          </p>
          <p className="w-[220px] text-sm text-white rounded-full border-[1px] border-white/70 px-10 py-2">
            Digital Marketing [5]
          </p>
          <p className="w-[220px] text-sm text-white rounded-full border-[1px] border-white/70 px-10 py-2">
            Branding [5]
          </p>
        </div>
        <div className="w-[1500px] flex flex-row gap-6 mt-14">
          <div className="w-[350px] h-[350px] rounded-full bg-white border-[8px] border-black/50 ml-8 flex justify-center items-center relative">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              className="w-full h-full rounded-full object-cover"
              alt=""
            />
            <div className="absolute w-[350px] h-[350px] rounded-full bg-black/30"></div>
            <div className="absolute w-[130px] h-[130px] bg-colorGreen rounded-full flex justify-center items-center">
              <p className="capitalize text-black text-sm font-extrabold">
                see details
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[350px] rounded-[30px] bg-white border-[8px] border-black/50 relative flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1613442301239-ea2478101ea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full h-full rounded-[20px] object-cover"
              alt=""
            />
            <div className="absolute w-[350px] h-[350px] rounded-[20px] bg-black/30"></div>
            <div className="absolute w-[350px] h-[350px] flex flex-col justify-between p-7 text-left">
              <div className="flex flex-row items-center gap-3">
                <div className="w-8 h-[1px] bg-white/70"></div>
                <p className="text-white text-sm font-semibold">
                  Ai Corporation. 2023
                </p>
              </div>
              <p className="text-white font-bold">
                Ai Wave - Ai Chatbot Mobile App
              </p>
            </div>
          </div>
          <div className="w-[350px] h-[350px] rounded-[30px] bg-white border-[8px] border-black/50 relative flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1614029655965-2464911905a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxtb2JpbGUlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="w-full h-full rounded-[20px] object-cover object-bottom"
              alt=""
            />
            <div className="absolute w-[350px] h-[350px] rounded-[20px] bg-black/30"></div>
            <div className="absolute w-[350px] h-[350px] flex flex-col justify-between p-7 text-left">
              <div className="flex flex-row items-center gap-3">
                <div className="w-8 h-[1px] bg-white/70"></div>
                <p className="text-white text-sm font-semibold">
                  Lancer Corporation. 2023
                </p>
              </div>
              <p className="text-white font-bold">
                App Lancer - Freelance Mobile App
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* long text */}
      <div className="mt-20 mb-5 text-left text-[28px] font-bold">
        "They thoroughly analyze our industry and target audience, allowing them
        to develop customized campaigns that effectively reach and engage our
        customers. Their creative ideas and cutting-edge techniques have helped
        us stay ahead of the competition."
      </div>

      {/* profile */}
      <div className="flex flex-row justify-between items-center my-5">
        <div className="flex flex-row gap-5 items-center">
          <img
            src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            className="w-16 h-16 rounded-full object-cover object-top"
            alt=""
          />
          <div className="flex flex-col text-left gap-2">
            <p className="text-black text-[16px] font-bold">Michael Kaizer</p>
            <p className="text-black/60 text-[14px] font-semibold">
              CEO of Basecamp Corp
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-8 items-center">
          <div className="px-6 py-3 rounded-full border-[1px] border-black/80">
            <CgArrowLongLeft className="text-xl" />
          </div>
          <p className="text-xs font-bold flex flex-row">
            01<p className="text-black/50">/05</p>
          </p>
          <div className="px-6 py-3 rounded-full border-[1px] border-black/80 bg-black">
            <CgArrowLongRight className="text-xl text-white" />
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="w-full h-[570px] bg-white rounded-3xl my-10 flex flex-row px-16 py-10 gap-16">
        <div className="w-full flex flex-col text-left">
          <p className="text-4xl font-bold">Digital Marketing FAQs</p>
          <p className="text-sm text-black/40 text-left mt-7">
            As a leading digital marketing agency, we are dedicated to providing
            comprehensive educational resources and answering frequently asked
            questions to help our clients.
          </p>
          <div className="flex flex-row mt-10 items-center gap-10">
            <p className="text-sm font-bold px-6 py-3 border-[1px] border-black/60 rounded-full">
              More Questions
            </p>
            <p className="text-sm capitalize underline underline-offset-4 font-semibold">
              Contact Us
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col text-left">
          <div className="w-full h-[1px] bg-black"></div>
          <div className="flex flex-col px-5 py-4">
            <div className="w-full flex flex-row justify-between items-center gap-5">
              <p className="text-lg font-bold">
                Why is digital marketing important for my business?
              </p>
              <AiOutlineMinus className="text-lg" />
            </div>
            <p className="text-sm text-black/40 text-left mt-7">
              Digital marketing allows businesses to reach and engage with a
              wider audience, generate leads, drive website traffic, and
              increase brand visibility. It provides measurable results, allows
              for targeted marketing efforts, and enables businesses to adapt
              and optimize their strategies based on data and insights.
            </p>
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="w-full flex flex-row justify-between px-5 py-4 items-center gap-5">
            <p className="text-lg font-bold">
              How can digital marketing help improve my website's visibility?
            </p>
            <AiOutlinePlus className="text-lg" />
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="w-full flex flex-row justify-between px-5 py-4 items-center gap-5">
            <p className="text-lg font-bold">
              How long does it take to see results from digital marketing
              efforts?
            </p>
            <AiOutlinePlus className="text-lg" />
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <div className="w-full flex flex-row justify-between px-5 py-4 items-center gap-5">
            <p className="text-lg font-bold">
              How do you measure the success of digital marketing campaigns?
            </p>
            <AiOutlinePlus className="text-lg" />
          </div>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
      </div>

      {/* digital markeing */}
      <div className="w-full flex flex-row justify-between gap-10 my-5">
        <p className="text-4xl font-bold text-left">
          Digital Marketing & SEO ServicesThat Grow Traffic & Increase Revenue
        </p>
        <div className="flex flex-col gap-7">
          <p className="text-sm text-black/40 text-left mt-7">
            We are the top digital marketing agency for branding corp. We offer
            a full range of services to help clients improve their search engine
            rankings and drive more traffic to their websites.
          </p>
          <p className="text-sm font-bold px-6 py-3 border-[1px] border-black/60 rounded-full mr-auto">
            See more
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="w-full h-[280px] flex flex-row gap-5 my-10">
        <div className="w-full h-full bg-white rounded-2xl flex flex-col p-1 pr-8">
          <div className="w-full flex flex-row justify-between items-center">
            <BsDot className="text-6xl text-blue-400" />
            <p className="text-xs text-black/40">5 min read</p>
          </div>
          <p className="text-xl font-bold text-left px-6">
            How a Digital Marketing Agency Can Boost Your Business
          </p>
          <div className="w-full mt-12 flex flex-row gap-5 justify-between items-center pl-5">
            <p className="text-xs text-left text-black/40">
              We are the top digital marketing agency for branding corp. We
              offer a full rang engine.
            </p>
            <div className="px-6 py-3 rounded-full bg-black border-[1px] border-black/80">
              <CgArrowLongRight className="text-xl text-white" />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-2xl flex flex-col p-1 pr-8">
          <div className="w-full flex flex-row justify-between items-center">
            <BsDot className="text-6xl text-orange-600" />
            <p className="text-xs text-black/40">5 min read</p>
          </div>
          <p className="text-xl font-bold text-left px-6">
            The Latest Trends and Strategies with a Digital Marketing Agency
          </p>
          <div className="w-full mt-12 flex flex-row gap-5 justify-between items-center pl-5">
            <p className="text-xs text-left text-black/40">
              Working with this digital marketing agency has been a true
              partnership. They have tak...
            </p>
            <div className="px-6 py-3 rounded-full border-[1px] border-black/80">
              <CgArrowLongRight className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-white rounded-2xl flex flex-col p-1 pr-8">
          <div className="w-full flex flex-row justify-between items-center">
            <BsDot className="text-6xl text-purple-700" />
            <p className="text-xs text-black/40">5 min read</p>
          </div>
          <p className="text-xl font-bold text-left px-6">
            Maximizing ROl with the Expertise of a Digital Marketing Agency
          </p>
          <div className="w-full mt-12 flex flex-row gap-5 justify-between items-center pl-5">
            <p className="text-xs text-left text-black/40">
              What sets this digital marketing agency apart is their commitment
              to transparency a...
            </p>
            <div className="px-6 py-3 rounded-full border-[1px] border-black/80">
              <CgArrowLongRight className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* ready to work */}
      <div className="w-full p-14 bg-black rounded-3xl flex flex-row justify-between items-center mt-20">
        <p className="text-6xl text-white font-bold">Ready to work with us ?</p>
        <div className="flex flex-row bg-white px-7 py-3 rounded-full items-center gap-5">
          <p className="text-sm text-black font-extrabold">Get Started</p>
          <CgArrowLongRight className="text-xl text-black" />
        </div>
      </div>

      {/* contact details */}
      <div className="w-full flex flex-row my-12 justify-between">
        <div className="flex flex-col text-left">
          {/* logo */}
          <div className="flex flex-row gap-4 items-center">
            <div className="w-[50px] h-[50px] rounded-br-full rounded-l-[1000px] rounded-t-[1000px] bg-colorGreen flex justify-center items-center">
              <div className="w-[23px] h-[23px] rounded-br-full rounded-l-[1000px] rounded-t-[1000px] bg-black flex justify-center items-center"></div>
            </div>
            <p className="text-black text-[30px] font-bold">boostim</p>
          </div>
          <p className="text-[13px] text-black/40 text-left w-[500px] my-8 font-medium">
            We offers a comprehensive suite of digital marketing services that
            cover all aspects of our online presence. From SEO and social media
            marketing to content creation and PPC advertising, they have the
            expertise and resources to handle our diverse marketing needs.
          </p>
          <div className="flex flex-row gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
              <FaFacebookF className="text-black" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
              <FaTwitter className="text-black" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
              <FaLinkedinIn className="text-black" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
              <FaInstagram className="text-black" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-left">
          <p className="text-sm font-extrabold">Navigation</p>
          <div className="flex flex-col text-left text-xs text-black/40 gap-4 font-medium">
            <p>Service</p>
            <p>Agency</p>
            <p>Case Study</p>
            <p>Resource</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-left">
          <p className="text-sm font-extrabold">Licence</p>
          <div className="flex flex-col text-left text-xs text-black/40 gap-4 font-medium">
            <p>Privacy Policy</p>
            <p>Copyright</p>
            <p>CEmail Address</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-left">
          <p className="text-sm font-extrabold">Contact</p>
          <div className="flex flex-col text-left text-xs text-black/40 gap-4 font-medium">
            <div className="flex flex-row gap-3 items-center">
              <IoCall className="text-lg text-black" />
              <p>(406) 555-0120</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <IoMail className="text-lg text-black" />
              <p>Hey@boostim.com</p>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <IoLocation className="text-lg text-black" />
              <p className="w-[150px]">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
