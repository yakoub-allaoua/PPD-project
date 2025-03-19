import { Button } from "antd";
import React from "react";

const GreenButton = ({ text }) => {
  return (
    <Button
      type="primary"
      htmlType="submit"
      className="w-[90px] h-[35px] sm:w-[120px] sm:h-[42px] flex items-center font-semibold "
    >
      {text}
    </Button>
  );
};

export default GreenButton;
