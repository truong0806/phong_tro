import React, { useCallback, useState } from 'react';
import { SearchItem } from '../../../../components';
import { SearchPopup } from '../../index';
import icons from '../../../../ultils/icons';
import { useSelector } from 'react-redux';
import { getCodePrice, getCodeArea } from '../../../../ultils/common/getCode';

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
  const [selectedValue, setSelectedValue] = useState({
    categories: { name: 'Phòng trọ, nhà trọ', code: 'abc' },
    provinces: { name: 'Toàn quốc', code: 'abc' },
    prices: { name: 'Chọn giá' },
    areas: { name: 'Chọn diện tích' },
  });
  const [showPopup, setShowPopup] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState([]);
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );

  const handShowPopup = (content, name) => {
    setContent(content);
    setName(name);
    setShowPopup(true);
  };
  console.log(selectedValue);
  return (
    <>
      <div className="lg:w-full w-full min-w-[320px] md:w-[85%] p-[10px] bg-[#dedede] md:bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handShowPopup(categories, 'categories')}
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            fontWeight
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<RiDeleteBack2Line />}
            text={selectedValue.categories.name}
          />
        </span>
        <span
          onClick={() => handShowPopup(provinces, 'provinces')}
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<GrNext />}
            text={selectedValue.provinces.name}
          />
        </span>
        <span
          onClick={() => handShowPopup(prices, 'prices')}
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<GrNext />}
            text={selectedValue.prices.name}
          />
        </span>
        <span
          onClick={() => handShowPopup(areas, 'areas')}
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<GrNext />}
            text={selectedValue.areas.name}
          />
        </span>
        <button
          type="button"
          className="md:w-full lg:w-full outline-none py-2 px-4 rounded-md  bg-[#ffba00] font-bold md:bg-secondary1 text-[13px] flex-1 flex items-center justify-center gap-2 text-black md:text-white"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {showPopup && (
        <SearchPopup
          selectedValue={selectedValue}
          content={content}
          name={name}
          setShowPopup={setShowPopup}
          setSelectedValue={setSelectedValue}
        />
      )}
    </>
  );
}

export default Search;
