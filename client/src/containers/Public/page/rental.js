import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ListPost, Pagination, Province, SlideBar } from '../index';
import slug from 'slug';

function RentalApartment() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [categoryCode, setcategoryCode] = useState('none');
  const [categoryCurrent, setCategoryCurrent] = useState({});
  const { categories, prices, areas } = useSelector((state) => state.app);
  const { count, posts_limit } = useSelector((state) => state.post);

  useState(() => {
    setLoading(false);
  });

  useEffect(() => {
    setLoading(false);

    const category = categories?.find((item) => {
      return `/${slug(item.value)}` === location?.pathname;
    });
    setTimeout(() => {
      setCategoryCurrent(category);
      if (category) {
        setcategoryCode(category.code);
      }
      setLoading(true);
    });

    //linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [location, categories, prices, areas]);

  return (
    <div>
      <Province categoryCurrent={categoryCurrent} />
      <div className="w-full justify-center flex-col flex lg:flex-row gap-2 mb-3">
        <div className="w-[100%] lg:w-[70%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
          <ListPost
            loading={loading}
            categoryCode={categoryCode}
          />
          <Pagination count={count} posts_limit={posts_limit} />
        </div>
        <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
          <SlideBar setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
}

export default RentalApartment;
