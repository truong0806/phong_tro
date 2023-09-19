import React, { useEffect, useState } from 'react';
import { text, luuY } from '../../ultils/constains';
import { Button } from '../../components';
import { Address, Overview } from './components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/action';
import { apiUploadImages } from '../../service';
import { getCodesPrices, getCodesArea } from '../../ultils/common/getCode'
const CreatePost = () => {

  const { prices, areas } = useSelector((state) => state.app);
  const { userData } = useSelector((state) => state.user);
  const [imagesFile, setImagesFile] = useState([]);
  const [payload, setPayload] = useState({
    categoryCode: '',
    title: '',
    description: '',
    priceNumber: 0,
    areaNumber: 0,
    address: '',
    images: [],
    imageCode: '',
    target: '',
    targetCode: '',
    province: '',
    label: '',
    priceCode: '',
    areaCode: '',
  });
  console.log('🚀 ~ file: CreatePost.js:23 ~ CreatePost ~ payload:', payload);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
  },[dispatch]);
  useEffect(() => {
    const dataPrice = editMaxMin(prices, 'price');
    const dataArea = editMaxMin(areas, 'area');
    let priceCode = dataPrice.find(
      (price) => price.max > +payload.priceNumber && price.min <= +payload.priceNumber,
    )?.code
    console.log("🚀 ~ file: CreatePost.js:38 ~ useEffect ~ priceCode:", priceCode)
    let areaCode = dataArea.find(
      (area) => area.max > +payload.areaNumber && area.min <= +payload.areaNumber,
    )?.code
    setTimeout(() => {
      dispatch(actions.getCategories());
    }, 1000);
  }, [dispatch]);



  const handleSumit = async (e) => {


    let images = [];
    let formData = new FormData();
    imagesFile.map(async (item) => {
      formData.append('file', item.files);
      formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
      let response = await apiUploadImages(formData);
      if (response.status === 200) {
        images.push(response.data.url);
      }
    });
    setPayload((prev) => ({ ...prev, images: images }));

  }
  const editMaxMin = (arr, type) => {
    console.log("🚀 ~ file: CreatePost.js:43 ~ editMaxMin ~ arr:", arr)
    let doituongMoi1 = arr.map(function (doituong) {
      var giaTri = doituong.value;
      var mangGiaTri = giaTri.split(' ');
      var doituongMoi = Object.assign({}, doituong);
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
          <div className="flex flex-col  text-[1rem] max-w-[70%]  w-full    ">
            <Address value={payload} setValue={setPayload} />
            <Overview

              setImagesFile={setImagesFile} imagesFile={imagesFile}
              handleSumit={handleSumit}
              userData={userData}
              value={payload}
              setValue={setPayload}
            />
            <div className="mt-[42px] mb-[100px] w-full">
              <Button
                onClick={(e) => handleSumit(e)}
                text={'Tiếp tục'}
                bgcolor={
                  'w-full h-[27px] py-[0.5rem] px-[1rem] text-[1.25rem] bg-[#28a745] border-[#28a745] text-[#fff] font-bold item-center'
                }
              />
            </div>
          </div>
          <div className="max-w-[30%] w-full  ">
            <div className="flex flex-col bg-blue-600 h-[300px] mb-[30px]"></div>
            <div className="flex flex-col  mb-[30px] border-[1.3px] border-[#ffeeba] bg-[#fff3cd] rounded-">
              <div className="p-[17.5px] text-[#856404]">
                <h4 className="text-[1.5rem] ">Lưu ý khi đăng tin</h4>
                <ul className="m-[10px] ">
                  {luuY.map((item, index) => (
                    <li key={index} className="list-disc mb-[7px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
