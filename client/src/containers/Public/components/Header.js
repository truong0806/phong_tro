/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import logo from '../../../assets/logoWithoutBg.png'
import { Button } from '../../../components'
import icons from '../../../ultils/icons'
import { useNavigate } from 'react-router-dom'
import { path } from '../../../ultils/constains'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../store/action'
const { AiOutlineHeart, BiLogIn, AiOutlineUserAdd, AiOutlinePlusCircle } = icons

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const goRegister = useCallback(() => {
    navigate(`${path.AUTH}/${path.REGISTER}`)
  }, [])
  const goLogin = useCallback(() => {
    navigate(`${path.AUTH}/${path.LOGIN}`)
  }, [])
  const goHome = useCallback(() => {
    navigate('/')
  }, [])

  return (
    <div className="w-full  flex items-center lg:justify-between lg:w-[1100px] mx-auto my-0">
      <img
        className="cursor-pointer ml-[10px] bg-contain  w-[200px] h-[50px]  lg:w-[240px] lg:h-[70px] object-contain "
        src={logo}
        alt="logo"
        onClick={goHome}
      />
      <div className=" flex items-center  right-[10px] lg:hidden absolute">
        <div className="bg-menu h-[25px] w-[25px] bg-contain mr-[8px]"></div>
        <span className="">Danh Mục</span>
      </div>
      <div className="cursor-pointer  flex items-center gap-1 ">
        {!isLoggedIn && (
          <div className="cursor-pointer  flex items-center gap-1 ">
            <Button
              margin={'py-[20px]'}
              fontW={'font-normal text-[14px] h-[40px] hidden'}
              IcBefor={AiOutlineHeart}
              text={'Yêu thích'}
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
            />
            <Button
              margin={'py-[20px]'}
              fontW={'font-normal text-[14px] h-[40px] hidden'}
              IcBefor={BiLogIn}
              text={'Đăng nhập'}
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
              onClick={goLogin}
            />
            <Button
              margin={'py-[20px]'}
              fontW={'font-normal text-[14px] h-[40px] hidden'}
              IcBefor={AiOutlineUserAdd}
              text={'Đăng ký'}
              textColor="text-black"
              bgcolor="bg-[#f5f5f5]"
              IcBeforSize="20"
              onClick={goRegister}
            />
          </div>
        )}
        {isLoggedIn && (
          <div className="cursor-pointer  flex items-center gap-1">
            <span>Ten !</span>
            <Button
              margin={'py-[20px]'}
              fontW={'font-normal text-[14px] h-[40px]'}
              IcBefor={BiLogIn}
              text={'Đăng xuất'}
              textColor="text-black"
              bgcolor="bg-white"
              IcBeforSize="20"
              onClick={() => {
                dispatch(actions.logout())
              }}
            />
          </div>
        )}
        <Button
          margin={'py-[20px]'}
          width={'w-auto text-[14px] h-[40px] hidden'}
          text={'Đăng tin mới'}
          textColor="text-white"
          bgcolor="bg-secondary2"
          IcAfter={AiOutlinePlusCircle}
          IcAfterSize="20"
          ColorIcon="white"
        />
      </div>
    </div>
  )
}

export default Header
