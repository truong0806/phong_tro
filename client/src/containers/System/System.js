import React, { useEffect, useState } from 'react';
import { path } from '../../ultils/constains';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Header, PopupSupport, SideBar } from './components';
import menuSider from '../../ultils/menuSider';
import Breadcrumb from './components/Breadcrumb';
import { ToastContainer } from 'react-toastify';
import AdminMenuMobile from './components/AdminMenuMobile';
import * as actions from '../../store/action';
import { Loading } from '../../components';

const System = () => {
  const dispatch = useDispatch();
  const [menuDropDrow, setMenuDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      dispatch(actions.getUser());
      setLoading(true);
    }, 500);
  }, []);

  console.log('🚀 ~ file: System.js:7 ~ menuSider:', menuSider);
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
              <div className="md:hidden p-4 flex text-[1rem] border-[1px] text-[#856404] border-[#ffeeba] bg-[#fff9e6] py-[10px] pt-[10px] pb-[7px] mb-[10px] rounded-[5px] ">
                <div classname="">
                  <p>
                    Xin chào <strong>{userData.name}</strong>.<br></br>Mã tài
                    khoản: <strong>{userData.id}</strong>
                  </p>
                  <p>
                    Số dư TK của bạn là: <strong>0</strong>
                  </p>
                </div>
              </div>
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
