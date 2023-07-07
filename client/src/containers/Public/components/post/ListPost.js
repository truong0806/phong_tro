import React, { useEffect, useState } from 'react';
import { Button } from '../../../../components/index';
import { useSearchParams } from 'react-router-dom';
import { ListPostItem } from '../../index';
import getDate from '../../../../ultils/getDate';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/action';
import { FilterListPostBtn } from '../../index';

const ListPost = ({ linkRef, categoryCode, loading }) => {
  const dispatch = useDispatch();
  const { posts_limit } = useSelector((state) => state.post);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchParamsObject = {};
    params?.map((i) => {
      return (searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] });
    });
    if (categoryCode && categoryCode !== 'none') {
      searchParamsObject.categoryCode = categoryCode;
      dispatch(actions.GetPostsLimit(searchParamsObject));
    } else {
      dispatch(actions.GetPostsLimit(searchParamsObject));
    }
    // dispatch(actions.GetPostsLimit(searchParamsObject));
  }, [searchParams, categoryCode, dispatch]);
  return (
    <div className="m-[20px] ">
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
        <FilterListPostBtn />
      </div>
      <div className="px-5 mx-[-20px] py-4 ">
        {loading ? (
          <div className="flex my-10 w-full items-center justify-center">
            <CircularProgress />
          </div>
        ) : posts_limit?.length > 0 ? (
          posts_limit?.map((item) => {
            return (
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
            );
          })
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
