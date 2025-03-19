import React from "react";
import { ImagesScroll, Offer } from "../components";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { TbArrowsDiagonal2 } from "react-icons/tb";
import { FaRegSnowflake } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { TbBeach } from "react-icons/tb";
import { PiFirstAidKitFill } from "react-icons/pi";
import heatIcon from "../assets/heatIcont.png";
import { MdElectricBolt } from "react-icons/md";
import { PiOvenLight } from "react-icons/pi";
import { MdNaturePeople } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { RiAlarmWarningLine } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import { TbParkingCircleFilled } from "react-icons/tb";
const house = {
  location: "Parc Donia Bouchbok - Dely Brahim -Alger",
  description: "Vente Appartement Boumerdes Thenia",
  numOfRooms: 5,
  numOfBathroom: 3,
  numOfKitchen: 2,
  Area: 200,
  price: 5000000,
  garageCapacity: 2,
  sold: false,
  visibleHouse: true,
  centralHeating: true,
  alarmsAndSecurity: true,
  fireDetector: true,
  parking: true,
  electricity: true,
  gaz: true,
  closeToTransportation: true,
  closeToBeatch: true,
  natureView: true,
};
const SingleHouse = () => {
  return (
    <div className="align-element flex flex-col sm:flex-row gap-[50px]">
      <div className="mt-[100px]  flex flex-col sm:flex-row gap-[50px]">
        <div className="sm:w-[900px] flex flex-col items-centre ">
          <ImagesScroll />
          <div className="flex flex-col items-start gap-[20px] mt-[25px] ">
            <h1 className="text-[18px] font-semibold sm:text-[28px] text-textblack ">
              {house.description}
            </h1>
            <div className="flex flex-rwo gap-[10px] items-center text-center   ">
              <CiLocationOn className="w-[25px] h-[25px] text-textgray font-bold " />
              <h1 className="text-[14px] text-center sm:text-[16px] text-textgray ">
                {house.location}
              </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[18px] items-center w-auto  ">
              <div className="bg-bggreen px-[16px] py-[8px] text-greencol rounded-[8px] flex flex-row gap-[8px]">
                <IoBed className="w-[20px] h-[20px] " />
                <p className="text-[13px] font-semibold ">
                  {house.numOfRooms} bedroom
                </p>
              </div>
              <div className="bg-bggreen px-[16px] py-[8px] text-greencol rounded-[8px] flex flex-row gap-[8px]">
                <FaBath className="w-[18px] h-[16px] " />
                <p className="text-[13px] font-semibold ">
                  {house.numOfBathroom} bathroom
                </p>
              </div>
              <div className="bg-bggreen px-[16px] py-[8px] text-greencol rounded-[8px] flex flex-row gap-[8px]">
                <FaKitchenSet className="w-[18px] h-[18px] " />
                <p className="text-[13px] font-semibold ">
                  {house.numOfKitchen} kitchen
                </p>
              </div>
              <div className="bg-bggreen px-[16px] py-[8px] text-greencol rounded-[8px] flex flex-row gap-[8px]">
                <TbArrowsDiagonal2 className="w-[18px] h-[18px] " />
                <p className="text-[13px] font-semibold ">{house.Area} m²</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[16px] font-semibold text-textblack mt-[20px] flex flex-col gap-[15px]">
                Heating and Air Conditioning
              </h1>
              <div className="grid grid-cols-2 items-center gap-[30px]">
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <FaRegSnowflake className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">Central heating</p>
                </div>
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <FaRegSnowflake className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">Air conditioning</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[16px] font-semibold text-textblack mt-[20px] flex flex-col gap-[15px]">
                House security
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-[30px]">
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <PiFirstAidKitFill className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">First aid kit</p>
                </div>
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <RiAlarmWarningLine className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">Security alarm</p>
                </div>
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <FaFire className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">Fire detector</p>
                </div>
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <GiCctvCamera className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">Camera</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[16px] font-semibold text-textblack mt-[20px] flex flex-col gap-[15px]">
                Services
              </h1>
              <div className="grid grid-cols-2 items-center gap-[30px]">
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <MdElectricBolt className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">Electricity</p>
                </div>
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px] justify-center">
                  <PiOvenLight className="w-[20px] h-[20px]  " />
                  <p className="text-[13px] font-medium ">Gaz</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-[16px] font-semibold text-textblack mt-[20px] flex flex-col gap-[15px]">
                Location specifications
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-[30px]">
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row justify-center gap-[8px]  ">
                  <TbParkingCircleFilled className="w-[18px] h-[18px] " />
                  <p className="text-[13px] font-medium ">Parking</p>
                </div>
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <MdNaturePeople className="w-[20px] h-[20px]  " />
                  <p className="text-[13px] font-medium ">Panoramic view</p>
                </div>
                <div className="bg-bggray px-[16px] py-[8px] text-textblack rounded-[8px] flex flex-row gap-[8px]">
                  <TbBeach className="w-[20px] h-[20px]  " />
                  <p className="text-[13px] font-medium ">Close to the beach</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[5px] mt-[20px]">
              <h1 className="text-[16px] font-semibold text-textblack ">
                Description:
              </h1>
              <p className="text-[14px] font-semibold text-textgray ">
                {house.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <Offer />
        </div>
      </div>
    </div>
  );
};

export default SingleHouse;
