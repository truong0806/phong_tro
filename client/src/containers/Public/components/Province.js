import React from 'react';
import { location, text } from '../../../ultils/constains';
import { ProvinceBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import slug from 'slug';
const icon = [
  {
    code: 'CTPT',
    icon: 'https://phongtro123.com/images/mobile/icon-room-2.svg',
  },
  {
    code: 'NCT',
    icon: 'https://phongtro123.com/images/mobile/icon-home-2.svg',
  },
  {
    code: 'CTCH',
    icon: 'https://phongtro123.com/images/mobile/icon-apartment-2.svg',
  },
  {
    code: 'CTMB',
    icon: 'https://phongtro123.com/images/mobile/icon-shop-2.svg',
  },
  {
    code: 'TNOG',
    icon: 'https://phongtro123.com/images/mobile/icon-group-2.svg',
  },
];

export function Province({ linkRef, categoryCurrent }) {
  const { categories } = useSelector((state) => state.app);
  const merged = categories?.map((item) => {
    const linkIcon = icon.find((icon) => icon.code === item.code);
    return linkIcon ? { ...item, icon: linkIcon.icon } : null;
  });
  return (
    <div>
      <div
        ref={linkRef}
        className="lg:bg-transparent bg-white border-b-[7px] border-[#f1f1f1] flex flex-col mx-auto justify-center  items-center"
      >
        <div className="my-[20px] lg:my-[0px] items-center justify-center  w-[90%] mb-[20px]  bg-[#225aff]  text-white p-[15px] rounded-lg">
          <h1 className="text-[1.8rem] m-0 h-full text-left leading-9 font-bold ">
            {categoryCurrent !== undefined
              ? categoryCurrent?.header
              : text.HOME_TITLE}
          </h1>
          <p className="text-[.9rem] leading-6 font-normal  mt-[10px]  text-white text-justify">
            {categoryCurrent !== undefined
              ? categoryCurrent?.header
              : text.PAGE_DESCRIPTION}
          </p>
          <p className="page-description lg:hidden mb-0 mt-[10px] text-[.9rem] leading-6">
            <Link
              rel="nofollow"
              href="https://phongtro123.com/dang-nhap-tai-khoan"
            >
              Đăng nhập
            </Link>{' '}
            hoặc{' '}
            <Link
              rel="nofollow"
              href="https://phongtro123.com/dang-ky-tai-khoan"
            >
              Đăng ký
            </Link>{' '}
            để bắt đầu
          </p>
        </div>
        {merged?.length > 0 && (
          <div className="w-full px-[10px] py-[20px] lg:hidden">
            <span className="text-[1.2rem] font-bold mb-[10px]">
              Danh mục cho thuê
            </span>
            <ul className="list-none">
              {merged.map((item) => {
                return (
                  <li
                    className=" flex-row rounded-[8px] bg-[#f5f5f5] items-center relative mt-[5px] flex pr-[10px]"
                    key={item.value}
                  >
                    <Link
                      className="text-[1.1rem] font-normal flex flex-row py-[10px] px-[15px] items-center justify-center"
                      to={`/${slug(item.value)}`}
                    >
                      <img
                        className="w-[25px] h-[25px] mr-[10px]"
                        src={item.icon}
                        alt="icon"
                      ></img>
                      {item.value}
                    </Link>
                    <span className="absolute right-3">({item.count})</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="hidden lg:flex lg:bg-transparent bg-white border-b-[7px] border-[#f1f1f1]  cursor-pointer gap-5  mb-3 justify-center items-center  ">
        {location.map((item) => (
          <ProvinceBtn key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
      <div className="lg:hidden py-[20px] px-[10px]  bg-white border-b-[7px] border-[#f1f1f1]  mb-3 justify-center items-center  ">
        <h2 className="text-[1.2rem] font-bold mb-[10px]">Khu vực nổi bật</h2>
        <ul className="whitespace-nowrap relative list-none overflow-x-auto overflow-y-hidden">
          <li className="inline-flex mr-[10px] p-[10px] w-auto justify-center flex-row bg-[#f5f5f5]">
            <img
              alt=""
              className="rounded-[50%] w-[50px] h-[50px] mr-[5px]"
              src="https://phongtro123.com/images/mobile/location_hcm.jpg"
            ></img>
            <div className="flex flex-col">
              <span>Phòng trọ</span>
              <span className="font-bold text-[1.1rem]">Hồ Chí Minh</span>
            </div>
          </li>
          <li className="inline-flex mr-[10px] p-[10px] w-auto justify-center flex-row bg-[#f5f5f5]">
            <img
              alt=""
              className="rounded-[50%] w-[50px] h-[50px] mr-[5px]"
              src="https://phongtro123.com/images/mobile/location_hn.jpg"
            ></img>
            <div className="flex flex-col">
              <span>Phòng trọ</span>
              <span className="font-bold text-[1.1rem]">Hà Nội</span>
            </div>
          </li>
          <li className="inline-flex mr-[10px] p-[10px] w-auto justify-center flex-row  bg-[#f5f5f5]">
            <img
              alt=""
              className="rounded-[50%] w-[50px] h-[50px] mr-[5px]"
              src="https://phongtro123.com/images/mobile/location_dn.jpg"
            ></img>
            <div className="flex flex-col">
              <span>Phòng trọ</span>
              <span className="font-bold text-[1.1rem]">Đà Nẵng</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Province;
