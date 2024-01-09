import React, { useEffect, useState } from 'react';
import { text, luuY } from '../../../ultils/constains';
import { Button, Map } from '../../../components';
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

const CreatePost = ({ isEdit, setShowPopup }) => {
  const pageTitle = usePathname();
  const { dataEdit } = useSelector((state) => state.post);
  const [invalidFields, setInvalidFields] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const [imagesFile, setImagesFile] = useState([]);
  const dispatch = useDispatch();

  const [payload, setPayload] = useState(() => {
    const initData = {
      apartmentNumber: isEdit
        ? dataEdit?.address
            .split(',')
            [dataEdit?.address.split(',').length - 5].trim()
        : '',
      categoryName: isEdit ? dataEdit?.categories.value : '',
      street: isEdit
        ? dataEdit?.address
            .split(',')
            [dataEdit?.address.split(',').length - 4].trim()
        : '',
      ward: isEdit
        ? dataEdit?.address
            .split(',')
            [dataEdit?.address.split(',').length - 3].trim()
        : '',
      district: isEdit
        ? dataEdit?.address
            .split(',')
            [dataEdit?.address.split(',').length - 2].trim()
        : '',
      title: isEdit ? dataEdit?.title : '',
      description: isEdit ? dataEdit?.description : '',
      priceNumber: isEdit
        ? dataEdit?.attributes?.price?.split(' ')[1] === 'đồng/tháng'
          ? +dataEdit?.attributes?.price?.split(' ')[0]
          : +dataEdit?.attributes?.price?.split(' ')[0] * 1000000
        : '',
      areaNumber: isEdit ? dataEdit?.attributes?.acreage?.split(' ')[0] : '',
      target: isEdit ? dataEdit?.overviews.target : '',
      province: isEdit
        ? dataEdit?.address
            .split(',')
            [dataEdit?.address.split(',').length - 1].trim()
        : '',
    };
    return initData;
  });

  useEffect(() => {
    if (isEdit) {
      let images =
        dataEdit?.images?.image &&
        JSON.parse(dataEdit?.images?.image)?.map((item, index) => {
          return {
            id: index,
            url: item,
          };
        });
      images && setImagesFile(images);
      setPayload((prev) => ({
        ...prev,
        images: dataEdit?.images?.image && JSON.parse(dataEdit?.images?.image),
      }));
    }
  }, [payload]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.getCategories());
    }, 1000);
    setPayload((prev) => ({
      ...prev,
      userId: userData?.id,
      phoneContact: userData?.phone,
    }));
  }, [dispatch, userData]);

  useEffect(() => {}, [invalidFields]);

  const separateUrlsIntoObjects = (arr) => {
    const httpUrls = [];
    const blobUrls = [];
    for (const url of arr) {
      if (url.url.startsWith('http://') || url.url.startsWith('https://')) {
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

  const handleSumit = async () => {
    const invalids = validate(payload, 'Create Post', setInvalidFields);
    if (payload.images === '') {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'images')
      );
    }
    if (isEdit) payload.postId = dataEdit?.id;
    let res = separateUrlsIntoObjects(imagesFile);
    if (invalids === 0) {
      let imagesList = [];
      let imagesListHttp = isEdit && res.httpUrls;
      isEdit &&
        imagesListHttp.map((item) => {
          imagesList.push(item.url);
        });

      let formData = new FormData();
      const uploadPromises = isEdit
        ? res?.blobUrls?.map(async (item) => {
            formData.append('file', item.files);
            formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
            let response = await apiUploadImages(formData);
            if (response.status === 200) {
              imagesList.push(response.data?.secure_url);
            }
          })
        : imagesFile.map(async (item) => {
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
        userId: userData?.id,
        phoneContact: userData?.phone,
        priceNumber: payload.priceNumber.toString(),
        areaNumber: payload.areaNumber.toString(),
        images: isEdit ? imagesList && JSON.stringify(imagesList) : imagesList,
      };
      const idLoad = toast.loading('Please wait...');

      const response = isEdit
        ? await apiUpdatePost(finalPayload)
        : await apiCreateNewPost(finalPayload);
      if (response.data.err === 0) {
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
          areaNumber: '',
          target: '',
          province: '',
        });

        if (isEdit) {
          toast.update(idLoad, {
            render: isEdit
              ? 'Cập nhật tin đăng thành công'
              : 'Đăng tin thành công',
            type: 'success',
            isLoading: false,
            autoClose: 2000,
          });
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        } else {
          window.location.reload();
        }
      } else {
        toast.update(idLoad, {
          render: isEdit ? 'Cập nhật tin đăng thất bại' : 'Đăng tin thất bại',
          type: 'error',
          isLoading: false,
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div className="z-2150 h-full">
      {!isEdit && (
        <>
          <div className=" items-center  pb-2 mb-3 ">
            <h1 className="text-[2.5rem]  py-[1rem]">{pageTitle[0].text}</h1>
            <div className="border-b-2"></div>
          </div>
          <div
            className="bg-[#f8d7da] border-[#f5c6cb] text-[#721c24] py-[0.75rem] px-[1.25rem] rounded-[0.25rem] mb-[2rem] sm:mb-[3rem]"
            role="alert"
          >
            {text.NOTE_ALERT}
          </div>
        </>
      )}
      <form className="h-full">
        <div className=" flex flex-col md:flex-row md:gap-[3%] ">
          <div className="flex flex-col  text-[1rem] w-full md:max-w-[70%]     ">
            <Address
              isEdit={isEdit}
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              address={payload}
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
            <div className="mt-[42px] mb-[40px] sm:mb-[100px] w-full">
              <Button
                onClick={(e) => {
                  handleSumit(e);
                }}
                text={isEdit ? 'Cập Nhật' : 'Đăng bài'}
                bgcolor={
                  'w-full h-[3rem] py-[0.5rem] px-[1rem] text-[1.25rem] bg-[#28a745] border-[#28a745] text-[#fff] font-bold item-center'
                }
              />
            </div>
          </div>
          <div className={`md:max-w-[30%] w-full md:block `}>
            <Map isEdit={isEdit} value={payload} setValue={setPayload} />
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
