import React, { useEffect } from 'react';
import { path } from '../../ultils/constains';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header, SideBar } from './components';
import menuSider from '../../ultils/menuSider';
import Breadcrumb from './components/Breadcrumb';
import { ToastContainer } from 'react-toastify';
const System = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  const currentPage = menuSider.filter((item) => {
    return `/quan-ly/${item.path}` === location.pathname;
  });

  useEffect(() => {
    if (!isLoggedIn || isLoggedIn === 'false')
      return <Navigate to={`/auth/${path.LOGIN}`} replace={true} />;
  }, [isLoggedIn]);
  return (
    <div className="w-full  flex-col items-center">
      <Header />
      <div className="flex w-full h-full flex-auto">
        <SideBar />
        <div className="flex-auto w-5/6  h-full pt-[60px] ml-[200px] px-[42px] bg-white ">
          <ToastContainer/>
          <Breadcrumb
            location={location.pathname}
            fatherPath={'quan-ly'}
            currentPage={currentPage[0].text}
            fatherPage={'Quản lý'}
          />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default System;
