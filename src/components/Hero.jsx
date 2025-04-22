import React from "react";
import NavBar from "./NavBar";
import AllTabs from "./HeroTabs/AllTabs";
import img from "../assets/hom.png";

const Hero = () => {
  return (
    <>
      <div className="align-element flex-col items-center  sm:w-auto rounded-[30px]  mt-[20px] sm:mt-[90px] p-[15px] s min-h-screen">
        <div className="flex flex-row gap-[100px] items-start">
          <div className="flex flex-col items-center sm:items-start justify-center gap-[20px]">
            <h1 className="sm:mt-[40px] font-bold text-[27px] sm:text-[40px] text-textblack tracking-wide">
              Easily buy, rent or list your property <br /> with{" "}
              <span className="text-greencol">HomeDZ</span>
            </h1>
            <p className="text-textgray font-medium text-[15px] sm:text-[18px]">
              We provide a user-focused platform designed to simplify your real
              estate journey <br /> whether you're looking for a property or
              offer one for sale or rent.
            </p>
          </div>
          <div className=" "></div>
        </div>

        <div className="mt-[60px] items-center">
          <AllTabs />
        </div>
      </div>
    </>
  );
};

export default Hero;
