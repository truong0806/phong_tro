import React from 'react';
import { useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import CopyButton from '../../../../components/CopyButton';
import { formatNumberWithDots } from '../../../../ultils/formatNumberWithDots';
import moment from 'moment';

const DepositHistoryTable = ({ loading }) => {
  const { recharge_list } = useSelector((state) => state.app);

  return (
    <div>
      <table className="w-[100%] mb-[0.8rem] text-[0.9rem] border-collapse border ">
        <thead className=" font-bold ">
          <tr className="bg-[#e9ecef]">
            <th className="p-[5px] h-[5px] w-[15%] border border-[#dee2e6]">
              Ngày nạp
            </th>
            <th className=" h-[5px] w-[5%] border border-[#dee2e6]">
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
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Trạng thái
            </th>
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">
              Ghi chú
            </th>
          </tr>
        </thead>
        {loading === true ? (
          <tbody className="">
            {recharge_list && recharge_list.length > 0 ? (
              recharge_list?.map((item, index) => {
                const formattedDate = moment
                  .utc(item?.createdAt)
                  .format('HH:mm DD/MM/YYYY');
                return (
                  <tr
                    className={`${
                      index % 2 !== 0 ? 'bg-[#f5f5f5]' : 'bg-white'
                    }`}
                    key={index}
                  >
                    <td className="border border-[#dee2e6] text-center">
                      <div className="p-2">{formattedDate}</div>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <div className="line-clamp-2 overflow-hidden flex items-center justify-center">
                        <CopyButton
                          className={'ml-4'}
                          valueCopy={item.id}
                          text={item.id}
                        />
                      </div>
                    </td>

                    <td className="border border-[#dee2e6] text-center">
                      <div className="p-2 ">{item.paymentMethod}</div>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <div className="line-clamp-2 overflow-hidden flex items-center justify-center">
                        {formatNumberWithDots(+item?.balance)}
                      </div>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <div className="line-clamp-2 overflow-hidden flex items-center justify-center">
                        {formatNumberWithDots(0)}
                      </div>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <div className="line-clamp-2 overflow-hidden flex items-center justify-center ">
                        {formatNumberWithDots(+item?.balance)}
                      </div>
                    </td>
                    <td className="border border-[#dee2e6] text-center">
                      <div className="p-1">
                        {item.status === '0' ? (
                          <span className="text-yellow-400">
                            Đang thực hiện
                          </span>
                        ) : item.status === '1' ? (
                          <span className="text-green-500">Thành công</span>
                        ) : (
                          <span className="text-red-600">Thất bại</span>
                        )}
                      </div>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]"></td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-10 ">
                  <h2>Không có giao dịch nạp tiền</h2>
                </td>
              </tr>
            )}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="7" className="text-center py-10 ">
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
