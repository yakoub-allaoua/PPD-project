import React from "react";
import { GreenButton } from "../../ui";
import { Link } from "react-router-dom";

const RequiredLogin = () => {
  return (
    <div className="relative">
      <div className="p-[20px] sm:p-[30px] absolute center flex flex-col items-center gap-[35px] text-center rounded-[20px]  ">
        <h1 className="text-[28px] font-semibold text-textblack">
          Log in Required
        </h1>
        <p className="text-textgray text-[16px]">
          You need to be logged in to continue please login
        </p>
        <Link to="/login">
          <GreenButton text="login" />
        </Link>
      </div>
    </div>
  );
};

export default RequiredLogin;
