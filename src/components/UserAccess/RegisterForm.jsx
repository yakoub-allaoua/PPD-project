import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { DarkButton } from "../../ui";
import BigDarkButton from "../../ui/BigDarkButton";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../features/user/userAPI";

const { Option } = Select;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const { name, email, phone, password, passwordConfirm } = values;
    const userData = {
      name,
      email,
      phone,
      password,
      passwordConfirm,
      role: "user",
    };
    dispatch(signUpUser(userData));
  };

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
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-[30px] md:mt-[5px]">
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
          className="w-full"
        >
          <Input
            prefix={
              <FaUserAlt className="text-greencol w-[17px] h-[17px] mr-[12px]" />
            }
            className="h-[50px] w-[340px] sm:w-[240px]"
            placeholder="Full Name"
          />
        </Form.Item>
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
            className="h-[50px] w-[340px] sm:w-[240px]"
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
          className="w-full"
        >
          <Input
            prefix={
              <FaPhoneAlt className="text-greencol w-[18px] h-[18px] mr-[10px]" />
            }
            className="h-[50px] w-[340px] sm:w-[240px]"
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
            className="h-[50px] w-[340px] sm:w-[240px]"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          label="Confirm password"
          name="passwordConfirm"
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
            className="h-[50px] w-[340px] sm:w-[240px]"
            placeholder="Confirm password"
          />
        </Form.Item>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <BigDarkButton htmlType="submit" text="Continue" />
      </div>
    </Form>
  );
};

export default RegisterForm;
