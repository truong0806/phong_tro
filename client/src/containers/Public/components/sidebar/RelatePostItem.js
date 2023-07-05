import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const RelatePostItem = ({ item }) => {
  const formatTime = () => {
    moment.locale('vn');
    return moment(item.createdAt).fromNow();
  };
  const images = JSON.parse(item?.images?.image)?.shift();
  return (
    <div className="">
      <Link
        href="#"
        className="flex w-full border-solid border-b-[1px] py-[10px] relative"
      >
        <div className="w-[65px] relative z-10 h-[65px]">
          <img
            className="lazyload lazy  w-full h-full object-cover absolute  left-0 rounded block"
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
