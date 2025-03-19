import React, { useState, useEffect, useRef } from "react";
import RentForm from "./RentForm";
import { Select } from "antd";
import { DatePicker } from "antd";
import { gsap } from "gsap";

const options = [
  { value: 3, label: "3 months" },
  { value: 6, label: "6 months" },
  { value: 12, label: "1 year" },
  { value: 24, label: "2 years" },
  { value: 36, label: "3 years" },
];

const Step2Rent = () => {
  const [duration, setDuration] = useState(3);
  const rentPrice = 650000;
  const total = rentPrice * duration;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value) => {
    setDuration(value);
  };

  // Refs for animations
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -30,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      opacity: 0,
      x: -50,
      duration: 1.5,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(infoRef.current, {
      opacity: 0,
      x: 50,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[20px]">
        <h1
          ref={titleRef}
          className="text-textblack text-[20px] sm:text-[38px] font-bold"
        >
          Request to Rent This House
        </h1>

        <div className="mt-[40px] flex flex-col items-center sm:flex-row sm:items-start justify-evenly sm:gap-[300px]">
          <div ref={formRef}>
            <RentForm />
          </div>
          <div ref={infoRef} className="flex flex-col items-start gap-[15px]">
            <h2 className="text-textblack text-[16px] font-semibold">
              Rental start date
            </h2>
            <DatePicker
              style={{
                width: 200,
                height: 35,
              }}
              onChange={onChange}
            />
            <h2 className="text-textblack text-[16px] font-semibold mt-[15px]">
              Rental duration
            </h2>
            <Select
              defaultValue={3}
              style={{
                width: 200,
                height: 35,
              }}
              allowClear
              options={options}
              onChange={handleChange}
            />
            <div className="flex flex-col items-start gap-[10px] mt-[35px]">
              <h1 className="text-[18px] text-purplecol font-semibold">
                rent price :
                <span className="font-medium text-textblack">{rentPrice}</span>
                DA
              </h1>
              <h1 className="text-[18px] text-purplecol font-semibold">
                total :
                <span className="font-medium text-textblack ">{total} </span>
                DA
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2Rent;
