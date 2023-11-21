import React, { useEffect, useState } from 'react';
import { InputText, InputTextReadOnly, UploadVideos } from '../../components';
import { InputSelect } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { UploadImages } from '../';
import * as actions from '../../../../store/action';
import { editMaxMin } from '../../../../ultils/common/editArray';
import CurrencyInput from 'react-currency-input-field';
import InputSelect2 from '../../../../components/InputSelect2';

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
  const doituongs = [
    { code: 'all', value: 'Tất cả' },
    { code: 'male', value: 'Nam' },
    { code: 'female', value: 'Nữ' },
  ];
  const dispatch = useDispatch();
  const { prices, areas } = useSelector((state) => state.app);
  const { categories } = useSelector((state) => state.app);
  const [category, setCategory] = useState();
  const [target, setTarget] = useState();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, [dispatch]);

  useEffect(() => {
    const foundCategories =
      value.categoryName.length > 0 &&
      categories?.find((item) => item.value === value?.categoryName?.trim());

    setCategory(
      foundCategories
        ? { value: foundCategories.code, label: foundCategories.value }
        : ''
    );
  }, [value]);
  useEffect(() => {
    const foundTarget =
      value.target.length > 0 &&
      doituongs?.find((item) => item.value === value?.target?.trim());
    
    setTarget(
      foundTarget ? { value: foundTarget.code, label: foundTarget.value } : ''
    );
  }, [value]);

  useEffect(() => {
    setValue((prev) => ({
      ...prev,
      categoryCode: categories?.find(
        (item) => item.value === value?.categoryName
      )?.code,
    }));
  }, [dispatch, value?.categoryName]);

  return (
    <div>
      <div className="w-full mb-[25px]">
        <h3 className="text-[1.75rem] font-bold">Thông tin mô tả</h3>
      </div>
      <InputSelect2
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        name={'categoryName'}
        setValue={setValue}
        value={category}
        array={categories}
        nameValue={'value'}
        text={'Loại chuyên mục'}
        maxW={'max-w-[50%] mb-3'}
      />
      <InputText
        setInvalidFields={setInvalidFields}
        name={'title'}
        invalidFields={invalidFields}
        typeInput={'text'}
        setValue={setValue}
        label={'Tiêu đề'}
        value={value.title}
        styleInput={'w-full mb-3'}
      />
      <div className="flex flex-col mb-4">
        <label htmlFor="desc" className="font-bold border-spacing-2">
          Nội dung mô tả
        </label>
        <textarea
          onFocus={() =>
            setInvalidFields((prev) =>
              prev.filter((field) => field.name !== 'description')
            )
          }
          onChange={(e) =>
            setValue((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          id="desc"
          cols="30"
          rows="10"
          type="text"
          value={value.description}
          className="border-gray-300 mb-2 focus:border-[#80bdff] py-[0.375rem] px-[0.75rem] text-[1rem] text-[#495057] h-[220px]"
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
        styleInput={'sm:max-w-[50%] w-full bg-[#e9ecef]'}
      />
      <InputTextReadOnly
        typeInput={'text'}
        label={'Điện thoại'}
        value={userData.phone}
        readonly
        styleInput={'sm:max-w-[50%] w-full bg-[#e9ecef]'}
      />

      <div className="mb-5 sm:max-w-[50%] w-full">
        <label className="font-bold">Giá cho thuê</label>
        <div className="flex flex-row w-full h-[33px] my-2">
          <CurrencyInput
            className="sm:w-[60%] w-[80%] focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem] border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
            value={value?.priceNumber}
            id="validation-example-2-field"
            placeholder="1,234,567"
            allowDecimals={false}
            step={10}
            onValueChange={(value) => {
              setValue((prev) => ({
                ...prev,
                priceNumber: value,
              }));
            }}
            onFocus={() =>
              setInvalidFields((prev) =>
                prev.filter((field) => field.name !== 'priceNumber')
              )
            }
          />
          {/* <input
            value={value.priceNumber}
            onFocus={() =>
              setInvalidFields((prev) =>
                prev.filter((field) => field.name !== 'priceNumber')
              )
            }
            onChange={(e) => {
              setValue((prev) => ({
                ...prev,
                priceNumber: e.target.value,
              }));
            }}
            type="number"
            className="w-[60%] focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem] border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
          ></input> */}

          <div className="sm:w-[40%] h-full  items-center justify-center ">
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
      <div className="sm:mb-5 w-full sm:max-w-[50%]">
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
              setValue((prev) => ({
                ...prev,
                areaNumber: e.target.value,
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
      <InputSelect2
        value={target}
        setInvalidFields={setInvalidFields}
        invalidFields={invalidFields}
        name={'target'}
        setValue={setValue}
        array={doituongs}
        text={'Đối tượng'}
        maxW={'sm:max-w-[50%] w-full'}
      />
      <UploadImages
        isEdit={isEdit}
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
