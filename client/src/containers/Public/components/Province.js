import React from 'react';
import { location, text } from '../../../ultils/constains';
import { ProvinceBtn } from '../index';
import { Link } from 'react-router-dom';

export function Province({ linkRef, categoryCurrent }) {
  return (
    <div ref={linkRef} className="flex flex-col  justify-center items-center mx-[150px]">
      <div className="items-center justify-center w-full  mb-[20px]  bg-[#225aff]  text-white p-[15px] rounded-lg">
        <h1 className="text-[1.8rem] m-0 h-full text-left leading-9 font-bold ">
          {categoryCurrent !== undefined
            ? categoryCurrent?.header
            : text.HOME_TITLE}
        </h1>
        <p className="text-[.9rem] leading-6 font-normal  mt-[10px]  text-white text-justify">
          {categoryCurrent !== undefined
            ? categoryCurrent?.header
            : text.PAGE_DESCRIPTION}
        </p>
        <p className="page-description lg:hidden mb-0 mt-[10px] text-[.9rem] leading-6">
          <Link
            rel="nofollow"
            href="https://phongtro123.com/dang-nhap-tai-khoan"
          >
            Đăng nhập
          </Link>{' '}
          hoặc{' '}
          <Link rel="nofollow" href="https://phongtro123.com/dang-ky-tai-khoan">
            Đăng ký
          </Link>{' '}
          để bắt đầu
        </p>
      </div>
      <div className="flex cursor-pointer gap-5  mb-3 justify-center items-center mt-2 ">
        {location.map((item) => (
          <ProvinceBtn key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Province;
