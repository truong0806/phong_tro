/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react'

import icons from '../../src/ultils/icons'
import { useSelector } from 'react-redux'
const { BsChevronRight } = icons
const ItemSidebar = ({ header, content }) => {
  const { posts } = useSelector((state) => state.post)
  console.log(content)
  
  return (
    <div className=" border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
      <section>
        <div className="mb-4 w-full ">
          <span className=" text-[18.2px] font-bold">{header}</span>
        </div>
        <ul>
          {content?.length > 0 &&
            content.map((item) => {
              return (
                <li className="flex items-center justify-between border-dashed border-b-[1px]">
                  <h2 className="">
                    <a
                      href="#"
                      className=" flex items-center justify-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                    >
                      <BsChevronRight size={14} style={{ opacity: 0.3 }} />
                      {item.value}
                    </a>
                  </h2>
                  <span className="text-xs text-[#aaa]">(49.212)</span>
                </li>
              )
            })}
        </ul>
      </section>
    </div>
  )
}

export default memo(ItemSidebar)
