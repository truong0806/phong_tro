import React, { useState, useEffect } from 'react'
import { Header, Navigation, WhyUs, Support, ScrollTop } from './index'
import { Outlet } from 'react-router-dom'
import { Loading } from '../../components'

//import {  useSelector } from 'react-redux'
const Auth = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="w-full flex flex-col items-center ">
          <Header />
          <Navigation />
          <ScrollTop />
          <div className="w-[84%] flex flex-col  mt-3">
            <Outlet />
          </div>
          <WhyUs />
          <Support />
        </div>
      )}
    </>
  )
}

export default Auth
