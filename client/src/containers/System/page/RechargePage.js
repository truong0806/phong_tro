import React from 'react';
import { Link } from 'react-router-dom';

const RechargePage = () => {
  return (
    <div>
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">Nạp tiền vào tài khoản</h1>
        <div className="border-b-2"></div>
      </div>
      <div className="w-full flex flex-row gap-2">
        <div className="w-[75%] h-[200px">
          <h3 className="mt-[3rem] mb-[1rem] text-[1.75rem] font-medium">
            Mời bạn chọn phương thức nạp tiền
          </h3>
          <div className="flex flex-wrap gap-10 basis-1/3 ">
            <div className="group w-[25%] border rounded-sm mb-[30px] h-[161px] hover:border-[#0074e4] hover:shadow-4xl ">
              <Link className="w-full h-full text-center flex flex-col">
                <div className="h-[120px] w-full flex items-center justify-center ">
                  <img
                    className="max-w-[160px] max-h-[60px] align-middle"
                    src="https://phongtro123.com/images/bank-transfer.png"
                  ></img>
                </div>
                <div className="w-full px-0 py-[10px] font-bold text-center bg-[#eee] group-hover:bg-[#0074e4] group-hover:text-white">
                  Chuyển khoản
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[20%] h-[200px] bg-blue-500"></div>
      </div>
    </div>
  );
};

export default RechargePage;
