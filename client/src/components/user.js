import React from 'react';
import { useSelector } from 'react-redux';

const User = ({ loading }) => {
  const { userData } = useSelector((state) => state.user);
  return (
      <div className="flex flex-row justify-center left-2 absolute w-[240px] h-[70px] mt-[5px] ">
        <img
          className="w-[40px] h-[40px] justify-center items-center mt-[12px] rounded-[50%] mr-[10px]"
          src={
            userData.avatar || 'https://phongtro123.com/images/default-user.png'
          }
        ></img>
        <div className="flex flex-col w-4/5 ">
          <span className="text-[1.2rem]">
            Xin chào, {loading ? <strong>{userData.name}</strong> : '...'}
          </span>
          <span>
            Số điện thoại: {loading ? <strong>{userData.phone}</strong> : '...'}
          </span>
          <span>
            TK chính:
            {loading ? (
              <strong>{userData.phone ? userData.phone : 0}</strong>
            ) : (
              '...'
            )}
          </span>
          <span className="text-[0.9rem]"></span>
        </div>
      </div>
  );
};

export default User;
