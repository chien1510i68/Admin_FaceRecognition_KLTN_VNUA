import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import FormUploadFileExcel from "../../Component/formupload/FormUploadFileExcel";
import ModalCreateQR from "../../Component/Modal/ModalCreateQR";
function CreateQR(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState(null);
  const onFinish = (values) => {
    console.log("Success:", values);
    setIsOpen(true);
    setLink(
      `http://localhost:3000/?classId=${values?.classcode}&group=${values.group}`
    );
  };
  const onCancel = () => {
    setIsOpen(false);
  };
  return (
    <div className="h-[100vh] relative">
      <Form
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        className="w-1/2 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-sm mx-auto my-auto px-4 py-3 bg-slate-500"
      >
        <h2 className="font-medium text-lg text-center text-slate-200">
          Tạo mã QR cho buổi học{" "}
        </h2>
        <Form.Item
          label="Mã lớp học"
          name="classcode"
          rules={[
            {
              required: true,
              message: "Please input your class code !",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nhóm học "
          name="group"
          rules={[
            {
              required: true,
              message: "Please input your study group!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <div className="">
            <FormUploadFileExcel />
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            className="block ml-auto bg-lime-500"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>

      <ModalCreateQR
        isOpen={isOpen}
        onCancel={onCancel}
        link={link}
       
      />
    </div>
  );
}

export default CreateQR;
