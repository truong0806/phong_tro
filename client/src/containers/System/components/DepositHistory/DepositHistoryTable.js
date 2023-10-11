import React from 'react';
import { PropagateLoader } from 'react-spinners';

const DepositHistoryTable = ({loading}) => {
  return (
    <div>
      <table className="w-[100%] mb-[0.8rem] text-[0.9rem] border-collapse border ">
        <thead className=" font-bold ">
          <tr>
            <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
              Ngày nạp
            </th>
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">
              Mã giao dịch
            </th>
            <th className=" h-[5px] w-[20%] border border-[#dee2e6]">
              Phương thức
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Số tiền
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Khuyến mãi
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Thực nhận
            </th>
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">
              Trạng thái
            </th>
            <th className=" h-[5px] w-[5%] border border-[#dee2e6]">Ghi chú</th>
          </tr>
        </thead>
        {loading ? (
          <tbody className="">
            <tr>
              <td colSpan="7" className="py-10 text-center">Không có thông tin lịch sử nạp tiền</td>
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

export default DepositHistoryTable;
