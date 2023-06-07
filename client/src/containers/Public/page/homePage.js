/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { ListPost, Pagination } from '../index'
import * as actions from '../../../store/action'
import { useSearchParams } from 'react-router-dom'
import { ItemSidebar } from '../../../components'
import { useSelector, useDispatch } from 'react-redux'

const HomePage = () => {
  const { categories, prices } = useSelector((state) => state.app)
  const [params] = useSearchParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getPrices())
  }, [dispatch])
  console.log(prices)
  return (
    <div className="w-[85%] justify-center flex gap-4 mb-5">
      <div className="w-[100%] lg:w-[70%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
        <ListPost page={params.get('page')} />
        <Pagination page={params.get('page')} />
      </div>

      <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
        <ItemSidebar header={'Danh mục cho thuê'} content={categories} />
        <ItemSidebar header={'Xem theo giá'} content={prices} isDouble={true} />
        <ItemSidebar header={'Xem theo diện tích'} />
        <div className=" border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
          Silde Bar 2
        </div>
      </div>
    </div>
  )
}

export default HomePage
