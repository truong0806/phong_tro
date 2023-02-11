import React from "react";
import logo from "../../assets/logoWithoutBg.png";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Button } from "../../components";

fontawesome.library.add("fa-solid fa-heart");

const Header = () => {
  return (
    <div className="w-1100 flex items-center justify-between bg-red-200">
      <img
        className="w-[240px] h-[70px] object-contain"
        src={logo}
        alt="logo"
      />
      <FontAwesomeIcon icon="fa-solid fa-heart" />
      <div className="flex items-center gap-1">
        <Button
          text={"Đăng nhập"}
          textColor="text-white"
          bgcolor="bg-[#1266dd]"
        />
        <Button
          text={"Đăng ký"}
          textColor="text-white"
          bgcolor="bg-[#1266dd]"
        />
        <Button
          text={"Đăng tin mới"}
          textColor="text-white"
          bgcolor="bg-secondary2"
        />
      </div>
    </div>
  );
};

export default Header;
