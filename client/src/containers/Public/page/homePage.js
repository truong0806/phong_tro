import React, { useEffect, useRef, useState } from 'react';
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
  const linkRef = useRef();

  useState(() => {
    setLoading(false);
  });

  useEffect(() => {
    setLoading(true);
    const category = categories?.find((item) => {
      return `/${slug(item.value)}` === location.pathname;
    });
    setCategoryCurrent(category);
    if (category) {
      setcategoryCode(category.code);
    }
    setLoading(false);

    // linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [location, categories]);

  return (
    <div>
      <Province categoryCurrent={categoryCurrent} />
      <div className="w-full justify-center  flex flex-row gap-2 mb-3">
        <div className="w-[100%] lg:w-[65%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
          <ListPost loading={loading} categoryCode={categoryCode} />
          <Pagination />
        </div>
        <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
          <SlideBar setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
