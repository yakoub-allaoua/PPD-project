import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { DarkButton, GreenButton } from "../../ui";
import BigDarkButton from "../../ui/BigDarkButton";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
const { Option } = Select;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onFinish = (values) => {
  console.log(values);
};
const user = {
  name: "yaakoub",
  email: "yakoub@gmail.com",
  phone: "0795802365",
  password: "anayakoub2",
};
const ResetPass = () => {
  return (
    <Form
      requiredMark={false}
      name="update-info"
      layout="vertical"
      onFinish={onFinish} // Function to handle update submission
      autoComplete="off"
      className="flex flex-col items-center w-full"
    >
      <div>
        <Form.Item
          label="Current password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
          className="w-full"
        >
          <Input.Password
            prefix={
              <FaLock className="text-greencol w-[20px] h-[17px] mr-[12px]" />
            }
            className="h-[50px] w-[320px]"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
          className="w-full"
        >
          <Input.Password
            prefix={
              <FaLock className="text-greencol w-[20px] h-[17px] mr-[12px]" />
            }
            className="h-[50px] w-[320px]"
            placeholder="newPassword"
          />
        </Form.Item>
        <Form.Item
          label="New password confirm"
          name="ConfirmNewPassword"
          rules={[
            { required: true, message: "Please confirm your password!" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
          className="w-full"
        >
          <Input.Password
            prefix={
              <FaLock className="text-greencol w-[20px] h-[17px] mr-[12px]" />
            }
            className="h-[50px] w-[320px]"
            placeholder="Confirm password"
          />
        </Form.Item>
      </div>

      <div className="mt-4 w-full flex justify-center">
        <Button
          htmlType="submit"
          color="primary"
          className="w-[320px] h-[50px]"
          variant="solid"
        >
          <p className="font-bold text-[16px]">Reset</p>
        </Button>{" "}
      </div>
    </Form>
  );
};

export default ResetPass;
