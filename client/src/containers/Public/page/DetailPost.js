import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/action';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { HeaderDetail, PostDes } from '../components/Detailpost';

function DetailPost() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { posts_detail } = useSelector((state) => state.post);
  console.log(
    '🚀 ~ file: DetailPost.js:10 ~ DetailPost ~ locaton:',
    location.pathname.split('/')[location.pathname.split('/').length - 1]
  );
  const [loading, setLoading] = useState(false);

  console.log(
    '🚀 ~ file: DetailPost.js:16 ~ DetailPost ~ posts_detail:',
    posts_detail
  );
  const img = JSON.parse(posts_detail[0]?.images?.image || '[]');

 

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      dispatch(
        actions.GetPostsDetail({
          id: location.pathname.split('/')[
            location.pathname.split('/').length - 1
          ],
        })
      );
      setLoading(true);
    });
  }, [dispatch]);

  return (
    <div className="w-[95%] flex gap-3">
      <div className="w-2/3 bg-white h-[2000px] flex flex-col p-[20px]">
        <div className="h-[317px] mb-[15px]">
          {img?.length > 0 ? (
            <Swiper
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper h-full w-full bg-black flex items-center justify-center"
            >
              {img?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item}
                    alt="img"
                    className="bg-white object-contain h-full w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <HeaderDetail />
        <PostDes/>
      </div>
      <aside className="w-1/3 bg-black h-[2000px]"></aside>
    </div>
  );
}

export default DetailPost;
