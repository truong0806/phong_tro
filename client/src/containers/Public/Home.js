import React, { useState, useEffect } from 'react'
import { Header, Navigation, WhyUs, Support, Search, ScrollTop } from './index'
import { Outlet, useLocation } from 'react-router-dom'
import { Province } from '../Public/components/Province'
import { Loading } from '../../components'

//import {  useSelector } from 'react-redux'
const Home = () => {
  //const { isLoggedIn } = useSelector(state => state.auth)
  ///const location = useLocation()
  //const [isRegister, setIsRegister] = useState(location.state?.flag)\
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="md:w-full flex flex-col items-center ">
          <Header />
          <Navigation />
          <Search />
          <Province />
          <div className="w-[84%] flex flex-col  mt-3">
            <Outlet />
          </div>
          <WhyUs />
          <Support />
          <ScrollTop />
        </div>
      )}
    </>
  )
}

export default Home
