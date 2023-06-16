import React, { useState } from 'react';
import { SearchItem } from '../../../components';
import { PopupSearch } from '..';
import icons from '../../../ultils/icons';

const {
  GrNext,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  RiDeleteBack2Line,
  FiSearch,
} = icons;
function Search() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };
  return (
    <div className="lg:w-full w-full min-w-[320px] md:w-[85%] p-[10px] bg-[#dedede] md:bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
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
        className="outline-none py-2 px-4 rounded-md w-full bg-[#ffba00] font-bold md:bg-secondary1 text-[13px] flex items-center justify-center gap-2 text-black md:text-white"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  );
}

export default Search;
