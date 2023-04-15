import React, { useState, useEffect } from 'react'
import { Header, Navigation, WhyUs, Support, Search } from './index'
import { Outlet, useLocation } from 'react-router-dom'
import { Province } from '../Public/components/Province'
//import {  useSelector } from 'react-redux'
const Home = () => {
  //const { isLoggedIn } = useSelector(state => state.auth)
  ///const location = useLocation()
  //const [isRegister, setIsRegister] = useState(location.state?.flag)\

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <Navigation />
      <Search />
      <Province />
      <div className="w-[84%] flex flex-col  mt-3">
        <Outlet />
      </div>
      <WhyUs />
      <Support />
    </div>
  )
}

export default Home
