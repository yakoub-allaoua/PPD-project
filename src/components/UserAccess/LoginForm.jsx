import React, { useState } from "react";
import { Form, Input } from "antd";
import BigDarkButton from "../../ui/BigDarkButton";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Forgot from "./Forgot";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onFinish = (values) => {
  console.log(values);
};
const LoginForm = () => {
  return (
    <Form
      requiredMark={false}
      name="basic"
      layout="vertical"
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
          label={
            <div className="flex flex-row justify-between w-full gap-[160px]">
              <p>Password</p>
              <Link to="/forgotpassword">
                <button
                  type="button"
                  onClick={() => setActiveTab("forgotPassword")}
                  className=" text font-medium hover:underline text-[14px] text-textblack"
                >
                  forgot password?
                </button>
              </Link>
            </div>
          }
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
      </div>
      <div className="mt-4 w-full flex justify-center">
        <BigDarkButton text="Continue" />
      </div>
    </Form>
  );
};

export default LoginForm;
