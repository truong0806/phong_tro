import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const RelatePostItem = ({ item, listNewPostEff, listNew }) => {
  const formatTime = () => {
    moment.locale('vn');
    return moment(item.createdAt).fromNow();
  };
  const images = JSON.parse(item?.images?.image)?.shift();
  return (
    <div className="w-150px md:w-full w-full flex flex-col md:px-[10px] md:mx-[-10px]  py-4 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link
        href="#"
        className=" flex flex-col md:flex-row w-full md:w-full h-[245px] md:h-[70px] items-center justify-center relative cursor-pointerv "
      >
        <div className="w-full h-[120px] md:w-[65px] relative z-10 md:h-[65px] items-center justify-center">
          <img
            className="lazyload  lazy object-cover h-full  w-full  "
            data-src={images}
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            alt={item.title}
            loading="lazy"
          ></img>
          <span className="block bg-35px"></span>
        </div>
        <div className="w-4/5 relative mb-0 ml-[15px] justify-between leading-5">
          <p className="line-clamp-2 relative top-0 text-[1rem] font-normal   text-[#3763e0] mb-[10px]">
            {item.title}
          </p>
          <div className="flex items-end relative  justify-between">
            <span className="text-[#16c784] font-bold text-[.9rem]">
              {item.attributes.price}
            </span>
            <time className="font-[.9rem] text-[#aaa]">{formatTime()}</time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatePostItem;
