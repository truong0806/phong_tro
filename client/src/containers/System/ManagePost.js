import React from 'react';
import { Button } from '../../components';

const ManagePost = () => {
    return (
        <div>
            <div className=" items-center  pb-1 mb-3 flex justify-between w-full">
                <h1 className="text-[2rem] mt-2 py-[1rem] ">Quản lý tin đăng</h1>
                <div className="flex gap-1 justify-end font-[0.875rem]">
                    <select className="focus:border-custom-gray focus:shadow-lg cursor-pointer py-[0.25rem] px-[0.5rem] rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]">
                        <option className="bg-white text-[#212529]" >
                            Lọc theo loại VIP
                        </option>
                        <option className="bg-white text-[#212529]">Tin Hot</option>
                        <option className="bg-white text-[#212529]">Tin VIP 30</option>
                        <option className="bg-white text-[#212529]">Tin VIP 20</option>
                        <option className="bg-white text-[#212529]">Tin VIP 10</option>
                        <option className="bg-white text-[#212529]">Tin thường</option>
                    </select>
                    <select className="focus:border-custom-gray focus:shadow-lg  cursor-pointer  py-[0.25rem] px-[0.5rem]  rounded-[0.25rem] hover:bg-[#6c757d] hover:text-white focus:bg-[#6c757d] focus:text-white border-[#6c757d]">
                        <option className="bg-white text-[#212529]">Lọc theo trạng thái</option>
                        <option className="bg-white text-[#212529]" >
                            Tin đang hiển thị
                        </option>
                        <option className="bg-white text-[#212529]">Tin hết hạn</option>
                        <option className="bg-white text-[#212529]">Tin đang ẩn</option>
                    </select>
                    <Button
                        text={'Đăng tin mới'}
                        bgcolor={'bg-[#dc3545] border-[#dc3545] text-white'}
                    />
                </div>
            </div>
            <div className="border-b-2"></div>
        </div>
    );
};

export default ManagePost;
