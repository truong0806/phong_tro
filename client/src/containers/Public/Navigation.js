import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = [
  { name: 'Trang chủ', path: 'home' },
  { name: 'Cho thuế phòng trọ', path: 'cho-thue-phong-tro' },
  { name: 'Nhà cho thuê', path: 'nha-cho-thue' },
  { name: 'Cho thuế căn hộ', path: 'cho-thue-can-ho' },
  { name: 'Cho thuê mặt bằng', path: 'cho-thue-mat-bang' },
  { name: 'Tìm người ở ghép', path: 'tim-nguoi-o-ghep' },
  { name: 'Blog', path: 'blog' },
  { name: 'Hướng dẫn', path: 'huong-dan' },
  { name: 'Nạp tiền', path: 'nap-tien' },
  { name: 'Bảng giá', path: 'bang-gia' },
]
const notActive =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary1'
const active =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary2'
const Navigation = () => {
  return (
    <div className="w-screen  flex items-center justify-center h-[40px] bg-secondary1 text-white">
      <div className="w-1100 flex h-full items-center text-[13.3px] font-bold  cursor-pointer ">
        {nav?.length > 0 &&
          nav.map((item, index) => {
            return (
              <div
                key={index}
                className="h-full flex justify-center  items-center"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.name}
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Navigation
