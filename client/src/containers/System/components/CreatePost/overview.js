import React, { useEffect, useState } from 'react';
import { InputText, UploadVideos } from '../../components';
import { InputSelect } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { UploadImages } from '../';
import * as actions from '../../../../store/action';

const Overview = ({ setImagesFile, imagesFile, handleSumit, value, setValue, userData, setPreviewImages, previewImages }) => {
  const doituongs = [
    { code: 'all', value: 'Tất cả' },
    { code: 'male', value: 'Nam' },
    { code: 'female', value: 'Nữ' },
  ];
  const dispatch = useDispatch();
  const { prices, areas } = useSelector((state) => state.app);
  const { categories } = useSelector((state) => state.app);
  const [category, setCategory] = useState({});
  const [doituong, setDoiTuong] = useState({});
  const [titles, setTitles] = useState({});
  const [desc, setDesc] = useState({});


  useEffect(() => {
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
  }, [dispatch]);

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      categoryCode: category.code,
      categoryName: category.value,
      title: titles,
      description: desc,
      target: doituong.value || 'Tất cả',
      targetCode: doituong.code,
      userId: userData.id,
      phoneContact: userData.phone,
      author: userData.name,
      label: `${category?.value} ${value?.province}`,
    }));
  }, [category, doituong, titles, desc, setValue]);

  const editMaxMin = (arr, type) => {
    console.log("🚀 ~ file: CreatePost.js:43 ~ editMaxMin ~ arr:", arr)
    let doituongMoi1 = arr.map(function (doituong1) {
      var giaTri = doituong1.value;
      var mangGiaTri = giaTri.split(' ');
      var doituongMoi = Object.assign({}, doituong1);
      if (type === 'price') {
        if (mangGiaTri[0] === 'Dưới') {
          doituongMoi.min = 0;
          doituongMoi.max = parseFloat(mangGiaTri[1]);
        } else if (mangGiaTri[0] === 'Từ') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = parseFloat(mangGiaTri[3]);
        } else if (mangGiaTri[0] === 'Trên') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = 99999999;
        }
      } else {
        if (mangGiaTri[0] === 'Dưới') {
          doituongMoi.min = 0;
          doituongMoi.max = parseFloat(mangGiaTri[1]);
        } else if (mangGiaTri[0] === 'Từ') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = parseFloat(mangGiaTri[3]);
        } else if (mangGiaTri[0] === 'Trên') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = 99999999;
        }
      }
      return doituongMoi;
    });
    return doituongMoi1
  }
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
            onChange={(e) => {
              const dataPrice = editMaxMin(prices, 'price');
              setValue((prev) => ({
                ...prev, priceNumber: e.target.value, priceCode: dataPrice.find(
                  (price) => price.max > e.target.value / 1000000 && price.min <= e.target.value / 1000000,
                )?.code
              }))
            }
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
              const dataArea = editMaxMin(areas, 'area');
              setValue((prev) => ({
                ...prev, areaNumber: e.target.value, areaCode: dataArea.find(
                  (area) => area.max > e.target.value && area.min <= e.target.value,
                )?.code
              }));
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
        setValue={setDoiTuong}
        array={doituongs}
        text={'Đối tượng'}
        maxW={'max-w-[50%]'}
      />

      <UploadImages setImagesFile={setImagesFile} imagesFile={imagesFile} handleSumit={handleSumit} setPreviewImages={setPreviewImages} previewImages={previewImages} />

      <UploadVideos setValue={setValue} />
    </div>
  );
};

export default Overview;
