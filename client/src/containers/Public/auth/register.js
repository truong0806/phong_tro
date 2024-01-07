import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { InputForm, Button } from '../../../components';
import * as actions from '../../../store/action';
import validate from '../../../ultils/validate';
import { path } from '../../../ultils/constains';
// import { Loading } from '../../../components'
import { WhyUs, Support } from '../index';
import { pressEnter } from '../../../ultils/pressEnter';
import {
  checkCapsLock,
  handleKeyDownCapLock,
} from '../../../ultils/checkCapsLock';
import ReCAPTCHA from 'react-google-recaptcha';

function Register() {
  const navigate = useNavigate();
  const { isLoggedIn, msgRegister, msgRegisterSuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [invalidFields, setInvalidFields] = useState([]);
  const [capslock, setCapslock] = useState(false);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const [noti, setNoti] = useState(false);
  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: '',
    comfirmPassword: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  };
  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn]);

  useEffect(() => {
    msgRegister && Swal.fire('Lỗi', 'Số điện thoại đã được sử dụng', 'error');
    dispatch(actions.clearMsgAuth());dispatch(actions.setMsgExpiredToken('login'));
  }, [msgRegister, dispatch]);

  useEffect(() => {
    msgRegisterSuccess &&
      Swal.fire({
        icon: 'success',
        title: 'Đăng ký thành công',
        showConfirmButton: false,
        timer: 1500,
      });
    dispatch(actions.clearMsgAuth());
  }, [msgRegisterSuccess, dispatch]);

  const handleSubmit = async () => {
    const finalinvalids = payload;
    const invalids = validate(finalinvalids, 'Đăng ký', setInvalidFields);
    if (invalids === 0) {
      dispatch(actions.register(payload));
    }
  };

  // useEffect(() => {
  //   checkCapsLock(setCapslock);
  // });
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is an uppercase letter and Caps Lock is off
      const isUppercase = event.key === event.key.toUpperCase();
      setCapslock(!isUppercase);
    };

    // Add event listener when component mounts
    document.addEventListener('keypress', handleKeyPress);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  const handleCaptchaChange = (value) => {
    setCaptchaVerified(value !== null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="items-center justify-center">
        <div className="bg-white  border-[#dedede] border w-[600px] m-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm ">
          <h3 className="font-bold text-3xl mb-[10px]">Tạo tài khoản mới</h3>
          <div className="w-full">
            <div>
              {/* Your component JSX */}
              {capslock ? <p>Caps Lock is on!</p> : <p>Caps Lock is off.</p>}
            </div>
            <InputForm
              name="name"
              stylleGroup="mt-[15px]"
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.name}
              keyPayload="name"
              label="Họ tên"
              onChange={handleChange}
              styleLabel="text-sm uppercase text-xs font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[5px]"
            />

            <InputForm
              name="phone"
              stylleGroup="mt-[15px]"
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.phone}
              keyPayload="phone"
              onChange={handleChange}
              label="Số điện thoại"
              styleLabel="text-sm uppercase text-xs font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[5px]"
            />
            <InputForm
              onFocus={(event) => {
                setInvalidFields([]);
              }}
              name="password"
              stylleGroup="mt-[15px]"
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.password}
              onChange={handleChange}
              keyPayload="password"
              label="Mật khẩu"
              styleLabel="text-sm uppercase text-xs  font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[5px] mb-[5px]"
              type="password"
            />
            {capslock && <span className="">Đang bật CapsLock</span>}
            <InputForm
              name="comfirmPassword"
              stylleGroup="mt-[15px]"
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.comfirmPassword}
              onChange={handleChange}
              keyPayload="comfirmPassword"
              label="Mật khẩu"
              styleLabel="text-sm uppercase text-xs  font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[5px] mb-[5px]"
              type="password"
            />
            <div className="mt-[10px]">
              <ReCAPTCHA
                sitekey="6LeTiBMpAAAAACAAQGAWdSoLr_MH_N7zNtYIerC9"
                onChange={handleCaptchaChange}
              />
            </div>
            <Button
              text="Đăng ký"
              bgcolor="bg-[#3961fb]"
              width="w-full "
              textColor="text-white"
              height="h-[45px]"
              fontW="font-bold"
              margin="mt-[20px] py-[20px]"
              onClick={handleSubmit}
            />
            <div className="text-sm text-black text-[14px] ">
              <p className="py-[5px] my-[14px]">
                Bấm vào nút đăng ký tức là bạn đã đồng ý với{' '}
                <span className="text-blue-500 hover:underline">
                  quy định sử dụng
                </span>{' '}
                của chúng tôi
              </p>
              <p className="py-[5px] my-[14px]">
                <span className="text-black-500 hover:underline cursor-pointer">
                  Bạn đã có tài khoản ?
                </span>
                <span
                  onClick={() => {
                    setPayload({
                      phone: '',
                      password: '',
                      name: '',
                    });
                    setInvalidFields([]);
                    navigate(`/${path.LOGIN}`);
                  }}
                  className="text-blue-500 hover:underline cursor-pointer ml-[5px]"
                >
                  Đăng nhập ngay
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyUs />
      <Support />
    </div>
  );
}

export default Register;
