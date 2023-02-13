import React from "react";
import Header from "./Header";
import WhyUs from "./WhyUs";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-1100 h-full mx-[72px] ">
      <Header />
      <div className="w-full flex flex-col items-center ">
        <Outlet />
      </div>
      <WhyUs />
    </div>
  );
};

export default Home;
