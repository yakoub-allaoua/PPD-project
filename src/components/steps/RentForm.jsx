import React from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { DarkButton } from "../../ui";
import BigDarkButton from "../../ui/BigDarkButton";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const { Option } = Select;
import { MdDriveFileRenameOutline } from "react-icons/md";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onFinish = (values) => {
  console.log(values);
};

const RentForm = () => {
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
          label="full name"
          name="fullName"
          rules={[
            { type: "text", message: "" },
            { required: true, message: "Please input your full name!" },
          ]}
          className="w-full"
        >
          <Input
            prefix={
              <MdDriveFileRenameOutline className="text-greencol w-[20px] h-[18px] mr-[12px]" />
            }
            className="h-[50px] w-[300px]"
            placeholder="full name"
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
            className="h-[50px] w-[300px]"
            placeholder="E-mail"
          />
        </Form.Item>

        <Form.Item
          label="Phone number"
          name="phoneNumber"
          rules={[
            { type: "email", message: "" },
            { required: true, message: "Please input your phone number" },
          ]}
          className="w-full"
        >
          <Input
            prefix={
              <FaPhoneAlt className="text-greencol w-[20px] h-[18px] mr-[12px]" />
            }
            className="h-[50px] w-[300px]"
            placeholder="phone number"
          />
        </Form.Item>
      </div>
      <div className="mt-4 w-full flex justify-center">
        <DarkButton text="confirm" />
      </div>
    </Form>
  );
};

export default RentForm;
