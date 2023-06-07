import React, { memo } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

const ListNumber = ({ text, number, currentPage, setCurrentPage, type }) => {
  //console.log('num: ', number)
  const navigate = useNavigate()
  const active = `px-[18px] py-[15px] mr-[3px] w-[48px] h-[48px] mb-[3px] flex justify-center items-center bg-[#e13427] text-white  rounded-md cursor-pointer`
  const notActive = `px-[18px] py-[15px] mr-[3px] w-[48px] h-[48px] mb-[3px] flex justify-center items-center bg-white hover:bg-[#ddd]  rounded-md cursor-pointer`
  const handLeChangePage = () => {
    setCurrentPage(+number)
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
      {text || number}
    </div>
  )
}

export default memo(ListNumber)
