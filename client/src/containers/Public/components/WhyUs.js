/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import star5 from '../../../assets/5star.png';
import { Button } from '../../../components';
import { whyus } from '../../../ultils/dataInfo';

function WhyUs() {
  return (
    <div className="w-[91%]">
      <div className="border-[#dedede]  border w-full min-w-[320px] text-center bg-white m-auto pt-[20px] px-[50px] pb-[50px]  rounded-md shadow-sm ">
        <h4 className="flex font-[700] text-[1.3rem] mt-3 mb-[5px] justify-center items-center ">
          {whyus.whyus_title}
        </h4>
        <p className="my-[14px] text-center line-height text-[14px]">
          {whyus.whyus_des}
        </p>
        <div className="flex flex-col lg:flex-row gap-4  justify-center items-center content-around ">
          {whyus.statistic &&
            whyus.statistic.map((item, index) => {
              return (
                <div className="w-1/4 flex-col">
                  <span className="font-[700] text-[21px] mb-[5px]">
                    {item.value}
                  </span>
                  <br />
                  <span className="text-[14px] font-thin mb-[5px]">
                    {item.name}
                  </span>
                </div>
              );
            })}
        </div>
        <br />
        <br />
        <h5 className="font-[700] text-[1.3rem] mb-[5px] justify-center items-center flex">
          {whyus.price}
        </h5>
        <div className="justify-center items-center flex">
          <img className="w-[100px] h-[20px]" src={star5} />
        </div>
        <p className="italic my-[10px] text-center line-height text-[14px]">
          {whyus.comment}
          <br />
          <span className="mt-[10px] justify-center items-center flex text-center line-height text-[14px]">
            {whyus.auth}
          </span>
        </p>
        <h6 className=" justify-center items-center flex">{whyus.question1}</h6>
        <p className=" justify-center items-center flex my-[14px] ">
          {whyus.question2}
        </p>
        <div className="justify-center items-center flex">
          <Button
            fontW="py-[10px] px-[30px] font-normal text-[14px] h-[40px] font-[700] flex center justify-center items-center"
            text="Đăng tin ngay"
            textColor="text-white"
            bgcolor="bg-[#f73859]"
            IcBeforSize="20"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
