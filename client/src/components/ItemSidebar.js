import React, { memo } from 'react'

import icons from '../../src/ultils/icons'
const { BsChevronRight } = icons
const ItemSidebar = ({ header }) => {
  return (
    <div className=" border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
      <section>
        <div className="mb-4 w-full ">
          <span className=" text-[18.2px] font-bold">{header}</span>
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
  )
}

export default memo(ItemSidebar)
