import React from 'react';
import { Button, User } from '../../../../components';
import MenuAdmin from './MenuAdmin';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="w-[200px] p-[20px] justify-center overflow-x-hidden overflow-y-auto left-0 bottom-0 bg-[#f8f9fa] min-h-[90vh] fixed top-[45px] border-r border-[#e6e6e6]">
      <nav className=" ">
        <User inSideBar={true} />
        <div className="flex items-center justify-center gap-3 mb-[10px]">
          <Button
            width={
              'text-[0.875rem] rounded-[0.2rem] hover:bg-[#d39e00] border-[#d39e00]'
            }
            text={'Nạp tiền'}
            bgcolor={'bg-[#ffc107]'}
            textColor={''}
            padding={'py-[0.25rem] px-[0.5rem]'}
          />
          <Link to={'/quan-ly/dang-tin-moi'}>
            <Button
              width={ 
                'text-[0.875rem] rounded-[0.2rem] hover:bg-[#c82333] border-[#bd2130]'
              }
              text={'Đăng tin'}
              bgcolor={'bg-[#dc3545]'}
              textColor={'text-white'}
              padding={'py-[0.25rem] px-[0.5rem]'}
            />
          </Link>
        </div>
        <div className="p-4 flex text-[0.9rem]  bg-[#fff9e6] py-[10px] pt-[10px] pb-[7px] mb-[10px] rounded-[5px] ">
          <div className="mt-[5px] opacity-1">
            <i className="icon phone circle size-20"></i>
          </div>
          <div className="flex flex-col font-normal">
            <span className="text-[0.8rem] ">
              Nhân viên hỗ trợ riêng của bạn:
            </span>
            <span className="overflow-hidden font-bold whitespace-normal">
              Nhiên LBK Corp
            </span>
            <span className="font-bold">0902657123</span>
          </div>
        </div>
        <MenuAdmin />
      </nav>
    </div>
  );
};

export default SideBar;
