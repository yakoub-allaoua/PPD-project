import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import image from "../../assets/Price.png";
import { Button, Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SecondStep = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const rentRef = useRef(null);
  const buyRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 0.8 },
    });

    tl.from(headingRef.current, { opacity: 0, y: -30 })
      .from(paragraphRef.current, { opacity: 0, y: -20 }, "-=0.5")
      .from(
        [rentRef.current, buyRef.current],
        {
          opacity: 0,
          scale: 0.5,
          stagger: 0.2,
        },
        "-=0.3"
      )
      .from(formRef.current, { opacity: 0, y: -30 });
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center gap-[10px] sm:gap-[20px]">
        <h1
          ref={headingRef}
          className="text-textblack text-[20px] sm:text-[40px] font-bold"
        >
          Add Price
        </h1>

        <p
          ref={paragraphRef}
          className="text-[18px] text-textgray font-light text-center"
        >
          Now ,let's determine the price for you property .
          <br /> Enter a competitive and reasonable price to make your listing
          more appealing <br /> If you are{" "}
          <strong className="font-bold">renting</strong> the house , enter the
          price of rent for a month
        </p>

        <div className="flex flex-col sm:flex-row gap-[40px] items-center sm:gap-[200px] mt-[20px] sm:mt-[50px]">
          <div ref={formRef}>
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
            >
              <Form.Item
                labelCol={{ span: 24 }}
                label={
                  <p className="font-title font-semibold text-[16px] text-textblack">
                    Price
                  </p>
                }
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  suffix={
                    <span className="text-greencol text-[14px] font-medium">
                      DA
                    </span>
                  }
                  placeholder="Price"
                  className="h-[45px] w-[320px]"
                />
              </Form.Item>
            </Form>
          </div>

          <img
            ref={rentRef}
            className="h-[80px] w-[80px] sm:w-[150px] sm:h-[150px]"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
