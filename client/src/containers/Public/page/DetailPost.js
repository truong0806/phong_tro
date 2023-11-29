import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/action';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, Loading } from '../../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import {
  ContractUser,
  HeaderDetail,
  ListPostWithLabel,
  PostDes,
  PostFixBar,
} from '../components/Detailpost';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ItemSidebar from '../components/sidebar/ItemSidebar';
import { apiGetAllLabel } from '../../../service';

function DetailPost() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { posts_detail } = useSelector((state) => state.post);
  const { posts, new_post } = useSelector((state) => state.post);
  const [loading, setLoading] = useState(false);
  const [listLabel, setListLabel] = useState([]);

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
      window.scrollTo(0, 0);
    }, 1000);
  }, [dispatch, location.pathname]);

  useEffect(() => {
    const fetchLabel = async () => {
      const res = await apiGetAllLabel();
      setListLabel((prev) => [...prev, ...res.data.response]);
    };
    fetchLabel();
  }, []);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <div className="w-[1100px] flex gap-3">
          <div className="w-2/3">
            <div className="h-[317px] ">
              {img?.length > 0 ? (
                <Swiper
                  pagination={{
                    type: 'fraction',
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper h-[317px] w-full bg-black flex items-center justify-center rounded-[8px] border border-b-0 rounded-b-none border-[#dedede]"
                >
                  {img?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={item}
                        alt="img"
                        className="bg-black object-contain h-full w-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                  className="w-full h-full object-cover "
                />
              )}
            </div>
            <div className=" bg-white  flex flex-col p-[20px] mb-[50px] rounded-[8px] border border-t-0 rounded-t-none border-[#dedede]">
              <HeaderDetail />
              <PostDes />
            </div>
            <ListPostWithLabel />
          </div>
          <aside className="w-1/3">
            <ContractUser info={posts_detail} />
            <ItemSidebar
              postDetailId={posts_detail[0]?.id}
              listNew
              listNewPostEff={`flex-row`}
              header="Tin nổi bật"
              content={posts}
              isListPost
            />
            <ItemSidebar
              postDetailId={posts_detail[0]?.id}
              listNew
              listNewPostEff={`flex-row`}
              header="Tin mới đăng"
              content={new_post}
              isListPost
            />
            <ItemSidebar
              postDetailId={posts_detail[0]?.labels.value}
              length={listLabel?.length}
              className={`hidden`}
              header="Danh mục cho thuê"
              content={listLabel}
            />
          </aside>
          <PostFixBar />
        </div>
      )}
    </>
  );
}

export default DetailPost;
