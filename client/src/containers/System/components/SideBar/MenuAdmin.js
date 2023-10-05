import React from 'react';
import menuSider from '../../../../ultils/menuSider';
import { NavLink } from 'react-router-dom';
import * as actions from '../../../../store/action';
import { useDispatch } from 'react-redux';
const notActive =
  'hover:bg-[#f1f1f1] w-full  py-[10px] items-center text-[1rem] flex flex-row  ';
const active =
  'hover:bg-[#f1f1f1] w-full font-bold py-[10px] items-center text-[1rem] flex flex-row  ';

const MenuAdmin = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="mx-[-20px] mb-[15px] px-[10px] ">
        {menuSider?.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.id}
              className={({ isActive }) => (isActive ? active : notActive)}
            >
              <span>{item.icon}</span>
              <span className="ml-[10px]">{item.text}</span>
            </NavLink>
          );
        })}
        <li className="hover:bg-[#f1f1f1]">
          <div
            className="py-[10px] items-center text-[1rem] flex flex-row  cursor-pointer hover:bg-[#f1f1f1]"
            onClick={() => {
              dispatch(actions.logout());
            }}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-log-out"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </span>
            <span className="ml-[10px]">Thoát</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MenuAdmin;
