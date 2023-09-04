import React from 'react';
import { text } from '../../ultils/constains';
import { Button, InputSelect } from '../../components';
import { InputText } from './components';
import { useSelector } from 'react-redux';

const CreatePost = () => {
  const doituong = ['nam', 'nữ'];
  const { userData } = useSelector((state) => state.user);
  console.log('🚀 ~ file: CreatePost.js:9 ~ CreatePost ~ userData:', userData);
  return (
    <div className="z-2150 h-full">
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
      <form className="h-full">
        <div className="flex flex-row gap-[3%] ">
          <div className="max-w-[70%]  w-full  flex flex-col ">
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
              <InputText label={'Số nhà'} styleInput={'max-w-[22%]'} />
              <InputText
                label={'Địa chỉ chính xác'}
                styleInput={'w-full bg-[#e9ecef] border-[#ced4da]'}
              />
              <div className="mt-5 w-full mb-[30px]">
                <h3 className="text-[1.75rem] font-bold">Thông tin mô tả</h3>
              </div>
              <InputSelect text={'Loại chuyên mục'} maxW={'max-w-[50%]'} />
              <InputText label={'Tiêu đề'} styleInput={'w-full'} />
              <div className="flex flex-col mb-[14px]">
                <label className="font-bold">Nội dung mô tả</label>
                <textarea
                  type="text"
                  className="focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] border-[#ced4da] py-[0.375rem] px-[0.75rem] text-[1rem] text-[#495057] h-[220px]"
                  name="street_number"
                  id="street_number"
                ></textarea>
              </div>
              <InputText
                label={'Thông tin liên hệ'}
                valueInput={userData.name}
                readonly
                styleInput={'max-w-[50%] bg-[#e9ecef]'}
              />
              <InputText
                label={'Điện thoại'}
                valueInput={userData.phone}
                readonly
                styleInput={'max-w-[50%] bg-[#e9ecef]'}
              />

              <div className="mb-[14px] max-w-[50%]">
                <label className="font-bold">Giá cho thuê</label>
                <div className="flex flex-row w-full h-[33px] my-2">
                  <input
                    type="text"
                    className="w-[60%] focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem] border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
                  ></input>
                  <div className="w-[40%] h-full  items-center justify-center ">
                    <select className="bg-gray-50  text-md py-[0.25rem] rounded-r-[0.25rem]  text-[10px] h-full border-gray-300 text-gray-900  focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] w-full">
                      <option value="đồng/tháng" selected>
                        đồng/tháng
                      </option>
                      <option value="đồng/m2/thángS">đồng/m2/tháng</option>
                    </select>
                  </div>
                </div>

                <small className="">
                  Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
                </small>
              </div>
              <div className="mb-[14px] max-w-[50%]">
                <label className="font-bold">Diện tích</label>
                <div className="flex flex-row w-full h-[33px] my-2">
                  <input
                    type="text"
                    className="w-[90%] focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem] border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
                  ></input>
                  <div className="w-[10%] h-full items-center justify-center  bg-[#e9ecef] ">
                    <span className="flex items-center justify-center pt-2">
                      &#13217;
                    </span>
                  </div>
                </div>

                <small className="">
                  Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
                </small>
              </div>
              <InputSelect
                array={doituong}
                text={'Đối tượng cho thuê'}
                maxW={'max-w-[50%]'}
              />
              
              <div className="mt-10 w-full mb-[14px]">
                <h3 className="text-[1.75rem] font-bold">Hình ảnh</h3>
              </div>
              <div className="flex flex-col">
                <p>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</p>
                <div className="mb-[14px] mt-2 border-dashed border-2 border-[#bbb]">
                  <div className="p-[28px] items-center justify-center flex flex-col">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="90px"
                      height="90px"
                      viewBox="0,0,256,256"
                    >
                      <g
                        fill="#000000"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <g transform="scale(8.53333,8.53333)">
                          <path d="M10,5c-0.552,0 -1,0.448 -1,1v1c0,0.552 -0.448,1 -1,1h-5c-0.552,0 -1,0.448 -1,1v15c0,0.552 0.448,1 1,1h24c0.552,0 1,-0.448 1,-1v-15c0,-0.552 -0.448,-1 -1,-1h-5c-0.552,0 -1,-0.448 -1,-1v-1c0,-0.552 -0.448,-1 -1,-1zM15,9c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7zM25,10c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,11c-2.76142,0 -5,2.23858 -5,5c0,2.76142 2.23858,5 5,5c2.76142,0 5,-2.23858 5,-5c0,-2.76142 -2.23858,-5 -5,-5z"></path>
                        </g>
                      </g>
                    </svg>
                    <span className="item-center">Thêm Ảnh</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 w-full mb-[14px]">
                <h3 className="text-[1.75rem] font-bold">Video</h3>
              </div>
              <div className="flex flex-col">
                <p>Hoặc upload Video từ máy của bạn</p>
                <div className="mb-[14px] mt-2 border-dashed border-2 border-[#bbb]">
                  <div className="p-[28px] items-center justify-center flex flex-col">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80px"
                      height="80px"
                      viewBox="0,0,255.98438,255.98438"
                    >
                      <g
                        fill="#000000"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                      >
                        <g transform="scale(5.12,5.12)">
                          <path d="M2,4c-0.55226,0.00006 -0.99994,0.44774 -1,1v4.83203c-0.01785,0.10799 -0.01785,0.21818 0,0.32617v29.67383c-0.01785,0.10799 -0.01785,0.21818 0,0.32617v4.8418c0.00006,0.55226 0.44774,0.99994 1,1h46c0.55226,-0.00006 0.99994,-0.44774 1,-1v-4.83203c0.01785,-0.10799 0.01785,-0.21818 0,-0.32617v-29.67383c0.01785,-0.10799 0.01785,-0.21818 0,-0.32617v-4.8418c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM3,6h3v3h-3zM8,6h4v3h-4zM14,6h4v3h-4zM20,6h4v3h-4zM26,6h4v3h-4zM32,6h4v3h-4zM38,6h4v3h-4zM44,6h3v3h-3zM3,11h44v28h-44zM20.94141,18c-0.52926,0.03111 -0.94227,0.46983 -0.94141,1v12c0.00027,0.35997 0.19397,0.69203 0.50718,0.86945c0.31321,0.17742 0.69761,0.17283 1.00649,-0.01203l10,-6c0.30109,-0.18078 0.48529,-0.50623 0.48529,-0.85742c0,-0.35119 -0.1842,-0.67664 -0.48529,-0.85742l-10,-6c-0.14316,-0.08628 -0.30566,-0.1353 -0.47266,-0.14258c-0.03318,-0.00165 -0.06643,-0.00165 -0.09961,0zM22,20.76563l7.05664,4.23438l-7.05664,4.23438zM3,41h3v3h-3zM8,41h4v3h-4zM14,41h4v3h-4zM20,41h4v3h-4zM26,41h4v3h-4zM32,41h4v3h-4zM38,41h4v3h-4zM44,41h3v3h-3z"></path>
                        </g>
                      </g>
                    </svg>
                    <span className="item-center">Thêm Video</span>
                  </div>
                </div>
              </div>
              <div className='mt-[42px] mb-[100px] w-full'>
              <Button  text={'Tiếp tục'} bgcolor={'w-full py-[0.5rem] px-[1rem] text-[1.25rem] bg-[#28a745] border-[#28a745] text-[#fff] font-bold item-center'}/>

              </div>
            </div>
          </div>
          <div className="max-w-[30%] w-full bg-blue-600 h-[300px] "></div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
