import React, { useEffect, useState } from 'react';
import {
  getNumbersArea,
  getNumbersPrice,
} from '../../../../ultils/common/getnumbers';
const SearchPopup = ({
  setShowPopup,
  content,
  name,
  selectedValue,
  setSelectedValue,
}) => {
  const convertto100 = (percent) => {
    let target = name === 'prices' ? 15 : name === 'areas' ? 90 : 1;
    return Math.floor((percent / target) * 100);
  };
  const [percent1, setPercent1] = useState(
    name === 'prices' && selectedValue?.prices.pricesArr
      ? convertto100(+selectedValue?.prices.pricesArr[0])
      : name === 'areas' && selectedValue?.areas.areasArr
      ? convertto100(+selectedValue?.areas.areasArr[0])
      : 0
  );
  console.log('🚀 ~ file: SearchPopup.js:21 ~ percent1:', percent1);
  const [percent2, setPercent2] = useState(
    name === 'prices' && selectedValue?.prices.pricesArr
      ? convertto100(+selectedValue?.prices.pricesArr[1])
      : name === 'areas' && selectedValue?.areas.areasArr
      ? convertto100(+selectedValue?.areas.areasArr[1])
      : 0
  );
  console.log('🚀 ~ file: SearchPopup.js:29 ~ percent2:', percent2);
  const [activedEl, setActivedEl] = useState('');

  useEffect(() => {
    const activedTrackEl = document.getElementById('track-active');
    if (activedTrackEl) {
      if (percent2 <= percent1) {
        activedTrackEl.style.left = `${percent2}%`;
        activedTrackEl.style.right = `${100 - percent1}%`;
      } else {
        activedTrackEl.style.left = `${percent1}%`;
        activedTrackEl.style.right = `${100 - percent2}%`;
      }
    }
  }, [percent1, percent2]);

  const handleItemClick = (item, event) => {
    setSelectedValue((prevState) => ({
      ...prevState,
      [name]: { name: item.value, code: item.code },
    }));
    setShowPopup(false);
  };

  const handleCloseClick = () => {
    setShowPopup(false);
  };

  const handleClickTrack = (e, value) => {
    const stackEl = document.getElementById('track');
    const stackRect = stackEl.getBoundingClientRect();
    let percent = value
      ? value
      : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
    if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
      setPercent1(percent);
    } else {
      setPercent2(percent);
    }
  };
  const convert100toTarget = (percent) => {
    return name === 'prices'
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : name === 'areas'
      ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
      : 0;
  };
  const handleActive = (code, value) => {
    setActivedEl(code);
    let arrMaxMin =
      name === 'prices' ? getNumbersPrice(value) : getNumbersArea(value);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPercent1(0);
        setPercent2(convertto100(1));
      }
      if (arrMaxMin[0] === 20) {
        setPercent1(0);
        setPercent2(convertto100(20));
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPercent1(100);
        setPercent2(100);
      }
    }
    if (arrMaxMin.length === 2) {
      setPercent1(convertto100(arrMaxMin[0]));
      setPercent2(convertto100(arrMaxMin[1]));
    }
  };
  const handleBeforeSubmit = (e, item) => {
    let min = percent1 <= percent2 ? percent1 : percent2;
    let max = percent1 <= percent2 ? percent2 : percent1;
    let arrMinMax = [convert100toTarget(min), convert100toTarget(max)];

    setSelectedValue((prevState) => ({
      ...prevState,
      [name]: {
        name: `Từ ${convert100toTarget(min)} - ${convert100toTarget(max)} ${
          name === 'price' ? 'triệu' : 'm2'
        }`,
        [`${name}Arr`]: arrMinMax,
      },
    }));
    setShowPopup(false);
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 "
        onClick={handleCloseClick}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="fixed w-[700px] left-0 right-0 bottom-0 bg-white max-h-[500px] top-[60px] overflow-hidden my-0 mx-auto rounded-lg"
        >
          <div className="h-[45px]  relative flex items-center justify-center border-b border-solid">
            <span className="uppercase font-bold">Chọn loại bất động sản</span>
            <div
              className="cursor-pointer bg-left_arrow_bg absolute bg-center top-0 left-0 w-[45px] h-[45px] bg-50% bg-no-repeat "
              onClick={handleCloseClick}
            ></div>
          </div>
          <div className="w-[calc(100% - 40px)] overflow-auto overflow-y-auto overscroll-contain py-[10px] px-[25px] ">
            <div className="">
              {name === 'categories' || name === 'provinces' ? (
                <ul className="list-none">
                  {content?.slice(0, -2).map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item, index, name);
                          setShowPopup(false);
                        }}
                        key={item.id}
                        className="hover:text-[#007aff] relative py-[12px] px-[10px] border-solid border-b cursor-pointer text-[1.1rem]"
                      >
                        <input
                          type="radio"
                          name={name}
                          id={item.code}
                          value={item.code}
                          className="accent-[#007aff]"
                          checked={
                            item.code === selectedValue[`${name}`].code
                              ? true
                              : false
                          }
                        ></input>
                        <label
                          htmlFor={item.code}
                          className={`pl-4 font-bold ${
                            item.code === selectedValue[`${name}`].code
                              ? 'text-[#007aff]'
                              : ''
                          }`}
                        >
                          {item.value}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="p-12 py-20 ">
                  <div className="flex flex-col items-center justify-center relative hover:cursor-pointer">
                    <div className="z-30 absolute top-[-48px] font-bold text-[1.5rem] text-orange-600 hover:cursor-pointer">
                      {percent1 === 100 && percent2 === 100
                        ? `Trên ${convert100toTarget(percent1)} ${
                            name === 'prices' ? 'triệu' : 'm2'
                          }`
                        : percent1 === 0 && percent2 === 0
                        ? `${convert100toTarget(percent1)} ${
                            name === 'prices' ? 'triệu' : 'm2'
                          }`
                        : `Từ ${
                            percent1 <= percent2
                              ? convert100toTarget(percent1)
                              : convert100toTarget(percent2)
                          } - ${
                            percent2 >= percent1
                              ? convert100toTarget(percent2)
                              : convert100toTarget(percent1)
                          } ${name === 'prices' ? 'triệu' : 'm2'}`}
                    </div>
                    <div
                      onClick={handleClickTrack}
                      id="track"
                      className="slider-track h-[5px] absolute top-0 bottom-0 w-full bg-gray-300 rounded-full"
                    ></div>
                    <div
                      onClick={handleClickTrack}
                      id="track-active"
                      className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"
                    ></div>
                    <input
                      max="100"
                      min="0"
                      step="1"
                      type="range"
                      value={percent1}
                      className="w-full  appearance-none pointer-events-none absolute top-0 bottom-0 slider-mask"
                      onChange={(e) => {
                        setPercent1(+e.target.value);
                        activedEl && setActivedEl('');
                      }}
                    />
                    <input
                      max="100"
                      min="0"
                      step="1"
                      type="range"
                      value={percent2}
                      className="w-full  appearance-none pointer-events-none absolute top-0 bottom-0"
                      onChange={(e) => {
                        setPercent2(+e.target.value);
                        activedEl && setActivedEl('');
                      }}
                    />
                    <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center">
                      <span
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClickTrack(e, 0);
                        }}
                      >
                        0
                      </span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClickTrack(e, 100);
                        }}
                        className={
                          name === 'prices'
                            ? 'mr-[-25px] cursor-pointer'
                            : 'mr-[5px] cursor-pointer'
                        }
                      >
                        {name === 'prices' ? 'Trên 15 triệu' : '90'}
                      </span>
                    </div>
                  </div>
                  <div className="mt-24">
                    <h4 className="font-medium mb-4">Chọn nhanh:</h4>
                    <div className="flex gap-2 items-center flex-wrap w-full">
                      {content?.map((item) => {
                        return (
                          <button
                            key={item.code}
                            onClick={() => handleActive(item.code, item.value)}
                            className={`px-4 py-2 bg-gray-200 rounded-md cursor-pointer ${
                              item.code === activedEl
                                ? 'btn-prices-search text-white'
                                : ''
                            }`}
                          >
                            {item.value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {(name === 'prices' || name === 'areas') && (
            <button
              type="button"
              className="w-full absolute bottom-0 bg-[#FFA500] py-4 font-bold rounded-bl-md rounded-br-md"
              onClick={handleBeforeSubmit}
            >
              ÁP DỤNG
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
