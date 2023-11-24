/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../../assets/logoWithoutBg.png';
import { Button, User } from '../../../components';
import icons from '../../../ultils/icons';
import { path } from '../../../ultils/constains';
import * as actions from '../../../store/action';
import menuManager from '../../../ultils/menuManager';
import { apiLogout } from '../../../service';

const {
  AiOutlineHeart,
  BiLogIn,
  AiOutlineUserAdd,
  AiOutlinePlusCircle,
  LuLayoutDashboard,
  TbDiscount2,
} = icons;

function Header({ setLoading, loading }) {
  const [isloading, setIsLoading] = useState(loading || false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { isLoggedIn, refreshToken } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   handlLoad();
  // }, []);

  const goRegister = useCallback(() => {
    handlLoad();
    navigate(`/${path.REGISTER}`);
  }, []);
  const goLogin = useCallback(() => {
    handlLoad();
    navigate(`/${path.LOGIN}`);
  }, []);
  const goHome = useCallback(() => {
    handlLoad();
    navigate('/');
  }, []);

  const handlLoad = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };
  return (
    <div className="w-full flex h-[70px]  relative items-center lg:justify-between lg:w-[1100px] mx-auto my-0">
      <img
        className="w-[240px]  ml-3 h-full cursor-pointer left-0 absolute bg-contain  object-contain "
        src={logo}
        alt="logo"
        onClick={goHome}
      />
      <div className=" flex items-center lg:hidden">
        <div className="bg-menu h-[25px] w-[25px] bg-contain mr-[8px]" />
        <span className="">Danh Mục</span>
      </div>
      <div className="w-3/4 h-full cursor-pointer absolute  right-0 flex items-center gap-1 ">
        {!isLoggedIn && (
          <div className="cursor-pointer relative right-0 w-full flex items-center ">
            <Button
              margin="absolute right-[340px] py-[20px]"
              fontW="font-normal text-[14px] h-[40px] hidden"
              IcBefor={AiOutlineHeart}
              text="Yêu thích"
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
            />
            <Button
              margin="absolute right-[230px] py-[20px]"
              fontW="font-normal text-[14px] h-[40px] hidden"
              IcBefor={BiLogIn}
              text="Đăng nhập"
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
              onClick={goLogin}
            />
            <Button
              margin="absolute right-[130px] py-[20px]"
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
          <div className="cursor-pointer relative right-0 w-full  flex items-center gap-1 mt-[5px]">
            <User />
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
                  alt=""
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
                setIsShowMenu((prev) => !prev);
              }}
            />
            <div
              className={`${
                isShowMenu ? 'flex' : 'hidden'
              } flex-col  absolute top-[50px] min-w-200 drop-shadow-xl bg-white shadow-md rounded-md py-[15px] px-[20px] right-[80px] z-50`}
            >
              {menuManager?.map((item) => {
                return (
                  <Link
                    className="py-[10px] items-center text-[1rem] flex flex-row text-[#1266dd] hover:text-[#f60]"
                    to={`quan-ly/${item.path}`}
                    key={item.id}
                  >
                    <span>{item.icon}</span>
                    <span className="ml-[10px]">{item.text}</span>
                  </Link>
                );
              })}
              <Link
                className="py-[10px] items-center text-[1rem] flex flex-row text-[#1266dd] hover:text-[#f60]"
                to={'/'}
                key={0}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.00533 512"
                    width="15"
                    height="15"
                  >
                    <path
                      d="m298.667969 277.335938c-35.285157 0-64-28.714844-64-64 0-35.285157 28.714843-64 64-64h42.664062v-85.332032c0-35.285156-28.714843-63.99999975-64-63.99999975h-229.332031c-7.019531 0-13.589844 3.45312475-17.578125 9.23437475-3.96875 5.78125-4.863281 13.144531-2.347656 19.691407l154.667969 405.335937c3.136718 8.277344 11.070312 13.738281 19.925781 13.738281h74.664062c35.285157 0 64-28.714844 64-64v-106.667968zm0 0"
                      fill="#2196f3"
                    />
                    <path
                      d="m397.164062 318.382812c-7.957031-3.308593-13.164062-11.09375-13.164062-19.714843v-64h-85.332031c-11.777344 0-21.335938-9.554688-21.335938-21.332031 0-11.777344 9.558594-21.332032 21.335938-21.332032h85.332031v-64c0-8.621094 5.207031-16.40625 13.164062-19.714844 7.976563-3.304687 17.152344-1.46875 23.25 4.632813l85.335938 85.332031c8.339844 8.339844 8.339844 21.824219 0 30.164063l-85.335938 85.335937c-6.097656 6.097656-15.273437 7.933594-23.25 4.628906zm0 0"
                      fill="#607d8b"
                    />
                    <path
                      d="m184.449219 44.84375-128.191407-42.730469c-28.929687-8.894531-56.257812 12.460938-56.257812 40.554688v384c0 18.242187 11.605469 34.519531 28.886719 40.492187l128.167969 42.730469c4.714843 1.449219 9.046874 2.113281 13.613281 2.113281 23.53125 0 42.664062-19.136718 42.664062-42.667968v-384c0-18.238282-11.605469-34.515626-28.882812-40.492188zm0 0"
                      fill="#64b5f6"
                    />
                  </svg>
                </span>
                <span
                  className="ml-[10px]"
                  onClick={() => {
                    dispatch(actions.logout(refreshToken));
                    setIsShowMenu(false);
                  }}
                >
                  Thoát
                </span>
              </Link>
            </div>
          </div>
        )}
        <Button
          margin="py-[20px] absolute right-0 mt-[5px]"
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
