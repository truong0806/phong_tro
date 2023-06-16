/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ListPost, Pagination, SlideBar } from '../index';
import * as actions from '../../../store/action';

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const { posts_limit } = useSelector((state) => state.post);
  const [searchParams] = useSearchParams();
  const linkRef = useRef();

  useState(() => {
    setLoading(false);
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let params = [];
      for (let entry of searchParams.entries()) {
        params.push(entry);
      }
      let searchParamsObject = {};
      params?.map((i) => {
        searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] };
      });
      setLoading(false);
      dispatch(actions.GetPostsLimit(searchParamsObject));
    }, 1000);
    linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [searchParams, dispatch]);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, [dispatch]);

  return (
    <div className="w-full justify-center flex gap-2 mb-3">
      <div className="w-4/5 h-full  md:w-full bg-[#f5f5f5] lg:w-[70%]">
        <div className="h-full bg-white  top-0 border border-[#dedede]  shadow-md rounded-md border-solid  ">
          <ListPost
            loading={loading}
            linkRef={linkRef}
            posts_limit={posts_limit}
          />
        </div>
        <Pagination page={params.get('page')} />
      </div>
      <div className="w-1/5 flex-col hidde  sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
        <SlideBar loading={loading} setLoading={setLoading} />
      </div>
    </div>
  );
}

export default HomePage;
