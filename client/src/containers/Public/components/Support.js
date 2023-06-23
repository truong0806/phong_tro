import React from 'react';
import { Button } from '../../../components';
import { support } from '../../../ultils/dataInfo';
import supportImg from '../../../assets/support-bg.jpg';

function Support() {
  return (
    <section className="border-dashed w-[91%] min-w-[320px] border-[7px]  bg-white border-[#e8eefc] p-[30px] mt-[30px] mb-[20px] rounded-lg  h-auto">
      <img
        src={supportImg}
        alt="thumbnal"
        className="w-full h-48 object-contain"
      />
      <div className="mt-[30px] px-[10px]  text-center">
        <p className="mb-[20px] text-[1.2rem] text-[#233762]">
          {support.support_title}
        </p>
        <div className="flex-col lg:flex-row grap-8 flex justify-around items-center">
          {support.statistic.map((item, index) => {
            return (
              <div className="text-center  mb-[20px]">
                <span className="text-[#f60] font-bold  uppercase mb-[10px]">
                  {item.name}
                </span>
                <br />
                <a className="text-[1.3rem] text-[#233762] font-bold my-[5px]">
                  {item.value}
                </a>
                <br />
                <a className="text-[1.3rem] text-[#233762] font-bold my-[5px]">
                  {item.zalo}
                </a>
                <br />
              </div>
            );
          })}
        </div>
        <div className="justify-center items-center flex">
          <Button
            fontW="py-[10px] px-[30px] font-normal text-[14px] h-[40px] font-[700] flex center justify-center items-center"
            text="Gửi liên hệ"
            textColor="text-white"
            bgcolor="bg-[#3961fb]"
            IcBeforSize="20"
          />
        </div>
      </div>
    </section>
  );
}

export default Support;
