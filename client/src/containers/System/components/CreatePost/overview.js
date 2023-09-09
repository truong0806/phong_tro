import React, { useEffect, useState } from 'react';
import { InputText, UploadVideos } from '../../components';
import { InputSelect } from '../../../../components';
import { useSelector } from 'react-redux';
import { UploadImages } from '../';

const Overview = ({ value, setValue, userData }) => {
  const doituongs = [
    { code: 'all', value: 'Tất cả' },
    { code: 'male', value: 'Nam' },
    { code: 'female', value: 'Nữ' },
  ];
  const { categories } = useSelector((state) => state.app);
  const [category, setCategory] = useState({});
  const [images, setImages] = useState([]);
  console.log("🚀 ~ file: overview.js:16 ~ Overview ~ images:", images)
  const [doituong, setDoiTuong] = useState({});
  const [titles, setTitles] = useState({});
  const [desc, setDesc] = useState({});

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      categoryCode: category.code,
      categoryName: category.value,
      title: titles,
      description: desc,
      target: doituong.value,
      targetCode: doituong.code,
      userId: userData.id,
      phoneContact: userData.phone,
      author: userData.name,
      images: images,
    }));
  }, [category, doituong, titles, desc, setValue, userData]);

  return (
    <div>
      <div className="mt-5 w-full mb-[30px]">
        <h3 className="text-[1.75rem] font-bold">Thông tin mô tả</h3>
      </div>
      <InputSelect
        setValue={setCategory}
        array={categories}
        nameValue={'value'}
        text={'Loại chuyên mục'}
        maxW={'max-w-[50%]'}
      />
      <InputText
        typeInput={'text'}
        setValue={setTitles}
        label={'Tiêu đề'}
        styleInput={'w-full'}
      />
      <div className="flex flex-col mb-[14px]">
        <label htmlFor="desc" className="font-bold">
          Nội dung mô tả
        </label>
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          id="desc"
          cols="30"
          rows="10"
          type="text"
          className="focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] border-[#ced4da] py-[0.375rem] px-[0.75rem] text-[1rem] text-[#495057] h-[220px]"
        ></textarea>
      </div>
      <InputText
        typeInput={'text'}
        label={'Thông tin liên hệ'}
        value={userData.name}
        readonly
        styleInput={'max-w-[50%] bg-[#e9ecef]'}
      />
      <InputText
        typeInput={'text'}
        label={'Điện thoại'}
        value={userData.phone}
        readonly
        styleInput={'max-w-[50%] bg-[#e9ecef]'}
      />

      <div className="mb-[14px] max-w-[50%]">
        <label className="font-bold">Giá cho thuê</label>
        <div className="flex flex-row w-full h-[33px] my-2">
          <input
            onChange={(e) =>
              setValue((prev) => ({ ...prev, priceNumber: e.target.value }))
            }
            type="number"
            className="w-[60%] focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem] border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
          ></input>
          <div className="w-[40%] h-full  items-center justify-center ">
            <select className="bg-gray-50 font-bold  text-md py-[0.25rem] rounded-r-[0.25rem]  text-[0.8rem] h-full border-gray-300 text-gray-900  focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] w-full">
              <option value="đồng/tháng" selected>
                đồng/tháng
              </option>
              <option value="đồng/m2/tháng">đồng/m2/tháng</option>
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
            onChange={(e) => {
              setValue((prev) => ({ ...prev, areaNumber: e.target.value }));
            }}
            type="number"
            className="w-[90%] focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem] border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
          ></input>
          <div className="w-[10%] h-full items-center justify-center  bg-[#e9ecef] ">
            <span className="flex items-center justify-center pt-2 font-bold">
              &#13217;
            </span>
          </div>
        </div>
      </div>
      <InputSelect
        name={'target'}
        value={'Tất cả'}
        setValue={setDoiTuong}
        array={doituongs}
        text={'Đối tượng'}
        maxW={'max-w-[50%]'}
      />

      <UploadImages setImages={setImages} />

      <UploadVideos setValue={setValue} />
    </div>
  );
};

export default Overview;
