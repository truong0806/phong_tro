import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
const RelatePostItem = ({ item, listNewPostEff, listNew }) => {
  const formatTime = () => {
    moment.locale('VN');
    return moment(item.createdAt).fromNow();
  };
  const images = JSON.parse(item?.images?.image)?.shift();
  return (
    <div className=" lg:w-full w-full flex flex-col mb-[5px] lg:mx-[-10px] h-[100px] lg:py-1 lg:flex-row hover:bg-gray-100 ">
      <Link
        href="#"
        className="gap-2 w-[150px] flex flex-col lg:flex-row lg:w-full  lg:h-[70px] relative cursor-pointerv "
      >
        <div className="w-[30%] h-full font-normal mb-3 lg:w-[30%] relative z-10 lg:h-full ">
          <img
            className="lazyload lazy object-cover h-full  w-full  "
            data-src={images}
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            alt={item.title}
            loading="lazy"
          ></img>
          <span className="block bg-35px"></span>
        </div>
        <div className="flex flex-col h-full w-[70%] lg:w-[70%] relative mb-0 leading-5">
          
          <div className="flex flex-row  relative justify-around">
            <span className="text-[#16c784] font-bold text-[0.9rem]">
              {item.attributes.price}
            </span>
            <div className=" text-[0.9rem]">{formatTime()}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RelatePostItem;
