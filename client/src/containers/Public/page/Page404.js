import React, { useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Page404 = () => {
  useEffect(() => {
    document.title = 'Nội dung không tồn tại';
  }, []);
  return (
    <div className="">
      <Header />
      <Navigation />
      <div className="flex flex-col items-center  bg-[#f5f5f5] mt-[40px]">
        <h1 className="text-[2rem] mb-[5px] font-bold">
          Rất tiếc, nội dung bạn tìm không tồn tại
        </h1>
        <h2 className="my-[14px]">
          Bạn có thể truy cập vào Trang chủ hoặc liên hệ 0912345678 để được hỗ
          trợ.
        </h2>
        <img
          alt="404"
          className="h-[400px] mx-auto my-[20px] "
          src="https://phongtro123.com/images/404-error-page-cuate.svg"
        ></img>
      </div>
    </div>
  );
};

export default Page404;
