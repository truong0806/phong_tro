/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { InputForm, Button } from "../../components";


const [isRegister, setIsRegister] = useState(false)
const Login = () => {
  return (
    <div>
      <div className="bg-white border-[#dedede] border w-[600px] m-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm ">
        <h3 className="font-bold text-3xl mb-[10px]">{isRegister ? 'Đăng nhập' : 'Đăng ký'}</h3>

        <div className="w-full">
          <InputForm
            label={"Số điện thoại"}
            style="uppercase text-xs mb-[12.6px] font-normal "
            styleInput="outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[10px]"
          />
          <InputForm
            label={"Mật khẩu"}
            style="uppercase text-xs  mb-[12.6px] font-normal "
            styleInput="outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[10px]"
          />
          <Button
            text={"Đăng nhập"}
            bgcolor="bg-[#3961fb]"
            width="w-full"
            textColor={"text-white"}
            height={"h-[45px]"}
            fontW={"font-bold mb-[40px]"}
          />
          <div className="flex justify-between text-[#1266dd] text-sm cursor-pointer ">
            <a className="hover:text-[#f60]">Bạn quên mật khẩu ?</a>
            <a className="hover:text-[#f60]">Tạo tài khoản mới </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
