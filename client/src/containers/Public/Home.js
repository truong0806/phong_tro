import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation, WhyUs, Support, Search, ScrollTop } from './index';
import { Loading } from '../../components';
import * as actions from '../../store/action';
import { useDispatch } from 'react-redux';

function Home() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.getPrices());
      dispatch(actions.getAreas());
      setLoading(false);
    }, 1000);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="w-full flex-col items-center  justify-center">
          <Header />
          <Navigation />
          <div className="w-5/6 flex flex-col justify-center items-center my-[10px] mx-auto">
            <Search />
            <Outlet />
            <WhyUs />
            <Support />
            <ScrollTop />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
