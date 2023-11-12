import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Loading } from '../../../components';
import { usePathname } from '../../../ultils/common/usePathname';
import { InputText, InputTextReadOnly } from '../components';
import { apiEditUserInfo } from '../../../service/user';
import { toast } from 'react-toastify';
import * as actions from '../../../store/action';
import { apiUploadImages } from '../../../service';

const EditProfile = () => {
  const pageTitle = usePathname();
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    name: userData?.name || '',
    zalo: userData?.zalo || '',
    fbUrl: userData?.fbUrl || '',
    email: userData?.email || '',
  });
  const [invalidFields, setInvalidFields] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [changeImage, setChangeImages] = useState(false);
  useEffect(() => {
    if (!isLoggedIn || isLoggedIn === 'false') {
      window.location.href = '/auth/login';
    }
  }, [isLoggedIn]);

  useEffect(() => {
    setPayload((prevPayload) => ({
      ...prevPayload,
      name: userData?.name || '',
      zalo: userData?.zalo || '',
      fbUrl: userData?.fbUrl || '',
      email: userData?.email || '',
    }));
  }, [userData]);

  useEffect(() => {
    setImagesPreview(() => ({ files: 0, url: userData?.avatar }));
  }, [userData]);

  const ImageChange = async (e) => {
    e.preventDefault();
    setChangeImages(true);
    setLoading(false);
    setTimeout(() => {
      let files = e.target.files;
      for (let i of files) {
        setImagesPreview(() => ({ files: i, url: URL.createObjectURL(i) }));
      }
      setLoading(true);
    }, 1000);
  };

  const handleSubmit = async () => {
    if (userData.id) {
      const idLoad = toast.loading('Xin chờ...');
      if (changeImage) {
        let formData = new FormData();
        formData.append('file', imagesPreview.files);
        formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
        let response = await apiUploadImages(formData);
        if (response.status === 200) {
          setPayload((prev) => ({
            ...prev,
            avatar: response?.data.secure_url,
          }));
        }
      }
      const finalPayload = {
        ...payload,
        avatar: changeImage
          ? payload.avatar
          : 'https://www.w3schools.com/w3images/avatar2.png',
      };
      console.log(
        '🚀 ~ file: EditProfile.js:76 ~ handleSubmit ~ finalPayload:',
        finalPayload
      );
      const result = await apiEditUserInfo(finalPayload);
      if (result.data.err === 0) {
        toast.update(idLoad, {
          render: 'Đổi thông tin thành công',
          type: 'success',
          isLoading: false,
          autoClose: 2000,
        });
        dispatch(actions.getUser());
      } else {
        toast.update(idLoad, {
          render: 'Đổi thông tin thất bại',
          type: 'error',
          isLoading: false,
          autoClose: 2000,
        });
      }
    }
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        handleSubmit();
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      <div className=" items-center   pb-1 mb-1 flex justify-between ">
        <h1 className="text-[2rem] mt-2 py-[0.5rem] ">{pageTitle[0].text}</h1>
      </div>
      <div className="border-b-2"></div>
      <div className="flex justify-center ml-[20%] w-[70%] mt-10 mb-[170px]">
        <form className=" gap-4 flex flex-col w-full ">
          <div className="flex flex-row items-center ">
            <label className="whitespace-nowrap w-[20%] mb-[15px] ">
              Mã thành viên
            </label>
            <div className="w-full ">
              <InputTextReadOnly value={userData?.id} styleInput={'w-[80%]'} />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <label className="whitespace-nowrap w-[20%] mb-[35px] ">
              Số điện thoại
            </label>
            <div className="w-full flex flex-col ">
              <InputTextReadOnly
                value={userData?.phone}
                styleInput={'w-[80%]'}
              />
              <Link
                target="_blank"
                to={'doi-so-dien-thoai'}
                className="text-[#007bff] hover:underline"
              >
                Đổi số điện thoại
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center mt-[20px]">
            <label className="whitespace-nowrap w-[20%] mb-[15px] ">
              Tên hiển thị
            </label>
            <div className="w-full ">
              <InputText
                value={payload.name}
                name={'name'}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                typeInput={'text'}
                setValue={setPayload}
                styleInput={'max-w-[80%]'}
              />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <label className="whitespace-nowrap w-[20%] mb-[15px] ">
              Email
            </label>
            <div className="w-full ">
              <InputText
                value={payload.email}
                name={'email'}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                typeInput={'email'}
                setValue={setPayload}
                styleInput={'max-w-[80%]'}
              />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <label className="whitespace-nowrap w-[20%] mb-[15px] ">
              Số zalo
            </label>
            <div className="w-full ">
              <InputText
                value={payload.zalo}
                name={'zalo'}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                typeInput={'text'}
                setValue={setPayload}
                styleInput={'max-w-[80%]'}
              />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <label className="whitespace-nowrap w-[20%] mb-[15px] ">
              Link Facebook
            </label>
            <div className="w-full ">
              <InputText
                value={payload.fbUrl}
                name={'fbUrl'}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
                typeInput={'text'}
                setValue={setPayload}
                styleInput={'max-w-[80%]'}
              />
            </div>
          </div>
          <div className="flex flex-row items-center  mt-[20px] mb-[15px] ">
            <label className="whitespace-nowrap w-[20%] ">Mật khẩu</label>
            <div className="w-full ">
              <Link
                to={'doi-mat-khau'}
                target="_blank"
                className="hover:underline text-[#007bff] "
              >
                Đổi mật khẩu
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <label className="whitespace-nowrap w-[20%] mb-[15px] ">
              Ảnh đại diện
            </label>
            <div className="w-full flex flex-col">
              <img
                alt="avatar"
                className="object-cover w-28 h-28  rounded-full"
                src={
                  imagesPreview.url ||
                  'https://www.w3schools.com/w3images/avatar2.png'
                }
              ></img>

              <Button
                text={`Xóa hình này`}
                width={
                  'mt-[5px] w-[25%] h-[35px] text-bold bg-[#f1f1f1] text-red-600'
                }
                onClick={() => {
                  setChangeImages(false);
                  setImagesPreview(() => ({
                    url: 'https://www.w3schools.com/w3images/avatar2.png',
                  }));
                }}
              />
              <div className="mt-[5px] w-[25%] h-[35px] text-bold bg-[#f1f1f1] text-black">
                <label
                  htmlFor="file"
                  className="cursor-pointer p-[0.5rem] items-center justify-center flex flex-col"
                >
                  Chọn ảnh
                </label>
                <input
                  hidden
                  onClick={() =>
                    setInvalidFields((prev) =>
                      prev.filter((field) => field.name !== 'images')
                    )
                  }
                  onChange={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setLoading(false);
                    ImageChange(e);
                  }}
                  accept="image/jpg, image/png, image/jpeg"
                  name="image"
                  type="file"
                  id="file"
                ></input>
              </div>
            </div>
          </div>
          <Button
            text={`Lưu & Cập nhật`}
            width={
              'mt-[30px] w-[85%] h-[50px] text-bold bg-[#007bff] text-white'
            }
            onClick={() => {
              handleSubmit();
            }}
          />
          <input type="hidden" name="user_id" value="133482"></input>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
