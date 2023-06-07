/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Button } from '../../../components'
const Support = () => {
  return (
    <div>
      <section className=" m-auto border-dashed w-full min-w-[320px] border-[7px]  bg-white border-[#e8eefc] p-[30px] mt-[30px] mb-[20px] rounded-lg  h-auto">
        <div className="">
          <div className="h-[150px] bg-support-bg bg-contain bg-no-repeat bg-center w-full"></div>
          <div className="mt-[30px] px-[10px]  text-center">
            <div className="mb-[20px] text-[17px] text-[#233762]">
              Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
            </div>
            <div className="flex-col lg:flex-row grap-6 flex justify-around items-center">
              <div className="text-center  mb-[20px]">
                <span className="text-[#f60] font-bold text-[14px] uppercase mb-[10px]">
                  Hỗ trợ thanh toán
                </span>
                <br />
                <a className="text-[21px] text-[#233762] font-bold my-[5px]">
                  Điện thoại: 0917686101
                </a>
                <a className="text-[21px] text-[#233762] font-bold my-[5px]">
                  <br />
                  Zalo: 0917686101
                </a>
              </div>
              <div className="text-center  mb-[20px]">
                <span className="text-[#f60] font-bold text-[14px] uppercase mb-[10px]">
                  Hỗ trợ đăng tin
                </span>
                <br />
                <a className="text-[21px] text-[#233762] font-bold my-[5px]">
                  Điện thoại: 0902657123
                </a>
                <br />
                <a className="text-[21px] text-[#233762] font-bold my-[5px]">
                  Zalo: 0902657123
                </a>
                <br />
              </div>
              <div className="text-center  mb-[20px]">
                <span className="text-[#f60] font-bold text-[14px] uppercase mb-[10px]">
                  Hotline 24/7
                </span>
                <br />
                <a className="text-[21px] text-[#233762] font-bold my-[5px]">
                  Điện thoại: 0917686101
                </a>
                <br />
                <a className="text-[21px] text-[#233762] font-bold my-[5px]">
                  Zalo: 0917686101
                </a>
                <br />
              </div>
            </div>
            <div className="justify-center items-center flex">
              <Button
                fontW={
                  'py-[10px] px-[30px] font-normal text-[14px] h-[40px] font-[700] flex center justify-center items-center'
                }
                text={'Gửi liên hệ'}
                textColor="text-white"
                bgcolor="bg-[#3961fb]"
                IcBeforSize="20"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
