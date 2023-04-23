import React, { useState } from 'react'
import { location, text } from '../../../ultils/constains'
import { ProvinceBtn } from '.././index'
//import { useLocation } from 'react-router-dom'
export const Province = () => {
  //const locations = useLocation()
  //const [isRegister, setIsRegister] = useState(locations.state?.flag)
  return (
    <div className="w-full min-w-[320px] md:w-[85%]  items-center">
      <div className="w-full my-[20px] mx-[10px] md:my-[0px] md:mx-[0px] bg-[#225aff] md:bg-primary text-white md:text-black p-4 rounded-lg">
        <h1 className="text-[28px] font-bold mt-3">{text.HOME_TITLE}</h1>
        <p className="text-[14px] font-normal  mt-3 text-justify text-[#65676b]">
          {text.PAGE_DESCRIPTION}
        </p>
      </div>
      <div className="flex cursor-pointer gap-5  mb-3 justify-center items-center mt-2">
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
