import React from 'react';
import { Link } from 'react-router-dom';
import { path } from '../../../ultils/constains';

const Header = () => {
  return (
    <div className="w-full fixed left-0 z-50">
      <nav className="bg-secondary1 h-[45px] w-full shadow-md flex  first-line:flex-row text-[#fff]">
        <Link
          className=" text-[1rem] flex font-bold px-[15px] py-[0.75rem]  w-[200px] justify-center items-center"
          to={path.HOME}
          replace={true}
        >
          Phongtro123.com
        </Link>
        <div className="py-[0.75rem] flex">
          <div className="">
            <ul className="text-[1rem] flex flex-row gap-6 pl-1">
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
