/* eslint-disable react/style-prop-object */
import React from "react";
import { InputForm, Button } from "../../components";
const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm ">
      <h3 className="font-bold text-2xl mb-[10px]">Đăng nhập</h3>
      <div className="w-full">
        <InputForm
          label={"Số điện thoại"}
          style="uppercase text-xs mb-[12px] font-normal "
          styleInput="outline-none bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[10px]"
        />
        <InputForm
          label={"Mật khẩu"}
          style="uppercase text-xs  mb-[12px] font-normal "
          styleInput="outline-none bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[10px]"
        />
        <Button
          text={"Đăng nhập"}
          bgcolor="bg-[#3961fb]"
          width="w-full"
          textColor={"text-white"}
          height={"h-[45px]"}
          fontW={"font-bold"}
          margin={""}
        />
      </div>
    </div>
  );
};

export default Login;
