import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation, WhyUs, Support, ScrollTop } from './index';
import { PropagateLoader } from 'react-spinners';

// import {  useSelector } from 'react-redux'
function Auth() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const handlLoad = () => {
    setLoading(false);
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timeout);
  };
  return (
    <>
      {loading ? (
        <div className="w-full flex flex-col items-center ">
          <Header handlLoad={handlLoad} />
          <Navigation />
          <ScrollTop />
          <div className="w-[84%] flex flex-col  mt-3">
            <Outlet />
          </div>
          <WhyUs />
          <Support />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <PropagateLoader color="#1266dd" size={12} />
        </div>
      )}
    </>
  );
}

export default Auth;
