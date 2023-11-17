import React from 'react';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import CopyButton from '../../../../components/CopyButton';
import icons from '../../../../ultils/icons';
import { useDispatch } from 'react-redux';
import * as actions from '../../../../store/action';
const { RiDeleteBin6Line, RiEdit2Line } = icons;

const PostTable = ({
  loading,
  posts_limit_admin,
  handShowPopup,
  handleDeletePost,
  
}) => {
  const dispatch = useDispatch();

  return (
    <div>
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
            <th className=" h-[5px] w-[15%] border border-[#dee2e6]">Giá</th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Ngày bắt đầu
            </th>
            <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
              Ngày hết hạn
            </th>
            <th className=" h-[5px] w-[13%] border border-[#dee2e6]">
              Trạng thái
            </th>
            <th className=" h-[5px] w-[5%] border border-[#dee2e6]"></th>
          </tr>
        </thead>
        {loading === true ? (
          <tbody className="">
            {posts_limit_admin?.length !== 0 ? (
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
                      {imgObject?.length !== 0 ? (
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
                      <Link className="line-clamp-2 overflow-hidden justify-center flex items-center">
                        {item?.attributes?.price?.split(' ')[1] === 'đồng/tháng'
                          ? `${
                              +item?.attributes?.price?.split(' ')[0] / 1000
                            }.000 đồng/tháng`
                          : item.attributes.price}
                      </Link>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <Link className="justify-center flex items-center">
                        {item?.overviews?.create?.split(' ')[3]}
                      </Link>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <div className="justify-center flex items-center">
                        {item?.overviews?.expire?.split(' ')[3]}
                      </div>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6]">
                      <div className="">
                        <span
                          className={`${
                            item.overviews.status === 'Tin đang hiển thị'
                              ? 'p-2 text-[#57b477] flex justify-center font-bold'
                              : 'p-2 text-[#f67053] flex justify-center font-bold'
                          }`}
                        >
                          {item.overviews.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-[10px] border border-[#dee2e6] items-center">
                      <div className="flex items-center justify-center gap-4">
                        <Link
                          onClick={(e) => {
                            dispatch(actions.editPostsLimit(item));
                            handShowPopup(e);
                          }}
                          className="flex justify-center"
                        >
                          <RiEdit2Line
                            size={20}
                            color="#ffb000"
                            onMouseOver={({ target }) =>
                              (target.style.color = 'blue')
                            }
                            onMouseOut={({ target }) =>
                              (target.style.color = '#ffb000')
                            }
                          />
                        </Link>
                        <Link
                          onClick={(e) => handleDeletePost(e, item)}
                          className="flex justify-center"
                        >
                          <RiDeleteBin6Line
                            size={20}
                            color="#FF0000"
                            onMouseOver={({ target }) =>
                              (target.style.color = 'blue')
                            }
                            onMouseOut={({ target }) =>
                              (target.style.color = 'FF0000')
                            }
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-10 ">
                  <h2>Không có bài đăng</h2>
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

export default PostTable;
