import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '../../../components';
import { usePathname } from '../../../ultils/common/usePathname';
import { InputText, InputTextReadOnly } from '../components';
import { path } from '../../../ultils/constains';

const EditProfile = () => {
  const pageTitle = usePathname();
  const [invalidFields, setInvalidFields] = useState([]);
  const { userData } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [imagesPreview, setImagesPreview] = useState([]);
  const { msg } = useSelector((state) => state.auth);
  console.log(
    '🚀 ~ file: EditProfile.js:13 ~ EditProfile ~ imagesPreview:',
    imagesPreview
  );
  const [loading, setLoading] = useState(false);
  console.log(
    '🚀 ~ file: EditProfile.js:10 ~ EditProfile ~ userData:',
    userData
  );
  useEffect(() => {
    if (!isLoggedIn || isLoggedIn === 'false') {
      window.location.href = '/auth/login';
    }
  }, [isLoggedIn]);

  const [payload, setPayload] = useState(() => {
    const initData = {
      id: userData?.id,
      name: userData?.name || '',
      phone: userData?.phone || '',
      zalo: userData?.zalo || '',
      fbUrl: userData?.fbUrl || '',
      avatar:
        userData?.avatar || 'https://www.w3schools.com/w3images/avatar2.png',
      email: '',
    };
    return initData;
  });
  console.log(
    '🚀 ~ file: EditProfile.js:23 ~ const[payload,setPayload]=useState ~ payload:',
    payload
  );

  const ImageChange = async (e) => {
    setTimeout(() => {
      let files = e.target.files;
      console.log('🚀 ~ file: EditProfile.js:44 ~ setTimeout ~ files:', files);
      for (let i of files) {
        setImagesPreview(URL.createObjectURL(i));
      }
      setLoading(true);
    }, 1000);
  };

  function dataURLtoBlob(dataURL) {
    var arr = dataURL.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  useEffect(() => {
    setImagesPreview(
      userData?.avatar || 'https://www.w3schools.com/w3images/avatar2.png'
    );
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
              <InputTextReadOnly value={payload.id} styleInput={'w-[80%]'} />
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <label className="whitespace-nowrap w-[20%] mb-[35px] ">
              Số điện thoại
            </label>
            <div className="w-full flex flex-col ">
              <InputTextReadOnly value={payload.phone} styleInput={'w-[80%]'} />
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
                typeInput={'text'}
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
              Facebook
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
                alt=""
                className="object-cover w-[25%] rounded-[50%]"
                src={imagesPreview}
              ></img>

              <Button
                text={`Xóa hình này`}
                width={
                  'mt-[5px] w-[25%] h-[35px] text-bold bg-[#f1f1f1] text-red-600'
                }
                onClick={() => {
                  setPayload((prev) => ({
                    ...prev,
                    avatar: 'https://www.w3schools.com/w3images/avatar2.png',
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
                    e.stopPropagation();
                    setLoading(false);
                    ImageChange(e);
                  }}
                  accept="image/jpg, image/png, image/jpeg"
                  name="image"
                  type="file"
                  id="file"
                ></input>
                <input
                  onChange={(e) => {
                    e.stopPropagation();
                    setLoading(false);
                    ImageChange(e);
                  }}
                  type="hidden"
                  data-public-key="9bca2fc67db5a339d064"
                  role="uploadcare-uploader"
                  data-crop="1:1"
                  data-images-only
                ></input>
              </div>
            </div>
          </div>
          <Button
            text={`Lưu & Cập nhật`}
            width={
              'mt-[30px] w-[85%] h-[50px] text-bold bg-[#007bff] text-white'
            }
          />
          <input type="hidden" name="user_id" value="133482"></input>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
