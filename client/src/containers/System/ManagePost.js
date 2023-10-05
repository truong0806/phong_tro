import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import * as actions from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { Pagination } from '../Public';

const ManagePost = () => {
    const dispatch = useDispatch();
    const { posts_limit } = useSelector((state) => state.post);
    console.log(
        '🚀 ~ file: ManagePost.js:10 ~ ManagePost ~ posts_limit:',
        posts_limit
    );
    const [categoryCode, setcategoryCode] = useState('none');
    const [searchParams] = useSearchParams();
    useEffect(() => {
        setTimeout(() => {
            let params = [];
            for (let entry of searchParams.entries()) {
                params.push(entry);
            }
            let searchParamsObject = {};
            params?.forEach((i) => {
                if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
                    searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
                } else {
                    searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
                }
            });
            if (categoryCode && categoryCode !== 'none')
                searchParamsObject.categoryCode = categoryCode;
            console.log(
                '🚀 ~ file: ListPost.js:33 ~ setTimeout ~ searchParamsObject:',
                searchParamsObject
            );
            dispatch(actions.GetPostsLimit(searchParamsObject));
        });
    }, [searchParams, categoryCode, dispatch]);
    return (
        <div>
            <div className=" items-center  pb-1 mb-3 flex justify-between ">
                <h1 className="text-[1.75rem] mt-2 py-[1rem] ">Quản lý tin đăng</h1>
                <div className="flex gap-1 justify-end text-[0.75rem]">
                    <select className="text-[0.75rem] focus:border-custom-gray focus:shadow-lg cursor-pointer py-[0.25rem] px-[0.5rem] rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]">
                        <option className="bg-white text-[#212529]">
                            Lọc theo loại VIP
                        </option>
                        <option className="bg-white text-[#212529]">Tin Hot</option>
                        <option className="bg-white text-[#212529]">Tin VIP 30</option>
                        <option className="bg-white text-[#212529]">Tin VIP 20</option>
                        <option className="bg-white text-[#212529]">Tin VIP 10</option>
                        <option className="bg-white text-[#212529]">Tin thường</option>
                    </select>
                    <select className="text-[0.75rem] focus:border-custom-gray focus:shadow-lg  cursor-pointer  py-[0.25rem] px-[0.5rem]  rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]">
                        <option className="bg-white text-[#212529]">
                            Lọc theo trạng thái
                        </option>
                        <option className="bg-white text-[#212529]">
                            Tin đang hiển thị
                        </option>
                        <option className="bg-white text-[#212529]">Tin hết hạn</option>
                        <option className="bg-white text-[#212529]">Tin đang ẩn</option>
                    </select>
                    <Link to={'/quan-ly/dang-tin-moi'} className=''><Button
                        text={'Đăng tin mới'}
                        bgcolor={'bg-[#dc3545] border-[#dc3545] text-white h-full'}
                    /></Link>
                </div>
            </div>
            <div className="border-b-2"></div>
            <div className="">
                <div className=" ">
                    <table className="w-[100%] mb-[0.8rem]text-[0.79rem] border-collapse border ">
                        <thead className=" font-bold ">
                            <tr>
                                <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
                                    Mã tin
                                </th>
                                <th className="p-[5px] h-[5px] w-[15%] border border-[#dee2e6]">
                                    Ảnh đại diện
                                </th>
                                <th className="p-[5px] h-[5px] w-[20%] border border-[#dee2e6]">
                                    Tiêu đề
                                </th>
                                <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
                                    Giá
                                </th>
                                <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
                                    Ngày bắt đầu
                                </th>
                                <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
                                    Ngày hết hạn
                                </th>
                                <th className="p-[5px] h-[5px] w-[10%] border border-[#dee2e6]">
                                    Trạng thái
                                </th>
                                <th className="p-[5px] h-[5px] w-[5%] border border-[#dee2e6]"></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {posts_limit ? (
                                posts_limit?.map((item) => {
                                    let imgObject = JSON.parse(item.images.image);
                                    console.log(
                                        '🚀 ~ file: ManagePost.js:106 ~ posts_limit?.map ~ imgObject:',
                                        imgObject
                                    );
                                    return (
                                        <tr className=" ">
                                            <td className="p-[10px] border border-[#dee2e6]">
                                                <a className="line-clamp-2 overflow-hidden ">
                                                    {item.id}
                                                </a>
                                            </td>
                                            <td className="p-[10px] h-full border border-[#dee2e6] flex gap-2 justify-center overflow-hidden">
                                                {imgObject.length !== 0 ? imgObject?.slice(0, 4).map((img) => {
                                                    return (
                                                        <img className="w-[50px] h-[50px]" src={img}></img>
                                                    );
                                                }) : <a className='line-clamp-1 h-[45px] flex justify-center items-center '>Không có ảnh</a>}
                                            </td>
                                            <td className="p-[10px] border border-[#dee2e6]">
                                                <a className="line-clamp-2 overflow-hidden ">
                                                    {item.title}
                                                </a>
                                            </td>
                                            <td className="p-[10px] border border-[#dee2e6]">
                                                <a className="line-clamp-2 overflow-hidden ">
                                                    {item.attributes.price}
                                                </a>
                                            </td>
                                            <td className="p-[10px] border border-[#dee2e6]">
                                                <a className="line-clamp-2 overflow-hidden ">
                                                    {item.attributes.published}
                                                </a>
                                            </td>
                                            <td className="p-[10px] border border-[#dee2e6]"></td>
                                            <td className="p-[10px] border border-[#dee2e6]"></td>
                                            <td className="p-[10px] border border-[#dee2e6]">
                                                <a className="">EDIT</a>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colspan="7" className="p-[10px]">
                                        Bạn chưa có tin đăng nào. Bấm{' '}
                                        <a href="https://phongtro123.com/quan-ly/dang-tin-moi.html">
                                            vào đây
                                        </a>{' '}
                                        để bắt đầu đăng tin
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default ManagePost;
