/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import icons from '../../src/ultils/icons'
const { BsChevronRight } = icons

const ItemSidebar = ({ header, content, isDouble }) => {
  const formatContent = () => {
    const odd = content?.filter((item, index) => index % 2 !== 0)
    const even = content?.filter((item, index) => index % 2 === 0)
    const formatContent = odd?.map((item, index) => {
      console.log('odd: ', odd)
      console.log('even: ', even)
      return {
        left: even?.find((item2, index2) => index2 === index),
        right: item,
      }
    })
    return formatContent
  }
  console.log(formatContent())
  return (
    <div className="border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
      <section>
        <div className="mb-4 w-full">
          <span className="text-[18.2px] font-bold">{header}</span>
        </div>
        <ul>
          {!isDouble &&
            content?.length > 0 &&
            content.map((item) => {
              return (
                <li
                  className="flex items-center justify-between border-dashed border-b-[1px]"
                  key={item.code}
                >
                  <h2>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                    >
                      <BsChevronRight size={14} style={{ opacity: 0.3 }} />
                      {item.value}
                    </a>
                  </h2>
                  <span className="text-xs text-[#aaa]">()</span>
                </li>
              )
            })}

          {isDouble && (
            <div className="flex flex-col gap-2">
              {content?.length > 0 &&
                formatContent(content).map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-around">
                        <li className="flex flex-1 items-center border-dashed border-b-[1px]">
                          <h2>
                            <a
                              href="#"
                              className="flex  items-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                            >
                              <BsChevronRight
                                size={14}
                                style={{ opacity: 0.3 }}
                              />
                              {item.left.value}
                            </a>
                          </h2>
                        </li>
                        <li className="flex flex-1 items-center justify-between border-dashed border-b-[1px]">
                          <h2>
                            <a
                              href="#"
                              className="flex  items-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                            >
                              <BsChevronRight
                                size={14}
                                style={{ opacity: 0.3 }}
                              />
                              {item.right.value}
                            </a>
                          </h2>
                        </li>
                      </div>
                    </div>
                  )
                })}
            </div>
          )}
        </ul>
      </section>
    </div>
  )
}

export default ItemSidebar
