import React from "react";
import { Form, Input, Typography } from "antd";
import BigDarkButton from "../../ui/BigDarkButton";

const { Title } = Typography;

const onInput = (value) => {
  console.log("onInput:", value);
};

const onChange = (value) => {
  console.log("onChange:", value);
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const sharedProps = {
  onChange,
  onInput,
};

const ForgotCode = () => {
  return (
    <Form
      requiredMark={false}
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex mt-[30px] flex-col items-center w-full"
    >
      {" "}
      <h1 className="mb-[20px] font-medium">
        please input the confirmation code sent to you email
      </h1>{" "}
      <Form.Item
        name="otp"
        rules={[
          { required: true, message: "Please enter the 6-digit code!" },
          { len: 6, message: "Code must be exactly 6 digits!" },
        ]}
      >
        <Input.OTP
          {...sharedProps}
          length={6}
          size="large"
          inputType="numeric"
          className="flex justify-center"
        />
      </Form.Item>
      <div className="mt-6 w-full flex justify-center">
        <BigDarkButton text="confirm" />
      </div>
    </Form>
  );
};

export default ForgotCode;
