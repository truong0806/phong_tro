import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
var slug = require('slug');
const notActive =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary1';
const active =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary2';

const Navigation = ({  categories }) => {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPinned(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);

  const navClass = isPinned
    ? 'fixed top-0 z-30 bg-secondary1 text-white'
    : 'bg-secondary1 text-white';
  return (
    <>
      <div
        className={`w-full lg:flex lg:justify-start  items-center h-12 hidden ${navClass}`}
      >
        <div className=" lg:justify-start flex h-full ml-[110px] items-center text-[13.3px] font-bold  cursor-pointer ">
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            {'Trang chủ'}
          </NavLink>
          {categories?.length > 0 &&
            categories.map((item) => {
              return (
                <div
                  key={item.code}
                  className="h-full flex justify-center  items-center"
                >
                  <NavLink
                    to={`/${slug(item.value)}`}
                    className={({ isActive }) =>
                      isActive ? active : notActive
                    }
                  >
                    {item.value}
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
