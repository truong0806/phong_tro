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
      dispatch(actions.GetPostsLimit(searchParamsObject));
      setLoading(false);
    }, 1000);

    linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [searchParams]);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, [dispatch]);
  return (
    <div className="w-[85%] justify-center flex gap-4 mb-5">
      <div className="w-[100%] lg:w-[65%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
        <ListPost
          loading={loading}
          linkRef={linkRef}
          posts_limit={posts_limit}
        />
        <Pagination page={params.get('page')} />
      </div>
      <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
        <SlideBar setLoading={setLoading} />
      </div>
    </div>
  );
}

export default HomePage;
