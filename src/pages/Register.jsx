import React, { useEffect, useRef } from "react";
import img from "../assets/loginpage.jpg";
import LoginForm from "../components/UserAccess/LoginForm";
import Title from "../components/Title";
import gsap from "gsap";
import RegisterForm from "../components/UserAccess/RegisterForm";
import { Link } from "react-router-dom";
const Register = () => {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.from(textRef.current, {
      x: 200,
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
      {/* Form Section */}
      <div
        ref={formRef}
        className="flex flex-col items-center justify-start mt-[70px] gap-[20px] p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center ">
          Sign up
        </h1>
        <RegisterForm />
        <div className="flex flex-row gap-[10px] items-center ">
          <p className="text-textblack ">already a member ? </p>

          <Link to="/login" className="text-purplecol hover:underline">
            sign in
          </Link>
        </div>
      </div>

      {/* Background Image Section (Hidden on Small Screens) */}
      <div className="relative w-full h-full hidden md:block">
        <div className="relative w-full h-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Text at the bottom */}

          <p
            ref={textRef}
            className="font-playfair ml-[20px] absolute bottom-20 left-1/3 -translate-x-1/2 text-white text-center text-[20px]"
          >
            "Real estate is not about buying a home, it's about investing in
            your dreams and securing your future."
            <br />
            <span className="font-semibold"> Jhon Doe</span>
          </p>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </div>
  );
};

export default Register;
