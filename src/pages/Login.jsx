import React, { useEffect, useRef } from "react";
import img from "../assets/loginpage.jpg";
import LoginForm from "../components/UserAccess/LoginForm";
import Title from "../components/Title";
import gsap from "gsap";
import { Link } from "react-router-dom";
const Login = () => {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.from(textRef.current, {
      x: 300,
      duration: 1,
      ease: "power2.out",
    });
  });
  const formRef = useRef(null);
  useEffect(() => {
    gsap.from(formRef.current, {
      x: -300,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 h-screen">
      <div
        ref={formRef}
        className="flex flex-col items-center justify-start sm:mt-[30px] gap-[20px] p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 sm:mt-[120px]">
          Sign in
        </h1>
        <LoginForm />
        <div className="flex flex-row gap-[10px] items-center ">
          <p className="text-textblack ">you are a new member ? </p>

          <Link to="/register" className="text-purplecol hover:underline">
            sign up
          </Link>
        </div>
      </div>
      {/*
      <div className="relative w-full h-full m">
        <div className="relative w-full h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>

          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <p
            ref={textRef}
            className="font-playfair ml-[20px] absolute bottom-20 left-1/3 -translate-x-1/2 text-white text-center text-[20px]"
          >
            "Real estate is not about buying a home, it's about investing in
            your dreams and securing your future."
            <br />
            <span className="font-semibold">Jhon Doe</span>
          </p>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      */}
    </div>
  );
};

export default Login;
