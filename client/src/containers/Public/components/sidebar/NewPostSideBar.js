import React from 'react';
import 'lazysizes';

const NewPostSideBar = ({ content }) => {
  return (
    <div>
      <li
        className="flex flex-col items-center justify-between  pb-[20px]"
        key={'a'}
      >
        {content.length > 0 &&
          content.slice(0, 10).map((item) => {
            // const has_video_Class =
            //   ? 'sticky top-0 z-10 bg-secondary1 text-white'
            //   : 'bg-secondary1 text-white'
            const createdAt = new Date('2023-06-04T16:40:15.000Z');
            const currentDate = new Date();
            const timeDiff = currentDate.getTime() - createdAt.getTime();
            const hoursDiff = Math.floor(timeDiff / (1000 * 3600));
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
            let dateCreated;
            if (hoursDiff < 24) {
              dateCreated = `${hoursDiff} giờ trước`;
            } else {
              dateCreated = `${daysDiff} ngày trước`;
            }
            const images = JSON.parse(item?.images?.image);
            const firstImage = images?.shift();
            return (
              <a
                href="#"
                className="flex w-full border-solid border-b-[1px] py-[10px] relative"
              >
                <div className="w-[65px] relative  h-[65px]  ">
                  <img
                    className="lazyload lazy  w-full h-full object-cover absolute left-0 rounded block"
                    data-src={firstImage}
                    src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                    alt={item.title}
                    loading="lazy"
                  ></img>
                  <span className="block bg-35px"></span>
                </div>
                <div className="w-4/5 relative mb-0 ml-[15px]  leading-5">
                  <p className="line-clamp-2 relative top-0 text-[1rem] font-normal   text-[#3763e0] mb-[10px]">
                    {item.title}
                  </p>
                  <div className="flex items-end relative  justify-between">
                    <span className="text-[#16c784] font-bold text-[1rem]">
                      {item.attributes.price}
                    </span>
                    <time className="font-[.9rem] text-[#aaa]">
                      {dateCreated}
                    </time>
                  </div>
                </div>
              </a>
            );
          })}
      </li>
    </div>
  );
};
export default NewPostSideBar;
