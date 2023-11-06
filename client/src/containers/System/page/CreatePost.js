import React, { useEffect, useState } from 'react';
import { text, luuY } from '../../../ultils/constains';
import { Button } from '../../../components';
import { Address, Overview } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/action';
import { toast } from 'react-toastify';
import {
  apiCreateNewPost,
  apiUpdatePost,
  apiUploadImages,
} from '../../../service';
import validate from '../../../ultils/validate';
import { usePathname } from '../../../ultils/common/usePathname';
import Swal from 'sweetalert2';

const CreatePost = ({ isEdit }) => {
  console.log('🚀 ~ file: CreatePost.js:18 ~ CreatePost ~ isEdit:', isEdit);
  const pageTitle = usePathname();
  const { dataEdit } = useSelector((state) => state.post);
  console.log('🚀 ~ file: CreatePost.js:21 ~ CreatePost ~ dataEdit:', dataEdit);

  const [invalidFields, setInvalidFields] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const [imagesFile, setImagesFile] = useState([]);

  const [payload, setPayload] = useState(() => {
    const initData = {
      apartmentNumber: isEdit ? dataEdit?.address.split(',')[0] : '',
      categoryName: isEdit ? dataEdit?.categories.value : '',
      street: isEdit ? dataEdit?.address.split(',')[1] : '',
      ward: isEdit ? dataEdit?.address.split(',')[2] : '',
      district: isEdit ? dataEdit?.address.split(',')[3] : '',
      title: isEdit ? dataEdit?.title : '',
      description: isEdit ? dataEdit?.description : '',
      priceNumber: isEdit
        ? dataEdit?.attributes?.price?.split(' ')[1] === 'đồng/tháng'
          ? dataEdit?.attributes?.price?.split(' ')[0]
          : dataEdit?.attributes?.price?.split(' ')[0] * 1000000
        : '',
      images: '',
      areaNumber: isEdit ? dataEdit?.attributes?.acreage?.split(' ')[0] : '',
      target: isEdit ? dataEdit?.overviews.target : '',
      province: isEdit ? dataEdit?.address.split(',')[4] : '',
    };
    return initData;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      let images = JSON.parse(dataEdit?.images?.image)?.map((item, index) => {
        return {
          id: index,
          url: item,
        };
      });
      images && setImagesFile(images);
      console.log('🚀 ~ file: CreatePost.js:63 ~ useEffect ~ images:', images);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.getCategories());
    }, 1000);
    setPayload((prev) => ({
      ...prev,
      userId: userData?.id,
      phoneContact: userData?.phone,
    }));
    console.log(
      '🚀 ~ file: CreatePost.js:755 ~ CreatePost ~ imagesFile:',
      imagesFile
    );
  }, [dispatch, userData]);

  useEffect(() => {}, [invalidFields]);

  const separateUrlsIntoObjects = (arr) => {
    const httpUrls = [];
    const blobUrls = [];

    for (const url of arr) {
      if (url.url.startsWith('http://')) {
        httpUrls.push(url);
      } else if (url.url.startsWith('blob:')) {
        blobUrls.push(url);
      }
    }

    const result = {
      err: 0,
      httpUrls: httpUrls,
      blobUrls: blobUrls,
    };

    return result;
  };

  const handleUpdate = async () => {
    if (isEdit) payload.postId = dataEdit?.id;
    let res = separateUrlsIntoObjects(imagesFile);
    if (res.err === 0) {
      if (invalidFields?.length === 0) {
        let imagesList = [];
        let imagesListHttp = res.httpUrls;
        imagesListHttp.map((item) => {
          imagesList.push(item.url);
        });

        let formData = new FormData();
        const uploadPromises = res.blobUrls.map(async (item) => {
          formData.append('file', item.files);
          formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
          let response = await apiUploadImages(formData);
          if (response.status === 200) {
            imagesList.push(response.data?.secure_url);
          }
        });
        console.log(
          '🚀 ~ file: CreatePost.js:117 ~ uploadPromises ~ imagesList:',
          imagesList
        );
        await Promise.all(uploadPromises);
        console.log(
          '🚀 ~ file: CreatePost.js:129 ~ handleUpdate ~ payload:',
          payload
        );

        console.log(
          '🚀 ~ file: CreatePost.js:135 ~ handleUpdate ~ imagesFile:',
          imagesFile
        );
        //const imgArr = imagesList.split(',').map((url) => url.trim());
        let finalPayload = {
          ...payload,
          userId: userData?.id,
          phoneContact: userData?.phone,
          priceNumber: payload.priceNumber,
          areaNumber: payload.areaNumber,
          images: JSON.stringify(imagesList),
        };
        console.log(
          '🚀 ~ file: CreatePost.js:133 ~ handleUpdate ~ finalPayload:',
          finalPayload
        );
        const response = await apiUpdatePost(finalPayload);
        if (response.data.err === 0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cập nhật bài đăng thành công',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            //window.location.reload();
            setPayload({
              apartmentNumber: '',
              categoryName: '',
              street: '',
              ward: '',
              district: '',
              title: '',
              description: '',
              priceNumber: '',
              images: '',
              areaNumber: '0',
              target: '',
              province: '',
            });
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Cập nhật bài đăng thất bài',
            showConfirmButton: false,
            timer: 1500,
          }).then(window.location.reload());
        }
      }
    }
  };

  const handleSumit = async (e) => {
    validate(payload, 'Create Post', setInvalidFields);
    if (imagesFile.length > 0) {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'images')
      );
    }
    if (invalidFields.length === 0) {
      let imagesList = [];
      let formData = new FormData();
      const uploadPromises = imagesFile.map(async (item) => {
        formData.append('file', item.files);
        formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
        let response = await apiUploadImages(formData);
        if (response.status === 200) {
          imagesList.push(response.data?.secure_url);
        }
      });
      await Promise.all(uploadPromises);
      let finalPayload = {
        ...payload,
        images: JSON.stringify(imagesList),
      };
      setPayload((prev) => ({ ...prev, images: imagesList }));
      console.log(
        '🚀 ~ file: CreatePost.js:203 ~ uploadPromises ~ imagesList:',
        imagesList
        );
        console.log("🚀 ~ file: CreatePost.js:207 ~ handleSumit ~ finalPayload:", finalPayload)
      console.log(
        '🚀 ~ file: CreatePost.js:78 ~ uploadPromises ~ uploadPromises:',
        uploadPromises
      );
      const response = await apiCreateNewPost(finalPayload);
        if (response.data.err === 0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đăng bài đăng thành công',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            //window.location.reload();
            setPayload({
              apartmentNumber: '',
              categoryName: '',
              street: '',
              ward: '',
              district: '',
              title: '',
              description: '',
              priceNumber: '',
              images: '',
              areaNumber: '0',
              target: '',
              province: '',
            });
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Đăng bài đăng thất bài',
            showConfirmButton: false,
            timer: 1500,
          }).then(window.location.reload());
        }
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
                onClick={(e) => {
                  isEdit ? handleUpdate(e) : handleSumit(e);
                }}
                text={isEdit ? 'Cập Nhật' : 'Đăng bài'}
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
