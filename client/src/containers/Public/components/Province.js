import React from 'react'
import { location, text } from '../../../ultils/constains'
import { ProvinceBtn } from '.././index'
//import { useLocation } from 'react-router-dom'
export const Province = () => {
  //const locations = useLocation()
  //const [isRegister, setIsRegister] = useState(locations.state?.flag)
  return (
    <div className="flex flex-col w-full items-center">
      <div className="items-center justify-center  my-[20px] mx-[10px]  bg-[#225aff]  text-white p-[15px] rounded-lg">
        <h1 className="text-[1.8rem] m-0 h-full text-left leading-9 font-bold ">
          {text.HOME_TITLE}
        </h1>
        <p className="text-[.9rem] leading-6 font-normal  mt-[10px]  text-white text-justify">
          {text.PAGE_DESCRIPTION}
        </p>
        <p className="page-description lg:hidden mb-0 mt-[10px] text-[.9rem] leading-6">
          <a rel="nofollow" href="https://phongtro123.com/dang-nhap-tai-khoan">
            Đăng nhập
          </a>{' '}
          hoặc{' '}
          <a rel="nofollow" href="https://phongtro123.com/dang-ky-tai-khoan">
            Đăng ký
          </a>{' '}
          để bắt đầu
        </p>
      </div>
      <div className="flex cursor-pointer gap-5  mb-3 justify-center items-center mt-2 ">
        {location.map((item) => {
          return (
            <ProvinceBtn
              key={item.id}
              name={item.name}
              image={item.image}
              // onClick={() => {
              //     console.log(window.location.href);
              // }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Province
