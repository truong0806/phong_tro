import React from 'react';
import { Button } from '../../../../components';

const notActive = '';
const active = 'underline';

const FilterListPostBtn = (isActive) => {
  return (
    <div className="flex gap-1">
      <Button
        padding={`hover:bg-[#e7f0f7] py-[5px] px-[10px] ${({ isActive }) =>
          isActive ? active : notActive}`}
        bgcolor={'bg-gray-200'}
        text="Mặc định"
      />
      <Button
        padding={`hover:bg-[#e7f0f7] py-[5px] px-[10px] ${({ isActive }) =>
          isActive ? active : notActive}`}
        bgcolor={'bg-gray-200'}
        text="Mới nhất"
      />
      <Button
        padding={`hover:bg-[#e7f0f7] py-[5px] px-[10px] ${({ isActive }) =>
          isActive ? active : notActive}`}
        bgcolor={'bg-gray-200'}
        text="Có video"
      />
    </div>
  );
};

export default FilterListPostBtn;
