import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { apiCategories } from '../../service/category'
var slug = require('slug')
const notActive =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary1'
const active =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary2'

const Navigation = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiCategories()
      if (response?.data.err === 0) {
        setCategories(response.data.response)
      }
    }
    fetchCategories()
  }, [])
  return (
    <div className="w-screen  flex items-center justify-center h-[40px] bg-secondary1 text-white">
      <div className="w-1100 flex h-full items-center text-[13.3px] font-bold  cursor-pointer ">
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
                  to={slug(item.value)}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Navigation
