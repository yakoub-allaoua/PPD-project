import React from "react";
import SingleHouse from "./SingleHouse";
import { IoLocationSharp } from "react-icons/io5";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { TbArrowsDiagonal2 } from "react-icons/tb";
import { FaKitchenSet } from "react-icons/fa6";
import { useState } from "react";
import image from "../assets/test/1.png";
import { FaHeart } from "react-icons/fa";
import { Button } from "antd";
import { BlueButton } from "../ui";
import { RequiredLogin } from "../components";
import ConfirmLogout from "../components/Error/ConfirmLogout";
const house = {
  selPrice: 7850000,
  rentPrice: 65000,
  mainImage: image,
  tile: "Primary villa",
  location: "Lebiar ,Algiers",
  numOfRooms: 5,
  numOfBathroom: 3,
  numOfKitchen: 2,
  Area: 200,
};
const AllHouses = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="align-element  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px] ">
      <div className=" w-[290px] sm:w-[350px]  border-greencol border-[3px] rounded-[10px] pb-[10px] flex flex-col gap-[15px] items-start shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-4 hover:border-purplecol ">
        <div className="relative w-full">
          <img
            src={house.mainImage}
            className="rounded-none w-full h-[230px] object-cover"
          />

          <button
            className="absolute top-3 right-3 text-white text-xl transition-all duration-300"
            onClick={() => setIsFavorite(!isFavorite)}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <FaHeart
              className={isFavorite ? "text-red-500" : "text-white opacity-60"}
            />
          </button>
          {isHovered && (
            <div className="absolute top-2 right-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
              {isFavorite ? "remove from favorites" : "add to favorites"}
            </div>
          )}
        </div>{" "}
        <div className="flex flex-col items-start ml-[10px] gap-[5px]">
          <h1 className="text-[20px] font-bold text-textblack"></h1>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <IoLocationSharp className="w-[20px] h-[20px] font-semibold text-bluecol" />
            <h1 className="text-[20px] font-bold text-textblack">
              {house.location}
            </h1>
          </div>
          <div className="mt-[10px] flex flex-col gap-[10px] items-start ml-[8px] ">
            <p className="text-purplecol  font-medium text-[15px] flex items-center">
              For sale :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.selPrice} DA
              </span>
            </p>
            <p className="text-purplecol font-medium text-[15px] flex items-center">
              For rent :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.rentPrice} DA
              </span>
              <span className="text-textblack font-light text-[16px] ml-1">
                {" "}
                /Month
              </span>
            </p>
          </div>

          <div className="mt-[5px] flex flex-row items-center gap-[20px]">
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <IoBed className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfRooms}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaBath className="w-[16px] h-[16px] " />
              </div>
              <p className="text-[13px] font-semibold ">
                {house.numOfBathroom}
              </p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaKitchenSet className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfKitchen}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <TbArrowsDiagonal2 className="w-[17px] h-[17px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.Area} m²</p>
            </div>
          </div>
        </div>
        <button className="border-[2px] border-bluecol rounded-[12px] w-[90px] h-[30px] transition-colors hover:border-purplecol ml-[95px] sm:ml-[120px] ">
          <p className="text-[14px] font-semibold text-bluecol transition-colors hover:text-purplecol">
            see more
          </p>
        </button>
      </div>
      <div className=" w-[290px] sm:w-[350px]  border-bluecol border-[3px] rounded-[10px] pb-[10px] flex flex-col gap-[15px] items-start shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-4 hover:border-purplecol ">
        <div className="relative w-full">
          <img
            src={house.mainImage}
            className="rounded-none w-full h-[230px] object-cover"
          />

          <button
            className="absolute top-3 right-3 text-white text-xl transition-all duration-300"
            onClick={() => setIsFavorite(!isFavorite)}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <FaHeart
              className={isFavorite ? "text-red-500" : "text-white opacity-60"}
            />
          </button>
          {isHovered && (
            <div className="absolute top-2 right-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
              {isFavorite ? "remove from favorites" : "add to favorites"}
            </div>
          )}
        </div>{" "}
        <div className="flex flex-col items-start ml-[10px] gap-[5px]">
          <h1 className="text-[20px] font-bold text-textblack"></h1>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <IoLocationSharp className="w-[20px] h-[20px] font-semibold text-bluecol" />
            <h1 className="text-[20px] font-bold text-textblack">
              {house.location}
            </h1>
          </div>
          <div className="mt-[10px] flex flex-col gap-[10px] items-start ml-[8px] ">
            <p className="text-purplecol  font-medium text-[15px] flex items-center">
              For sale :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.selPrice} DA
              </span>
            </p>
            <p className="text-purplecol font-medium text-[15px] flex items-center">
              For rent :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.rentPrice} DA
              </span>
              <span className="text-textblack font-light text-[16px] ml-1">
                {" "}
                /Month
              </span>
            </p>
          </div>

          <div className="mt-[5px] flex flex-row items-center gap-[20px]">
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <IoBed className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfRooms}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaBath className="w-[16px] h-[16px] " />
              </div>
              <p className="text-[13px] font-semibold ">
                {house.numOfBathroom}
              </p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaKitchenSet className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfKitchen}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <TbArrowsDiagonal2 className="w-[17px] h-[17px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.Area} m²</p>
            </div>
          </div>
        </div>
        <button className="border-[2px] border-bluecol rounded-[12px] w-[90px] h-[30px] transition-colors hover:border-purplecol ml-[95px] sm:ml-[120px] ">
          <p className="text-[14px] font-semibold text-bluecol transition-colors hover:text-purplecol">
            see more
          </p>
        </button>
      </div>
      <div className=" w-[290px] sm:w-[350px]  border-bluecol border-[3px] rounded-[10px] pb-[10px] flex flex-col gap-[15px] items-start shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-4 hover:border-purplecol ">
        <div className="relative w-full">
          <img
            src={house.mainImage}
            className="rounded-none w-full h-[230px] object-cover"
          />

          <button
            className="absolute top-3 right-3 text-white text-xl transition-all duration-300"
            onClick={() => setIsFavorite(!isFavorite)}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <FaHeart
              className={isFavorite ? "text-red-500" : "text-white opacity-60"}
            />
          </button>
          {isHovered && (
            <div className="absolute top-2 right-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
              {isFavorite ? "remove from favorites" : "add to favorites"}
            </div>
          )}
        </div>{" "}
        <div className="flex flex-col items-start ml-[10px] gap-[5px]">
          <h1 className="text-[20px] font-bold text-textblack"></h1>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <IoLocationSharp className="w-[20px] h-[20px] font-semibold text-bluecol" />
            <h1 className="text-[20px] font-bold text-textblack">
              {house.location}
            </h1>
          </div>
          <div className="mt-[10px] flex flex-col gap-[10px] items-start ml-[8px] ">
            <p className="text-purplecol  font-medium text-[15px] flex items-center">
              For sale :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.selPrice} DA
              </span>
            </p>
            <p className="text-purplecol font-medium text-[15px] flex items-center">
              For rent :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.rentPrice} DA
              </span>
              <span className="text-textblack font-light text-[16px] ml-1">
                {" "}
                /Month
              </span>
            </p>
          </div>

          <div className="mt-[5px] flex flex-row items-center gap-[20px]">
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <IoBed className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfRooms}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaBath className="w-[16px] h-[16px] " />
              </div>
              <p className="text-[13px] font-semibold ">
                {house.numOfBathroom}
              </p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaKitchenSet className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfKitchen}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <TbArrowsDiagonal2 className="w-[17px] h-[17px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.Area} m²</p>
            </div>
          </div>
        </div>
        <button className="border-[2px] border-bluecol rounded-[12px] w-[90px] h-[30px] transition-colors hover:border-purplecol ml-[95px] sm:ml-[120px] ">
          <p className="text-[14px] font-semibold text-bluecol transition-colors hover:text-purplecol">
            see more
          </p>
        </button>
      </div>
      <div className=" w-[290px] sm:w-[350px]  border-bluecol border-[3px] rounded-[10px] pb-[10px] flex flex-col gap-[15px] items-start shadow-md transition-all duration-500 hover:shadow-lg hover:-translate-y-4 hover:border-purplecol ">
        <div className="relative w-full">
          <img
            src={house.mainImage}
            className="rounded-none w-full h-[230px] object-cover"
          />

          <button
            className="absolute top-3 right-3 text-white text-xl transition-all duration-300"
            onClick={() => setIsFavorite(!isFavorite)}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <FaHeart
              className={isFavorite ? "text-red-500" : "text-white opacity-60"}
            />
          </button>
          {isHovered && (
            <div className="absolute top-2 right-10 bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
              {isFavorite ? "remove from favorites" : "add to favorites"}
            </div>
          )}
        </div>{" "}
        <div className="flex flex-col items-start ml-[10px] gap-[5px]">
          <h1 className="text-[20px] font-bold text-textblack"></h1>
          <div className="flex flex-row items-center justify-center gap-[4px]">
            <IoLocationSharp className="w-[20px] h-[20px] font-semibold text-bluecol" />
            <h1 className="text-[20px] font-bold text-textblack">
              {house.location}
            </h1>
          </div>
          <div className="mt-[10px] flex flex-col gap-[10px] items-start ml-[8px] ">
            <p className="text-purplecol  font-medium text-[15px] flex items-center">
              For sale :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.selPrice} DA
              </span>
            </p>
            <p className="text-purplecol font-medium text-[15px] flex items-center">
              For rent :{" "}
              <span className="font-normal text-[18px] text-textblack ml-1">
                {house.rentPrice} DA
              </span>
              <span className="text-textblack font-light text-[16px] ml-1">
                {" "}
                /Month
              </span>
            </p>
          </div>

          <div className="mt-[5px] flex flex-row items-center gap-[20px]">
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <IoBed className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfRooms}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaBath className="w-[16px] h-[16px] " />
              </div>
              <p className="text-[13px] font-semibold ">
                {house.numOfBathroom}
              </p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <FaKitchenSet className="w-[18px] h-[18px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.numOfKitchen}</p>
            </div>
            <div className=" px-[4px] py-[2px] text-purplecol rounded-[8px] flex flex-row gap-[8px] items-center">
              <div className="bg-bggray rounded-full p-[3px]">
                <TbArrowsDiagonal2 className="w-[17px] h-[17px] " />
              </div>
              <p className="text-[13px] font-semibold ">{house.Area} m²</p>
            </div>
          </div>
        </div>
        <button className="border-[2px] border-bluecol rounded-[12px] w-[90px] h-[30px] transition-colors hover:border-purplecol ml-[95px] sm:ml-[120px] ">
          <p className="text-[14px] font-semibold text-bluecol transition-colors hover:text-purplecol">
            see more
          </p>
        </button>
      </div>
    </div>
  );
};

export default AllHouses;
