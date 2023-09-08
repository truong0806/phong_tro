import React from 'react';

const SelectAddress = ({
  label,
  array,
  value,
  setValue,
  type,
  reset,
  name,
}) => {
  return (
    <div className="w-full">
      <label htmlFor="default" className="mb-10 font-bold whitespace-nowrap">
        {label}
      </label>
      <select
        value={reset ? '' : value}
        onChange={(e) => setValue(e.target.value)}
        id="select-address"
        className="bg-gray-50 border my-2 py-2 border-gray-300 text-gray-900 mb-6 text-[0.8rem] rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-1 "
      >
        <option value="">{`-- Chọn ${label} --`}</option>
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
    </div>
  );
};

export default SelectAddress;
