import { Button, ConfigProvider } from "antd";
import React from "react";

const themeDarkGray = {
  token: {
    colorPrimary: "#414141",
    colorPrimaryHover: "#5A5A5A", // Slightly lighter gray for hover
  },
};

const BigDarkButton = ({ text }) => {
  return (
    <ConfigProvider theme={themeDarkGray}>
      <Button
        htmlType="submit"
        type="primary"
        className=" w-[340px] h-[53px] flex items-center font-semibold"
      >
        {text}
      </Button>
    </ConfigProvider>
  );
};

export default BigDarkButton;
