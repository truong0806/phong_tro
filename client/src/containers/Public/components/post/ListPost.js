import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListPostItem } from '../../index';
import getDate from '../../../../ultils/getDate';
import { PropagateLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/action';
import { FilterListPostBtn } from '../../index';

const ListPost = ({ categoryCode }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { posts_limit } = useSelector((state) => state.post);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      let params = [];
      for (let entry of searchParams.entries()) {
        params.push(entry);
      }
      let searchParamsObject = {};
      params?.forEach((i) => {
        if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
          searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
        } else {
          searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
        }
      });
      if (categoryCode && categoryCode !== 'none')
        searchParamsObject.categoryCode = categoryCode;
        console.log("🚀 ~ file: ListPost.js:33 ~ setTimeout ~ searchParamsObject:", searchParamsObject)
      dispatch(actions.GetPostsLimit(searchParamsObject));
      setLoading(true);
    });
  }, [searchParams, categoryCode, dispatch]);

  return (
    <div className="m-[20px] ">
      <section className=" flex justify-between">
        <div className="">
          <span className="text-[18.2px] font-bold">Danh sách tin đăng</span>
        </div>
        <span className="text-[14px] ">
          Cập nhật: <time >{getDate()}</time>
        </span>
      </section>
      <div className="flex items-center text-[.95rem] gap-2 my-[10px] ">
        <span className="">Sắp xếp: </span>
        <FilterListPostBtn />
      </div>
      <div className="px-5 mx-[-20px] py-4 ">
        {loading ? (
          posts_limit.length > 0 ? (
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
            <p>Không có dữ liệu</p>
          )
        ) : (
          <div className="flex my-10 w-full items-center justify-center">
            <PropagateLoader color="#1266dd" size={12} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListPost;
