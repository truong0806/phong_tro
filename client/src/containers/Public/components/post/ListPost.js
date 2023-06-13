import React from 'react';
import { Button } from '../../../../components/index';
import { ListPostItem } from '../../index';
import getDate from '../../../../ultils/getDate';
import CircularProgress from '@mui/material/CircularProgress';

const ListPost = ({ linkRef, posts_limit, loading }) => {
  return (
    <div ref={linkRef} className="m-[20px] ">
      <section className=" flex justify-between">
        <div className="">
          <span className="text-[18.2px] font-bold">Danh sách tin đăng</span>
        </div>
        <span className="text-[14px] ">
          Cập nhật: <time title="Thứ 7, 12:25 15/04/2023">{getDate()}</time>
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
          <div className="flex my-10 w-full items-center justify-center">
            <CircularProgress />
          </div>
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
