import React, { useState } from "react";
import { Button, Steps, theme } from "antd";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import FirstStep from "./FirsStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const steps = [
  {
    title: <span className="text-base font-medium"> </span>,
    content: <FirstStep />,
  },
  {
    title: <span className="text-base font-medium"> </span>,
    content: <SecondStep />,
  },
  {
    title: <span className="text-base font-medium"> </span>,
    content: <ThirdStep />,
  },
  {
    title: <span className="text-base font-medium"> </span>,
    content: <FourthStep />,
  },
  { title: <span className="text-base font-medium"> </span> },
  { title: <span className="text-base font-medium"> </span> },
];

const All = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
    message.success("Moved to next step!");
  };

  const prev = () => {
    setCurrent(current - 1);
    message.info("Moved to previous step!");
  };

  const items = steps.map((item, index) => ({
    key: index,
    title: item.title,
  }));

  const contentStyle = {
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
    padding: 24,
  };

  return (
    <>
      <Steps
        current={current}
        progressDot={(dot, { index, status }) => {
          const isActive = index <= current;
          return (
            <div
              className={`w-[24px] h-[24px] rounded-full ml-[-7px] mt-[-6px] ${
                isActive ? "bg-greencol" : "bg-gray-300"
              }`}
            />
          );
        }}
        items={items}
        className="
                  [&_.ant-steps-icon-dot]:!ml-[-8px]
                  [&_.ant-steps-icon-dot]:!mt-[-6px]

          [&_.ant-steps-icon-dot]:!w-[24px]
          [&_.ant-steps-icon-dot]:!h-[24px]
          [&_.ant-steps-icon-dot]:!rounded-full
          [&_.ant-steps-icon-dot]:!bg-gray-300

          [&_.ant-steps-item-process_.ant-steps-icon-dot]:!bg-primary
        "
      />

      <div style={contentStyle}>{steps[current].content}</div>

      <div
        className="flex flex-row items-center justify-center gap-[20px]"
        style={{ marginTop: 24 }}
      >
        {current > 0 && (
          <Button
            onClick={prev}
            className="!bg-textblack !text-white transition-colors hover:!bg-secblack w-[120px] h-[50px] rounded-[25px]"
          >
            <FaArrowLeftLong className="text-white w-[20px] h-[20px]" />
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            onClick={next}
            className="!bg-textblack !text-white transition-colors hover:!bg-secblack w-[120px] h-[50px] rounded-[25px]"
          >
            <FaArrowRightLong className="text-white w-[20px] h-[20px]" />
          </Button>
        )}
      </div>
    </>
  );
};

export default All;
