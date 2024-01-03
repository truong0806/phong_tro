import React, { useState } from 'react';
import Select from 'react-select';

const InputSelect2 = ({
  text,
  array,
  maxW,
  setValue,
  value,
  name,
  invalidFields,
  setInvalidFields
}) => {
  //eslint-disable-next-line
  const [selected, setSelected] = useState(null);
  const newArray = array?.map((item) => {
    return {
      value: item.code,
      label: item.value,
    };
  });
  const handleChange = (selectedOption) => {
   
    setValue((prev) => ({
      ...prev,
      [name]: selectedOption.label,
    }));
    setSelected(selectedOption);
  };

  const handleSelectFocus = () => {
    setInvalidFields((prev) => prev.filter((field) => field.name !== name));
  };
  return (
    <div className={` sm:mb-5 ${maxW}`}>
      <label htmlFor="default" className="pb-[15px] font-bold ">
        {text}
      </label>
      <div className="mt-[10px]">
        <Select
          isSearchable={false}
          value={value}
          onChange={handleChange}
          onFocus={handleSelectFocus}
          options={newArray}
          placeholder={`-- ${text} --`}
        />
      </div>
      <small className="text-red-500">
        {invalidFields?.some((field) => field.name === name) &&
          `Vui lòng chọn
               ${text}`}
      </small>
    </div>
  );
};
export default InputSelect2;
