import React from 'react';
import { Link } from 'react-router-dom';
import { depositMethod } from '../../../ultils/constains';
import { usePathname } from '../../../ultils/common/usePathname';

const RechargePage = () => {
  const pageTitle = usePathname();

  return (
    <div>
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">{pageTitle[0].text}</h1>
        <div className="border-b-2"></div>
      </div>
      <div className="w-full flex flex-row mb-[60px]">
        <div className="w-[70%] h-[200px">
          <h3 className="mt-[3rem] mb-[1rem] text-[1.75rem] font-medium">
            Mời bạn chọn phương thức nạp tiền
          </h3>
          <div className="flex flex-wrap  gap-8 basis-1/3 ">
            {depositMethod?.map((item) => {
              return (
                <div className="group w-[28%] border rounded-sm mb-[20px] h-[161px] hover:border-[#0074e4] hover:shadow-4xl ">
                  <Link className="w-full h-full text-center flex flex-col">
                    <div className="h-[120px] w-full flex items-center justify-center ">
                      <img
                        alt="avatar"
                        className="max-w-[160px] max-h-[60px] align-middle"
                        src={item.imgUrl}
                      ></img>
                    </div>
                    <div className="w-full px-0 py-[10px] font-bold text-center bg-[#eee] group-hover:bg-[#0074e4] group-hover:text-white">
                      {item.value}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[25%] h-[200px] ml-[10px]  flex flex-col">
          <div className="border rounded-sm bg-[#fff] mb-[15px]">
            <div className="p-[1.25rem] ">
              <span className="">Số dư tài khoản</span>
              <h3 className="mt-2 text-[#28a745] text-[1.75rem] font-medium">
                <strong>0đ</strong>
              </h3>
            </div>
          </div>
          <div className="border rounded-sm bg-[#fff]">
            <div className="px-[0.65rem] py-[0.3rem] text-white flex flex-row bg-[#6c757d] mb-[5px] items-center justify-center">
              <span>Lịch sử nạp tiền</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className="border rounded-sm bg-[#fff]">
            <div className="px-[0.65rem] py-[0.3rem] text-white flex flex-row  bg-[#6c757d] mb-[5px] items-center justify-center ">
              <span>Lịch sử thanh toán</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className="border rounded-sm bg-[#fff]">
            <div className="px-[0.65rem] py-[0.3rem] text-white flex flex-row bg-[#6c757d] mb-[5px] items-center justify-center">
              <span>Bảng giá dịch vụ</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default RechargePage;
