import React from "react";

const ButtonComponent = ({ children, onClick, style }) => (
  <button
    className={`bg-red-600 ${style} text-white px-4 py-1  `}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ButtonComponent;
