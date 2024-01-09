import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PopupSupport = () => {
  const [open, setOpen] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const handlePopup = (e) => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="fixed  top-0 right-0 bottom-0  z-50">
      <div className="absolute cursor-pointer bottom-[50px] right-[25px] font-[0.7rem]">
        <div
          onClick={(e) => handlePopup(e)}
          className="w-[60px] text-[#fff] z-50 h-[60px] rounded-[50%] bg-[#03a84e] flex items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-[1.9rem] font-bold">?</span>
            <span className="text-[0.9rem]">Trợ giúp</span>
          </div>
        </div>
        {open && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handlePopup(e);
            }}
            className="fixed bg-[#000000ba] z-50 left-0 top-0 right-0 bottom-0"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="absolute bottom-[120px] right-[25px] min-w-[500px] shadow-md rounded-[15px] bg-[#03a84e] text-[0.9rem] z-2"
            >
              <div className="relative px-[30px] pt-[20px] pb-[5px] text-[1.5rem]">
                <div className="flex flex-row justify-between sm:text-[1.5rem] text-[0.9rem] relative mb-[10px]">
                  <div className="font-bold flex items-center justify-center mt-[5px] text-[#fff]">
                    Xin chào, {userData.name}
                  </div>
                  <button
                    onClick={(e) => {
                      handlePopup(e);
                    }}
                    className="right-[15px] top-[12px] w-[30px] h-[30px] text-[#000] bg-[#fff] rounded-[50%] flex items-center justify-center"
                  >
                    x
                  </button>
                </div>
                <p className="max-w-[400px] text-[#fff] text-[0.9rem] font-bold my-[10px]">
                  Đội chăm sóc khách hàng Phongtro123.com. Chúng tôi muốn lắng
                  nghe câu hỏi và ý kiến đóng góp từ bạn. Hãy phản hồi cho chúng
                  tôi biết vấn đề của bạn nhé!
                </p>
              </div>
              <div className="px-[30px] pb-[20px] pt-[5px] text-[0.8rem]">
                <ul className="flex flex-row gap-2 justify-center">
                  <li className="w-[50%]">
                    <div className="bg-[#fff] rounded-[15px] p-[15px] text-center block">
                      <div className="font-bold ">
                        Nhân viên hỗ trợ riêng của bạn
                      </div>
                      <div className="text-[#f73859] my-[5px] text-[1rem] font-bold">
                        Nhiên LBK Corp
                      </div>
                      <div className="text-[0.9rem] mb-[5px]">
                        Điện thoại:{' '}
                        <a
                          className="hover:underline"
                          target="_blank"
                          href="tel:0902657123"
                        >
                          0902657123
                        </a>
                      </div>
                      <div className="contact-zalo">
                        Zalo:{' '}
                        <a
                          className="hover:underline"
                          target="_blank"
                          href="https://zalo.me/0902657123"
                        >
                          0902657123
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="w-[50%]">
                    <div className="bg-[#fff] rounded-[15px] p-4 text-center block">
                      <div className="font-bold ">Phản ánh/khiếu nại</div>
                      <div className="text-[#f73859] my-[5px] text-[1rem] font-bold">
                        Hotline
                      </div>
                      <div className="text-[0.9rem] mb-[5px]">
                        Điện thoại:{' '}
                        <a
                          className="hover:underline"
                          target="_blank"
                          href="tel:0917686101"
                        >
                          0917686101
                        </a>
                      </div>
                      <div className="contact-zalo">
                        Zalo:{' '}
                        <a
                          className="hover:underline"
                          target="_blank"
                          href="https://zalo.me/0917686101"
                        >
                          0917686101
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupSupport;
