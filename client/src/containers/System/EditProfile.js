import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

const EditProfile = () => {
    const { userData } = useSelector((state) => state.user)
    return (
        <div>
            <div className=" items-center   pb-1 mb-1 flex justify-between ">
                <h1 className="text-[2rem] mt-2 py-[0.5rem] ">
                    Cập nhật thông tin cá nhân
                </h1>
            </div>
            <div className="border-b-2"></div>
            <div className='flex justify-center ml-[20%] w-[70%] mt-10 mb-[170px]'>
                <form className=" gap-4 flex flex-col w-full ">
                    <div className="flex flex-row items-center ">
                        <label className="whitespace-nowrap w-[20%]">Mã thành viên</label>
                        <div className="w-full ">
                            <input type="text" readonly="" className="rounded-sm w-[80%] border-[#ced4da] bg-[#e9ecef] min-w-[50%] mr-[25%] " id="user_id" value={userData.id}></input>
                        </div>
                    </div>
                    <div className="flex flex-row items-center ">
                        <label className="whitespace-nowrap w-[20%]">Số điện thoại</label>
                        <div className="w-full flex flex-col ">
                            <input type="text" readonly="" className="rounded-sm w-[80%] bg-[#e9ecef] border-[#ced4da] min-w-[50%] mr-[25%] " id="user_phone" value={userData.phone}></input>
                            <Link to={'doi-so-dien-thoai'} className='mt-[5px] text-[#007bff] hover:underline' >Đổi số điện thoại</Link>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mt-[20px]">
                        <label className="whitespace-nowrap w-[20%]">Tên hiển thị</label>
                        <div className="w-full ">
                            <input type="text" className="rounded-sm w-[80%] border-[#ced4da] min-w-[50%] mr-[25%] " id="user_id" value={userData.name}></input>
                        </div>
                    </div>
                    <div className="flex flex-row items-center ">
                        <label className="whitespace-nowrap w-[20%]">Email</label>
                        <div className="w-full ">
                            <input type="text" className="rounded-sm w-[80%] border-[#ced4da] min-w-[50%] mr-[25%] " id="user_id" value={userData.name}></input>
                        </div>
                    </div>
                    <div className="flex flex-row items-center ">
                        <label className="whitespace-nowrap w-[20%]">Số zalo</label>
                        <div className="w-full ">
                            <input type="text" className="rounded-sm w-[80%] border-[#ced4da] min-w-[50%] mr-[25%] " id="user_id" value={userData.zalo}></input>
                        </div>
                    </div>
                    <div className="flex flex-row items-center ">
                        <label className="whitespace-nowrap w-[20%]">Facebook</label>
                        <div className="w-full ">
                            <input type="text" className="rounded-sm w-[80%] border-[#ced4da] min-w-[50%] mr-[25%] " id="user_id" value={userData.fbUrl}></input>
                        </div>
                    </div>
                    <div className="flex flex-row items-center  mt-[20px]">
                        <label className="whitespace-nowrap w-[20%]">Mật khẩu</label>
                        <div className="w-full">
                            <a className="hover:underline text-[#007bff] " href="https://phongtro123.com/quan-ly/doi-mat-khau.html">Đổi mật khẩu</a>
                        </div>
                    </div>
                    <div className="flex flex-row items-center ">
                        <label className="whitespace-nowrap w-[20%]">Ảnh đại diện</label>
                        <div className="w-full flex flex-col">
                            <img alt='' className='w-[25%] h-[25%] rounded-[50%]' src={userData.avatar ? userData.avatar : 'https://www.w3schools.com/w3images/avatar2.png'}></img>
                            <Button text={`Xóa hình này`} width={'mt-[5px] w-[25%] h-[35px] text-bold bg-[#f1f1f1] text-red-600'} />
                            <Button text={`Chọn ảnh`} width={'mt-[5px] w-[25%] h-[35px] text-bold bg-[#f1f1f1] text-black'} />

                        </div>

                    </div>
                    <Button text={`Lưu & Cập nhật`} width={'mt-[30px] w-[85%] h-[50px] text-bold bg-[#007bff] text-white'} />
                    <input type="hidden" name="user_id" value="133482"></input>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
