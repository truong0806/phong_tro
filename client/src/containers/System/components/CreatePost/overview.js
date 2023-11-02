import React, { useEffect, useState } from 'react';
import { InputText, InputTextReadOnly, UploadVideos } from '../../components';
import { InputSelect } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { UploadImages } from '../';
import * as actions from '../../../../store/action';
import { editMaxMin } from '../../../../ultils/common/editArray';

const Overview = ({
  setInvalidFields,
  invalidFields,
  setImagesFile,
  imagesFile,
  handleSumit,
  value,
  setValue,
  userData,
  setPreviewImages,
  previewImages,
  isEdit,
}) => {
  console.log('🚀 ~ file: overview.js:22 ~ value:', value);
  const doituongs = [
    { code: 'all', value: 'Tất cả' },
    { code: 'male', value: 'Nam' },
    { code: 'female', value: 'Nữ' },
  ];
  const dispatch = useDispatch();
  const { prices, areas } = useSelector((state) => state.app);
  const { categories } = useSelector((state) => state.app);
  const [category, setCategory] = useState([{ code: '', value: '' }]);
  const [doituong, setDoiTuong] = useState([{ code: '', value: '' }]);
  const [titles, setTitles] = useState([]);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, [dispatch]);

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      categoryCode: isEdit
        ? value.categoryCode
        : category.code === undefined
        ? ''
        : category.code,
      priceNumber: isEdit
        ? value.priceNumber.split(' ')[1] === 'đồng/tháng'
          ? +value.priceNumber.split(' ')[0]
          : +value.priceNumber.split(' ')[0] * 1000000
        : 0,
      areaNumber: isEdit ? +value.areaNumber.split(' ')[0] : 0,
      categoryName: isEdit ? value.categoryName : category.value,
      title: isEdit ? value?.title : '',
      description: isEdit ? value?.description.replace(/"/g, '') : '',
      target: doituong.value || '',
      targetCode: doituong.code,
      userId: userData.id,
      phoneContact: userData.phone,
      label: `${category?.value} ${value?.province}`,
    }));
  }, [
    category,
    doituong,
    titles,
    desc,
    setValue,
    userData.phone,
    userData.id,
    value?.province,
    previewImages,
  ]);

  return (
    <div>
      <div className="mt-5 w-full mb-[30px]">
        <h3 className="text-[1.75rem] font-bold">Thông tin mô tả</h3>
      </div>
      <InputSelect
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        name={'categoryCode'}
        setValue={setCategory}
        array={categories}
        nameValue={'value'}
        text={'Loại chuyên mục'}
        maxW={'max-w-[50%]'}
      />
      <InputText
        setInvalidFields={setInvalidFields}
        name={'title'}
        invalidFields={invalidFields}
        typeInput={'text'}
        setValue={setValue.title}
        label={'Tiêu đề'}
        value={value.title}
        styleInput={'w-full'}
      />
      <div className="flex flex-col mb-[14px]">
        <label htmlFor="desc" className="font-bold">
          Nội dung mô tả
        </label>
        <textarea
          onFocus={() =>
            setInvalidFields((prev) =>
              prev.filter((field) => field.name !== 'description')
            )
          }
          onChange={(e) => setDesc(e.target.value)}
          id="desc"
          cols="30"
          rows="10"
          type="text"
          value={value.description}
          className="focus:ring-[rgba(0,123,255,.25)] mb-2 focus:border-[#80bdff] border-[#ced4da] py-[0.375rem] px-[0.75rem] text-[1rem] text-[#495057] h-[220px]"
        ></textarea>
        <small className="text-red-500">
          {invalidFields?.some((field) => field.name === 'description') &&
            `Vui lòng nhập nội dung bài đăng`}
        </small>
      </div>
      <InputTextReadOnly
        typeInput={'text'}
        label={'Thông tin liên hệ'}
        value={userData.name}
        readonly
        styleInput={'max-w-[50%] bg-[#e9ecef]'}
      />
      <InputTextReadOnly
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
            value={value.priceNumber}
            onFocus={() =>
              setInvalidFields((prev) =>
                prev.filter((field) => field.name !== 'priceNumber')
              )
            }
            onChange={(e) => {
              const dataPrice = editMaxMin(prices, 'price');
              setValue((prev) => ({
                ...prev,
                priceNumber: e.target.value,
                priceCode: dataPrice.find(
                  (price) =>
                    price.max > e.target.value / 1000000 &&
                    price.min <= e.target.value / 1000000
                )?.code,
              }));
            }}
            type="number"
            className="w-[60%] focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem] border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
          ></input>

          <div className="w-[40%] h-full  items-center justify-center ">
            <select
              defaultValue=""
              className="bg-gray-50 font-bold  text-md py-[0.25rem] rounded-r-[0.25rem]  text-[0.8rem] h-full border-gray-300 text-gray-900  focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] w-full"
            >
              <option value="đồng/tháng">đồng/tháng</option>
              <option value="đồng/m2/tháng">đồng/m2/tháng</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <small className="">
            Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000
          </small>
          <small className="text-red-500">
            {invalidFields?.some((field) => field.name === 'priceNumber') &&
              `Vui lòng nhập số tiền`}
          </small>
        </div>
      </div>
      <div className="mb-[14px] max-w-[50%]">
        <label className="font-bold">Diện tích</label>
        <div className="flex flex-row w-full h-[33px] my-2">
          <input
            value={value.areaNumber}
            onFocus={() =>
              setInvalidFields((prev) =>
                prev.filter((field) => field.name !== 'areaNumber')
              )
            }
            onChange={(e) => {
              const dataArea = editMaxMin(areas, 'area');
              setValue((prev) => ({
                ...prev,
                areaNumber: e.target.value,
                areaCode: dataArea.find(
                  (area) =>
                    area.max > e.target.value && area.min <= e.target.value
                )?.code,
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
        <small className="text-red-500">
          {invalidFields?.some((field) => field.name === 'areaNumber') &&
            `Vui lòng nhập diện tích`}
        </small>
      </div>
      <InputSelect
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        name={'target'}
        setValue={setDoiTuong}
        array={doituongs}
        text={'Đối tượng'}
        maxW={'max-w-[50%]'}
      />
      <UploadImages
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        setImagesFile={setImagesFile}
        imagesFile={imagesFile}
        handleSumit={handleSumit}
      />
      <UploadVideos setValue={setValue} />
    </div>
  );
};

export default Overview;
