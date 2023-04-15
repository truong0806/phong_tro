import React, { useState } from 'react'
import { location, text } from '../../../ultils/constains'
import { ProvinceBtn } from '.././index'
//import { useLocation } from 'react-router-dom'
export const Province = () => {
  //const locations = useLocation()
  //const [isRegister, setIsRegister] = useState(locations.state?.flag)
  return (
    <div className="w-[85%] ">
      <div className="w-full">
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-[14px] font-normal text-justify text-[#65676b]">
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
