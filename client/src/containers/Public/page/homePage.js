/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { ListPost, Pagination } from '../index'
import icons from '../../../ultils/icons'
import { useSearchParams } from 'react-router-dom'
const { BsChevronRight } = icons
const HomePage = () => {
  const [params] = useSearchParams()
  return (
    <div className="w-[85%] justify-center flex gap-4 mb-5">
      <div className="w-[100%] lg:w-[70%] md:w-full bg-white border border-[#dedede]  shadow-md rounded-md border-solid  ">
        <ListPost page={params.get('page')} />
        <Pagination page={params.get('page')} />
      </div>
      
      <div className="flex-col hidden sm:hidden xs:hidden md:hidden lg:block lg:w-[30%] ">
        <div className=" border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
          <section>
            <div className="mb-4 w-full ">
              <span className=" text-[18.2px] font-bold">
                Danh mục cho thuê
              </span>
            </div>
            <ul>
              <li className="flex items-center justify-between border-dashed border-b-[1px]">
                <h2 className="">
                  <a
                    href="#"
                    className=" flex items-center justify-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                  >
                    <BsChevronRight size={14} style={{ opacity: 0.3 }} />
                    Cho thuê phòng trọ
                  </a>
                </h2>
                <span className="text-xs text-[#aaa]">(49.212)</span>
              </li>
              <li className="flex items-center justify-between py-[5px] border-dashed border-b-[1px]">
                <h2>
                  <a
                    href="#"
                    className="flex items-center justify-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm "
                  >
                    <BsChevronRight size={14} style={{ opacity: 0.3 }} />
                    Cho thuê nhà nguyên căn
                  </a>
                </h2>
                <span className="text-xs text-[#aaa]">(49.212)</span>
              </li>
            </ul>
          </section>
        </div>
        <div className=" border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
          Silde Bar 2
        </div>
      </div>
    </div>
  )
}

export default HomePage
