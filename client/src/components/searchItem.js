import React, { memo } from 'react';

const searchItem = ({ IconBefore, IconAfter, text, fontWeight, onClick }) => (
  <div
    onClick={onClick}
    className="bg-[#fff] w-full  text-[13px] py-2 px-3  rounded-md text-gray-400  cursor-pointer flex items-center justify-between"
  >
    <div className="flex items-center gap-1 w-full ">
      {IconBefore}
      <span
        className={`${
          fontWeight && 'font-bold text-[#007bff]   md:text-black text-base'
        } w-[100%] overflow-hidden text-ellipsis whitespace-nowrap text-base `}
      >
        {text}
      </span>
    </div>
    <div className={fontWeight && 'font-bold text-black'}>{IconAfter}</div>
  </div>
);

export default memo(searchItem);
