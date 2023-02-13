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
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);
  const goRegister = useCallback(() => {
    navigate(path.REGISTER);
  }, []);
  const goHome = useCallback(() => {
    navigate(path.HOME);
  }, []);

  return (
    <div className="w-1100 h-70 flex items-center justify-between">
      <img
        className="w-[240px] h-[70px] object-contain"
        src={logo}
        alt="logo"
        onClick={goHome}
      />
      <div className="flex items-center gap-1">
        <Button
          fontW={"font-normal"}
          IcBefor={AiOutlineHeart}
          text={"Yêu thích"}
          textColor="text-black"
          bgcolor="bg-[#f5f5f5]"
          IcBeforSize="20"
        />
        <Button
          fontW={"font-normal"}
          IcBefor={BiLogIn}
          text={"Đăng nhập"}
          textColor="text-black"
          bgcolor="bg-[#f5f5f5]"
          IcBeforSize="20"
          onClick={goLogin}
        />
        <Button
          fontW={"font-normal"}
          IcBefor={AiOutlineUserAdd}
          text={"Đăng ký"}
          textColor="text-black"
          bgcolor="bg-[#f5f5f5]"
          IcBeforSize="20"
          onClick={goRegister}
        />
        <Button
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
