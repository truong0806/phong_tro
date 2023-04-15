import React from 'react'
import { SearchItem } from './../../../components'
import icons from '../../../ultils/icons'
const {
  GrNext,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  RiDeleteBack2Line,
  FiSearch,
} = icons
const Search = () => {
  return (
    <div className="my-3  w-[85%] p-[10px] bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
      <SearchItem
        fontWeight
        IconBefore={<MdOutlineHouseSiding />}
        IconAfter={<RiDeleteBack2Line />}
        text="Phòng trọ, nhà trọ"
      />
      <SearchItem
        IconBefore={<HiOutlineLocationMarker />}
        IconAfter={<GrNext />}
        text="Toàn quốc"
      />
      <SearchItem
        IconBefore={<TbReportMoney />}
        IconAfter={<GrNext />}
        text="Chọn giá"
      />
      <SearchItem
        IconBefore={<RiCrop2Line />}
        IconAfter={<GrNext />}
        text="Chọn diện tích"
      />
      <button
        type="button"
        className="outline-none py-2 px-4 w-full rounded-md font-medium max-w-[210px] bg-secondary1 text-[13px] flex items-center justify-center gap-2 text-white"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  )
}

export default Search
