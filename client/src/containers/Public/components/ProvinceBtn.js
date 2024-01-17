import React, { memo } from 'react';

function ProvinceBtn({ name, image, onlick }) {
  return (
    <div className="shadow-md" onClick={onlick}>
      <img
        src={image}
        alt={name}
        className="h-[110px] w-[190px] object-cover rounded-t-[10px]"
      />
      <div className="bg-white text-sm hover:text-[#f60]  font-bold text-[#1266dd] p-2 text-center  rounded-b-[15px]">
        {name}
      </div>
    </div>
  );
}
export default memo(ProvinceBtn);
