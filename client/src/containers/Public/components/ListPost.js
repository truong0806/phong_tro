import React from 'react'
import { Button } from '../../../components/index'
const ListPost = () => {
  return (
    <div className="m-[20px] ">
      <section className=" flex justify-between">
        <div className="">
          <span className="text-[18.2px] font-bold">Danh sách tin đăng</span>
        </div>
        <span className="text-[14px] ">
          Cập nhật:{' '}
          <time title="Thứ 7, 12:25 15/04/2023">12:25 15/04/2023</time>
        </span>
      </section>
      <div className="flex items-center text-[13.3px] gap-2 my-2">
        <span className="">Sắp xếp: </span>
        <Button padding={'py-[5px] px-[10px]'} bgcolor={'bg-gray-200'} text="Mặc định" />
        <Button padding={'py-[5px] px-[10px]'} bgcolor={'bg-gray-200'} text="Mới nhất" />
        <Button padding={'py-[5px] px-[10px]'} bgcolor={'bg-gray-200'} text="Có video" />
      </div>
      <div>
        item
      </div>
    </div>
  )
}

export default ListPost
