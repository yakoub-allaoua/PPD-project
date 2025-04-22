import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Rent from "../../assets/Rent.png";
import buy from "../../assets/buy.png";
import house from "../../assets/hm.png";
import appartement from "../../assets/appartment.png";
import studio from "../../assets/studio.png";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const ThirdStep = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const rentRef = useRef(null);
  const buyRef = useRef(null);
  const Sref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
    });

    tl.from(headingRef.current, { opacity: 0, y: -30 })
      .from(paragraphRef.current, { opacity: 0, y: -20 }, "-=0.5")
      .from(
        [rentRef.current, buyRef.current, Sref.current],
        {
          opacity: 0,
          scale: 0.5,
          stagger: 0.2,
        },
        "-=0.3"
      );
  }, []);

  return (
    <div className="flex flex-col items-center gap-[10px] sm:gap-[20px]">
      <h1
        ref={headingRef}
        className="text-textblack text-[20px] sm:text-[40px] font-bold"
      >
        Property Details
      </h1>

      <p
        ref={paragraphRef}
        className="text-[18px] text-textgray font-light text-center"
      >
        Let's make your property shine! <br /> Choose the type of the property
        and fill in these key details to attract the right buyers of renters{" "}
        <br />
      </p>
      <Form
        requiredMark={false}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="mt-[30px] flex flex-col sm:flex-row gap-[15px] sm:gap-[30px] items-center justify-center"
      >
        <Form.Item
          labelCol={{ span: 24 }}
          label={
            <p className="font-title font-semibold text-[16px] text-textgray ml-[140px]">
              Title
            </p>
          }
          name="title"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Title" className="h-[45px] w-[320px]" />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          label={
            <p className="font-title font-semibold text-[16px] text-textgray ml-[120px]">
              Address
            </p>
          }
          name="address"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Address" className="h-[45px] w-[320px]" />
        </Form.Item>
      </Form>
      <h1 className="text-textgray text-[17px] font-semibold">Property Type</h1>
      <div className="flex flex-row gap-[150px] mt-[20px] sm:mt-[20px]">
        <button className="cursor-pointer" ref={rentRef}>
          <div className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] rounded-full flex flex-col items-center justify-center bg-bggray transition-colors hover:bg-greencol ">
            <img
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
              src={studio}
            />
            <p className="text-[12px] sm:text-[17px] font-bold text-textgray transition-colors  ">
              Studio
            </p>
          </div>
        </button>

        <button className="cursor-pointer" ref={Sref}>
          <div className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] rounded-full flex flex-col items-center justify-center bg-bggray transition-colors hover:bg-greencol">
            <img
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
              src={appartement}
            />
            <p className="text-[12px] sm:text-[17px] font-bold text-textgray transition-colors  ">
              Apartment
            </p>
          </div>
        </button>
        <button className="cursor-pointer" ref={buyRef}>
          <div className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] rounded-full flex flex-col items-center justify-center bg-bggray transition-colors hover:bg-greencol">
            <img
              className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
              src={house}
            />
            <p className="text-[12px] sm:text-[17px] font-bold text-textgray transition-colors  ">
              House
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ThirdStep;
