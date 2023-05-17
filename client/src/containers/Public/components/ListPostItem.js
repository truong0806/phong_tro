import React, { useState, useEffect } from 'react'
import icons from '../../../ultils/icons'
import 'lazysizes'
import { path } from './../../../ultils/constains'
const { BsBookmarkStarFill, RiHeartLine, RiHeartFill } = icons
const indexs = [0, 1, 2, 3]
const ListPostItem = ({
  images,
  attributes,
  description,
  users,
  title,
  label,
  address,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false)
  return (
    <div className="w-full flex border-t border-red-500 p-4 pb-1">
      {images.length > 4 ? (
        <div className="w-[245px] h-[245px] grid grid-cols-2  grid-rows-1 gap-1 relative cursor-pointer">
          {images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                  data-src={i}
                  key={index}
                  className="lazyload lazy w-[130px] h-[120px] object-cover"
                  loading="lazy"
                />
              )
            })}

          <span className="absolute bottom-2 left-4 bg-[rgba(0,0,0,.5)] text-white py-[3px] px-[5px] rounded-[3px] text-[.9rem]">
            {`${images.length}`} ảnh
          </span>
          <span
            className="absolute bottom-2 right-4 text-white "
            onMouseEnter={() => {
              setIsHoverHeart(true)
            }}
            onMouseLeave={() => {
              setIsHoverHeart(false)
            }}
          >
            {isHoverHeart ? (
              <RiHeartFill size={20} color="red" />
            ) : (
              <RiHeartLine size={20} />
            )}
          </span>
        </div>
      ) : images.length > 0 ? (
        <div className="w-[245px] h-[245px] relative cursor-pointer">
          {images
            .filter((j, index) => indexs.some((j) => j - 3 === index))
            ?.map((j, index) => {
              return <img src={j} className="w-full h-full object-cover" />
            })}

          <span className="absolute bottom-2 left-4 bg-[rgba(0,0,0,.5)] text-white py-[3px] px-[5px] rounded-[3px] text-[.9rem]">
            {`${images.length}`} ảnh
          </span>
          <span
            className="absolute bottom-2 right-4 text-white "
            onMouseEnter={() => {
              setIsHoverHeart(true)
            }}
            onMouseLeave={() => {
              setIsHoverHeart(false)
            }}
          >
            {isHoverHeart ? (
              <RiHeartFill size={20} color="red" />
            ) : (
              <RiHeartLine size={20} />
            )}
          </span>
        </div>
      ) : (
        <div className="w-[245px] h-[245px] relative cursor-pointer">
          <img
            src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="w-3/5 ml-[15px]">
        <h3 className="flex justify-between gap-4 text-base font-bold whitespace-normal mb-[5px] md:mb-[10px]">
          <a
            href="#"
            className="font-bold gap-1 text-[#E13427] hover:underline	"
          >
            <div className="w-[14px] h-[17px] inline-block bg-[length:14px_14px] bg-repeat-x bg-center bg-star-bg"></div>
            <div className="w-[14px] h-[17px] inline-block bg-[length:14px_14px] bg-repeat-x bg-center bg-star-bg"></div>
            <div className="w-[14px] h-[17px] inline-block bg-[length:14px_14px] bg-repeat-x bg-center bg-star-bg"></div>
            <div className="w-[14px] h-[17px] inline-block bg-[length:14px_14px] bg-repeat-x bg-center bg-star-bg"></div>
            <div className="w-[14px] h-[17px] inline-block bg-[length:14px_14px] bg-repeat-x bg-center bg-star-bg"></div>
            <span className="ml-[4px] text-justify">{title}</span>
          </a>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={20} color="orange" />
          </div>
        </h3>
        <div className="md:my-3 flex items-center justify-between gap-1 md:gap-5 flex-wrap">
          <span className="text-[1.2rem] text-[#16c784] font-bold">
            {attributes.price}
          </span>
          <span className="text-[#333] leading-normal md:leading-[19px] ">
            {attributes.acreage}
          </span>
          <span className="">
            <a
              href="https://phongtro123.com/tinh-thanh/ho-chi-minh/quan-go-vap"
              title={address}
            >
              {`${address.split(',')[address.split(',').length - 2]},${
                address.split(',')[address.split(',').length - 1]
              }`}
            </a>
          </span>
        </div>
        <p className="text-gray-500  w-full h-[100px] text-ellipsis overflow-hidden text-justify">
          {description}
        </p>
        <div className="flex  items-center justify-between my-3 lg:flex-row">
          <div className="flex items-center">
            <img
              src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p className="text-[#8a8d91] ml-1">{users.name}</p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <button
              className={`${
                users.phone ? 'show' : 'hidden'
              } bg-[#1266dd] w-full whitespace-nowrap my-[3px] rounded-[5px] py-[3px] px-[7px] text-white border-[#1266dd] border-solid border-[1px] cursor-pointer`}
              type="button"
            >
              Gọi: {users.phone}
            </button>
            <button
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
  )
}

export default ListPostItem
