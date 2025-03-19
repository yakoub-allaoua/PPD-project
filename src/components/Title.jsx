import React from "react";
import img from "../assets/Logo.png";
const Title = () => {
  return (
    <div className="flex flex-row items-center gap-[5px]">
      <img src={img} className="w-[45px] h-[45px] " />
      <h1 className="text-[16px]  font-bold text-textblack ">
        Ｈｏｍｅ<span className="text-greencol">ＤＺ</span>
      </h1>
    </div>
  );
};

export default Title;
