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

  const [invalidFields, setInvalidFields] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const [imagesFile, setImagesFile] = useState([]);

  const [payload, setPayload] = useState(() => {
    const initData = {
      postId: dataEdit?.id,
      apartmentNumber: isEdit ? dataEdit?.address.split(',')[0] : '',
      categoryName: isEdit ? dataEdit?.categories.value : '',
      street: isEdit ? dataEdit?.address.split(',')[1] : '',
      ward: isEdit ? dataEdit?.address.split(',')[2] : '',
      district: isEdit ? dataEdit?.address.split(',')[3] : '',
      title: isEdit ? dataEdit?.title : '',
      description: isEdit ? JSON.parse(dataEdit?.description) : '',
      priceNumber: isEdit
        ? dataEdit?.attributes?.price?.split(' ')[1] === 'đồng/tháng'
          ? +dataEdit?.attributes?.price?.split(' ')[0]
          : +dataEdit?.attributes?.price?.split(' ')[0] * 1000000
        : 0,
      areaNumber: isEdit ? +dataEdit?.attributes?.acreage?.split(' ')[0] : 0,
      target: isEdit ? dataEdit?.overviews.target : '',
      province: isEdit ? dataEdit?.address.split(',')[4] : '',
    };
    return initData;
  });
  console.log(
    '🚀 ~ file: CreatePost.js:49 ~ const[payload,setPayload]=useState ~ payload:',
    payload
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) {
      let images = JSON.parse(dataEdit?.images?.image).map((item, index) => {
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
  }, [dispatch, userData]);

  useEffect(() => {}, [invalidFields]);

  const handleUpdate = async (e) => {
    validate(payload, 'Create Post', setInvalidFields);
  
    if (imagesFile?.length > 0) {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'images')
      );
    }
  
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
        httpUrls: httpUrls,
        blobUrls: blobUrls,
      };
  
      return result;
    };
  
    let res = separateUrlsIntoObjects(imagesFile);
    
  
    if (invalidFields?.length === 0) {
      let imagesList = [];
      let formData = new FormData();
      let uploadPromises = res.blobUrls.map(async (item) => {
        formData.append('file', item.files);
        formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
        return apiUploadImages(formData);
      });
      res?.httpUrls.map((item) => {
        imagesList.push(item.url);
      });
      Promise.all(uploadPromises).then((responses) => {
        const updatedImagesList = [];
  
        responses.forEach((response, index) => {
          console.log('🚀 ~ file: CreatePost.js:122 ~ responses.forEach ~ response:', response);
          if (response.status === 200) {
            updatedImagesList.push(response.data.url);
          } else {
            console.log('Upload images failed');
          }
        });
  
        // Combine the original imagesList with updatedImagesList
        const combinedImages = [...imagesList, ...updatedImagesList];
  
        // Set payload with the combined images
        setPayload((prev) => ({
          ...prev,
          images: combinedImages,
        }));
  
        if (combinedImages.length > 0) {
          // Perform the post update here
          apiUpdatePost(payload).then((updateResponse) => {
            if (
              updateResponse.status === 200 &&
              updateResponse.data.err === 0 &&
              updateResponse.data.msg === 'Update post success'
            ) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Cập nhật thành công',
                showConfirmButton: false,
                timer: 1500,
              }).then(() => window.location.reload());
            }
          });
        } else {
          console.log('No images');
        }
      });
    }
  };
  

  const handleSumit = async (e) => {
    validate(payload, 'Create Post', setInvalidFields);
    if (imagesFile?.length > 0) {
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== 'images')
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
            console.log(
              '🚀 ~ file: CreatePost.js:122 ~ responses.forEach ~ response:',
              response
            );
            if (response.status === 200) {
              images.push({ url: response.data.url });
              setPayload((prev) => ({
                ...prev,
                images: {
                  image: images,
                },
              }));
              console.log(
                '🚀 ~ file: CreatePost.js:118 ~ responses.forEach ~ images:',
                images
              );
            } else {
              console.log('Upload images failed');
            }
          });
        })
        .then(() => {
          console.log(
            '🚀 ~ file: CreatePost.js:131 ~ apiCreateNewPost ~ payload:',
            payload
          );
          if (payload.images !== '') {
            // apiCreateNewPost(payload).then((response) => {
            //   console.log(
            //     '🚀 ~ file: CreatePost.js:95 ~ apiCreateNewPost ~ response:',
            //     response
            //   );
            //   if (
            //     response.status === 200 &&
            //     response.data.err === 0 &&
            //     response.data.msg === 'Create post success'
            //   ) {
            //     // toast.options = {
            //     //   onHidden: function () {
            //     //     window.location.reload();
            //     //   },
            //     // };
            //     // toast.update(idLoad, {
            //     //   render: 'All is good',
            //     //   type: 'success',
            //     //   isLoading: false,
            //     // });
            //     Swal.fire({
            //       position: 'center',
            //       icon: 'success',
            //       title: 'Your work has been saved',
            //       showConfirmButton: false,
            //       timer: 1500,
            //     }).then(window.location.reload());
            //   }
            // });
          } else {
            console.log('No images');
          }
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
