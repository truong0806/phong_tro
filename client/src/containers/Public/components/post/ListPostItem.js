/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../../ultils/icons';
import 'lazysizes';
var slug = require('slug');
const { BsBookmarkStarFill, RiHeartLine, RiHeartFill } = icons;
const indexs = [0, 1, 2, 3];
const ListPostItem = ({
  images,
  attributes,
  description,
  users,
  title,
  address,
  star,
  id,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const handleStar = (star) => {
    const stars = [];
    for (let i = 1; i < +star; i++) {
      stars.push(
        <div className="w-[14px] h-[17px] inline-block bg-[length:14px_14px] bg-repeat-x bg-center bg-star-bg"></div>
      );
    }
    return stars;
  };
  return (
    <div className="w-full  flex flex-col md:px-[5px]  mx-[5px]  border-t border-red-500 py-2 md:flex-row hover:bg-gray-100 ">
      {images?.length > 4 ? (
        <Link
          to={`chi-tiet/${slug(title)}/${id}`}
          className="w-full md:w-2/5 h-[240px] md:gap-[2px] items-center justify-center relative cursor-pointerv "
       >
          {
            images
              ?.filter((i, index) => indexs.some((i) => i === index))
              ?.map((i, index) => {
                return (
                  <img
                    key={index}
                    src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                    data-src={i}
                    className="lazyload  lazy object-cover md:object-cover h-[240px]  w-full  "
                  //loading="lazy"
                  />
                );
              })[1]
          }

          <span className="bg-overlay-70 text-white px-2 rounded-md absolute left-3 bottom-1">
            {`${images?.length}`} ảnh
          </span>
          <span
            className="text-white absolute right-5 bottom-1"
            onMouseEnter={() => {
              setIsHoverHeart(true);
            }}
            onMouseLeave={() => {
              setIsHoverHeart(false);
            }}
          >
            {isHoverHeart ? (
              <RiHeartFill size={20} color="red" />
            ) : (
              <RiHeartLine size={20} />
            )}
          </span>
        </Link>
      ) : (
        <Link
          to={`chi-tiet/${slug(title)}/${id}`}
          className="w-2/5 h-[245px] gap-[2px] relative items-center justify-center cursor-pointer"
        >
          <img
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            className="w-full h-full object-cover"
          />
        </Link>
      )}
      <div className="w-full md:w-3/5 md:ml-[15px] mt-2">
        <h3 className="flex justify-between gap-4 text-base font-bold whitespace-normal mb-[5px] md:mb-[10px]">
          <Link
            to={`chi-tiet/${slug(title)}/${id}`}
            href="#"
            className="font-bold gap-1 text-[#E13427] hover:underline	"
          >
            {handleStar(+star).length > 0 &&
              handleStar(+star)?.map((star, num) => {
                return <span key={num}>{star}</span>;
              })}
            <span className="ml-[4px] text-justify line-clamp-2 overflow-hidden">{title}</span>
          </Link>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={20} color="orange" />
          </div>
        </h3>
        <div className="md:my-6 my-6 flex items-center justify-between gap-1 md:gap-5 flex-wrap">
          <span className="text-[1.2rem] text-[#16c784] font-bold">
            {attributes?.price?.split(' ')[1] === 'đồng/tháng' ? `${+attributes?.price?.split(' ')[0] / 1000}.000 đồng/tháng` : attributes.price}
          </span>
          <span className="text-[#333] leading-normal md:leading-[19px] ">
            {attributes.acreage}
          </span>
          <span className="">
            <Link
              href="https://phongtro123.com/tinh-thanh/ho-chi-minh/quan-go-vap"
              title={address}
            >
              {`${address?.split(',')[address?.split(',').length - 2]},${address?.split(',')[address?.split(',').length - 1]
                }`}
            </Link>
          </span>
        </div>
        <p className="text-gray-500 h-[100px] line-clamp-5 overflow-hidden my-[10px]">
          {description}
        </p>
        <div className="flex  items-center justify-between my-9 lg:flex-row xl:flex-row">
          <div className="sm:flex items-center hidden">
            <img
              src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p className="text-[#8a8d91] ml-1">{users.name}</p>
          </div>
          <div className="flex items-center flex-row">
            <button
              className={`${users.phone ? 'show' : 'hidden'
                } bg-[#1266dd] w-full whitespace-nowrap my-[3px] rounded-[5px] py-[3px] px-[7px] text-white border-[#1266dd] border-solid border-[1px] cursor-pointer`}
              type="button"
            >
              Gọi: {users.phone}
            </button>
            <button
              className={`${users.zalo ? 'show' : 'hidden'
                } bg-white w-full   my-[3px] rounded-[5px] ml-[5px] py-[3px] px-[7px] text-[#1266dd] border-[#1266dd] border-solid border-[1px] cursor-pointer hover:bg-[#1266dd] hover:text-white`}
              type="button"
            >
              Nhắn Zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPostItem;
