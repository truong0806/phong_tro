import React from 'react';

const inputText = ({ label, styleInput, styleLable , valueInput, readonly}) => {
  return (
    <div>
      <div className={`flex flex-col mb-[14px] ${styleLable}`}>
        <label  className="font-bold">
          {label}
        </label>
        <input
          type="text"
          className={`focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-[0.25rem] border-[#ced4da] my-2 py-[0.375rem] px-[0.75rem] text-[1rem] ${styleInput} `}
          name="street_number"
          id="street_number"
          defaultValue={valueInput ? valueInput : ''}
          readOnly={`${readonly && 'readonly'}`}
        ></input>
      </div>
    </div>
  );
};

export default inputText;
