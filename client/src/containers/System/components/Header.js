
import React from 'react';
import { Link } from 'react-router-dom';
import { path } from '../../../ultils/constains';

const Header = () => {
  return (
    <div className="w-full fixed left-0 top-0 right-0 z-50">
      <nav className=" sm:bg-secondary1 bg-[#fff] sm:h-[45px] h-[50px] w-full shadow-md flex   first-line:flex-row text-[#fff]">
        <Link
          className="mt-[5px] sm:bg-none logo-header-admin bg-logo bg-contain bg-center bg-no-repeat h-[35px] text-[1rem] flex font-bold px-[15px] py-[0.75rem]  w-[200px] justify-center items-center"
          to={path.HOME}
          replace={true}
        >
          <span className="hidden sm:block">phongtro123.com</span>
        </Link>
        <div>
          <img src="/src/assets/logo_70.png"></img>
        </div>
        <div className="py-[0.75rem]  hidden sm:flex">
          <div className="">
            <ul className="text-[1rem] flex flex-row whitespace-nowrap gap-6 pl-1">
              <li className="">
                <Link className="hover:text-[#f90]" to={path.HOME}>
                  Trang chủ
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:text-[#f90]"
                  to={`/${path.CHO_THUE_PHONG_TRO}`}
                >
                  Phòng trọ
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:text-[#f90]"
                  to={`/${path.NHA_CHO_THUE}`}
                >
                  Nhà cho thuê
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:text-[#f90]"
                  to={`/${path.CHO_THUE_CAN_HO}`}
                >
                  Căn hộ
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:text-[#f90]"
                  to={`/${path.CHO_THUE_MAT_BANG}`}
                >
                  Mặt bằng
                </Link>
              </li>
              <li className="">
                <Link
                  className="hover:text-[#f90]"
                  to={`/${path.TIM_NGUOI_O_GHEP}`}
                >
                  Ở ghép
                </Link>
              </li>
              <li className="hover:text-[#f90]">
                <Link href="https://phongtro123.com/bang-gia-dich-vu">
                  Bảng giá dịch vụ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
