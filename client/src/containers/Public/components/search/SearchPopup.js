import React, { useRef } from 'react';

const SearchPopup = ({ setShowPopup, content, name }) => {
  const popupRef = useRef();

  const handleOverlayClick = (event) => {
    if (event.target === popupRef.current) {
      setShowPopup(false);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 "
    >
      <div className="fixed w-[700px] left-0 right-0 bottom-0 bg-white max-h-[500px] top-[60px] overflow-hidden my-0 mx-auto rounded-lg">
        <div className="h-[45px]  relative flex items-center justify-center border-b border-solid">
          <span className="uppercase font-bold">Chọn loại bất động sản</span>
          <div className="cursor-pointer bg-left_arrow_bg absolute bg-center top-0 left-0 w-[45px] h-[45px] bg-50% bg-no-repeat "></div>
        </div>
        <div className="w-[calc(100% - 40px)] overflow-auto overflow-y-auto overscroll-contain py-[10px] px-[25px] ">
          <div className="">
            <ul className="list-none">
              {content?.slice(0, -2).map((item, index) => {
                return (
                  <li
                    key={item.id}
                    className="hover:text-[#007aff] relative py-[12px] px-[10px] border-solid border-b cursor-pointer text-[1.1rem]"
                  >
                    <input
                      type="radio"
                      name={name}
                      id={item.code}
                      value={item.code}
                      className="accent-[#007aff]"
                      checked={index === index}
                    ></input>
                    <label
                      htmlFor={item.code}
                      className="pl-4 font-medium"
                      style={{
                        color: index === 0 ? '#007aff  ' : 'inherit ',
                      }}
                    >
                      {item.value}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
