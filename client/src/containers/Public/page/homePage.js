import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ListPost, Pagination, Province, SlideBar } from '../index';
import slug from 'slug';

function HomePage() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [categoryCurrent, setCategoryCurrent] = useState({});
  const [categoryCode, setcategoryCode] = useState('none');
  const { categories } = useSelector((state) => state.app);
  const { count, posts_limit } = useSelector((state) => state.post);

  useEffect(() => {
    setLoading(false);
    const category = categories?.find((item) => {
      return `/${slug(item.value)}` === location?.pathname;
    });
    setCategoryCurrent(category);
    if (category) {
      setcategoryCode(category.code);
    }
    setLoading(true);

    // linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [location, categories]);

  return (
    <div className="">
      <Province categoryCurrent={categoryCurrent} />
      <div className="w-full justify-center flex-col flex lg:flex-row sm:gap-2 mb-3">
        <div className="w-[100%] lg:w-[65%] p-5   bg-white border border-[#dedede] shadow-md rounded-md border-solid  ">
          <ListPost loading={loading} categoryCode={categoryCode} />
          {/* <Pagination /> */}
          <Pagination count={count} posts_limit={posts_limit} />
        </div>
        <div className="hidden sm:block  w-[25%]">
          <SlideBar setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
