import React from "react";
import Gucci from "../assets/gucci.png";
import Nike from "../assets/nike.png";
import HandM from "../assets/h&m.png";
import Ellesse from "../assets/ellesse.png";
import Prada from "../assets/prada.png";
import TheNorthFace from "../assets/thenorthface.png";

const Brand = () => {
  return (
    <div className="w-full h-24 bg-brandBg flex flex-row gap-10 justify-center items-center">
      <img src={Gucci} className="w-[100px]" alt="" />
      <img src={HandM} className="w-[100px]" alt="" />
      <img src={Nike} className="w-[100px]" alt="" />
      <img src={TheNorthFace} className="w-[100px]" alt="" />
      <img src={Prada} className="w-[100px]" alt="" />
      <img src={Ellesse} className="w-[100px]" alt="" />
    </div>
  );
};

export default Brand;
