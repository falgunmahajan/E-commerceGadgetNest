import { AccountCircle, Favorite, ShoppingCart } from "@mui/icons-material";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Modal from "../PopUpModal/Modal";
import Auth from "../Authentication/Auth";

const UserIcons = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex gap-8 items-center">
        <AccountCircle fontSize="large" />
        <div className="relative">
          <ShoppingCart fontSize="large" />
          <div className="absolute -top-1 -right-1  bg-red-600 text-white flex items-center justify-center rounded-full w-5 h-5">
            0
          </div>
        </div>
        <Favorite fontSize="large" />
        <ButtonComponent
          style="rounded-full"
          onClick={() => setShowModal(true)}
        >
          Login
        </ButtonComponent>
        {showModal && (
          <Modal close={() => setShowModal(false)} Component={Auth} />
        )}
      </div>
    </>
  );
};

export default UserIcons;
