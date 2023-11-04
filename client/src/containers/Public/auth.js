import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navigation, WhyUs, Support, ScrollTop } from './index';
import { PropagateLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/action';
import { ToastContainer } from 'react-toastify';


// import {  useSelector } from 'react-redux'
function Auth() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { categories } = useSelector((state) => state.app);
  useEffect(() => {
    setLoading(false);
    const timeout = setTimeout(() => {
      dispatch(actions.getCategories());
      setLoading(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="w-full flex flex-col items-center ">
          <Header setLoading={setLoading} />
          <Navigation categories={categories} />
          <ScrollTop />
          <ToastContainer />
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
