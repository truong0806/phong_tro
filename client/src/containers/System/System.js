import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header, PopupSupport, SideBar } from './components';
import menuSider from '../../ultils/menuSider';
import Breadcrumb from './components/Breadcrumb';
import { ToastContainer } from 'react-toastify';
import AdminMenuMobile from './components/AdminMenuMobile';
import { Loading, User2 } from '../../components';
import * as actions from '../../store/action';

const System = () => {
  const dispatch = useDispatch();
  const [menuDropDrow, setMenuDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      // dispatch(actions.getUser());
      dispatch(actions.getHistoryRecharge());
      setLoading(true);
    }, 500);
  }, []);

  return (
    <div className="w-full">
      <PopupSupport />
      <Header setMenuDropDown={setMenuDropDown} />
      {loading ? (
        <>
          <div className="md:grid md:grid-cols-6">
            <div className="md:col-span-1 h-full">
              <SideBar />
            </div>
            <div className="md:col-span-5 w-full h-full pt-[60px] pb-[56px] md:px-[42px] px-[15px] bg-white ">
              <User2 />
              <ToastContainer />
              <Breadcrumb />
              <AdminMenuMobile
                setLoading={setLoading}
                data={menuSider}
                menuDropDrow={menuDropDrow}
                setMenuDropDown={setMenuDropDown}
              />
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <div className="w-screen h-screen flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default System;
