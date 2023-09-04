import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/action';
import CopyButton from './CopyButton';

const User = ({ inSideBar }) => {
  const dispatch = useDispatch();
  const { userData, msg } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log('🚀 ~ file: user.js:13 ~ User ~ msg:', msg);

  useEffect(() => {
    setIsLoading(false);
    isLoggedIn &&
      setTimeout(() => {
        dispatch(actions.getUser());
        setIsLoading(true);
      }, 1000);
  }, [dispatch, isLoggedIn]);
  return (
    <div className="mt-[5px] flex flex-col">
      <div
        className={`${
          inSideBar
            ? 'flex flex-row w-full'
            : 'z-60 flex flex-row justify-center left-2  w-[240px] h-[70px] '
        }`}
      >
        <img
          className={`${
            inSideBar
              ? 'w-[50px] h-[50px] rounded-[50%] '
              : 'w-[40px] h-[40px] justify-center items-center mt-[6px] rounded-[50%] mr-[10px]'
          }`}
          src={
            userData.avatar || 'https://phongtro123.com/images/default-user.png'
          }
          alt=''
        />
        <div
          className={
            inSideBar
              ? 'w-full flex flex-col min-h-[60px]  mt-2 ml-3'
              : 'flex flex-col w-4/5'
          }
        >
          <span className="text-[1.2rem]">
            {inSideBar ? '' : 'Xin chào,'}{' '}
            {isLoading ? (
              <strong className="whitespace-nowrap">{userData.name}</strong>
            ) : (
              '...'
            )}
          </span>
          <span className="mt-1 gap-1 flex flex-row whitespace-nowrap">
            {inSideBar ? '' : 'Số điện thoại: '}
            {isLoading ? (
              <CopyButton valueCopy={userData.phone} text={userData.phone} />
            ) : (
              '...'
            )}
          </span>

          <span className="text-[0.9rem]"></span>
        </div>
      </div>
      {inSideBar ? (
        <div className=" p-1 flex flex-col  mb-[14px] gap-2">
          <span className="whitespace-nowrap flex flex-row  text-ellipsis w-[150px]">
            Mã thành viên:{' '}
            <b className=" text-ellipsis overflow-hidden">
              <CopyButton valueCopy={userData.id} text={userData.id} />
            </b>
          </span>
          <span>
            TK Chính: <b>0</b>
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default User;
