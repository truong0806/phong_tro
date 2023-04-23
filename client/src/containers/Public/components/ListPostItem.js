import React, { memo, useState, useEffect } from 'react'
import icons from '../../../ultils/icons'
import { apiPost } from '../../../service/post'
const images = [
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/13010033-f14b-42d6-b68e-89d7ca7d58e0_1678515051.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/16ade855-af1d-4ee5-b3a7-e86aa5df1288_1678515098.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/c626c684-d832-49a8-a573-358a9b22090e_1678515030.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/50f24ad5-bc4e-4997-8b5b-d5adf24afb3d_1678515041.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/37cdf18e-2b37-41d4-965a-e2dc2db7879d_1678515067.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/38564fec-3b63-4f25-a14c-b2d1ee8b9c2c_1678515071.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/d933608a-7b75-4101-bd7d-7f62822c60c1_1678515077.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/57c88133-a130-49f9-9acd-e6712fa75770_1678515091.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/f8c612af-ca20-4a8f-9b94-a2ad8963371c_1678515091.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/04a1122f-9f62-4b34-a0ed-653b348f4b59_1678515061.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/13010033-f14b-42d6-b68e-89d7ca7d58e0_1678515051.jpg',
  'https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/11/16ade855-af1d-4ee5-b3a7-e86aa5df1288_1678515098.jpg',
]

const { BsBookmarkStarFill, RiHeartLine, RiHeartFill } = icons

const ListPostItem = (props) => {
  const item = props.item
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState([])
  useEffect(() => {
    const fetchPost = async () => {
      const response = await apiPost()
      if (response?.data.err === 0) {
        setPost(response.data.response)
      } else {
        setPost(null)
      }
      setLoading(false)
    }
    fetchPost()
  }, [])
  const [isHoverHeart, setIsHoverHeart] = useState(false)

  return (
    <div className="w-full flex">
      <div className="w-2/5 flex flex-wrap gap-[1%] xl:w-[280px] lg:w-[350px] min-w-[150px] lg:h-[220px] justify-start relative">
        {item?.images.image.length > 0 &&
          item.images.image.nmap((image) => {
            return (
              <div>
                <img
                  src={image.split(',')}
                  alt="preview"
                  className="w-full  object-fill lg:h-[110px] lg:w-[49%] "
                />
              </div>
            )
          })}

        <span className="absolute bottom-2 left-2 bg-[rgba(0,0,0,.5)] text-white py-[3px] px-[5px] rounded-[3px] text-[.9rem]">
          4 ảnh
        </span>
        <span
          className="absolute bottom-2 right-2 text-white "
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
            <span className="ml-[4px]">{item.title}</span>
          </a>
          <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={20} color="orange" />
          </div>
        </h3>
        <div className="md:my-3 flex items-center justify-between gap-1 md:gap-5 flex-wrap">
          <span className="text-[1.2rem] text-[#16c784] font-bold">
            {item.attributes.price}
          </span>
          <span className="text-[#333] leading-normal md:leading-[19px] ">
            {item.attributes.acreage}
          </span>
          <span className="">
            <a
              href="https://phongtro123.com/tinh-thanh/ho-chi-minh/quan-go-vap"
              title="Cho thuê phòng trọ Quận Gò Vấp, Hồ Chí Minh"
            >
              {item.label.value}
            </a>
          </span>
          {/* <time
            className="float-right items-end justify-end"
            title="Thứ 6, 09:10 21/04/2023"
          >
            Hôm nay
          </time> */}
        </div>
        <p className="text-gray-500 h-16  mt-1 md:mt-3 whitespace-nowrap  text-ellipsis inline-block overflow-visible max-w-full md:overflow-visible md:text-clip md:whitespace-normal">
          {item.description}
        </p>
        <div className="flex items-center justify-between my-3 flex-col w-full lg:flex-row">
          <div
            className={`${
              item.users.name ? 'show' : 'hidden'
            } flex items-center`}
          >
            <img
              src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover rounded-full"
            />
            <p className="text-[#8a8d91]">{item.users.name}</p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <button
              className={`${
                item.users.phone ? 'show' : 'hidden'
              } bg-[#1266dd] w-full whitespace-nowrap my-[3px] rounded-[5px] py-[3px] px-[7px] text-white border-[#1266dd] border-solid border-[1px] cursor-pointer`}
              type="button"
            >
              Gọi: {item.users.phone}
            </button>
            <button
              className={`${
                item.users.zalo ? 'show' : 'hidden'
              } bg-white w-full   my-[3px] rounded-[5px] ml-[5px] py-[3px] px-[7px] text-[#1266dd] border-[#1266dd] border-solid border-[1px] cursor-pointer`}
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

export default memo(ListPostItem)
