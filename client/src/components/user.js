import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/action';
import CopyButton from './CopyButton';
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { path } from '../ultils/constains';
import Tokenservice from '../service/token';

const User = ({ inSideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const { msg } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLoading(false);
    isLoggedIn &&
      setTimeout(() => {
        dispatch(actions.getUser())
        setIsLoading(true);
      }, 300);
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
   if (msg)
      swal
        .fire('Oop !', 'Phiên đăng nhập đã hết hạn, hãy đăng nhập lại', 'info')
        .then(() => {
          dispatch(actions.clearMsg());
          dispatch(actions.logout(Tokenservice.getLocalRefreshToken()));
          navigate(`${path.AUTH}/${path.LOGIN}`);
        });
  }, [msg]);

  return (
    <div className="mt-[5px] flex flex-col">
      <div
        className={`${
          inSideBar
            ? 'flex flex-col w-full'
            : 'z-60 flex flex-row justify-center left-2  w-[240px] h-[70px] '
        }`}
      >
        <div className='w-full flex item-center justify-center'>
        <img
          className={`${
            inSideBar
              ? 'w-[100px] h-[100px] rounded-[50%] '
              : 'w-[40px] h-[40px] justify-center items-center mt-[6px] rounded-[50%] mr-[10px]'
          }`}
          src={
            userData.avatar || 'https://phongtro123.com/images/default-user.png'
          }
          alt=""
        />
        </div>
        <div
          className={
            inSideBar
              ? 'w-full flex flex-col min-h-[60px]  mt-2 ml-3'
              : 'flex flex-col w-4/5'
          }
        >
          <span className="text-[1rem]">
            {inSideBar ? '' : 'Xin chào,'}{' '}
            {isLoading ? (
              <strong className="whitespace-nowrap">{userData.name}</strong>
            ) : (
              '...'
            )}
          </span>
          <div className='flex items-center justify-center'>
          <span className="mt-1 gap-1 flex flex-row whitespace-nowrap text-[0.8rem]">
            {inSideBar ? '' : 'Số điện thoại: '}
            {isLoading ? (
              <CopyButton valueCopy={userData.phone} text={userData.phone} />
            ) : (
              '...'
            )}
          </span>
          </div>

          <span className="text-[0.9rem]"></span>
        </div>
      </div>

      {inSideBar ? (
        <div className=" p-1 flex flex-col  text-[0.9rem] mb-[14px] gap-2">
          <span className="whitespace-nowrap flex flex-row   text-ellipsis w-[150px]">
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
