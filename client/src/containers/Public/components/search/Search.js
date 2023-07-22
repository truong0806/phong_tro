import React, { useCallback, useEffect, useState } from 'react';
import { SearchItem } from '../../../../components';
import { SearchPopup } from '../../index';
import icons from '../../../../ultils/icons';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../store/action';

import {
  getCodesArea,
  getCodesPrices,
} from '../../../../ultils/common/getCode';
const {
  GrNext,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  RiDeleteBack2Line,
  FiSearch,
  FiDelete,
} = icons;
function Search() {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState({
    categories: { name: 'Phòng trọ, nhà trọ', code: 'abc' },
    provinces: { name: 'Toàn quốc', code: 'abc' },
    prices: { name: 'Chọn giá', pricesNumber: [0, 15] },
    areas: { name: 'Chọn diện tích', areasNumber: [0, 90] },
  });
  const [showPopup, setShowPopup] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState([]);
  const { areas, prices, categories, provinces } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    dispatch(actions.getProvince1());
  }, [dispatch]);

  const handShowPopup = (e, content, name) => {
    e.stopPropagation();
    setContent(content);
    setName(name);
    setShowPopup(true);
  };
  const handleDeleteTitle = (name, defaultText) => {
    setSelectedValue((prevState) => ({
      ...prevState,
      [name]: {
        name: defaultText,
      },
    }));
  };

  const handleSubmit = useCallback(
    (e, arrMinMax, min, max, convert100toTarget, percent1, percent2, name) => {
      const gaps =
        name === 'prices'
          ? getCodesPrices(
              [
                convert100toTarget(percent1, name),
                convert100toTarget(percent2, name),
              ],
              content
            )
          : getCodesArea(
              [
                convert100toTarget(percent1, name),
                convert100toTarget(percent2, name),
              ],
              content
            );
      e.stopPropagation();

      setShowPopup(false);
      setSelectedValue((prev) => ({
        ...prev,
        [`${name}Code`]: gaps.map((item) => item.code),
        [name]: {
          [`${name}Number`]: arrMinMax,
          name:
            percent1 === 100 && percent2 === 100
              ? `Trên ${convert100toTarget(max, name)}${
                  name === 'prices' ? ' triệu' : 'm'
                }`
              : convert100toTarget(min, name) === 0 &&
                convert100toTarget(min, name) === 0
              ? `Dưới ${convert100toTarget(max, name)}${
                  name === 'prices' ? ' triệu' : 'm'
                }`
              : `Từ ${convert100toTarget(min, name)} - ${convert100toTarget(
                  max,
                  name
                )}${name === 'prices' ? ' triệu' : 'm'}`,
          [`${name}Arr`]: [min, max],
          [`${name}Code`]: gaps.map((item) => item.code),
        },
      }));
    },
    [ content]
  );

  const handleSearch = () => {
    const queryCode = Object.entries(selectedValue).filter((item) => {
      return item[0].includes('Code');
    });
    let queryCodeObject = {};
    queryCode.forEach((item) => {
      queryCodeObject[item[0]] = item[1];
    });
    console.log(queryCode);
    console.log(queryCodeObject);
  };
  return (
    <>
      <div
        tabIndex="-1"
        className="lg:w-full w-full min-w-[320px] md:w-[85%] p-[10px] bg-[#dedede] md:bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2"
      >
        <span
          onClick={(e) => handShowPopup(e, categories, 'categories')}
          className="cursor-pointer flex-1 md:w-full lg:w-full font-bold"
        >
          <SearchItem
            defaultText={'Phòng trọ, nhà trọ'}
            fontWeight
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<RiDeleteBack2Line />}
            text={selectedValue.categories.name}
            deleteIcon={<FiDelete />}
          />
        </span>
        <span
          onClick={(e) => handShowPopup(e, provinces, 'provinces')}
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            defaultText={'Toàn quốc'}
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<GrNext />}
            text={selectedValue.provinces.name}
            deleteIcon={
              <FiDelete
                onClick={() => handleDeleteTitle('provinces', 'Toàn quốc')}
              />
            }
          />
        </span>
        <span
          onClick={(e) => handShowPopup(e, prices, 'prices')}
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            defaultText={'Chọn giá'}
            IconBefore={<TbReportMoney />}
            IconAfter={<GrNext />}
            text={selectedValue.prices.name}
            deleteIcon={
              <FiDelete
                onClick={() => handleDeleteTitle('prices', 'Chọn giá')}
              />
            }
          />
        </span>
        <span
          onClick={(e) => handShowPopup(e, areas, 'areas')}
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            defaultText={'Chọn diện tích'}
            IconBefore={<RiCrop2Line />}
            IconAfter={<GrNext />}
            text={selectedValue.areas.name}
            deleteIcon={
              <FiDelete
                onClick={() => handleDeleteTitle('areas', 'Chọn diện tích')}
              />
            }
          />
        </span>
        <button
          type="button"
          onClick={handleSearch}
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
          showPopup={showPopup}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default Search;
