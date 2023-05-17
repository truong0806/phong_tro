import React, { memo } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

const ListNumber = ({ number, currentPage }) => {
  const navigate = useNavigate()
  const active = `px-[18px] py-[15px] mr-[3px] w-[48px] h-[48px] mb-[3px] bg-[#e13427] text-white hover:bg-[#ddd]  rounded-md cursor-pointer`
  const notActive = `px-[18px] py-[15px] mr-[3px] w-[48px] h-[48px] mb-[3px] bg-white hover:bg-[#ddd]  rounded-md cursor-pointer`
  const handLeChangePage = () => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        page: number,
      }).toString(),
    })
  }
  return (
    <div
      className={+number === +currentPage ? active : notActive}
      onClick={handLeChangePage}
    >
      {number}
    </div>
  )
}

export default memo(ListNumber)
