import React from 'react'
import { SearchItem } from './../../../components'
import icons from '../../../ultils/icons'
const {
  GrNext,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  RiDeleteBack2Fill,
} = icons

const Search = () => {
  return (
    <div className="h-[55px] p-[10px] bg-[#febb02] rounded-lg flex items-center justify-around gap-2">
      <SearchItem
        fontWeight
        IconBefore={<MdOutlineHouseSiding />}
        IconAfter={<RiDeleteBack2Fill />}
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
      Search
    </div>
  )
}

export default Search
