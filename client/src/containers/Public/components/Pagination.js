import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ListNumber } from '../../../components'

const Pagination = ({ page }) => {
  const { count, posts } = useSelector((state) => state.post)
  const [arrpage, setArrPage] = useState([])
  const [currentPage, setCurrentPage] = useState(+page || 1)
  const [inHideEnd, isInHideEnd] = useState(false)
  const [inHideStart, isInHideStart] = useState(false)
  useState(() => {
    setCurrentPage(1)
  })
  useEffect(() => {
    let maxPage = Math.floor(count / posts.length)
    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1
    let start = currentPage - 1 <= 0 ? 1 : currentPage - 1
    let temp = []
    for (let i = start; i <= end; i++) temp.push(i)
    setArrPage(temp)
    //console.log(arrpage)
    currentPage >= maxPage - 1 ? isInHideEnd(true) : isInHideEnd(false)
    currentPage <= 3 ? isInHideStart(true) : isInHideStart(false)
  }, [count, posts, currentPage])
  //console.log(handlePageNumber())
  return (
    <div className="flex items-center justify-center mt-[20px] mb-[50px]">
      {!inHideStart && (
        <ListNumber number={1} setCurrentPage={setCurrentPage} />
      )}
      {!inHideStart && <ListNumber number={'...'} />}
      {arrpage.length > 0 &&
        arrpage.map((item) => {
          return (
            <ListNumber
              number={item}
              key={item}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )
        })}
      {!inHideEnd && <ListNumber number={'...'} />}
      {!inHideEnd && (
        <ListNumber
          text={'»»'}
          number={Math.floor(count / posts.length)}
          setCurrentPage={setCurrentPage}
          type={'end'}
        />
      )}
    </div>
  )
}

export default Pagination
