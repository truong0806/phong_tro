import React, { useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { path } from '../../../../ultils/constains';
import setStylePost from '../../../../ultils/setStylePost';
import slug from 'slug';
const RelatePostItem = ({ item, listNewPostEff, listNew, postDetailId }) => {
  const [textColor, setTextColor] = React.useState('');

  const formatTime = () => {
    moment.locale('VN');
    return moment(item.createdAt).fromNow();
  };
  const images = JSON.parse(item?.images?.image)?.shift();

  const handleStar = (star) => {
    const stars = [];
    for (let i = 0; i < +star; i++) {
      stars.push(
        <div className="mx-[1px] w-[10px] h-[10px] inline-block bg-[length:11px_11px] bg-repeat-x bg-center bg-star-bg"></div>
      );
    }
    return stars;
  };

  useEffect(() => {
    setStylePost(item?.overviews?.bonus, setTextColor, 'title');
  }, []);

  return (
    <>
      <Link
        href={`${path.DETAIL_POST_TITLE__POSTID}/${item.id}`}
        className="flex cursor-pointer "
      >
        <figure className="w-[65px] h-[65px] relative ">
          <img className="w-[100%] h-[100%]" src={images}></img>
        </figure>
        <div className="w-[70%] relative ml-[15px] ">
          <h3 className="text-[1rem] font-bold mb-[10px] whitespace-normal ">
            <Link
              to={`/chi-tiet/${slug(item?.title)}/${item?.id}`}
              className="text-[#055699] text-init"
            >
              <span className={`${textColor} line-clamp-2 whitespace-normal `}>
                <span className="float-left h-[10px] mr-[3px] ">
                  {handleStar(+item.star).length > 0
                    ? handleStar(+item.star).map((item, index) => (
                        <div key={index} className="float-left mb-[3px]">
                          {item}
                        </div>
                      ))
                    : ''}
                </span>
                <span className={`text-[1rem]`}>{item?.title}</span>
              </span>
            </Link>
          </h3>
          <div className="flex flex-row justify-between">
            <span className="text-[1rem] text-[#16c784]">
              {item?.attributes?.price}
            </span>
            <span className="text-[0.9rem] text-[#aaa]">
              {item?.attributes?.published}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RelatePostItem;
