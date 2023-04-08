/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { InputForm, Button } from '../../components'
import { useLocation, useNavigate } from 'react-router-dom'
import * as actions from '../../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { validate } from '../../ultils/validate'
import Swal from 'sweetalert2'

const Auth = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth)
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [invalidFields, setInvalidFields] = useState([])
  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: '',
    comfirmPassword: '',
  })
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])
  useEffect(() => {
    msg && Swal.fire('Lỗi', msg, 'error')
  }, [msg])
  useEffect(() => {
    msg && Swal.fire('Oops !', msg, 'error')
  }, [msg, update])

  const handleChange = (event) => {
    const { name, value } = event.target
    setPayload((prevPayload) => ({
      ...prevPayload,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    let finalinvalids = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        }
    let invalids = validate(finalinvalids, setInvalidFields)
    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload))
  }

  return (
    <div>
      <div className="bg-white border-[#704f4f] border w-[600px] m-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm ">
        <h3 className="font-bold text-3xl mb-[10px]">
          {isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}
        </h3>
        <div className="w-full">
          {isRegister && (
            <InputForm
              name={'name'}
              stylleGroup={'mt-[15px]'}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.name}
              onChange={handleChange}
              keyPayload={'name'}
              label={'Họ tên'}
              styleLabel="text-sm uppercase text-xs font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[5px]"
            />
          )}
          <InputForm
            name={'phone'}
            stylleGroup={'mt-[15px]'}
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            value={payload.phone}
            onChange={handleChange}
            keyPayload={'phone'}
            label={'Số điện thoại'}
            styleLabel="text-sm uppercase text-xs font-normal "
            styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[5px]"
          />
          <InputForm
            name={'password'}
            stylleGroup={'mt-[15px]'}
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            value={payload.password}
            onChange={handleChange}
            keyPayload={'password'}
            label={'Mật khẩu'}
            styleLabel="text-sm uppercase text-xs  font-normal "
            styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[5px] mb-[5px]"
            type={'password'}
          />
          {isRegister && (
            <InputForm
              name={'comfirmPassword'}
              stylleGroup={'mt-[15px]'}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.comfirmPassword}
              onChange={handleChange}
              keyPayload={'comfirmPassword'}
              label={'Mật khẩu'}
              styleLabel="text-sm uppercase text-xs  font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[5px] mb-[5px]"
              type={'password'}
            />
          )}
          <Button
            text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
            bgcolor="bg-[#3961fb]"
            width="w-full "
            textColor={'text-white'}
            height={'h-[45px]'}
            fontW={'font-bold'}
            margin={'mt-[20px]'}
            onClick={handleSubmit}
          />
          <div className="text-sm text-black text-[14px] ">
            {isRegister ? (
              <>
                <p className="py-[5px] my-[14px]">
                  Bấm vào nút đăng ký tức là bạn đã đồng ý với{' '}
                  <span
                    className="text-blue-500 hover:underline"
                    onClick={() => {
                      setIsRegister(false)
                    }}
                  >
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
                      setIsRegister(false)
                      setPayload({
                        phone: '',
                        password: '',
                        name: '',
                      })
                      setInvalidFields([])
                    }}
                    className="text-blue-500 hover:underline cursor-pointer ml-[5px]"
                  >
                    Đăng nhập ngay
                  </span>
                </p>
              </>
            ) : (
              <>
                <p className="">
                  <div className="text-blue-500 py-[5px] my-[14px] flex justify-between ">
                    <span
                      onClick={() => {
                        setIsRegister(true)
                      }}
                      className="hover:text-[red]  cursor-pointer"
                    >
                      Bạn quên mật khẩu?
                    </span>
                    <span
                      onClick={() => {
                        setIsRegister(true)
                        setPayload({
                          phone: '',
                          password: '',
                          name: '',
                        })
                        setInvalidFields([])
                      }}
                      className="hover:text-[red]  cursor-pointer "
                    >
                      Tạo tài khoản mới
                    </span>
                  </div>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
