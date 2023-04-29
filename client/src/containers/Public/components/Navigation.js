import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { apiCategories } from '../../../service/category'
import { Loading } from '../../../components'

var slug = require('slug')
const notActive =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary1'
const active =
  'hover:bg-secondary2 px-3 flex h-full  items-center justify-center bg-secondary2'

const nav = [
  {
    code: 'CTPT',
    value: 'Cho thuê phòng trọ',
  },
  {
    code: 'NCT',
    value: 'Nhà cho thuê',
  },
  {
    code: 'CTCH',
    value: 'Cho thuế căn hộ',
  },
  {
    code: 'CTMB',
    value: 'Cho thuê mặt bằng',
  },
]
const Navigation = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [isPinned, setIsPinned] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsPinned(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiCategories()
      if (response?.data.err === 0) {
        setCategories(response.data.response)
      } else {
        setCategories(nav)
      }
      setLoading(false)
    }
    fetchCategories()
  }, [])

  const navClass = isPinned
    ? 'sticky top-0 z-10 bg-secondary1 text-white'
    : 'bg-secondary1 text-white'
  return (
    <div
      className={`w-full lg:flex lg:justify-center items-center h-12 hidden ${navClass}`}
    >
      <div className="lg:w-[1100px] lg:justify-start flex h-full items-center text-[13.3px] font-bold  cursor-pointer ">
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
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.value}
                </NavLink>
              </div>
            )
          })}
        {loading && <Loading />}
      </div>
    </div>
  )
}

export default Navigation
