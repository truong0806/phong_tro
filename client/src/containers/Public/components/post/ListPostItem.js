/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../../../ultils/icons';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/action';
import 'lazysizes';
import setStylePost from '../../../../ultils/setStylePost';
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
  bonus,
}) => {
  console.log('🚀 ~ file: ListPostItem.js:21 ~ star:', star);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const [textColor, setTextColor] = React.useState('');
  const [borderColor, setBorderColor] = React.useState('');
  const dispatch = useDispatch();

  const handleStar = (star) => {
    const stars = [];
    for (let i = 1; i <= +star; i++) {
      stars.push(
        <div className="w-[13px] h-[17px] inline-block bg-[length:14px_14px] bg-repeat-x bg-center bg-star-bg"></div>
      );
    }
    return stars;
  };

  useEffect(() => {
    setStylePost(bonus, setTextColor, 'title');
    setStylePost(bonus, setBorderColor, 'border');
  }, []);

  return (
    <div
      className={`${+star == '5' ? 'bg-[#fff9f3]' : ''} ${
        borderColor ? borderColor : ''
      } w-full  flex flex-col md:px-[5px]  mx-[5px]  border-t py-2 md:flex-row hover:bg-gray-100 `}
    >
      {images?.length > 0 ? (
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
                    loading="lazy"
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
        <Link
          to={`chi-tiet/${slug(title)}/${id}`}
          className=" leading-[1.5rem] font-bold text-[#E13427] text-[1rem] mb-[10px]"
        >
          {handleStar(+star === null ? 0 : +star).length > 0 ? (
            <span className="float-left h-[17px] mr-[5px]">
              {handleStar(+star === null ? 0 : +star).map((item, index) => (
                <div key={index} className="float-left">
                  {item}
                </div>
              ))}
            </span>
          ) : (
            ''
          )}

          <span className={`${textColor ? textColor : ''}`}>{title}</span>
        </Link>
        <div className="mb-[10px] mt-[10px] flex items-center justify-between gap-1 md:gap-5 flex-wrap">
          <span className="text-[1.2rem] text-[#16c784] font-bold">
            {attributes?.price?.split(' ')[1] === 'đồng/tháng'
              ? `${+attributes?.price?.split(' ')[0]}.000 đồng/tháng`
              : attributes.price}
          </span>
          <span className="text-[#333] leading-normal md:leading-[19px] ">
            {attributes.acreage}
          </span>
          <span className="">
            <Link
              href="https://phongtro123.com/tinh-thanh/ho-chi-minh/quan-go-vap"
              title={address}
            >
              {`${address?.split(',')[address?.split(',').length - 2]},${
                address?.split(',')[address?.split(',').length - 1]
              }`}
            </Link>
          </span>
        </div>
        <p className="text-gray-500 h-[100px] line-clamp-5 overflow-hidden my-[10px]">
          {JSON.parse(description)}
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
              className={`${
                users.phone ? 'show' : 'hidden'
              } bg-[#1266dd] w-full whitespace-nowrap my-[3px] rounded-[5px] py-[3px] px-[7px] text-white border-[#1266dd] border-solid border-[1px] cursor-pointer`}
              type="button"
            >
              Gọi: {users.phone}
            </button>
            <button
              onClick={() => {
                window.location.href = `https://zalo.me/${users.zalo}`;
              }}
              className={`${
                users.zalo ? 'show' : 'hidden'
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
