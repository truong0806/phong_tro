import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation, WhyUs, Support, Search, ScrollTop } from './index';
import * as actions from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { apiUser } from '../../service/user';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const linkRef = useRef();
  const { categories } = useSelector((state) => state.app);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    // const fetchUser = async () => {
    //   const response = await apiUser();
    //   console.log(
    //     '🚀 ~ file: Home.js:19 ~ fetchUser ~ response:',
    //     response.data.response
    //   );
    // };
    
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    setIsLoading(false);
    dispatch(actions.getCategories());
    setTimeout(() => {
      dispatch(actions.getPrices());
      dispatch(actions.getAreas());
      dispatch(actions.getProvince());
      setIsLoading(true);
    }, 1000);
    // linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <div className="w-full flex-col items-left  ">
          <Header linkRef={linkRef} setLoading={setIsLoading} />
          <Navigation categories={categories} />
          <div className="w-5/6 flex flex-col justify-center items-center my-[10px] mx-auto">
            <Search />
            <Outlet />
            <WhyUs />
            <Support />
            <ScrollTop />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <PropagateLoader color="#1266dd" size={12} />
        </div>
      )}
    </>
  );
}

export default Home;
