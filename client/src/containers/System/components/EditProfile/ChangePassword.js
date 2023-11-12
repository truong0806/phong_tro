import React, { useState } from 'react';
import { Button } from '../../../../components';
import HorizontalInput from '../../../../components/HorizontalInput';
import validate from '../../../../ultils/validate';

const ChangePassword = () => {
  const [payload, setPayload] = useState({
    oldPassword: '',
    password: '',
    comfirmPassword: '',
  });
  const [invalidFields, setInvalidFields] = useState([]);

  const handleSubmit = () => {
    validate(payload, '', setInvalidFields);
  };



  return (
    <div className="z-2150 h-full">
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">Đổi mật khẩu</h1>
        <div className="border-b-2"></div>
      </div>
      <div className="flex justify-center w-full mx-auto mt-10 mb-[100px] ">
        <form className="px-[40px] w-[600px] mt-[1rem] pb-8 mb-[1rem] flex flex-col gap-4 ">
          <div className="grid grid-cols-5 gap-5 mb-[2rem] ">
            <HorizontalInput
              type={'password'}
              name={'oldPassword'}
              label={'Mật khẩu củ'}
              setValue={setPayload}
              styleInput={'col-span-3 focus:outline-none focus:ring-0'}
              styleLabel={'col-span-2'}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
            <HorizontalInput
              type={'password'}
              name={'password'}
              label={'Mật khẩu mới'}
              setValue={setPayload}
              styleInput={'col-span-3 focus:outline-none focus:ring-0'}
              styleLabel={'col-span-2'}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
            <HorizontalInput
              type={'password'}
              name={'comfirmPassword'}
              label={'Nhập lại mật khẩu mới'}
              setValue={setPayload}
              styleInput={'col-span-3 focus:outline-none focus:ring-0'}
              styleLabel={'col-span-2'}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
          </div>
          <Button
            text={'Cập nhật'}
            width={'bg-[#59a9ff] py-2 w-full text-white'}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
