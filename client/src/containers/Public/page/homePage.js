/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { ListPost, Pagination } from '../index'

import { useSearchParams } from 'react-router-dom'
import { ItemSidebar } from '../../../components'

const HomePage = () => {
  const [params] = useSearchParams()
  return (
    <div className="w-[85%] justify-center flex gap-4 mb-5">
      <div className="w-[100%] lg:w-[70%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
        <ListPost page={params.get('page')} />
        <Pagination page={params.get('page')} />
      </div>

      <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
        <ItemSidebar header={'Danh mục cho thuê'} />
        <ItemSidebar header={'Xem theo giá'} />
        <ItemSidebar header={'Xem theo diện tích'} />
        <div className=" border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
          Silde Bar 2
        </div>
      </div>
    </div>
  )
}

export default HomePage
