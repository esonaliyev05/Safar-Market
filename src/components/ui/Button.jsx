import React from "react";

const Button = ({ label, onClick, isActive, activeColor, inactiveColor, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full font-medium transition ${className} ${
        isActive
          ? `bg-gradient-to-r ${activeColor} text-white shadow-lg`
          : `${inactiveColor} text-gray-700 hover:bg-gray-200`
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
