import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuSider from '../ultils/menuSider';
import { depositMethod } from '../ultils/constains';
import icons from '../ultils/icons';

const { MdOutlineChevronRight } = icons;
const Breadcrumb = () => {
  const location = useLocation();
  const dataArr = [...menuSider, ...depositMethod];
  const currentFatherPage = dataArr.filter((item) => {
    return `${item.path}` === location.pathname.split('/')[2];
  });
  const currentPage = dataArr.filter((item) => {
    return (
      `${item.path}` ===
      location.pathname.split('/')[location.pathname.split('/').length - 1]
    );
  });
  const fatherPage = 'Quản lý ';
  useEffect(() => {
    document.title = currentPage[0].text;
  });
  return (
    <div className="mb-[1rem]">
      <nav
        className="sm:flex sm:pl-5 pr-5 py-3 text-gray-700 border border-gray-200 rounded-lg sm:bg-[#e9ecef] "
        aria-label="Breadcrumb"
      >
        <ul className="flex flex-row items-center sm:justify-center space-x-1 md:space-x-3">
          <li className="justify-center  items-center flex ">
            <Link className="flex flex-row items-center text-sm font-medium text-[#007bff] hover:text-[#0056b3] hover:underline sm:no-underline sm:text-gray-700 sm:hover:text-blue-600 ">
              Trang chủ
            </Link>
          </li>
          <div className="mb-1">
            <MdOutlineChevronRight size={20} />
          </div>
          <li>
            <div className="flex justify-center items-center">
              <a
                href="/"
                className=" text-sm font-medium text-[#007bff] hover:text-[#0056b3] hover:underline sm:no-underline sm:text-gray-700 sm:hover:text-blue-600  md:ml-2 "
              >
                {fatherPage}
              </a>
            </div>
          </li>
          {currentFatherPage &&
            currentFatherPage[0].text !== currentPage[0].text && (
              <>
                <div className="mb-1">
                  <MdOutlineChevronRight size={20} />
                </div>
                <li aria-current="page">
                  <div className="flex justify-center items-center">
                    <Link
                      to={currentFatherPage[0].path}
                      className="ml-1 text-sm font-medium md:ml-2 hover:text-blue-600 "
                    >
                      {currentFatherPage[0].text}
                    </Link>
                  </div>
                </li>
              </>
            )}
          <div className="mb-1">
            <MdOutlineChevronRight size={20} />
          </div>
          <li aria-current="page">
            <div className="flex justify-center items-center">
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                {currentPage[0].text}
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
