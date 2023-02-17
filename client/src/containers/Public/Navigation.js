import React from "react";

const Navigation = () => {
  return (
    <div className="w-screen  flex items-center justify-center h-[40px] bg-secondary1 text-white">
      <div className="w-1100 flex h-full items-center text-[13.3px] font-bold justify-center cursor-pointer ">
        <div className="h-full flex items-center justify-center px-[12px] bg-[#f73859] ">
          Trang chủ
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Cho thuê phòng trọ
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Nhà cho thuế
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Cho thuế căn hộ
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Cho thuê mặt bằng
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Tìm người ở ghép
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Blog
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Hướng dẫn
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Nạp tiền
        </div>
        <div className="h-full flex items-center justify-center px-[12px] hover:bg-[#f73859]">
          Bảng giá
        </div>
      </div>
    </div>
  );
};

export default Navigation;
