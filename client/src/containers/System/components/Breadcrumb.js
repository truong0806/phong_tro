import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import menuSider from '../../../ultils/menuSider';

const Breadcrumb = ({ currentPage, fatherPage, fatherPath, location }) => {
  const currentFatherPage = menuSider.filter((item) => {
    return `${item.path}` === location.split('/')[2];
  });
  useEffect(() => {
    document.title = currentPage;
  });
  return (
    <div className="mb-[1rem]">
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 "
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-row items-center justify-center space-x-1 md:space-x-3">
          <li className="  items-center flex ">
            <Link className="flex flex-row items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
              <svg
                className="w-3 h-3 mr-2.5 mb-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Trang chủ
            </Link>
          </li>
          <svg
            className="w-3 h-3 mx-1 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <li>
            <div className="flex items-center">
              <a
                href="/"
                className=" text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 "
              >
                {fatherPage}
              </a>
            </div>
          </li>
          {currentFatherPage && currentFatherPage[0].text !== currentPage && (
            <>
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <li aria-current="page">
                <div className="flex items-center">
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
          <svg
            className="w-3 h-3 mx-1 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                {currentPage}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
