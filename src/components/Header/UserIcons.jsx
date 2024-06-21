import { AccountCircle, Favorite, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import ButtonComponent from "./ButtonComponent";

const UserIcons = () => {
  return (
    <div className="flex gap-8 items-center">
      <AccountCircle fontSize="large" />
      <div className="relative">
        <ShoppingCart fontSize="large" />
        <div className="absolute -top-1 -right-1  bg-red-600 text-white flex items-center justify-center rounded-full w-5 h-5">0
        </div>
      </div>
      <Favorite fontSize="large" />
      <ButtonComponent>
        <p className="px-2">Login</p>
        
      </ButtonComponent>
    </div>
  );
};

export default UserIcons;
