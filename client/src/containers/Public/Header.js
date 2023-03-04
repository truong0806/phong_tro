import React, { useCallback } from "react";
import logo from "../../assets/logoWithoutBg.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../ultils/constains";
const { AiOutlineHeart, BiLogIn, AiOutlineUserAdd, AiOutlinePlusCircle } =
  icons;

const Header = () => {
  const navigate = useNavigate();
  const goAuth = useCallback((flag) => {
    navigate(path.AUTH, { state: { flag } });
  }, []);
  const goHome = useCallback(() => {
    navigate(path.HOME);
  }, []);

  return (
    <div className="w-1100 h-70 flex items-center justify-between ">
      <img
        className="cursor-pointer  w-[240px] h-[70px] object-contain"
        src={logo}
        alt="logo"
        onClick={goHome}
      />
      <div className="cursor-pointer  flex items-center gap-1">
        <Button
          fontW={"font-normal text-[14px] h-[40px]"}
          IcBefor={AiOutlineHeart}
          text={"Yêu thích"}
          textColor="text-black"
          bgcolor="bg-[#f5f5f5]"
          IcBeforSize="20"
        />
        <Button
          fontW={"font-normal text-[14px] h-[40px]"}
          IcBefor={BiLogIn}
          text={"Đăng nhập"}
          textColor="text-black"
          bgcolor="bg-[#f5f5f5]"
          IcBeforSize="20"
          onClick={() => { goAuth(false) }}
        />
        <Button
          fontW={"font-normal text-[14px] h-[40px]"}
          IcBefor={AiOutlineUserAdd}
          text={"Đăng ký"}
          textColor="text-black"
          bgcolor="bg-[#f5f5f5]"
          IcBeforSize="20"
          onClick={() => { goAuth(true) }}
        />
        <Button
          width={"w-auto text-[14px] h-[40px] "}
          text={"Đăng tin mới"}
          textColor="text-white"
          bgcolor="bg-secondary2"
          IcAfter={AiOutlinePlusCircle}
          IcAfterSize="20"
          ColorIcon="white"
        />
      </div>
    </div>
  );
};

export default Header;
