import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../components';
import InputText from '../../../../components/InputText';
import InputTextReadOnly from '../../../../components/InputTextReadOnly';
import HorizontalInput from '../../../../components/HorizontalInput';
import validate from '../../../../ultils/validate';
import { apiEditUser } from '../../../../service/user';
import * as actions from '../../../../store/action';
import { ToastContainer, toast } from 'react-toastify';

const ChangePhoneNumber = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [invalidFields, setInvalidFields] = useState([]);
  console.log(
    '🚀 ~ file: ChangePhoneNumber.js:12 ~ ChangePhoneNumber ~ invalidFields:',
    invalidFields
  );
  const [payload, setPayload] = useState(() => {
    const initData = {
      phone: JSON.parse(localStorage.getItem('user'))?.phone,
      newPhone: '',
      otp: '',
    };
    return initData;
  });

  console.log(
    '🚀 ~ file: ChangePhoneNumber.js:13 ~ const[payload,setPayload]=useState ~ payload:',
    payload
  );
  useEffect(() => {}, [invalidFields]);

  const handleSubmit = async () => {
    const idLoad = toast.loading('Xin chờ...');
    validate(payload, '', setInvalidFields);
    if (invalidFields?.length === 0) {
      const result = await apiEditUser(payload);
      console.log(
        '🚀 ~ file: ChangePhoneNumber.js:38 ~ handleSubmit ~ result:',
        result
      );
      if (result.data.err === 0) {
        dispatch(actions.getUser()).then(() => {
          toast.update(idLoad, {
            render: 'Đổi số điện thoại thành công',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
          });
          setPayload(() => ({
            phone: JSON.parse(localStorage.getItem('user'))?.phone,
            newPhone: '',
            otp: '',
          }));
        });
      } else {
        toast.update(idLoad, {
          render: 'Đổi số điện thoại thất bạn, vui lòng liên hệ CSKH',
          type: 'error',
          isLoading: false,
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div className="z-2150 h-full">
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">Đổi số điện thoại</h1>
        <div className="border-b-2"></div>
      </div>
      <div className="flex justify-center w-full mx-auto mt-10 mb-[100px] ">
        <form className="px-[40px] w-[600px] mt-[1rem] pb-8  flex flex-col">
          <div className="grid grid-cols-4 gap-5 mb-[2rem]">
            <HorizontalInput
              readOnly={true}
              label={'Số điện thoại củ'}
              value={payload.phone}
              styleInput={'col-span-3 focus:outline-none focus:ring-0'}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />

            <HorizontalInput
              type={'tel'}
              name={'newPhone'}
              label={'Số điện thoại mới'}
              value={payload.newPhone}
              styleInput={'col-span-3'}
              setValue={setPayload}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
            <Button text={'Lấy mã xác thực'} width={'col-span-4 bg-[#ffc107] py-2 w-[25%]  ml-[26%] '} />
            <HorizontalInput
              type={'text'}
              name={'otp'}
              label={'Mã xác thực'}
              value={payload.otp}
              styleInput={'col-span-3'}
              setValue={setPayload}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
            />
          </div>
          <Button
            text={'Cập nhật'}
            width={'bg-[#59a9ff] py-2 w-full text-white'}
            onClick={() => {
              handleSubmit();
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePhoneNumber;
