import React, { useEffect, useState } from 'react';
import { text, luuY } from '../../../ultils/constains';
import { Button } from '../../../components';
import { Address, Overview } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/action';
import { apiCreateNewPost, apiUploadImages } from '../../../service';
import validate from '../../../ultils/validate';
import { usePathname } from '../../../ultils/common/usePathname';
import Swal from 'sweetalert2';

const CreatePost = ({ isEdit }) => {
  const pageTitle = usePathname();
  const { dataEdit } = useSelector((state) => state.post);
  console.log('🚀 ~ file: CreatePost.js:15 ~ CreatePost ~ dataEdit:', dataEdit);

  const [invalidFields, setInvalidFields] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const [imagesFile, setImagesFile] = useState([]);

  const [payload, setPayload] = useState(() => {
    const initData = {
      apartmentNumber: dataEdit?.address.split(',')[0] || '',
      categoryName: dataEdit?.categories.value || '',
      street: dataEdit?.address.split(',')[1] || '',
      ward: dataEdit?.address.split(',')[2] || '',
      district: dataEdit?.address.split(',')[3] || '',
      categoryCode: dataEdit?.categories.code || '',
      title: dataEdit?.title || '',
      description: dataEdit?.description.replace(/"/g, '') || '',
      priceNumber: isEdit
        ? dataEdit?.attributes?.price?.split(' ')[1] === 'đồng/tháng'
          ? +dataEdit?.attributes?.price?.split(' ')[0]
          : +dataEdit?.attributes?.price?.split(' ')[0] * 1000000
        : 0,
      areaNumber: +dataEdit?.attributes?.acreage?.split(' ')[0] || 0,
      images: dataEdit?.images || [],
      target: dataEdit?.overviews.target || '',
      province: dataEdit?.address.split(',')[4] || '',
    };
    return initData;
  });
  console.log(
    '🚀 ~ file: CreatePost.js:43 ~ const[payload,setPayload]=useState ~ payload:',
    payload
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.getCategories());
    }, 1000);
    setPayload((prev) => ({
      ...prev,
      userId: userData?.id,
      phoneContact: userData?.phone,
    }));
  }, [dispatch]);

  useEffect(() => {}, [invalidFields]);

  const handleSumit = async (e) => {
    validate(payload, 'Create Post', setInvalidFields);
    if (payload?.address?.length > 0) {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'address')
      );
    }
    if (payload?.priceCode?.length > 0) {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'priceCode')
      );
    }
    if (payload?.areaCode?.length > 0) {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'areaCode')
      );
    }
    if (imagesFile?.length > 0) {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'images')
      );
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'imageCode')
      );
    }
    if (invalidFields?.length === 0) {
      let images = [];
      let formData = new FormData();
      let uploadPromises = imagesFile.map(async (item) => {
        formData.append('file', item.files);
        formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
        return apiUploadImages(formData);
      });
      console.log(
        '🚀 ~ file: CreatePost.js:78 ~ uploadPromises ~ uploadPromises:',
        uploadPromises
      );
      Promise.all(uploadPromises)
        .then((responses) => {
          responses.forEach((response, index) => {
            if (response.status === 200) {
              images.push(response.data.url);
              setPayload((prev) => ({ ...prev, images: images }));
            } else {
              console.log('Upload images failed');
            }
          });
        })
        .then(() => {
          apiCreateNewPost(payload).then((response) => {
            console.log(
              '🚀 ~ file: CreatePost.js:95 ~ apiCreateNewPost ~ response:',
              response
            );

            if (
              response.status === 200 &&
              response.data.err === 0 &&
              response.data.msg === 'Create post success'
            ) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500,
              });
              window.location.reload();
            }
          });
        });
    }
  };

  return (
    <div className="z-2150 h-full">
      {!isEdit && (
        <>
          <div className=" items-center  pb-2 mb-3 ">
            <h1 className="text-[2rem] mt-2 py-[1rem]">{pageTitle[0].text}</h1>
            <div className="border-b-2"></div>
          </div>
          <div
            className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] py-[0.75rem] px-[1.25rem] rounded-[0.25rem] mb-[3rem]"
            role="alert"
          >
            {text.NOTE_ALERT}
          </div>
        </>
      )}
      <form className="h-full">
        <div className="flex flex-row gap-[3%] ">
          <div className="flex flex-col  text-[1rem] max-w-[70%]  w-full    ">
            <Address
              isEdit={isEdit}
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              value={payload}
              setValue={setPayload}
            />
            <Overview
              isEdit={isEdit}
              setInvalidFields={setInvalidFields}
              invalidFields={invalidFields}
              setImagesFile={setImagesFile}
              imagesFile={imagesFile}
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
          <div className={`max-w-[30%] w-full  ${isEdit && `hidden`}`}>
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
