import React, { useEffect, useState } from 'react';
import {
  getNumbersArea,
  getNumbersPrice,
} from '../../../../ultils/common/getnumbers';
import { SliderTrack } from '../..';
import {
  convert100toTarget,
  convertto100,
} from '../../../../ultils/common/convertPercent';
import { removeSFromString } from '../../../../ultils/common/removeS';

const SearchPopup = ({
  setShowPopup,
  content,
  name,
  selectedValue,
  setSelectedValue,
  handleSubmit,
  defaultText,
}) => {
  const [percent1, setPercent1] = useState(
    name === 'prices' && selectedValue?.prices.pricesNumber
      ? convertto100(+selectedValue?.prices.pricesNumber[0], name)
      : name === 'areas' && selectedValue?.areas.areasNumber
      ? convertto100(+selectedValue?.areas.areasNumber[0], name)
      : 0
  );
  const [percent2, setPercent2] = useState(
    name === 'prices' && selectedValue?.prices.pricesNumber
      ? convertto100(+selectedValue?.prices.pricesNumber[1], name)
      : name === 'areas' && selectedValue?.areas.areasNumber
      ? convertto100(+selectedValue?.areas.areasNumber[1], name)
      : 0
  );
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
      [`${removeSFromString(name)}Code`]: item.code,
      [name]: {
        name: item.value,
        code: item.code,
      },
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

  const handleActive = (code, value) => {
    setActivedEl(code);
    setSelectedValue((prev) => ({
      ...prev,
      [name]: {
        name: value,
      },
    }));
    let arrMaxMin =
      name === 'prices' ? getNumbersPrice(value) : getNumbersArea(value);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPercent1(0);
        setPercent2(convertto100(1, name));
      }
      if (arrMaxMin[0] === 20) {
        setPercent1(0);
        setPercent2(convertto100(20, name));
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPercent1(100);
        setPercent2(100);
      }
    }
    if (arrMaxMin.length === 2) {
      setPercent1(convertto100(arrMaxMin[0], name));
      setPercent2(convertto100(arrMaxMin[1], name));
    }
  };

  const handleBeforeSubmit = (e) => {
    let min = percent1 <= percent2 ? percent1 : percent2;
    let max = percent1 <= percent2 ? percent2 : percent1;
    let arrMinMax = [
      convert100toTarget(min, name),
      convert100toTarget(max, name),
    ];

    handleSubmit(
      e,
      arrMinMax,
      min,
      max,
      convert100toTarget,
      percent1,
      percent2,
      name
    );
  };
  return (
    <div>
      <div
        className="fixed w-full h-full bg-overlay-70 z-20 top-0 left-0 right-0 bottom-0  overflow-y-auto"
        onClick={handleCloseClick}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="relative flex flex-col h-[500px]lg:flex-row w-[700px] left-0 right-0 bottom-0 my-0 mx-auto top-[60px]  bg-white border rounded-lg overflow-hidden"
        >
          <div
            className={`${
              name === 'provinces' ? 'h-[45px]' : 'h-[45px]'
            }  relative flex items-center justify-center border-b border-solid`}
          >
            <span className="uppercase font-bold">Chọn loại bất động sản</span>
            <div
              className=" cursor-pointer bg-left_arrow_bg absolute bg-center top-0 left-0 w-[45px] h-[45px] bg-50% bg-no-repeat "
              onClick={handleCloseClick}
            ></div>
          </div>
          <div
            className={`relative py-[10px] px-[25px] h-full ${
              name === 'provinces'
                ? 'hover:overflow-auto hover:overflow-y-scroll '
                : ''
            } `}
          >
            <div className="">
              {name === 'categories' ? (
                <ul className="list-none ">
                  <li
                    onClick={(e) => {
                      console.log(defaultText);

                      setSelectedValue((prevState) => ({
                        ...prevState,
                        [`${removeSFromString(name)}Code`]: null,
                        [name]: {
                          name: defaultText,
                          code: null,
                        },
                      }));
                      console.log(selectedValue);
                      setShowPopup(false);
                    }}
                    className="hover:text-[#007aff] overflow-y-auto relative py-[12px] px-[10px] border-solid border-b cursor-pointer text-[1.1rem]"
                  >
                    <input
                      type="radio"
                      name={name}
                      id="default"
                      value={selectedValue[`${name}`].name}
                      className="accent-[#007aff] "
                      onChange={(e) => handleItemClick(e, {})}
                      defaultChecked={
                        defaultText === selectedValue[`${name}`].name ||
                        selectedValue[`${name}`].name === 'Phòng trọ, nhà trọ'
                          ? true
                          : false
                      }
                    ></input>
                    <label
                      htmlFor="default"
                      className={`pl-4  ${
                        defaultText === selectedValue[`${name}`].name ||
                        selectedValue[`${name}`].name === 'Phòng trọ, nhà trọ'
                          ? 'text-[#007aff]'
                          : ''
                      }`}
                    >
                      {defaultText}
                    </label>
                  </li>
                  {content?.slice(0, -2).map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item, index, name);
                        }}
                        key={item.id}
                        className="hover:text-[#007aff] relative py-[12px] px-[10px] border-solid border-b cursor-pointer text-[1.1rem]"
                      >
                        <input
                          type="radio"
                          name={name}
                          id="default"
                          value={item.value}
                          className="accent-[#007aff]"
                          defaultChecked={
                            item.code === selectedValue[`${name}`].code
                              ? true
                              : false
                          }
                          onChange={(e) => handleSubmit(e, {})}
                        ></input>
                        <label
                          htmlFor="default"
                          className={`pl-4  ${
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
              ) : name === 'provinces' ? (
                <ul className="list-none overflow-y-auto">
                  <li
                    onClick={(e) => {
                      setSelectedValue((prevState) => ({
                        ...prevState,
                        [`${removeSFromString(name)}Code`]: null,
                        [name]: {
                          name: defaultText,
                          code: null,
                        },
                      }));
                      setShowPopup(false);
                    }}
                    className="hover:text-[#007aff] overflow-y-auto relative py-[12px] px-[10px] border-solid border-b cursor-pointer text-[1.1rem]"
                  >
                    <input
                      type="radio"
                      name={name}
                      id="default"
                      value={defaultText}
                      className="accent-[#007aff] "
                      onChange={(e) => handleItemClick(e, {})}
                      defaultChecked={
                        defaultText === `${selectedValue[`${name}`].name} ` ||
                        defaultText === `${selectedValue[`${name}`].name}`
                          ? true
                          : false
                      }
                    ></input>
                    <label
                      htmlFor="default"
                      className={`pl-4  ${
                        defaultText === `${selectedValue[`${name}`].name} ` ||
                        defaultText === `${selectedValue[`${name}`].name}`
                          ? 'text-[#007aff]'
                          : ''
                      }`}
                    >
                      {defaultText}
                    </label>
                  </li>
                  {content?.map((item, index) => {
                    return (
                      <li
                        onClick={(e) => {
                          e.stopPropagation();
                          handleItemClick(item, index, name);
                          setShowPopup(false);
                        }}
                        key={item.id}
                        className="hover:text-[#007aff] overflow-y-auto relative py-[12px] px-[10px] border-solid border-b cursor-pointer text-[1.1rem]"
                      >
                        <input
                          type="radio"
                          name={name}
                          id={item.code}
                          value={item.code}
                          className="accent-[#007aff] "
                          defaultChecked={
                            item.code === selectedValue[`${name}`].code
                              ? true
                              : false
                          }
                        ></input>
                        <label
                          htmlFor={item.code}
                          className={`pl-4  ${
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
                  <SliderTrack
                    name={name}
                    percent1={percent1}
                    percent2={percent2}
                    setPercent1={setPercent1}
                    setPercent2={setPercent2}
                    convert100toTarget={convert100toTarget}
                    handleClickTrack={handleClickTrack}
                    activedEl={activedEl}
                    setActivedEl={setActivedEl}
                    setSelectedValue={setSelectedValue}
                  />
                  <div className="mt-24">
                    <h4 className="font-medium mb-4">Chọn nhanh:</h4>
                    <div className="flex gap-2 items-center flex-wrap w-full">
                      {content?.map((item) => {
                        return (
                          <button
                            key={item.code}
                            onClick={() => handleActive(item.code, item.value)}
                            className={`px-4 py-2 bg-gray-200 rounded-md cursor-pointer ${
                              item.value === selectedValue[`${name}`].name
                                ? 'btn-prices-search text-white'
                                : item.code === activedEl
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
