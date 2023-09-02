import React from 'react';
import { text } from '../../ultils/constains';
import { InputSelect } from '../../components';

const CreatePost = () => {
  return (
    <div className="z-2150">
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2.5rem] mt-2 py-[1rem]">Đăng tin mới</h1>
        <div className="border-b-2"></div>
      </div>
      <div
        className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] py-[0.75rem] px-[1.25rem] rounded-[0.25rem] mb-[3rem]"
        role="alert"
      >
        {text.NOTE_ALERT}
      </div>
      <form>
        <div className="flex flex-row gap-[3%]">
          <div className="w-[70%]  h-[200px] flex flex-col ">
            <div className="w-full">
              <h3 className="text-[1.75rem] font-bold mb-[7px]">
                Địa chỉ cho thuê
              </h3>
            </div>
            <div className="flex flex-col  text-[1rem]">
              <div className="mt-3 gap-2 justify-between flex flex-row">
                <InputSelect text={'Tỉnh/Thành Phố'} maxW={'max-w-[22%]'} />
                <InputSelect text={'Quận/Huyện'} maxW={'max-w-[22%]'} />
                <InputSelect text={'Phường/Xã'} maxW={'max-w-[22%]'} />
                <InputSelect text={'Đường/Phố'} maxW={'max-w-[22%]'} />
              </div>
              <div className="flex flex-col mb-[14px]">
                <label for="street_number" className="col-form-label font-bold">
                  Số nhà
                </label>
                <input
                  type="text"
                  className="max-w-[22%] rounded-[1px] border-[#ced4da] my-2 py-[0.375rem] px-[0.75rem] text-[1rem]"
                  name="street_number"
                  id="street_number"
                  value=""
                ></input>
              </div>
              <div className="flex flex-col mb-[14px]">
                <label for="street_number" className="col-form-label font-bold">
                  Địa chỉ chính xác
                </label>
                <input
                  type="text"
                  className="w-full bg-[#e9ecef] border-[#ced4da] my-2 py-[0.375rem] px-[0.75rem] text-[1rem]"
                  name="street_number"
                  id="street_number"
                  value=""
                ></input>
              </div>
              <div className="mt-5 w-full mb-[30px]">
                <h3 className="text-[1.75rem] font-bold">Thông tin mô tả</h3>
              </div>
              <div className="">
                <InputSelect text={'Loại chuyên mục'} maxW={'max-w-[50%]'} />
              </div>
              <div className="flex flex-col mb-[14px]">
                <label for="street_number" className="col-form-label font-bold">
                 Tiêu đề
                </label>
                <input
                  type="text"
                  className="w-full border-[#ced4da] my-2 py-[0.375rem] px-[0.75rem] text-[1rem] rounded-[1px]"
                  name="street_number"
                  id="street_number"
                  value=""
                ></input>
              </div>
            </div>
          </div>
          <div className="w-[30%] bg-blue-600 h-[200px] "></div>
        </div>
      </form>
      
    </div>
  );
};

export default CreatePost;
