import React from 'react';

const Slider_track = ({
  name,
  percent1,
  percent2,
  setPercent1,
  setPercent2,
  convert100toTarget,
  handleClickTrack,
  activedEl,
  setActivedEl,
  setSelectedValue,
}) => {
  return (
    <div className="flex flex-col items-center justify-center relative hover:cursor-pointer">
      <div className="z-30 absolute top-[-48px] font-bold text-[1.5rem] text-orange-600 hover:cursor-pointer">
        {percent1 === 100 && percent2 === 100
          ? `Trên ${convert100toTarget(percent1, name)} ${
              name === 'prices' ? 'triệu' : 'm2'
            }`
          : percent1 === 0 && percent2 === 0
          ? `${convert100toTarget(percent1, name)} ${
              name === 'prices' ? 'triệu' : 'm2'
            }`
          : `Từ ${
              percent1 <= percent2
                ? convert100toTarget(percent1, name)
                : convert100toTarget(percent2, name)
            } - ${
              percent2 >= percent1
                ? convert100toTarget(percent2, name)
                : convert100toTarget(percent1, name)
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
          setSelectedValue((prev) => ({
            ...prev,
            [name]: {
              [`${name}Number`]: [0,0],
            },
          }));
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
          setSelectedValue((prev) => ({
            ...prev,
            [name]: {
              [`${name}Number`]: [0,0],
            },
          }));
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
  );
};

export default Slider_track;
