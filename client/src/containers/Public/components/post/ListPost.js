import React, { useEffect, useRef, useState } from 'react';
import { Button, Loading } from '../../../../components/index';
import { ListPostItem } from '../../index';
import { GetPostsLimit } from '../../../../store/action/post';
import { useDispatch, useSelector } from 'react-redux';

const ListPost = ({ page }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const linkRef = useRef();
  const { posts_limit } = useSelector((state) => state.post);
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var year = date.getFullYear();

  useEffect(() => {
    let offset = page ? page - 1 : 0;
    setLoading(true);
    setTimeout(() => {
      dispatch(GetPostsLimit(offset));
      setLoading(false);
    }, 1000);
    linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [dispatch, page]);

  return (
    <div ref={linkRef} className="m-[20px] ">
      <section className=" flex justify-between">
        <div className="">
          <span className="text-[18.2px] font-bold">Danh sách tin đăng</span>
        </div>
        <span className="text-[14px] ">
          Cập nhật:{' '}
          <time title="Thứ 7, 12:25 15/04/2023">
            {hour}:{minute} {day}/{month}/{year}
          </time>
        </span>
      </section>
      <div className="flex items-center text-[.95rem] gap-2 my-[10px] ">
        <span className="">Sắp xếp: </span>
        <Button
          padding={'py-[5px] px-[10px]'}
          bgcolor={'bg-gray-200'}
          text="Mặc định"
        />
        <Button
          padding={'py-[5px] px-[10px]'}
          bgcolor={'bg-gray-200'}
          text="Mới nhất"
        />
        <Button
          padding={'py-[5px] px-[10px]'}
          bgcolor={'bg-gray-200'}
          text="Có video"
        />
      </div>
      <div className="px-5 mx-[-20px] py-4">
        {loading ? (
          <Loading loading={loading} />
        ) : posts_limit && posts_limit?.length > 0 ? (
          posts_limit.map((item) => (
            <ListPostItem
              key={item.id}
              attributes={item?.attributes}
              description={JSON.parse(item?.description)}
              users={item?.users}
              images={JSON.parse(item?.images?.image)}
              title={item?.title}
              label={item?.label}
              address={item?.address}
              star={item?.star}
              id={item?.id}
            />
          ))
        ) : (
          <div className="w-full items-center justify-center">
            <p className="text-center">Không có dữ liệu</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPost;
