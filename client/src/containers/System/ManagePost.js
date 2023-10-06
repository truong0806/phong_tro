import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import * as actions from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import {
    Link,
    useLocation,
    useNavigate,
    useSearchParams,
    createSearchParams,
} from 'react-router-dom';
import { Pagination } from '../Public';
import { PropagateLoader } from 'react-spinners';

const ManagePost = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    console.log("🚀 ~ file: ManagePost.js:20 ~ ManagePost ~ loading:", loading)

    const { posts_limit_admin } = useSelector((state) => state.post);
    const [categoryCode, setcategoryCode] = useState('none');
    const [searchParams] = useSearchParams();
    useEffect(() => {
        setLoading(false);
        setTimeout(() => {
            let params = [];
            console.log('🚀 ~ file: ManagePost.js:24 ~ setTimeout ~ params:', params);
            for (let entry of searchParams.entries()) {
                params.push(entry);
            }
            console.log(
                '🚀 ~ file: ManagePost.js:26 ~ setTimeout ~ searchParams:',
                searchParams
            );
            let searchParamsObject = {};
            params?.forEach((i) => {
                if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
                    searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
                } else {
                    searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
                }
            });
            dispatch(actions.GetPostsLimitAdmin(searchParamsObject));
            setLoading(true);
        }, 3000);
    }, [searchParams, categoryCode, dispatch]);

    const handleFilterPost = (value) => {
        console.log(
            '🚀 ~ file: ManagePost.js:43 ~ handleFilterPost ~ value:',
            value
        );
        setTimeout(() => {
            dispatch(actions.ClearPostsLimit());
        });
        let searchParams = {};
        if (value !== '') {
            searchParams = { bonus: value };
        } else {
            searchParams = {};
        }
        console.log(
            '🚀 ~ file: ManagePost.js:57 ~ handleFilterPost ~ searchParams:',
            searchParams
        );
        navigate({
            pathname: location?.pathname,
            search: createSearchParams(searchParams).toString(),
        });
    };

    return (
        <div>
            <div className=" items-center  pb-1 mb-3 flex justify-between ">
                <h1 className="text-[2rem] mt-2 py-[1rem] ">Quản lý tin đăng</h1>
                <div className="flex gap-1 justify-end text-[0.9rem]">
                    <select
                        onChange={(e) => {
                            handleFilterPost(e.target.value);
                        }}
                        className="text-[0.75rem] focus:border-custom-gray focus:shadow-lg cursor-pointer py-[0.25rem] px-[0.5rem] rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]"
                    >
                        <option
                            className="bg-white text-[#212529]"
                            value={''}
                            hidden
                            selected
                        >
                            Lọc theo loại VIP
                        </option>
                        <option className="bg-white text-[#212529]" value={''}>
                            Tất cả
                        </option>
                        <option className="bg-white text-[#212529]" value={'Tin Hot'}>
                            Tin Hot
                        </option>
                        <option className="bg-white text-[#212529]" value={'Tin VIP 30'}>
                            Tin VIP 30
                        </option>
                        <option className="bg-white text-[#212529]" value={'Tin VIP 20'}>
                            Tin VIP 20
                        </option>
                        <option className="bg-white text-[#212529]" value={'Tin VIP 10'}>
                            Tin VIP 10
                        </option>
                        <option className="bg-white text-[#212529]" value={'Tin thường'}>
                            Tin thường
                        </option>
                    </select>
                    <select className="text-[0.75rem] focus:border-custom-gray focus:shadow-lg  cursor-pointer  py-[0.25rem] px-[0.5rem]  rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]">
                        <option className="bg-white text-[#212529]">
                            Lọc theo trạng thái
                        </option>
                        <option
                            className="bg-white text-[#212529]"
                            value={'Tin đang hiển thị'}
                        >
                            Tin đang hiển thị
                        </option>
                        <option className="bg-white text-[#212529]" value={'Tin hết hạn'}>
                            Tin hết hạn
                        </option>
                        <option className="bg-white text-[#212529]" value={'Tin đang ẩn'}>
                            Tin đang ẩn
                        </option>
                    </select>
                    <Link to={'/quan-ly/dang-tin-moi'} className="">
                        <Button
                            text={'Đăng tin mới'}
                            bgcolor={'bg-[#dc3545] border-[#dc3545] text-white h-full'}
                        />
                    </Link>
                </div>
            </div>
            <div className="border-b-2"></div>
            <div className="">
                <div className=" ">
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
                                <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
                                    Giá
                                </th>
                                <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
                                    Ngày bắt đầu
                                </th>
                                <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
                                    Ngày hết hạn
                                </th>
                                <th className=" h-[5px] w-[10%] border border-[#dee2e6]">
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
                                            <tr className=" " key={index}>
                                                <td className="p-[10px] border border-[#dee2e6]">
                                                    <a className="line-clamp-2 overflow-hidden ">
                                                        {item.id}
                                                    </a>
                                                </td>
                                                <td className="p-[10px] h-full border border-[#dee2e6] flex gap-2 justify-center overflow-hidden">
                                                    {imgObject.length !== 0 ? (
                                                        imgObject?.slice(0, 4).map((img, index) => {
                                                            return (
                                                                <div key={index}>
                                                                    <img
                                                                        className="w-[50px] h-[50px]"
                                                                        src={img}
                                                                    ></img>
                                                                </div>
                                                            );
                                                        })
                                                    ) : (
                                                        <a className="line-clamp-1 h-[45px] flex justify-center items-center ">
                                                            Không có ảnh
                                                        </a>
                                                    )}
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
                        ) : (
                            <tbody>
                                <tr>
                                    <td colspan="7" className="pt-[20px]">
                                        <div className='flex justify-center  items-center '>
                                            <PropagateLoader color="#1266dd" size={12} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>

                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default ManagePost;
