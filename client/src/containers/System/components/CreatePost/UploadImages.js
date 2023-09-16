import React, { useState } from 'react';
import { Loading } from '../../../../components';

const UploadImages = ({ setImagesFile, imagesFile }) => {
  const [loading, setLoading] = useState(true);
  console.log("🚀 ~ file: UploadImages.js:6 ~ UploadImages ~ loading:", loading)
  const handImageChange = async (e) => {
    setTimeout(() => {
      let files = e.target.files;
      for (let i of files) {
        setImagesFile((prev) => [...prev, { files: i, url: URL.createObjectURL(i) }]
        )
      }
      setLoading(true);
    }, 1000);

  };

  const handleDelete = (imageToDelete) => {
    setImagesFile((prev) => prev.filter((image) => image.url !== imageToDelete));
    setLoading(true)
  };

  return (
    <div>
      <div className="mt-10 w-full mb-[14px]">
        <h3 className="text-[1.75rem] font-bold">Hình ảnh</h3>
      </div>
      <div className="flex flex-col">
        <p>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</p>
        <div className="mb-[14px] mt-2 border-dashed border-2 border-[#bbb]">
          <label
            htmlFor="file"
            className="cursor-pointer p-[28px] items-center justify-center flex flex-col"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="90px"
              height="90px"
              viewBox="0,0,256,256"
            >
              <g
                fill="#000000"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M10,5c-0.552,0 -1,0.448 -1,1v1c0,0.552 -0.448,1 -1,1h-5c-0.552,0 -1,0.448 -1,1v15c0,0.552 0.448,1 1,1h24c0.552,0 1,-0.448 1,-1v-15c0,-0.552 -0.448,-1 -1,-1h-5c-0.552,0 -1,-0.448 -1,-1v-1c0,-0.552 -0.448,-1 -1,-1zM15,9c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7zM25,10c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,11c-2.76142,0 -5,2.23858 -5,5c0,2.76142 2.23858,5 5,5c2.76142,0 5,-2.23858 5,-5c0,-2.76142 -2.23858,-5 -5,-5z"></path>
                </g>
              </g>
            </svg>
            <label className="flex flex-col item-center items-center justify-center">
              <span>Thêm ảnh</span>
              <small>(Định dạng .jpeg, .jpg, .png, )</small>
            </label>
          </label>
          <input
            hidden
            onChange={(e) => {
              e.stopPropagation();
              setLoading(false);
              handImageChange(e)
            }}
            accept="image/jpg, image/png, image/jpeg"
            name="image"
            type="file"
            id="file"
            multiple
          ></input>
        </div>
      </div>
      {!loading ?
        <div className='flex items-center justify-center mt-3'>
          <Loading />
        </div>
        :
        <div className="flex flex-wrap gap-[4%]">

          {imagesFile?.length > 0 &&
            imagesFile?.map((image, index) => (

              <div key={index} className="w-[110px] shadow-2xl mb-[20px]  ">
                <div className="h-[110px]  ">
                  <img className='object-cover w-full h-full' src={image.url} alt={`Preview ${index}`} />
                </div>
                <div
                  id={image.url}
                  onClick={(e) => {
                    const value = document.getElementById(image.url).id;
                    handleDelete(value);
                  }}
                  className="w-full bg-white py-[5px] border-none cursor-pointer"
                >
                  <span className="flex flex-row justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                    <span className="ml-1 text-[.9rem]">Xóa</span>
                  </span>
                </div>
              </div>
            ))}

        </div>}
    </div>
  );
};

export default UploadImages;
