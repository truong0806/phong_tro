import React from "react";

const InputForm = ({label, style, styleInput}) => {
  return (
    <div className="flex-col">
      <label htmlFor="phone" className={`${style}`}>{label}</label>
      <input type="text" id="phone" className={`${styleInput}`} />
    </div>
  );
};

export default InputForm;
