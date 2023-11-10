import React from 'react';

const HorizontalInput = ({
  type,
  name,
  label,
  value,
  setValue,
  readOnly,
  styleInput,
  setInvalidFields,
  invalidFields,
  keyPayload,
}) => {
  return (
    <>
      <label className="block whitespace-nowrap mt-[0.5rem] text-gray-700 text-sm font-bold">
        {label}
      </label>
      <div className={`${styleInput}`}>
        <input
          type={type || 'text'}
          value={value}
          readOnly={readOnly}
          className={`${
            readOnly && 'bg-[#e9ecef]'
          } shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 mb-3 leading-tight focus:border-[#80bdff] `}
          id="otp"
          onChange={(e) => {
            setValue((prev) => ({
              ...prev,
              [name]: e.target.value,
            }));
          }}
          onFocus={() => {
            setInvalidFields([]);
          }}
        ></input>
        {invalidFields?.length > 0 &&
          invalidFields.some((i) => i.name === name) && (
            <small className="text-red-500 italic mb-[15px]">
              {invalidFields.find((i) => i.name === name)?.msg}
            </small>
          )}
      </div>
    </>
  );
};

export default HorizontalInput;
