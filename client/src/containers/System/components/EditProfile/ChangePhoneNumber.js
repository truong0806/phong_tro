import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../../components';

const ChangePhoneNumber = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="z-2150 h-full">
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">Đổi số điện thoại</h1>
        <div className="border-b-2"></div>
      </div>
      <div className="flex justify-center w-full mx-auto mt-10 mb-[100px] ">
        <form className="px-[40px] w-[600px] mt-[1rem] pb-8 mb-[1rem] flex flex-col gap-4 ">
          <div className=" flex flex-nowrap gap-[40px] items-center">
            <label className="whitespace-nowrap w-[20%]">
              Số điện thoại củ
            </label>
            <div className="w-full ">
              <input
                type="text"
                className="rounded-sm w-[400px] border-[#ced4da] bg-[#e9ecef]   "
                id="user_id"
                value={userData.phone}
              ></input>
            </div>
          </div>
          <div className=" flex flex-nowrap gap-[35px] items-center">
            <label className="whitespace-nowrap w-[20%]">
              Số điện thoại mới
            </label>
            <div className="w-full ">
              <input
                type="text"
                className="rounded-sm w-[400px] border-[#ced4da]  "
                id="user_id"
                value={''}
              ></input>
            </div>
          </div>
          <Button text={'Lấy mã xác thực'} width={'bg-[#ffc107] py-2 w-[25%]  ml-[27%] '} />
          <div className="mb-3 flex flex-nowrap gap-[65px]  items-center">
            <label className="whitespace-nowrap w-[20%]">
            Mã xác thực
            </label>
            <div className="w-full ">
              <input
                type="text"
                className="rounded-sm w-[400px] border-[#ced4da]  "
                id="user_id"
                value={''}
              ></input>
            </div>
          </div>
          <Button text={'Cập nhật'} width={'bg-[#59a9ff] py-2 w-full text-white'} />
        </form>
      </div>
    </div>
  );
};

export default ChangePhoneNumber;
