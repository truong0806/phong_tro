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
import PostTable from './components/ManagerPost/PostTable';

const ManagePost = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { posts_limit_admin } = useSelector((state) => state.post);
    const [categoryCode] = useState('none');
    const [searchParams] = useSearchParams();
    useEffect(() => {
        setLoading(false);
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
            dispatch(actions.GetPostsLimitAdmin(searchParamsObject));
            setLoading(true);
        }, 3000);
    }, [searchParams, categoryCode, dispatch]);

    const handleFilterPost = (value) => {
        setTimeout(() => {
            dispatch(actions.ClearPostsLimit());
        });
        let searchParams = {};
        if (value !== '') {
            searchParams = { bonus: value };
        } else {
            searchParams = {};
        }
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
            <PostTable loading={loading} posts_limit_admin={posts_limit_admin} />
            <Pagination />
        </div>
    );
};

export default ManagePost;
