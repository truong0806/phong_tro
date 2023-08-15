/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../../assets/logoWithoutBg.png';
import { Button } from '../../../components';
import icons from '../../../ultils/icons';
import { path } from '../../../ultils/constains';
import * as actions from '../../../store/action';

const {
  AiOutlineHeart,
  BiLogIn,
  AiOutlineUserAdd,
  AiOutlinePlusCircle,
  LuLayoutDashboard,
  TbDiscount2,
} = icons;

function Header({ setLoading }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  console.log('🚀 ~ file: Header.js:24 ~ Header ~ userData:', userData);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const goRegister = useCallback(() => {
    handlLoad();
    navigate(`${path.AUTH}/${path.REGISTER}`);
  }, []);
  const goLogin = useCallback(() => {
    handlLoad();
    navigate(`${path.AUTH}/${path.LOGIN}`);
  }, []);
  const goHome = useCallback(() => {
    handlLoad();
    navigate('/');
  }, []);
  const handlLoad = () => {
    setLoading(false);
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timeout);
  };
  return (
    <div className="w-full flex h-[70px]  relative items-center lg:justify-between lg:w-[1100px] mx-auto my-0">
      <img
        className="w-[240px] ml-3 h-full cursor-pointer left-0 absolute bg-contain  object-contain "
        src={logo}
        alt="logo"
        onClick={goHome}
      />
      <div className=" flex items-center  lg:hidden">
        <div className="bg-menu h-[25px] w-[25px] bg-contain mr-[8px]" />
        <span className="">Danh Mục</span>
      </div>
      <div className="w-3/4 h-full cursor-pointer absolute  right-0 flex items-center gap-1 ">
        {!isLoggedIn && (
          <div className="cursor-pointer flex items-center gap-1 ">
            <Button
              margin="py-[20px]"
              fontW="font-normal text-[14px] h-[40px] hidden"
              IcBefor={AiOutlineHeart}
              text="Yêu thích"
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
            />
            <Button
              margin="py-[20px]"
              fontW="font-normal text-[14px] h-[40px] hidden"
              IcBefor={BiLogIn}
              text="Đăng nhập"
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
              onClick={goLogin}
            />
            <Button
              margin="py-[20px]"
              fontW="font-normal text-[14px] h-[40px] hidden"
              IcBefor={AiOutlineUserAdd}
              text="Đăng ký"
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
              onClick={goRegister}
            />
          </div>
        )}
        {isLoggedIn && (
          <div className="cursor-pointer absolute right-0 w-full  flex items-center gap-1">
            <div className="flex flex-row justify-center left-2 absolute w-[240px] h-[70px] mt-[5px] ">
              <img
                className="w-1/5 h-[40px] justify-center items-center mr-[5px] mt-[12px] rounded-[50%]"
                src="https://phongtro123.com/images/default-user.png"
              ></img>
              <div className="flex flex-col w-4/5">
                <span className="text-[1.2rem]">
                  Xin chào, <strong>{userData.name}</strong>
                </span>
                <span>
                  Số điện thoại: <strong>{userData.phone}</strong>
                </span>
                <span>
                  TK chính: <strong>{userData.phone ? userData.phone : 0}</strong>
                </span>
                <span className="text-[0.9rem]"></span>
              </div>
            </div>
            <Button
              margin="absolute right-[380px]"
              fontW="font-normal text-[14px] h-[40px]"
              text="Khuyến mãi"
              IcBefor={TbDiscount2}
              textColor="text-black"
              IcBeforSize="18"
              bfIcon="justify-center item-center"
              After={
                <img
                  src="https://phongtro123.com/images/hot.gif"
                  width="40px"
                ></img>
              }
            />
            <Button
              margin="absolute right-[280px]"
              fontW="font-normal text-[14px] h-[40px]"
              text="Yêu thích"
              IcBefor={AiOutlineHeart}
              textColor="text-black"
              IcBeforSize="18"
              bfIcon="justify-center item-center"
            />
            <Button
              margin=" absolute right-[130px]"
              fontW="font-normal text-[14px] h-[40px]"
              text="Quản lý tài khoản"
              IcBefor={LuLayoutDashboard}
              textColor="text-black"
              IcBeforSize="18"
              bfIcon="justify-center item-center mb-1"
              onClick={() => {
                dispatch(actions.logout());
              }}
            />
          </div>
        )}
        <Button
          margin="py-[20px] absolute right-0"
          width="w-auto text-[14px] h-[40px] hidden"
          text="Đăng tin mới"
          textColor="text-white"
          bgcolor="bg-secondary2"
          IcAfter={AiOutlinePlusCircle}
          IcAfterSize="20"
          ColorIcon="white"
        />
      </div>
    </div>
  );
}

export default Header;
