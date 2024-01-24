import React, { useEffect, useState } from "react";
import { disTanceTwoPoint, getUserPosition } from "./handleLogicQR";
import { Button, notification } from "antd";
import ModelCreateQR from "../../Component/Modal/ModalCreateQR";
import { Outlet } from "react-router";

function PageQR(props) {
  const [position, setPosition] = useState(null);
  const [title, setTile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const onCancel = () => {
    setIsOpen(false);
  };

  const handleGetPositionUser = async () => {
    try {
      const positionUser = await getUserPosition();
      setPosition(positionUser);
    } catch (error) {
      notification.error({ message: "Error identify position user " });
    }
  };
  const calculateDistance = (l1, l2) => {
    if (position) {
      const d = disTanceTwoPoint(position.latitude, l1, position.longitude, l2);
      setTile(
        d < 100
          ? "Nam trong khoang cach"
          : "Khong nam trong khoang cach cho phep"
      );
    }
  };

  useEffect(() => {
    handleGetPositionUser();
  }, []);

  //   useEffect(() => {
  //     // Gọi hàm tính toán khoảng cách sau khi state position được cập nhật
  //     calculateDistance(20.9994708, 105.7204679);
  //   }, [position]);
  return (
    <div>
      {position && (
        <>
          <h2>Kinh độ : {position.longitude}</h2>
          <h2>Vĩ độ : {position.latitude}</h2>
          <h2>{title}</h2>
          <Button onClick={() => setIsOpen(true)}>Create</Button>
        </>
      )}
      <ModelCreateQR isOpen={isOpen} onCancel={onCancel} />
      
    </div>
  );
}

export default PageQR;
