/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import star5 from '../../../assets/5star.png';
import { Button } from '../../../components';

function WhyUs() {
  return (
    <div className="">
      <div className="border-[#dedede] border w-full min-w-[320px] text-center bg-white m-auto pt-[20px] px-[50px] pb-[50px]  rounded-md shadow-sm ">
        <h4 className="font-[700] text-[18px] mb-[5px] justify-center items-center flex">
          Tại sao lại chọn PhongTro123.com?
        </h4>
        <p className="my-[14px] text-center line-height text-[14px]">
          Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào
          là trang web đứng top google về các từ khóa: cho thuê phòng trọ, nhà
          trọ, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép, cho thuê
          mặt bằng...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với
          nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm chi phí hơn
        </p>
        <div className="flex-col lg:flex-row gap-4 flex justify-center items-center content-around ">
          <div className="w-1/4 flex-col">
            <span className="font-[700] text-[21px] mb-[5px]">116.998+</span>
            <br />
            <span className="text-[14px] font-thin mb-[5px]">Thành viên</span>
          </div>
          <div className="w-1/4">
            <span className="font-[700] text-[21px] mb-[5px]">103.348+</span>
            <br />
            <span className="text-[14px] font-thin mb-[5px]">Tin đăng</span>
          </div>
          <div className="w-1/4">
            <span className="font-[700] text-[21px] mb-[5px]">300.000+</span>
            <br />
            <span className="text-[14px] font-thin mb-[5px]">
              Lượt truy cập/tháng
            </span>
          </div>
          <div className="w-1/4">
            <span className="font-[700] text-[21px] mb-[5px]">2.500.000+</span>
            <br />
            <span className="text-[14px] font-thin mb-[5px]">
              Lượt xem/tháng
            </span>
          </div>
        </div>
        <br />
        <br />
        <h5 className="font-[700] text-[18px] mb-[5px] justify-center items-center flex">
          Chi phí thấp, hiệu quả tối đa
        </h5>
        <div className="justify-center items-center flex">
          <img className="w-[100px] h-[20px]" src={star5} />
        </div>
        <p className="italic my-[10px] text-center line-height text-[14px]">
          "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và
          chi phí cho việc đăng tin cho thuê: từ việc phát tờ rơi, dán giấy, và
          đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết
          website phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả
          khá cao trong khi chi phí khá thấp, không còn tình trạng phòng trống
          kéo dài."
          <br />
          <span className="mt-[10px] justify-center items-center flex text-center line-height text-[14px]">
            Anh Khánh (chủ hệ thống phòng trọ tại Tp.HCM)
          </span>
        </p>
        <h6 className=" justify-center items-center flex">
          Bạn đang có phòng trọ / căn hộ cho thuê?
        </h6>
        <p className=" justify-center items-center flex my-[14px] ">
          Không phải lo tìm người cho thuê, phòng trống kéo dài
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
