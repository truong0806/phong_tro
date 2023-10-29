import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { InputForm, Button } from '../../../components';
import * as actions from '../../../store/action';
import validate from '../../../ultils/validate';
import { path } from '../../../ultils/constains';
import { WhyUs, Support } from '../index';

function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, msg, update, accessToken } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: '',
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }));
  };

  useEffect(() => {
    isLoggedIn && navigate('/'); //
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire('Oops !', 'Sai số điện thoại hoặc mật khẩu', 'error');
  }, [msg, update]);

  const handleSubmit = async () => {
    const finalinvalids = payload;
    const invalids = validate(finalinvalids, 'Đăng nhập', setInvalidFields);
    if (invalids === 0) {
      dispatch(actions.login(payload)).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="items-center justify-center">
        <div className="bg-white  border-[#704f4f] border w-[600px] m-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm ">
          <h3 className="font-bold text-3xl mb-[10px]">Đăng nhập</h3>
          <div className="w-full">
            <InputForm
              name="phone"
              stylleGroup="mt-[15px]"
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.phone}
              onChange={handleChange}
              keyPayload="phone"
              label="Số điện thoại"
              styleLabel="text-sm uppercase text-xs font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[5px]"
            />
            <InputForm
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
            <Button
              text="Đăng nhập"
              bgcolor="bg-[#3961fb]"
              width="w-full "
              textColor="text-white"
              height="h-[45px]"
              fontW="font-bold"
              margin="mt-[20px] py-[20px]"
              onClick={handleSubmit}
            />
            <div className="text-sm text-black text-[14px] ">
              <p className="">
                <div className="text-blue-500 py-[5px] my-[14px] flex justify-between ">
                  <span
                    onClick={() => {
                      setPayload({
                        phone: '',
                        password: '',
                        name: '',
                      });
                      setInvalidFields([]);
                      navigate(`${path.AUTH}/${path.FORGOTPASSWORD}`);
                    }}
                    className="hover:text-[red]  cursor-pointer"
                  >
                    Bạn quên mật khẩu?
                  </span>
                  <span
                    onClick={() => {
                      setPayload({
                        phone: '',
                        password: '',
                        name: '',
                      });
                      setInvalidFields([]);
                      navigate(`${path.AUTH}/${path.REGISTER}`);
                    }}
                    className="hover:text-[red]  cursor-pointer "
                  >
                    Tạo tài khoản mới
                  </span>
                </div>
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

export default Login;
