import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ListPost, Pagination, SlideBar } from '../index';
import slug from 'slug';

function SearchDetail() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [categoryCode, setcategoryCode] = useState('none');
  const [categoryCurrent, setCategoryCurrent] = useState({});
  const { categories, prices, areas } = useSelector((state) => state.app);

  useState(() => {
    setLoading(false);
  });

  useEffect(() => {
    setLoading(false);

    const category = categories?.find((item) => {
      return `/${slug(item.value)}` === location.pathname;
    });
    setCategoryCurrent(category);
    if (category) {
      setcategoryCode(category.code);
    }

    setLoading(true);

    // linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [location, categories, prices, areas]);

  return (
    <div>
      <header className="mb-[15px] ">
        <h1 className="text-[2rem] leading-[1.2] font-bold mb-[5px]">
          {location.state?.titleSearch || 'Kết quả tìm kiếm'}
        </h1>
        <p className="text-base text-gray-700 font-normal">{`${
          location.state?.titleSearch || ''
        } phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.`}</p>
      </header>
      <div className="w-full justify-center  flex flex-row gap-2 mb-3">
        <div className="w-[100%] lg:w-[70%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
          <ListPost />
          <Pagination />
        </div>
        <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
          <SlideBar setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
}

export default SearchDetail;
