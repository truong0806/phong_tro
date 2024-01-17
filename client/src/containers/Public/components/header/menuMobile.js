import React from 'react';
import { FiMenu } from 'react-icons/fi';

const menuMobile = () => {
  return (
      <div className="absolute right-[15px] flex items-center lg:hidden">
        <FiMenu size={30} />
        <span className="text-[1rem] ml-[5px]">Danh Mục</span>
      </div>
  );
};

export default menuMobile;
