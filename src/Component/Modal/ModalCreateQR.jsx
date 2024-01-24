import { Modal, QRCode, Space, notification } from "antd";
import React from "react";

function ModalCreateQR({ isOpen, onCancel, link }) {
  const onScan = () =>{
    notification.success({message: "Scan success"})
    console.log("Scanned data");
    localStorage.setItem("demo" , JSON.stringify("Khong co thong tin nao ca "))
  }
  return (
    <Modal open={isOpen} onCancel={onCancel} footer={null} maskClosable={false}>
      <h2 className="font-medium text-center text-lg mb-5">
        Mã QR cho buổi học
      </h2>
  
        <QRCode value={link || "-"}  size={300} className="mx-auto"/>
    </Modal>
  );
}

export default ModalCreateQR;
