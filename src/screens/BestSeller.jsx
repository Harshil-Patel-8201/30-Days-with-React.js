import React from "react";
import Jacket1 from "../assets/jacket1.png";
import Jacket2 from "../assets/jacket2.png";
import Shoes from "../assets/shoes.png";
import Purse from "../assets/purse.png";
import { AiOutlineShopping } from "react-icons/ai";
import { RiHeart3Line } from "react-icons/ri";

const BestSeller = () => {
  return (
    <div className="flex flex-col px-[150px] py-[50px]">
      <p className="text-left text-[60px] text-black font-medium">
        Best Seller
      </p>

      <div className="flex flex-row gap-8">
        {/* Product */}
        <div className="flex flex-col relative">
          <img
            src={Jacket1}
            className="bg-gray-200 w-[250px] h-[300px] rounded-2xl object-contain"
            alt=""
          />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col text-left">
              <p>Blue Jacket</p>
              <p>$129</p>
            </div>
            <div className="h-8 w-8 flex justify-center items-center bg-lightYello rounded-lg">
              <AiOutlineShopping className="text-xl" />
            </div>
          </div>
          <RiHeart3Line className="absolute right-4 top-4 text-2xl text-greenBg" />
        </div>

        {/* Product */}
        <div className="flex flex-col relative">
          <img
            src={Purse}
            className="bg-gray-200 w-[250px] h-[300px] rounded-2xl object-contain"
            alt=""
          />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col text-left">
              <p>Prada Bag</p>
              <p>$129</p>
            </div>
            <div className="h-8 w-8 flex justify-center items-center bg-lightYello rounded-lg">
              <AiOutlineShopping className="text-xl" />
            </div>
          </div>
          <RiHeart3Line className="absolute right-4 top-4 text-2xl text-greenBg" />
        </div>

        {/* Product */}
        <div className="flex flex-col relative">
          <img
            src={Jacket2}
            className="bg-gray-200 w-[250px] h-[300px] rounded-2xl object-contain"
            alt=""
          />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col text-left">
              <p>Brown Jacket</p>
              <p>$129</p>
            </div>
            <div className="h-8 w-8 flex justify-center items-center bg-lightYello rounded-lg">
              <AiOutlineShopping className="text-xl" />
            </div>
          </div>
          <RiHeart3Line className="absolute right-4 top-4 text-2xl text-greenBg" />
        </div>

        {/* Product */}
        <div className="flex flex-col relative">
          <img
            src={Shoes}
            className="bg-gray-200 w-[250px] h-[300px] rounded-2xl object-contain"
            alt=""
          />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col text-left">
              <p>Chalsa Shoes</p>
              <p>$129</p>
            </div>
            <div className="h-8 w-8 flex justify-center items-center bg-lightYello rounded-lg">
              <AiOutlineShopping className="text-xl" />
            </div>
          </div>
          <RiHeart3Line className="absolute right-4 top-4 text-2xl text-greenBg" />
        </div>
      </div>
      <p className="px-5 py-3 text-xs text-white bg-black mx-auto my-8 rounded-lg">
        Load More Products
      </p>
    </div>
  );
};

export default BestSeller;
