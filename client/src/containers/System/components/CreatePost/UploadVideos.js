import React from 'react';
import { InputText } from '..';

const UploadVideos = ({ setValue }) => {
  return (
    <div>
      <div className="mt-10 w-full mb-[28px]">
        <h3 className="text-[1.75rem] font-bold">Video</h3>
      </div>
      <div className="flex flex-col">
        <InputText label={'Video Link (Youtube)'} styleInput={'w-full '} />
        <p>Hoặc upload Video từ máy của bạn</p>
        <div className="mb-[14px] mt-2 border-dashed border-2 border-[#bbb]">
          <label
            htmlFor="file"
            className="cursor-pointer p-[28px] items-center justify-center flex flex-col"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0,0,255.98438,255.98438"
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
                <g transform="scale(5.12,5.12)">
                  <path d="M2,4c-0.55226,0.00006 -0.99994,0.44774 -1,1v4.83203c-0.01785,0.10799 -0.01785,0.21818 0,0.32617v29.67383c-0.01785,0.10799 -0.01785,0.21818 0,0.32617v4.8418c0.00006,0.55226 0.44774,0.99994 1,1h46c0.55226,-0.00006 0.99994,-0.44774 1,-1v-4.83203c0.01785,-0.10799 0.01785,-0.21818 0,-0.32617v-29.67383c0.01785,-0.10799 0.01785,-0.21818 0,-0.32617v-4.8418c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM3,6h3v3h-3zM8,6h4v3h-4zM14,6h4v3h-4zM20,6h4v3h-4zM26,6h4v3h-4zM32,6h4v3h-4zM38,6h4v3h-4zM44,6h3v3h-3zM3,11h44v28h-44zM20.94141,18c-0.52926,0.03111 -0.94227,0.46983 -0.94141,1v12c0.00027,0.35997 0.19397,0.69203 0.50718,0.86945c0.31321,0.17742 0.69761,0.17283 1.00649,-0.01203l10,-6c0.30109,-0.18078 0.48529,-0.50623 0.48529,-0.85742c0,-0.35119 -0.1842,-0.67664 -0.48529,-0.85742l-10,-6c-0.14316,-0.08628 -0.30566,-0.1353 -0.47266,-0.14258c-0.03318,-0.00165 -0.06643,-0.00165 -0.09961,0zM22,20.76563l7.05664,4.23438l-7.05664,4.23438zM3,41h3v3h-3zM8,41h4v3h-4zM14,41h4v3h-4zM20,41h4v3h-4zM26,41h4v3h-4zM32,41h4v3h-4zM38,41h4v3h-4zM44,41h3v3h-3z"></path>
                </g>
              </g>
            </svg>
            <label className="flex flex-col item-center items-center justify-center">
              <span>Thêm video</span>
              <small>(Định dạng .mp4)</small>
            </label>
          </label>
          <input hidden type="file" id="file"></input>
        </div>
      </div>
    </div>
  );
};

export default UploadVideos;
