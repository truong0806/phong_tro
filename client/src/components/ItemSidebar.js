/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import icons from '../../src/ultils/icons'
const { BsChevronRight } = icons

const ItemSidebar = ({ header, content, isDouble, isListPost }) => {
  const formatContent = () => {
    const odd = content?.filter((item, index) => index % 2 !== 0)
    const even = content?.filter((item, index) => index % 2 === 0)
    const formatContent = odd?.map((item, index) => {
      // console.log('odd: ', odd)
      // console.log('even: ', even)
      return {
        left: even?.find((item2, index2) => index2 === index),
        right: item,
      }
    })
    return formatContent
  }
  //console.log(formatContent())
  return (
    <div className="border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
      <section>
        <div className="mb-4 w-full">
          <span className="text-[18.2px] font-bold">{header}</span>
        </div>
        <ul>
          {!isListPost && (
            <div>
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
            </div>
          )}
          {isListPost && (
            <li
              className="flex items-center justify-between border-dashed border-b-[1px] py-[10px]"
              key={'a'}
            >
              <a href="#" className="flex ">
                <div className="w-[65px] h-[65px] relative">
                  <img
                    className="w-full h-full object-cover"
                    src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/06/06/z4409228955254-a3483d297d6110a3ea41d4f6282295a3_1686042548.jpg"
                    alt="Cho thuê phòng trọ giá rẻ, sạch sẽ, thoáng mát ngay Trung tâm quận 10"
                  ></img>
                </div>
                <div className="w-4/5 relative flex-grow-1 flex-shrink-1 ml-[15px] leading-5">
                  <span className="font-[1rem] font-normal text-justify text-[#3763e0] mb-[10px] block whitespace-normal text-ellipsis overflow-hidden ">
                    Cho thuê phòng trọ giá rẻ, sạch sẽ, thoáng mát ngay Trung
                    tâm quận 10
                  </span>

                  <div className="flex items-center justify-between">
                    <span className="text-[#16c784] font-bold font-[1rem]">
                      2 triệu/tháng
                    </span>
                    <time className="font-[.9rem] text-[#aaa]">
                      14 phút trước
                    </time>
                  </div>
                </div>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default ItemSidebar
