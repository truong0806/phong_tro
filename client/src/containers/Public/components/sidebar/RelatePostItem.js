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
    <div className=" lg:w-full w-full flex flex-col lg:px-[10px] lg:mx-[-10px]  lg:py-2 lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link
        href="#"
        className="w-[150px] flex flex-col lg:flex-row lg:w-full h-[245px] lg:h-[70px] items-center justify-center relative cursor-pointerv "
      >
        <div className="w-full h-[120px] font-normal mb-3 lg:w-[65px] relative z-10 lg:h-[65px] items-center justify-center">
          <img
            className="lazyload  lazy object-cover h-full  w-full  "
            data-src={images}
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            alt={item.title}
            loading="lazy"
          ></img>
          <span className="block bg-35px"></span>
        </div>
        <div className="w-full lg:w-4/5  relative mb-0 leading-5">
          <p className="line-clamp-2 relative top-0 text-[1rem] font-normal   text-[#3763e0] mb-[10px]">
            {item.title}
          </p>
          <div className="flex items-end relative  justify-between">
            <span className="text-[#16c784] font-bold text-[.9rem]">
              {item.attributes.price}
            </span>
            <time className="lg::block hidden font-[.9rem] text-[#aaa]">{formatTime()}</time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatePostItem;
