import React, { useState } from 'react';
import { Button } from '../../../../components';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  console.log(
    '🚀 ~ file: ChangePassword.js:6 ~ ChangePassword ~ oldPassword:',
    oldPassword
  );
  const [newPassword, setNewPassword] = useState('');
  console.log(
    '🚀 ~ file: ChangePassword.js:8 ~ ChangePassword ~ newPassword:',
    newPassword
  );
  return (
    <div className="z-2150 h-full">
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">Đổi mật khẩu</h1>
        <div className="border-b-2"></div>
      </div>
      <div className="flex justify-center w-full mx-auto mt-10 mb-[100px] ">
        <form className="px-[40px] w-[600px] mt-[1rem] pb-8 mb-[1rem] flex flex-col gap-4 ">
          <div className=" flex flex-nowrap gap-[40px] items-center">
            <label className="whitespace-nowrap w-[20%]">Mật khẩu củ</label>
            <div className="w-full ">
              <input
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
                type="password"
                className="rounded-sm w-[400px] border-[#ced4da]"
                id="user_id"
                value={oldPassword}
              ></input>
            </div>
          </div>
          <div className=" flex flex-nowrap gap-[35px] items-center">
            <label className="whitespace-nowrap w-[20%]">Mật khẩu mới</label>
            <div className="w-full ">
              <input
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                type="password"
                className="rounded-sm w-[400px] border-[#ced4da]  "
                id="user_id"
                value={newPassword}
              ></input>
            </div>
          </div>
          <Button
            text={'Cập nhật'}
            width={'bg-[#59a9ff] py-2 w-full text-white'}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
