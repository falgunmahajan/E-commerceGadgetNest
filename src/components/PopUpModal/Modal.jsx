import { CancelOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ Component, close }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const modalDiv = document.querySelector("#popUpModal");
  return createPortal(
    <div className="  flex columns items-center justify-center fixed inset-0">
      <div className="w-[25%] h-[50%] relative">
        <CancelOutlined className="absolute -right-1 -top-7 shadow-sm z-1" onClick={close}/>
        <Component />
      </div>
    </div>,
    modalDiv
  );
};

export default Modal;
