import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header, Navigation, WhyUs, Support, Search, ScrollTop,
} from './index';
import { Province } from './components/Province';
import { Loading } from '../../components';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="w-full flex-col items-center ">
          <Header />
          <Navigation />
          <div className="w-full flex flex-col justify-center items-center my-[10px] mx-auto">
            <Search />
            <Province />
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
