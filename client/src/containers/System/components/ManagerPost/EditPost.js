import React, { useState } from 'react';
import InputText from '../../../../components/InputText';
import Address from '../CreatePost/Address/Address';
import { InputSelect } from '../../../../components';
import { useSelector } from 'react-redux';
import CreatePost from '../../page/CreatePost';
import icon from '../../../../ultils/icons';
const { AiOutlineClose } = icon;

const EditPost = ({ setShowPopup, showPopup , isEdit}) => {
  const [invalidFields, setInvalidFields] = useState([]);
  const [category, setCategory] = useState([{ code: '', value: '' }]);
  const { categories } = useSelector((state) => state.app);
  const [titles, setTitles] = useState([{ code: '', value: '' }]);
  
  const handleCloseClick = () => {
    setShowPopup(false);
  };
  return (
    <div
      onClick={handleCloseClick}
      className="fixed w-full h-full bg-overlay-70 z-20 top-0 left-0 right-0 bottom-0  overflow-y-auto"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`animate__animated animate__fadeInDown animate__faster
         relative flex flex-col h-[40rem]  w-[70rem] left-0 right-0 bottom-0 my-0 mx-auto top-[30px]  bg-white border rounded-lg overflow-hidden`}
      >
        <div className=" items-center  pb-2 mb-3 ">
          <div className="flex justify-between px-[1rem]">
            <h1 className="text-[2rem] mt-2 py-[1rem] font-bold">
              Chỉnh sửa tin đăng
            </h1>
            <span
              className="py-[1rem] cursor-pointer"
              onClick={() => {
                handleCloseClick();
              }}
            >
              <AiOutlineClose size={26} />
            </span>
          </div>
          <div className="border-b-2"></div>
        </div>
        <div className="p-[15px] overflow-y-auto overflow-hidden">
          <CreatePost isEdit />
        </div>
      </div>
    </div>
  );
};

export default EditPost;
