import React from "react";
import SceenColorMan from "../assets/sceen_color_jacket.png";
import ManWithPurse from "../assets/purse_man.png";

const NewCollection = () => {
  return (
    <div className="w-full h-[700px] bg-gray-200 flex flex-col justify-start px-[150px] py-[30px] gap-20">
      <p className="text-black font-medium text-[40px] text-left mt-4">
        New Collection
      </p>
      <div className="flex flex-row justify-between">
        {/* man in jacket image */}
        <div className="h-[450px] w-[400px] bg-gray-400/60 rounded-3xl relative">
          <p className="capitalize text-blck text-xl font-bold text-left pt-7 pl-10">
            Mens winter collection
          </p>
          <img
            src={SceenColorMan}
            className="h-[390px] w-[390px] mt-1"
            alt=""
          />
          <p className="absolute text-white px-5 py-3 text-xs bg-black bottom-7 right-7 rounded-xl">
            Discove Now
          </p>
        </div>

        {/* man with purse image */}
        <div className="h-[450px] w-[550px] bg-lightYello rounded-3xl relative">
          <img src={ManWithPurse} className="w-[280px] mt-[60px] ml-5" alt="" />
          <div className="absolute h-[380px] flex flex-col justify-between top-10 right-0 mr-10 items-end">
            <p className="w-[140px] text-black text-2xl font-bold">
              Men's Begs Collection
            </p>
            <p className="text-5xl font-bold text-black">-40% OFF</p>
            <p className="ml-auto text-white px-5 py-3 text-xs bg-black bottom-7 right-7 rounded-xl">
              Discove Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
