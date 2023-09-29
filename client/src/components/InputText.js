import React from 'react';

const InputText = ({
  name,
  label,
  styleInput,
  styleLable,
  value,
  setValue,
  typeInput,
  invalidFields,
  setInvalidFields
}) => {
  function lowerCaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  return (
    <div>
      <div className={`flex flex-col mb-[14px] `}>
        <label className={`font-bold whitespace-nowrap ${styleLable}`}>
          {label}
        </label>
        <input
          onFocus={() => setInvalidFields((prev) => prev.filter((field) => field.name !== name))}
          onChange={(e) => {
            setValue(e.target.value)
          }}
          type={typeInput}
          className={`focus:ring-[rgba(0,123,255,.25)] text-[0.8rem] focus:border-[#80bdff] rounded-[0.25rem] border-[#ced4da] my-2 py-[0.375rem] px-[0.75rem] ${styleInput} `}
          name="street_number"
          id="street_number"
          value={value}
        ></input>
        <small className="text-red-500">
          {invalidFields?.some((field) => field.name === name) &&
            `${invalidFields?.find((field) => field.name === name)?.msg
            } ${lowerCaseFirstLetter(label)}`}
        </small>
      </div>
    </div>
  );
};

export default InputText;
