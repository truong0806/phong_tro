import React, { useCallback, useEffect, useState } from 'react';
import { SearchItem } from '../../../../components';
import { SearchPopup } from '../../index';
import icons from '../../../../ultils/icons';
import { useSelector } from 'react-redux';

import {
  getCodesArea,
  getCodesPrices,
} from '../../../../ultils/common/getCode';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { removeSFromString } from '../../../../ultils/common/removeS';
import { path } from '../../../../ultils/constains';
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
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState({
    category: { name: 'Phòng trọ, nhà trọ', code: '' },
    province: { name: 'Toàn quốc', code: 'abc' },
    prices: { name: 'Chọn giá', pricesNumber: [0, 15] },
    areas: { name: 'Chọn diện tích', areasNumber: [0, 90] },
  });
  console.log("🚀 ~ file: Search.js:34 ~ Search ~ selectedValue:", selectedValue)
  const [showPopup, setShowPopup] = useState(false);
  const [content, setContent] = useState([]);
  const [defaultText, setDefaultText] = useState('');
  const [name, setName] = useState([]);
  const { areas, prices, categories, provinces } = useSelector(
    (state) => state.app
  );
  useEffect(() => {
    if (!location?.pathname.includes(path.SEARCH)) {
      setSelectedValue({
        category: { name: 'Phòng trọ, nhà trọ', code: '' },
        province: { name: 'Toàn quốc', code: 'abc' },
        prices: { name: 'Chọn giá', pricesNumber: [0, 15] },
        areas: { name: 'Chọn diện tích', areasNumber: [0, 90] },
      });
    }
  }, []);

  const handShowPopup = (e, content, name, defaultText) => {
    e.stopPropagation();
    setContent(content);
    setName(name);
    setShowPopup(true);
    setDefaultText(defaultText);
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
        [`${removeSFromString(name)}Code`]: gaps.map((item) => item.code),
        [`${removeSFromString(name)}Number`]: arrMinMax,
        [name]: {
          [`${name}Number`]: arrMinMax,
          name:
            percent1 === 100 && percent2 === 100
              ? `Trên ${convert100toTarget(max, name)}${name === 'prices' ? ' triệu' : 'm'
              }`
              : convert100toTarget(min, name) === 0 &&
                convert100toTarget(min, name) === 0
                ? `Dưới ${convert100toTarget(max, name)}${name === 'prices' ? ' triệu' : 'm'
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
    [content]
  );

  const handleSearch = () => {
    const queryCode = Object.entries(selectedValue).filter((item) => {
      return item[0].includes('Number') || item[0].includes('provinceCode') || item[0].includes('categoryCode');
    });
    console.log("🚀 ~ file: Search.js:122 ~ queryCode ~ queryCode:", queryCode)
    let queryCodeObject = {};
    queryCode.forEach((item) => {
      queryCodeObject[item[0]] = item[1];
    });
    const queryText = Object.entries(selectedValue).filter(
      (item) => !item[0].includes('Code') || !item[0].includes('Number')
    );
    let queryTextObj = {};
    queryText.forEach((item) => {
      queryTextObj[item[0]] = item[1];
    });
    let titleSearch = `${queryTextObj.category.name
      ? queryTextObj.category.name
      : 'Cho thuê tất cả'
      } ${queryTextObj.province.name
        ? `${queryTextObj.province.name === 'Toàn quốc' ? '' : 'tỉnh'} ${queryTextObj.province.name
        }`
        : ''
      } ${queryTextObj.prices.name !== 'Chọn giá'
        ? `giá ${queryTextObj.prices.name}`
        : ''
      } ${queryTextObj.areas.name !== 'Chọn diện tích'
        ? `diện tích ${queryTextObj.areas.name}`
        : ''
      } `;

    navigate(
      {
        pathname: path.SEARCH,
        search: createSearchParams(queryCodeObject).toString(),
      },
      { state: { titleSearch } }
    );
  };
  return (
    <>
      <div
        tabIndex="-1"
        className="mb-[15px] lg:w-full w-full min-w-[320px] md:w-[85%] p-[10px] bg-[#dedede] md:bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2"
      >
        <span
          onClick={(e) =>
            handShowPopup(e, categories, 'category', 'Tìm tất cả')
          }
          className="cursor-pointer flex-1 md:w-full lg:w-full font-bold"
        >
          <SearchItem
            defaultText={'Phòng trọ, nhà trọ'}
            fontWeight
            IconBefore={<MdOutlineHouseSiding />}
            IconAfter={<RiDeleteBack2Line />}
            text={selectedValue.category.name}
            deleteIcon={
              <FiDelete
                onClick={() =>
                  handleDeleteTitle('category', 'Phòng trọ, nhà trọ')
                }
              />
            }
          />
        </span>
        <span
          onClick={(e) =>
            handShowPopup(e, provinces, 'province', 'Tìm tất cả')
          }
          className="cursor-pointer flex-1 md:w-full lg:w-full"
        >
          <SearchItem
            defaultText={'Toàn quốc'}
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<GrNext />}
            text={selectedValue.province.name}
            deleteIcon={
              <FiDelete
                onClick={() => handleDeleteTitle('province', 'Toàn quốc')}
              />
            }
          />
        </span>
        <span
          onClick={(e) => handShowPopup(e, prices, 'prices', 'Chọn giá ')}
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
          onClick={(e) => handShowPopup(e, areas, 'areas', 'Chọn diện tích ')}
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
          defaultText={defaultText}
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
