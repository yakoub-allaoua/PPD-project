import React, { useState } from "react";
import { Form, Input } from "antd";
import BigDarkButton from "../../ui/BigDarkButton";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Forgot from "./Forgot";
import { useDispatch } from "react-redux";
import { loginUser, signUpUser } from "../../features/user/userAPI";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { email, password } = values;
    const credentials = {
      email,
      password,
    };
    dispatch(loginUser(credentials));
  };

  return (
    <Form
      requiredMark={false}
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="mt-[15px] flex flex-col items-center w-full"
    >
      <div>
        <Form.Item
          label={<p className="font-title">Email</p>}
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
            className="h-[50px] w-[340px] sm:w-[500px]"
            placeholder="E-mail"
          />
        </Form.Item>

        <Form.Item
          label={
            <div className="flex flex-row justify-between w-full gap-[160px] sm:gap-[310px]">
              <p className="font-title">Password</p>
              <Link to="/forgotpassword">
                <button
                  type="button"
                  onClick={() => setActiveTab("forgotPassword")}
                  className=" text font-medium hover:underline text-[14px] text-textblack font-title "
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
            className="h-[50px] w-[340px] sm:w-[500px]"
            placeholder="Password"
          />
        </Form.Item>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <BigDarkButton text="Login" />
      </div>
    </Form>
  );
};

export default LoginForm;
