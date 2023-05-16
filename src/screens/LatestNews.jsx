import React from "react";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.png";
import Pic3 from "../assets/pic3.png";
import { HiArrowSmRight } from "react-icons/hi";

const LatestNews = () => {
  return (
    <div className="w-full h-[780px] bg-gray-200 flex flex-col text-left px-[150px] py-[50px]">
      <p className="text-left text-[60px] text-black font-medium">
        Latest News
      </p>
      <div className="flex flex-row justify-between py-[30px]">
        {/* Product image */}
        <div className="flex flex-col relative w-[300px]">
          <img
            src={Pic1}
            className="w-full h-[250px] object-cover rounded-2xl"
            alt=""
          />
          <p className="text-black text-lg font-semibold">
            Lorem losum is simply dummy text of the printing...
          </p>
          <p className="py-3 text-black text-xs">
            Lorem losum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="absolute bottom-[125px] text-black bg-lightYello px-3 py-2 text-xs rounded-lg left-[15px]">
            20.10.2022
          </p>
          <div className="absolute h-8 w-8 bg-white rounded-full top-3 right-3 flex justify-center items-center">
            <HiArrowSmRight className="text-lg" />
          </div>
        </div>

        {/* Product image */}
        <div className="flex flex-col relative w-[300px]">
          <img
            src={Pic2}
            className="w-full h-[250px] object-cover rounded-2xl"
            alt=""
          />
          <p className="text-black text-lg font-semibold">
            Lorem losum is simply dummy text of the printing...
          </p>
          <p className="py-3 text-black text-xs">
            Lorem losum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="absolute bottom-[125px] text-black bg-lightYello px-3 py-2 text-xs rounded-lg left-[15px]">
            20.10.2022
          </p>
          <div className="absolute h-8 w-8 bg-white rounded-full top-3 right-3 flex justify-center items-center">
            <HiArrowSmRight className="text-lg" />
          </div>
        </div>

        {/* Product image */}
        <div className="flex flex-col relative w-[300px]">
          <img
            src={Pic3}
            className="w-full h-[250px] object-cover rounded-2xl"
            alt=""
          />
          <p className="text-black text-lg font-semibold">
            Lorem losum is simply dummy text of the printing...
          </p>
          <p className="py-3 text-black text-xs">
            Lorem losum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="absolute bottom-[125px] text-black bg-lightYello px-3 py-2 text-xs rounded-lg left-[15px]">
            20.10.2022
          </p>
          <div className="absolute h-8 w-8 bg-white rounded-full top-3 right-3 flex justify-center items-center">
            <HiArrowSmRight className="text-lg" />
          </div>
        </div>
      </div>

      <div className="w-[400px] flex flex-col mx-auto text-center justify-center">
        <p className="text-center text-3xl font-semibold">
          Subscribe and get 20% off your first purchsed.
        </p>
        <div className="flex flex-row gap-20 justify-center bg-white px-2 py-2 items-center rounded-lg mx-auto my-5">
          <p className="text-xs text-gray-400 ml-4">example@gmail.com</p>
          <p className="text-black bg-lightYello px-2 py-1 text-sm rounded-md">
            Submit
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
