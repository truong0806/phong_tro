/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import icons from '../../src/ultils/icons'
import 'lazysizes'
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
              className="flex flex-col items-center justify-between  pb-[20px]"
              key={'a'}
            >
              {content.length > 0 &&
                content.slice(0, 10).map((item) => {
                  // const has_video_Class =
                  //   ? 'sticky top-0 z-10 bg-secondary1 text-white'
                  //   : 'bg-secondary1 text-white'
                  const createdAt = new Date('2023-06-04T16:40:15.000Z')
                  const currentDate = new Date()
                  const timeDiff = currentDate.getTime() - createdAt.getTime()
                  const hoursDiff = Math.floor(timeDiff / (1000 * 3600))
                  const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
                  let dateCreated
                  if (hoursDiff < 24) {
                    dateCreated = `${hoursDiff} giờ trước`
                  } else {
                    dateCreated = `${daysDiff} ngày trước`
                  }
                  const images = JSON.parse(item?.images?.image)
                  const firstImage = images?.shift()
                  console.log(firstImage)
                  return (
                    <a
                      href="#"
                      className="flex border-solid border-b-[1px] py-[10px]"
                    >
                      <div className="w-[65px] h-[65px]  left-0 relative">
                        <img
                          className="w-full h-full object-cover rounded block"
                          src={firstImage}
                          lazyload
                          lazy
                          alt={item.title}
                          loading="lazy"
                        ></img>
                        <span className="block bg-35px"></span>
                      </div>
                      <div className="w-4/5  flex-grow-1 flex-shrink-1 ml-[15px] block leading-5">
                        <p className="line-clamp-2 text-[1rem] font-normal   text-[#3763e0] mb-[10px]">
                          {item.title}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#16c784] font-bold text-[1rem]">
                            {item.attributes.price}
                          </span>
                          <time className="font-[.9rem] text-[#aaa]">
                            {dateCreated}
                          </time>
                        </div>
                      </div>
                    </a>
                  )
                })}
            </li>
          )}
        </ul>
      </section>
    </div>
  )
}

export default ItemSidebar
