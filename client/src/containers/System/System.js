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
    <div className="w-full min-h-screen flex-col items-center h-full">
      <Header />
      <SideBar />
      <div className="flex pt-[60px] ml-[200px] h-[1500px] bg-white min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default System;
