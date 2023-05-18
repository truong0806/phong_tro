import React, { useEffect, useRef } from 'react'
import { Button } from '../../../components/index'
import { ListPostItem } from '../index'
import { getPosts, GetPostsLimit } from '../../../store/action/post'
import { useDispatch, useSelector } from 'react-redux'
import ScrollTop from './scroll_Top'
const ListPost = ({ page }) => {
  const dispatch = useDispatch()
  const linkRef = useRef()
  const { posts, count } = useSelector((state) => state.post)
  useEffect(() => {
    let offset = page ? +page - 1 : 0
    dispatch(GetPostsLimit(offset))
    linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' })
  }, [page])
  console.log(posts)

  return (
    <div
      ref={linkRef}
      className="m-[20px] "
    >
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
      <div className=" px-5 mx-[-20px] py-4">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <ListPostItem
                key={item?.id}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                users={item?.users}
                images={JSON.parse(item?.images.image)}
                title={item?.title}
                label={item?.label}
                address={item?.address}
              />
            )
          })}
      </div>
    </div>
  )
}

export default ListPost
