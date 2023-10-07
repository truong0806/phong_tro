import React from 'react';
import { path } from '../../ultils/constains';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header, SideBar } from './components';
import menuSider from '../../ultils/menuSider';
import Breadcrumb from './components/Breadcrumb';
const System = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!isLoggedIn || isLoggedIn === 'false')
    return <Navigate to={`/auth/${path.LOGIN}`} replace={true} />;
  const currentPage = menuSider.filter((item) => {
    return `/quan-ly/${item.path}` === location.pathname;
  });
    console.log("🚀 ~ file: System.js:16 ~ currentPage ~ location.pathname:", location.pathname)
  console.log("🚀 ~ file: System.js:16 ~ currentPage ~ currentPage:", currentPage)
  console.log("🚀 ~ file: System.js:16 ~ currentPage ~ currentPage:", currentPage[0].text)
  return (
    <div className="w-full  flex-col items-center">
      <Header />
      <div className="flex w-full h-full flex-auto">
        <SideBar />
        <div className="flex-auto  h-full pt-[60px] ml-[200px] px-[42px] bg-white ">
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
