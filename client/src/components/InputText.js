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
  setInvalidFields,
  haveLabel,
}) => {
  function lowerCaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  return (
    <div>
      <div className={`flex flex-col mb-[15px] `}>
        {label && (
          <label
            className={`${
              !label && 'hidden'
            }font-bold mb-[2px] whitespace-nowrap ${styleLable}`}
          >
            {label}
          </label>
        )}
        <input
          onFocus={() =>
            setInvalidFields((prev) =>
              prev.filter((field) => field.name !== name)
            )
          }
          onChange={(e) => {
            setValue((prev) => ({
              ...prev,
              [name]: e.target.value,
            }));
          }}
          type={typeInput}
          className={`border-gray-300 border-[1px] text-[1rem] focus:border-[#80bdff] rounded-[0.25rem] py-[0.375rem] px-[0.75rem]  ${styleInput} `}
          name="street_number"
          id="street_number"
          value={value}
        ></input>
        <small className="text-red-500">
          {invalidFields?.some((field) => field.name === name) &&
            `${
              invalidFields?.find((field) => field.name === name)?.msg
            } ${lowerCaseFirstLetter(label)}`}
        </small>
      </div>
    </div>
  );
};

export default InputText;
