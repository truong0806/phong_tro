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
  let finalPayload;
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
    setLoading(true);
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
    finalPayload = {
      ...payload,
    };
    if (userData.id) {
      const idLoad = toast.loading('Xin chờ...');
      if (changeImage) {
        let formData = new FormData();
        formData.append('file', imagesPreview.files);
        formData.append('upload_preset', process.env.REACT_APP_ASSETS_NAME);
        let response = await apiUploadImages(formData);
        if (response.status === 200) {
          finalPayload = {
            ...payload,
            avatar: payload.avatar,
          };
        }
      }
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
      <div className="flex justify-center px-[30%] w-full mt-10 mb-[170px]">
        <form className=" grid grid-cols-5 gap-y-5 w-full mt-5">
          <div className="col-span-2 flex items-center h-full">
            <label className="whitespace-nowrap">Mã thành viên</label>
          </div>
          <div className="w-full h-full col-span-3">
            <InputTextReadOnly
              value={userData?.id}
              styleComponent={''}
              styleInput={'w-full'}
            />
          </div>
          <div className="col-span-2 flex items-center h-full">
            <label className="whitespace-nowrap">Số điện thoại</label>
          </div>
          <div className="w-full h-full col-span-3">
            <InputTextReadOnly value={userData?.phone} styleInput={'w-full'} />
          </div>
          <div className="col-span-2 flex items-center h-full"></div>
          <div className="w-full h-full col-span-3">
            <Link
              target="_blank"
              to={'doi-so-dien-thoai'}
              className="text-[#007bff] hover:underline"
            >
              Đổi số điện thoại
            </Link>
          </div>
          <div className="col-span-2 flex items-center h-full pt-5">
            <label className="whitespace-nowrap">Tên hiển thị</label>
          </div>
          <div className="w-full h-full col-span-3 pt-5">
            <InputText
              value={payload.name}
              name={'name'}
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              typeInput={'text'}
              setValue={setPayload}
              styleInput={'w-full'}
            />
          </div>
          <div className="col-span-2 flex items-center h-full">
            <label className="whitespace-nowrap">Email</label>
          </div>
          <div className="w-full h-full col-span-3">
            <InputText
              value={payload.email}
              name={'email'}
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              typeInput={'email'}
              setValue={setPayload}
              styleInput={'w-full'}
            />
          </div>
          <div className="col-span-2 flex items-center h-full">
            <label className="whitespace-nowrap">Số zalo</label>
          </div>
          <div className="w-full h-full col-span-3">
            <InputText
              value={payload.zalo}
              name={'zalo'}
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              typeInput={'text'}
              setValue={setPayload}
              styleInput={'w-full'}
            />
          </div>
          <div className="col-span-2 flex items-center h-full">
            <label className="whitespace-nowrap">Link Facebook</label>
          </div>
          <div className="w-full h-full col-span-3">
            <InputText
              value={payload.fbUrl}
              name={'fbUrl'}
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
              typeInput={'text'}
              setValue={setPayload}
              styleInput={'w-full'}
            />
          </div>
          <div className="col-span-2 flex items-center h-full pt-5">
            <label className="whitespace-nowrap">Mật khẩu</label>
          </div>
          <div className="w-full h-full col-span-3 pt-5">
            <Link
              to={'doi-mat-khau'}
              target="_blank"
              className="hover:underline text-[#007bff] "
            >
              Đổi mật khẩu
            </Link>
          </div>
          <div className="col-span-2 flex items-center h-full pt-5">
            <label className="whitespace-nowrap">Ảnh đại diện</label>
          </div>
          <div className="w-full h-full col-span-3 pt-5">
            <div className="w-full flex h-[140px] justify-center ">
              {loading ? (
                <img
                  alt="avatar"
                  className="object-cover w-[140px] h-[140px]  rounded-full"
                  src={
                    imagesPreview.url ||
                    'https://www.w3schools.com/w3images/avatar2.png'
                  }
                ></img>
              ) : (
                <Loading />
              )}
            </div>
            <div className="w-full flex justify-center ">
              <Button
                text={`Xóa hình này`}
                width={
                  'mt-[5px] w-full h-[35px] text-bold bg-[#f1f1f1] text-red-600'
                }
                onClick={() => {
                  setChangeImages(false);
                  setImagesPreview(() => ({
                    url: 'https://www.w3schools.com/w3images/avatar2.png',
                  }));
                }}
              />
            </div>
            <div className="w-full flex justify-center ">
              <div className="mt-[5px] w-full h-[35px] text-bold bg-[#f1f1f1] text-black">
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
          <div className="w-full h-full col-span-5 pt-5">
            <Button
              text={`Lưu & Cập nhật`}
              width={
                'mt-[30px] w-full h-[50px] text-bold bg-[#007bff] text-white'
              }
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
