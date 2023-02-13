import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-1100 h-full mx-[72px] border border-red-500">
      <Header />
      <div className="w-full flex flex-col items-center ">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
