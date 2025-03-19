import React from "react";
import { RedButton } from "../../ui";

const ConfirmLogout = () => {
  return (
    <div className="relative">
      <div className="p-[20px] sm:p-[30px] absolute center flex flex-col items-center gap-[35px] text-center rounded-[20px]  ">
        <h1 className="text-[28px] font-semibold text-textblack">
          Are you sure ?
        </h1>
        <div className="flex flex-row gap-[25px]">
          <RedButton text="Logout" />
          <button className=" text-textblack font-semibold  ">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogout;
