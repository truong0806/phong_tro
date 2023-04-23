import React, { memo, useState, useEffect } from 'react'
import { Button } from '../../../components/index'
import { ListPostItem } from '../index'
import { apiPost } from '../../../service/post'
const ListPost = () => {
  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchPost = async () => {
      const response = await apiPost()
      if (response?.data.err === 0) {
        setPost(response.data.response)
      } else {
        setPost(null)
      }
      setLoading(false)
    }
    fetchPost()
  }, [])
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
      <div className="flex items-center text-[.95rem] gap-2 my-[10px] ">
        <span className="">Sắp xếp: </span>
        <Button
          padding={'py-[5px] px-[10px]'}
          bgcolor={'bg-gray-200'}
          text="Mặc định"
        />
        <Button
          padding={'py-[5px] px-[10px]'}
          bgcolor={'bg-gray-200'}
          text="Mới nhất"
        />
        <Button
          padding={'py-[5px] px-[10px]'}
          bgcolor={'bg-gray-200'}
          text="Có video"
        />
      </div>
      {post?.length > 0 &&
        post.map((item) => {
          return (
            <div>
              <div className=" border-[#E13427] border-t px-5 mx-[-20px] py-4">
                <ListPostItem item={item} />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ListPost
