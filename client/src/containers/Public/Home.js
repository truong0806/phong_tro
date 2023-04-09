import React from 'react'
import { Header, Navigation, WhyUs, Support } from '.'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />
      <Navigation />
      <div className="w-[84%] flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      <WhyUs />
      <Support />
    </div>
  )
}

export default Home
