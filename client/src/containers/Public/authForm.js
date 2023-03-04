/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'
import { InputForm, Button } from '../../components'
import { useLocation } from 'react-router-dom'
import { apiRegister } from '../../service/auth'
const Auth = () => {
  const location = useLocation()
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [payload, setPayload] = useState({
    name: '',
    phone: '',
    password: ''
  })
  console.log(location.state)
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])

  const handlepayload = async () => {
    console.log(payload)
    const response = apiRegister(payload)
    console.log(response)
  }
  return (
    <div>
      <div className="bg-white border-[#dedede] border w-[600px] m-auto pt-[30px] px-[30px] pb-[100px] rounded-md shadow-sm ">
        <h3 className="font-bold text-3xl mb-[10px]">
          {isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}
        </h3>

        <div className="w-full">
          {isRegister && (
            <InputForm
              value={payload.name} setValue={setPayload} type={'name'}
              label={'Họ tên'}
              styleLabel="text-sm uppercase text-xs mb-[12.6px] font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[10px]"
              typeInput="text"
            />
          )}
          <InputForm
            value={payload.phone} setValue={setPayload} type={'phone'}
            label={'Số điện thoại'}
            styleLabel="text-sm uppercase text-xs mb-[12.6px] font-normal "
            styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[20px]"
            typeInput="text"
          />
          <InputForm
            value={payload.password} setValue={setPayload} type={'password'}
            label={'Mật khẩu'}
            styleLabel="text-sm uppercase text-xs  mb-[12.6px] font-normal "
            styleInput="font-bold text-2xl mb-[20px] outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] "

          />
          <Button
            text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
            bgcolor="bg-[#3961fb]"
            width="w-full "
            textColor={'text-white'}
            height={'h-[45px]'}
            fontW={'font-bold'}
            onClick={handlepayload}
          />
          <div className="text-sm text-black text-[14px] ">
            {isRegister ? (
              <>
                <p className='py-[5px] my-[14px]'>
                  Bấm vào nút đăng ký tức là bạn đã đồng ý với <span
                    className="text-blue-500 hover:underline" onClick={() => { setIsRegister(false) }}
                  >
                    quy định sử dụng
                  </span> của chúng tôi
                </p>
                <p className='py-[5px] my-[14px]'>
                  Bạn đã có tài khoản?
                  <span
                    onClick={() => {
                      setIsRegister(false)
                    }}
                    className="text-blue-500 hover:underline cursor-pointer ml-5px"
                  >
                    Đăng nhập ngay
                  </span>
                </p>

              </>
            ) : (
              <>
                <p className=''>
                  <div className='text-blue-500 py-[5px] my-[14px] flex justify-between '>
                    <span onClick={() => { setIsRegister(true) }} className="hover:text-[red]  cursor-pointer ">
                      Bạn quên mật khẩu?
                    </span>
                    <span onClick={() => { setIsRegister(true) }} className="hover:text-[red]  cursor-pointer ">
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
