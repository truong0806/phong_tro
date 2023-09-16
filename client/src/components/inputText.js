import React from 'react';

const inputText = ({ label, styleInput, styleLable, value, setValue, typeInput }) => {
  return (
    <div>
      <div className={`flex flex-col mb-[14px] `}>
        <label className={`font-bold whitespace-nowrap ${styleLable}`}>
          {label}
        </label>
        <input
          onChange={(e) => setValue(e.target.value)}
          type={typeInput}
          className={`focus:ring-[rgba(0,123,255,.25)] text-[0.8rem] focus:border-[#80bdff] rounded-[0.25rem] border-[#ced4da] my-2 py-[0.375rem] px-[0.75rem] ${styleInput} `}
          name="street_number"
          id="street_number"
          value={value || ''}
        ></input>
      </div>
    </div>
  );
};

export default inputText;
