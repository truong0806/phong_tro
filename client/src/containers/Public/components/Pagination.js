import React from 'react'
import { useSelector } from 'react-redux'
import { ListNumber } from '../../../components'

const Pagination = ({ number }) => {
  const { count, posts } = useSelector((state) => state.post)

  const handlePageNumber = () => {
    let max = Math.floor(count / posts.length)
    let arrnumber = []
    for (let i = 1; i <= max; i++) arrnumber.push(i)
    return arrnumber.length > 4 ? arrnumber.filter((i) => i < 5) : arrnumber
  }
  //console.log(handlePageNumber())
  return (
    <div className="flex items-center justify-center mt-[20px] mb-[50px]">
      {handlePageNumber().length > 0 &&
        handlePageNumber().map((item) => {
          return (
            <ListNumber number={item} key={item} currentPage={number || 1} />
          )
        })}
      <ListNumber number={'...'} />
      <ListNumber number={'»»'} />
    </div>
  )
}

export default Pagination
