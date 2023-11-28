import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HeaderDetail = () => {
  const { posts_detail } = useSelector((state) => state.post);

  const handleStar = (star) => {
    const stars = [];
    for (let i = 0; i < +star; i++) {
      stars.push(
        <div className="mx-[2px] mb-[10px] w-[20px] h-[20px] inline-block bg-[length:22px_22px] bg-repeat-x bg-center bg-star-bg"></div>
      );
    }
    return stars;
  };

  const pushDate = () => {
    if (
      moment().startOf(posts_detail[0]?.attributes?.published).fromNow() ===
      'a few seconds ago'
    ) {
      return 'Vừa xong';
    } else {
      return moment().startOf(posts_detail[0]?.attributes?.published).fromNow();
    }
  };
  return (
    <div>
      {' '}
      <header className="mb-[15px] pb-4">
        <h1 className=" leading-9 font-bold text-[#E13427] text-[1.7rem] mb-[5px]">
          <span className="float-left w-[120px] h-[20px] mr-[3px]">
            {handleStar(5).length > 0
              ? handleStar(5).map((item, index) => (
                  <div key={index} className="float-left">
                    {item}
                  </div>
                ))
              : ''}
          </span>
          <span className="">{posts_detail[0]?.title}</span>
        </h1>
        <p className="py-[14px]">
          Chuyên mục:{' '}
          <Link className="text-[#1266dd] underline hover:text-[#f60]">
            {posts_detail[0]?.overviews?.area}
          </Link>
        </p>
        <address className="flex items-center mb-[10px]">
          <img
            className="w-[15px] h-[15px] mr-[5px]"
            src="https://phongtro123.com/images/address-icon.svg"
          ></img>
          {posts_detail[0]?.address}
        </address>
        <div className="flex flex-row gap-10 item-center">
          <div className="flex ">
            <img
              src="https://phongtro123.com/images/price-icon.svg"
              alt="price icon"
              className="w-[16px] h-[16px] mr-[5px] mt-[2px]"
            ></img>
            <span className="text-[#16c784] text-[1.5rem] font-bold">
              {posts_detail[0]?.attributes?.price}
            </span>
          </div>
          <div className="flex ">
            <img
              src="https://phongtro123.com/images/acreage-icon.svg"
              alt="acreage icon"
              className="w-[16px] h-[16px] mr-[5px]"
            ></img>
            <span>{posts_detail[0]?.attributes?.acreage}</span>
          </div>
          <div className="flex ">
            <img
              src="https://phongtro123.com/images/wall-clock-icon.svg"
              alt="clock icon"
              className="w-[16px] h-[16px] opacity-[0.3] mr-[5px]"
            ></img>
            <span>{pushDate()}</span>
          </div>
          <div className="flex ">
            <img
              src="https://phongtro123.com/images/hashtag.svg"
              alt="hastag icon"
              className="w-[16px] h-[16px] mr-[5px]  opacity-[.3]"
            ></img>
            <span>{posts_detail[0]?.attributes?.hashtag}</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderDetail;
