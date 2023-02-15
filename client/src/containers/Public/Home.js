import React from "react";
import { Header, Navigation, WhyUs, Support } from "./";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full flex flex-col items-center h-full border">
      <Header />
      <Navigation />
      <div className="mt-[7px] w-1100 flex flex-col items-center ">
        <Outlet />
      </div>
      <WhyUs />
      <Support />
    </div>
  );
};

export default Home;
