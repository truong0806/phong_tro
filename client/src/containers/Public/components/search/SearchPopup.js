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
  const [persent1, setPersent1] = useState(0);
  const [persent2, setPersent2] = useState(100);
  const [activedEl, setActivedEl] = useState('');

  useEffect(() => {
    const activedTrackEl = document.getElementById('track-active');
    if (activedTrackEl) {
      if (persent2 <= persent1) {
        activedTrackEl.style.left = `${persent2}%`;
        activedTrackEl.style.right = `${100 - persent1}%`;
      } else {
        activedTrackEl.style.left = `${persent1}%`;
        activedTrackEl.style.right = `${100 - persent2}%`;
      }
    }
  }, [persent1, persent2]);

  const handleItemClick = (item, event) => {
    setSelectedValue((prevState) => ({
      ...prevState,
      [name]: { name: item.value, code: item.code },
    }));
    setShowPopup(false);
  };
  console.log(selectedValue);
  const handleCloseClick = () => {
    setShowPopup(false);
  };
  const handleClickTrack = (e, value) => {
    const stackEl = document.getElementById('track');
    const stackRect = stackEl.getBoundingClientRect();
    let percent = value
      ? value
      : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
    if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
      setPersent1(percent);
    } else {
      setPersent2(percent);
    }
  };
  const convert100toTarget = (percent) => {
    return name === 'price'
      ? (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10
      : name === 'area'
      ? Math.ceil(Math.round(percent * 0.9) / 5) * 5
      : 0;
  };
  const convertto100 = (percent) => {
    let target = name === 'price' ? 15 : name === 'area' ? 90 : 1;
    return Math.floor((percent / target) * 100);
  };
  const handleActive = (code, value) => {
    setActivedEl(code);
    let arrMaxMin =
      name === 'price' ? getNumbersPrice(value) : getNumbersArea(value);
    console.log(arrMaxMin);
    if (arrMaxMin.length === 1) {
      if (arrMaxMin[0] === 1) {
        setPersent1(0);
        setPersent2(convertto100(1));
      }
      if (arrMaxMin[0] === 20) {
        setPersent1(0);
        setPersent2(convertto100(20));
      }
      if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
        setPersent1(100);
        setPersent2(100);
      }
    }
    if (arrMaxMin.length === 2) {
      setPersent1(convertto100(arrMaxMin[0]));
      setPersent2(convertto100(arrMaxMin[1]));
    }
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
                    //const isChecked = item.code === selectedValue;
                    return (
                      <li
                        onClick={() => handleItemClick(item, index, name)}
                        key={item.id}
                        className="hover:text-[#007aff] relative py-[12px] px-[10px] border-solid border-b cursor-pointer text-[1.1rem]"
                      >
                        <input
                          type="radio"
                          name={name}
                          id={item.code}
                          value={item.code}
                          className="accent-[#007aff]"
                          checked={index === 0}
                        ></input>
                        <label
                          htmlFor={item.code}
                          className="pl-4 font-bold"
                          // style={{
                          //   color:
                          //     index === 0
                          //       ? '#007aff'
                          //       : isChecked
                          //       ? '#007aff'
                          //       : 'inherit',
                          // }}
                        >
                          {item.value}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="p-12 py-20 ">
                  <div className="flex flex-col items-center justify-center relative ">
                    <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-600">
                      {persent1 === 100 && persent2 === 100
                        ? `Trên ${convert100toTarget(persent1)} ${
                            name === 'price' ? 'triệu' : 'm2'
                          } +`
                        : `Từ ${
                            persent1 <= persent2
                              ? convert100toTarget(persent1)
                              : convert100toTarget(persent2)
                          } - ${
                            persent2 >= persent1
                              ? convert100toTarget(persent2)
                              : convert100toTarget(persent1)
                          } ${name === 'price' ? 'triệu' : 'm2'}`}
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
                      value={persent1}
                      className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                      onChange={(e) => {
                        setPersent1(+e.target.value);
                        activedEl && setActivedEl('');
                      }}
                    />
                    <input
                      max="100"
                      min="0"
                      step="1"
                      type="range"
                      value={persent2}
                      className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                      onChange={(e) => {
                        setPersent2(+e.target.value);
                        activedEl && setActivedEl('');
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-1">
              <h4 className="font-medium mb-4">Chọn nhanh:</h4>
              <div className="flex gap-2 items-center flex-wrap w-full">
                {content?.map((item) => {
                  return (
                    <button
                      key={item.code}
                      onClick={() => handleActive(item.code, item.value)}
                      className={`px-4 py-2 bg-gray-200 rounded-md cursor-pointer 
                      ${item.code === activedEl ? 'bg-blue-500 text-white' : ''}
                      `}
                    >
                      {item.value}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {(name === 'prices' || name === 'areas') && (
            <button
              type="button"
              className="w-full h-[50px] font-bold absolute bottom-0 bg-[#ffa500] py-2 rounded-bl-md rounded-br-md"
              // onClick={handleBeforeSubmit}
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
