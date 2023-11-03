import React from 'react';

const SelectAddress = ({
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
}) => {
  return (
    <div className="w-full">
      <label htmlFor="default" className="mb-10 font-bold whitespace-nowrap">
        {label}
      </label>
      <select
        onFocus={() =>
          setInvalidFields((prev) =>
            prev.filter((field) => field.name !== name)
          )
        }
        defaultValue=""
        onChange={(e) => {
          const proCode = e.target.value;
          console.log('🚀 ~ file: SelectAddress.js:29 ~ proCode:', proCode);
          setValue((prev) => ({
            ...prev,
            [name]: array?.find((item) => item.code === +proCode)?.name,
          }));
          setLoca(proCode);
        }}
        id="select-address"
        className="bg-gray-50 border my-2 py-2 border-gray-300 text-gray-900 mb-2 text-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-1 "
      >
        <option value="" className="hidden">{`-- Chọn ${label} --`}</option>
        {array?.map((item, index) => (
          <option
            className="flex justify-center items-center"
            key={
              type === 'province'
                ? item?.code
                : type === 'district'
                ? item?.code
                : item?.code
            }
            value={
              type === 'province'
                ? item?.code
                : type === 'district'
                ? item?.code
                : item?.code
            }
          >
            {type === 'province'
              ? item?.name
              : type === 'district'
              ? item?.name
              : item?.name}
          </option>
        ))}
      </select>
      <small className="text-red-500">
        {invalidFields?.some((field) => field.name === name) &&
          `Vui lòng chọn ${label}`}
      </small>
    </div>
  );
};

export default SelectAddress;
