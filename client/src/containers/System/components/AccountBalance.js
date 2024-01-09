import React from 'react';
import { useSelector } from 'react-redux';
import { formatNumberWithDots } from '../../../ultils/formatNumberWithDots';
import { Link } from 'react-router-dom';

export const AccountBalance = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="w-[25%] h-[200px] ml-[10px]  flex flex-col">
      <div className="border rounded-sm bg-[#fff] mb-[15px]">
        <div className="p-[1.25rem] ">
          <span className="">Số dư tài khoản</span>
          <h3 className="mt-2 text-[#28a745] text-[1.75rem] font-medium">
            <strong>{formatNumberWithDots(+userData.balance)}</strong>
          </h3>
        </div>
      </div>
      <div className="border rounded-sm bg-[#fff]">
        <Link
          to={'/quan-ly/lich-su-nap-tien'}
          className="px-[0.65rem] py-[0.3rem] text-white flex flex-row bg-[#6c757d] mb-[5px] items-center justify-center"
        >
          <span>Lịch sử nạp tiền</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </div>
      <div className="border rounded-sm bg-[#fff]">
        <Link to={'/quan-ly/lich-su-thanh-toan'} className="px-[0.65rem] py-[0.3rem] text-white flex flex-row  bg-[#6c757d] mb-[5px] items-center justify-center ">
          <span>Lịch sử thanh toán</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </div>
      <div className="border rounded-sm bg-[#fff]">
        <Link className="px-[0.65rem] py-[0.3rem] text-white flex flex-row bg-[#6c757d] mb-[5px] items-center justify-center">
          <span>Bảng giá dịch vụ</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Link>
      </div>
      <div className=""></div>
    </div>
  );
};

export default AccountBalance;
