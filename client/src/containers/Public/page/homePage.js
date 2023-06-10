/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ListPost, Pagination, SlideBar } from '../index';
import * as actions from '../../../store/action';
import { getPosts } from '../../../store/action/post';

function HomePage() {
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getCategories());
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="w-[85%] justify-center flex gap-4 mb-5">
      <div className="w-[100%] lg:w-[65%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
        <ListPost page={params.get('page')} />
        <Pagination page={params.get('page')} />
      </div>
      <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
        <SlideBar />
      </div>
    </div>
  );
}

export default HomePage;
