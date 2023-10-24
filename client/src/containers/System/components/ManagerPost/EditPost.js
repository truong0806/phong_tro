import React from 'react';

const EditPost = ({ setShowPopup, itemEdit }) => {
  console.log('🚀 ~ file: EditPost.js:4 ~ EditPost ~ item:', itemEdit);
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
        className="relative flex flex-col h-[500px]  w-[700px] left-0 right-0 bottom-0 my-0 mx-auto top-[60px]  bg-white border rounded-lg overflow-hidden"
      >
        <div
          className={`
              h-[45px]
              relative flex items-center justify-center border-b border-solid`}
        >
          <span className="items-center text-center uppercase font-bold">
            Sửa tin đăng
          </span>
          <div
            className=" cursor-pointer bg-left_arrow_bg absolute bg-center top-0 left-0 w-[45px] h-[45px] bg-50% bg-no-repeat "
            onClick={handleCloseClick}
          ></div>
          <span>{itemEdit.id}</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
