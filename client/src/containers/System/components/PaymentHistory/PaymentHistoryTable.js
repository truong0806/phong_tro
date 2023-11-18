import React from 'react';
import { useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';

const PaymentHistory = ({ loading }) => {
  return (
    <div>
      <table className="w-[100%] mb-[0.8rem] text-[0.9rem] border-collapse border ">
        <thead className=" font-bold ">
          <tr>
            <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
              Thời gian
            </th>
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">
              Loại hoạt động
            </th>
            <th className=" h-[5px] w-[20%] border border-[#dee2e6]">
              Mã tin đăng
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Loại tin
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">Số dư</th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">Phí</th>

            <th className=" h-[5px] w-[5%] border border-[#dee2e6]">Còn lại</th>
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">
              Trạng thái
            </th>
          </tr>
        </thead>
        {loading ? (
          <tbody className="">
            <tr>
              <td colSpan="7" className="py-10 text-center">
                Không có thông tin lịch sử thanh toán
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colspan="7" className="pt-[20px]">
                <div className="flex justify-center  items-center ">
                  <PropagateLoader color="#1266dd" size={12} />
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default PaymentHistory;
