import React from "react";

const Button = ({ text, bgcolor, textColor }) => {
  return (
    <button
      type="button"
      className={`py-2 px-4 ${bgcolor} ${textColor} outline-none rounded-md justify-between hover:underline`}
    >
      {text}
    </button>
  );
};

export default Button;
