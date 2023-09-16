import React from 'react';

const InputTextReadOnly = ({
  label,
  styleInput,
  styleLable,
  value,
  readonly,
  setApartmentNumber,
}) => {
  return (
    <div>
      <div className={`flex flex-col mb-[14px]  ${styleLable}`}>
        <label className="font-bold">{label}</label>
        <input
          onChange={(e) => setApartmentNumber(e.target.value)}
          type="text"
          className={`overflow-x-auto focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-[0.25rem] border-[#ced4da] my-2 py-[0.375rem] px-[0.75rem] text-[1rem] bg-[#e9ecef] ${styleInput} `}
          name="street_number"
          id="street_number"
          value={value || ''}
          readOnly
        ></input>
      </div>
    </div>
  );
};

export default InputTextReadOnly;
