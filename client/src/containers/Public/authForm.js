/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react'
import { InputForm, Button } from '../../components'
import { useLocation } from 'react-router-dom'
import * as actions from '../../store/action'
import { useDispatch } from 'react-redux'
const Auth = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [isRegister, setIsRegister] = useState(location.state?.flag)
  const [invalidFields, setInvalidFields] = useState([])
  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: '',
  })
  useEffect(() => {
    setIsRegister(location.state?.flag)
  }, [location.state?.flag])
  const handleSubmit = async () => {
    // console.log(payload)
    // isRegister
    //   ? dispatch(actions.register(payload))
    //   : dispatch(actions.login(payload))
    let invalids = validate(payload)
    console.log(invalids)
    //const response = apiRegister(payload)
    //console.log(response)
  }

  console.log(invalidFields)
  const validate = (payload) => {
    let invalids = 0
    let fields = Object.entries(payload)
    fields.forEach((item) => {
      switch (item[0]) {
        case 'password':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mật khẩu',
              },
            ])
            invalids++
          }
          break
        case 'phone':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập số điện thoại',
              },
            ])
            invalids++
          }
          break
        case 'name':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập tên',
              },
            ])
            invalids++
          }
          break
        default:
          break
      }
    })
    fields.forEach((item) => {
      switch (item[0]) {
        case 'password':
          if (item[1] > 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập mật khẩu tối thiểu 6 ký tự',
              },
            ])
            invalids++
          }
          break
        case 'phone':
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng đúng định dạng số điện thoại',
              },
            ])
            invalids++
          } else {
            if (item[1].length > 10 || item[1].length < 10) {
              setInvalidFields((prev) => [
                ...prev,
                {
                  name: item[0],
                  msg: 'Vui lòng đúng số điện thoại với 10 số',
                },
              ])
            }
          }
          break
        case 'name':
          if (item[1] === '') {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                msg: 'Vui lòng nhập tên',
              },
            ])
            invalids++
          }
          break
        default:
          break
      }
    })
    return invalids
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
              stylleGroup={'mt-[15px]'}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              value={payload.name}
              setValue={setPayload}
              type={'name'}
              label={'Họ tên'}
              styleLabel="text-sm uppercase text-xs font-normal "
              styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[5px]"
              typeInput="text"
            />
          )}
          <InputForm
            stylleGroup={'mt-[15px]'}
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            value={payload.phone}
            setValue={setPayload}
            type={'phone'}
            label={'Số điện thoại'}
            styleLabel="text-sm uppercase text-xs font-normal "
            styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[10px] mb-[5px]"
            typeInput="text"
          />
          <InputForm
            stylleGroup={'mt-[15px]'}
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            value={payload.password}
            setValue={setPayload}
            type={'password'}
            label={'Mật khẩu'}
            styleLabel="text-sm uppercase text-xs  font-normal "
            styleInput="font-bold text-2xl outline-none font-normal block bg-[#e8f0fe] p-2 rounded-md w-full h-[45px] px-[5px] mb-[5px]"
          />
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
                
                <span
                    
                    className="text-black-500 hover:underline cursor-pointer"
                  >
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
