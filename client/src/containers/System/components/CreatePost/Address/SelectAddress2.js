import React, { useState } from 'react';
import Select from 'react-select';

const SelectAddress2 = ({
  label,
  array,
  value,
  setValue,
  type,
  reset,
  name,
  invalidFields,
  setInvalidFields,
  dataPro,
  setLoca,
  setLocal,
}) => {
  console.log('🚀 ~ file: SelectAddress2.js:17 ~ value:', value);
  const [selectedTinh, setSelectedTinh] = useState();
  const newArray = array?.map((item) => {
    return {
      value: item.code,
      label: item.name,
    };
  });

  const handleTinhChange = (selectedOption) => {
    setValue((prev) => ({
      ...prev,
      [name]: selectedOption.label,
    }));
    setSelectedTinh(selectedOption.label);
    setLoca(selectedOption.value);
  };

  const handleSelectFocus = () => {
    setInvalidFields((prev) => prev.filter((field) => field.name !== name));
  };

  return (
    <div className="w-full pb-[15px]">
      <label htmlFor="default" className="mb-[5px] font-bold whitespace-nowrap">
        {label}
      </label>
      <div className="">
        <Select
          noOptionsMessage={() => 'Không có'}
          value={{
            label: selectedTinh ? selectedTinh : value,
          }}
          onChange={handleTinhChange}
          onFocus={handleSelectFocus}
          options={newArray}
          isSearchable={true}
          placeholder={`-- ${label} --`}
        />
      </div>

      <small className="text-red-500">
        {invalidFields?.some((field) => field.name === name) &&
          `Vui lòng chọn ${label}`}
      </small>
    </div>
  );
};

export default SelectAddress2;
