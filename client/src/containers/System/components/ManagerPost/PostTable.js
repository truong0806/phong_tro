import React from 'react';
import CopyButton from '../../../../components/CopyButton';
import moment from 'moment';
import { PropagateLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const PostTable = ({ loading, posts_limit_admin }) => {
  const checkStatus = (day) => {
    var today = moment();
    var specificDate = moment(day, 'DD/MM/YYYY');
    if (today.diff(specificDate, 'day') > 0) {
      return (
        <span className="p-2 text-[#f67053] flex justify-center font-bold">
          Hết hạn
        </span>
      );
    } else {
      return (
        <span className="p-2 text-[#57b477] flex justify-center font-bold">
          Đang hoạt động
        </span>
      );
    }
  };

  return (
    <div>
      {' '}
      <table className="w-[100%] mb-[0.8rem] text-[0.9rem] border-collapse border ">
        <thead className=" font-bold ">
          <tr>
            <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
              Mã tin
            </th>
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">
              Ảnh đại diện
            </th>
            <th className=" h-[5px] w-[20%] border border-[#dee2e6]">
              Tiêu đề
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">Giá</th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Ngày bắt đầu
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Ngày hết hạn
            </th>
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">
              Trạng thái
            </th>
            <th className=" h-[5px] w-[5%] border border-[#dee2e6]"></th>
          </tr>
        </thead>
        {loading ? (
          <tbody className="">
            {posts_limit_admin ? (
              posts_limit_admin?.map((item, index) => {
                let imgObject = JSON.parse(item.images.image);
                return (
                  <tr
                    className={`${
                      index % 2 !== 0 ? 'bg-[#f5f5f5]' : 'bg-white'
                    }`}
                    key={index}
                  >
                    <td className="p-[10px] border border-[#dee2e6]">
                      <Link className="line-clamp-2 overflow-hidden ">
                        <CopyButton
                          className={'ml-4'}
                          valueCopy={item.overviews.code}
                          text={item.overviews.code}
                        />
                      </Link>
                    </td>
                    <td className="p-[10px] h-full border border-[#dee2e6] flex gap-2 justify-center overflow-hidden">
                      {imgObject.length !== 0 ? (
                        imgObject?.slice(0, 4).map((img, index) => {
                          return (
                            <div key={index}>
                              <img
                              alt={index}
                                className="w-[40px] h-[40px] object-fill"
                                src={img}
                              ></img>
                            </div>
                          );
                        })
                      ) : (
                        <Link className="line-clamp-1 h-[45px] flex justify-center items-center ">
                          Không có ảnh
                        </Link>
                      )}
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <Link className="line-clamp-2 overflow-hidden ">
                        {item.title}
                      </Link>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <Link className="line-clamp-2 overflow-hidden">
                        {item.attributes.price.split(' ')[1] === 'đồng/tháng'
                          ? `${
                              +item.attributes.price.split(' ')[0] / 1000
                            }.000 đồng/tháng`
                          : item.attributes.price}
                      </Link>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <Link className="line-clamp-2 overflow-hidden ">
                        {item.overviews.create}
                      </Link>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      {item.overviews.expire}{' '}
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      {checkStatus(item?.overviews?.expire?.split(' ')[3])}
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <Link className="">EDIT</Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colspan="7" className="p-[10px]">
                  Bạn chưa có tin đăng nào. Bấm{' '}
                  <Link href="https://phongtro123.com/quan-ly/dang-tin-moi.html">
                    vào đây
                  </Link>{' '}
                  để bắt đầu đăng tin
                </td>
              </tr>
            )}
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

export default PostTable;
