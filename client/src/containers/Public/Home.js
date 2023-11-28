import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation, WhyUs, Support, Search, ScrollTop } from './index';
import * as actions from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';
import { path } from '../../ultils/constains';

function Home() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState(false);
  const location = useLocation();
  console.log('🚀 ~ file: Home.js:16 ~ location:', location.pathname);

  useEffect(() => {
    setIsLoading(false);
    // dispatch(actions.getCategories());
    setTimeout(() => {
      dispatch(actions.getPrices());
      dispatch(actions.getAreas());
      dispatch(actions.getProvince());
      setIsLoading(true);
    }, 1000);

    //linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [dispatch, isLoggedIn, location.pathname]);
  return (
    <>
      {isLoading ? (
        <div className="w-full flex-col items-left  ">
          <Header setLoading={setIsLoading} loading={isLoading} />
          <Navigation isAdmin={false} isDetail={detail} />
          <div className="w-4/7 flex flex-col justify-center items-center my-[10px] mx-auto">
            {location.pathname === `/` && <Search />}
            <Outlet />
            <WhyUs />
            <Support />
            {location.pathname !== `/${path.BANG_GIA_DICH_VU}` && <ScrollTop />}
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
