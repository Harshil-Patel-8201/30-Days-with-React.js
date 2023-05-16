import React from "react";
import Shoes from "../assets/shoes_sales.png";
import { AiOutlineShopping } from "react-icons/ai";

const SalesEnd = () => {
  return (
    <div className="relative w-full h-[400px]">
      <div className="w-full h-full flex flex-row">
        <div className="bg-lightYello w-[35%]"></div>
        <div className="bg-greenBg w-[65%]"></div>
      </div>
      <div className="absolute top-0 flex flex-col px-[150px] py-[50px]">
        <div className="flex flex-row">
          <p className="text-5xl font-extrabold text-black">-70% OFF</p>
          <p className="text-5xl font-extrabold text-white ml-[250px]">
            Sale ends soon
          </p>
        </div>
        <div className="flex flex-row">
          <img
            src={Shoes}
            className="w-[400px] h-[200px] object-cover"
            alt=""
          />
          <div className="flex flex-row gap-6 mt-8 ml-20">
            <div className="flex flex-col">
              <p className="h-[100px] w-[100px] py-6 bg-black/20 rounded-xl ttext-5xl font-extrabold text-white text-5xl fels text-center">
                3
              </p>
              <p className="text-white font-semibold text-2xl">Days</p>
            </div>
            <div className="flex flex-col">
              <p className="h-[100px] w-[100px] py-6 bg-black/20 rounded-xl ttext-5xl font-extrabold text-white text-5xl fels text-center">
                23
              </p>
              <p className="text-white font-semibold text-2xl">Hours</p>
            </div>
            <div className="flex flex-col">
              <p className="h-[100px] w-[100px] py-6 bg-black/20 rounded-xl ttext-5xl font-extrabold text-white text-5xl fels text-center">
                15
              </p>
              <p className="text-white font-semibold text-2xl">Minutes</p>
            </div>
            <div className="flex flex-col">
              <p className="h-[100px] w-[100px] py-6 bg-black/20 rounded-xl ttext-5xl font-extrabold text-white text-5xl fels text-center">
                33
              </p>
              <p className="text-white font-semibold text-2xl">Seconds</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="px-5 py-3 border border-black bg-transparent rounded-xl flex flex-row gap-4 items-center">
            <p className="text-black text-xl font-semibold line-through">
              $180
            </p>
            <p className="text-black text-2xl font-bold">$50</p>
          </div>
          <div className="h-14 w-14 flex justify-center items-center bg-black rounded-lg">
            <AiOutlineShopping className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesEnd;
