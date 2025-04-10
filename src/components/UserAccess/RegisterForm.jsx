import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { DarkButton } from "../../ui";
import BigDarkButton from "../../ui/BigDarkButton";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const { Option } = Select;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onFinish = (values) => {
  console.log(values);
};

const RegisterForm = () => {
  return (
    <Form
      requiredMark={false}
      name="basic"
      layout="vertical" /* Improves label positioning */
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-col items-center w-full"
    >
      <div>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Please enter a valid email!" },
            { required: true, message: "Please input your email!" },
          ]}
          className="w-full"
        >
          <Input
            prefix={
              <MdEmail className="text-greencol w-[20px] h-[18px] mr-[12px]" />
            }
            className="h-[50px] w-[340px]"
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            { type: "email", message: "Please enter your phone number" },
            { required: true, message: "Please input your phone number!" },
          ]}
          className="w-full"
        >
          <Input
            prefix={
              <FaPhoneAlt className="text-greencol w-[18px] h-[18px] mr-[10px]" />
            }
            className="h-[50px] w-[340px]"
            placeholder="Phone number"
          />
        </Form.Item>

        <Form.Item
          label="Password"
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
            className="h-[50px] w-[340px]"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="ConfirmPassword"
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
            className="h-[50px] w-[340px]"
            placeholder="Confirm password"
          />
        </Form.Item>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <BigDarkButton text="Continue" />
      </div>
    </Form>
  );
};

export default RegisterForm;
