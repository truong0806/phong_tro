import React from 'react';
import { path } from '../../ultils/constains';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header, SideBar } from './components';
import menuManager from '../../ultils/menuManager';
import Breadcrumb from './components/Breadcrumb';

const System = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!isLoggedIn || isLoggedIn === 'false')
    return <Navigate to={`/auth/${path.LOGIN}`} replace={true} />;
  const currentPage = menuManager.filter((item) => {
    return item.path === location.pathname;
  });
  return (
    <div className="w-full min-h-screen flex-col items-center h-screen">
      <Header />
      <div className="flex w-full h-full flex-auto">
        <SideBar />
        <div className="flex-auto shadow-md h-full pt-[60px] ml-[200px]  bg-white ">
          <Breadcrumb
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
