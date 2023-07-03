import React, { useState } from 'react';
import { SearchItem } from '../../../../components';
import { SearchPopup } from '../../index';
import icons from '../../../../ultils/icons';
import { useSelector } from 'react-redux';

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
  const [content, setContent] = useState([]);
  const [name, setName] = useState('');
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );
  const handShowPopup = (content, name) => {
    setContent(content);
    setName(name);
    setShowPopup(true);
  };
  return (
    <>
      <div className="lg:w-full w-full min-w-[320px] md:w-[85%] p-[10px] bg-[#dedede] md:bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handShowPopup(categories, 'categories')}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            fontWeight
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<RiDeleteBack2Line />}
            text="Phòng trọ, nhà trọ"
          />
        </span>
        <span
          onClick={() => handShowPopup(provinces, 'provinces')}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<GrNext />}
            text="Toàn quốc"
          />
        </span>
        <span
          onClick={() => handShowPopup(prices, 'prices')}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<GrNext />}
            text="Chọn giá"
          />
        </span>
        <span
          onClick={() => handShowPopup(areas, 'areas')}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<GrNext />}
            text="Chọn diện tích"
          />
        </span>
        <button
          type="button"
          className="outline-none py-2 px-4 rounded-md  bg-[#ffba00] font-bold md:bg-secondary1 text-[13px] flex-1 flex items-center justify-center gap-2 text-black md:text-white"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {showPopup && (
        <SearchPopup
          content={content}
          name={name}
          setShowPopup={setShowPopup}
        />
      )}
    </>
  );
}

export default Search;
