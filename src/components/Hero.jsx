import React from "react";
import NavBar from "./NavBar";
import AllTabs from "./HeroTabs/AllTabs";

const Hero = () => {
  return (
    <>
      <div className="align-element rounded-[30px] bg-greencol mt-[20px] sm:mt-[110px] p-[15px] sm:p-[40px]">
        <div className="flex flex-col items-start justify-center gap-[20px]">
          <h1 className="font-bold text-text text-[40px] tracking-wide">
            Easily buy, rent or list your property <br /> with{" "}
            <span className="text-purplecol">HomeDZ</span>
          </h1>
          <p className="text-textgray font-medium text-[22px]">
            We provide a user-focused platform designed to simplify your real
            estate journey <br /> whether you're looking for a property or offer
            one for sale or rent.
          </p>
        </div>
        <div className="mt-[40px]">
          <AllTabs />
        </div>
      </div>
    </>
  );
};

export default Hero;
