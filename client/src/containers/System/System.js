import React from 'react';
import { path } from '../../ultils/constains';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Header, SideBar } from './components';

const System = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn)
    return <Navigate to={`/auth/${path.LOGIN}`} replace={true} />;
  return (
    <div className="w-full min-h-screen flex-col items-center h-screen">
      <Header />
      <div className="flex w-full h-full flex-auto">
        <SideBar />
        <div className="flex-auto shadow-md h-full pt-[60px] ml-[200px]  bg-white ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default System;
