import React from 'react';
import { useSelector } from 'react-redux';
import { formatNumberWithDots } from '../ultils/formatNumberWithDots';

const User2 = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div>
      <div className="md:hidden p-4 flex text-[1rem] border-[1px] text-[#856404] border-[#ffeeba] bg-[#fff9e6] py-[10px] pt-[10px] pb-[7px] mb-[10px] rounded-[5px] ">
        <div classname="">
          <p>
            Xin chào <strong>{userData.name}</strong>.<br></br>Mã tài khoản:{' '}
            <strong>{userData.id}</strong>
          </p>
          <p>
            Số dư TK của bạn là:{' '}
            <strong>{formatNumberWithDots(userData.balance)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User2;
