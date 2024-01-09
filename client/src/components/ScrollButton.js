import React from 'react';

const ScrollButton = ({
  targer,
  text,
  bgcolor,
  textColor,
  IcBefor,
  IcAfter,
  fontW,
  IcBeforSize,
  IcAfterSize,
  ColorIcon,
  onClick,
  width,
  height,
  margin,
  padding,
  bfIcon,
  After,
  onKeyDown,
}) => {
  const handleClick = (e) => {
    const element = document.getElementById(targer);
    const offset = -100;
    if (element) {
      // element.scrollIntoView({ behavior: 'smooth' });
      const scrollToPosition = element.offsetTop + offset;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <button
        type="button"
        className={`cursor-pointer px-2 ${margin}  ${padding} ${bgcolor} ${textColor} ${fontW} ${width} ${height} outline-none rounded-md  lg:flex items-center justify-center gap-1`}
        onClick={(e) => {
          handleClick(e);
        }}
        onKeyDown={onKeyDown}
      >
        <span className={bfIcon}>
          {IcBefor && <IcBefor size={IcBeforSize} />}
        </span>
        <span>{text}</span>
        <span>
          {IcAfter ? <IcAfter size={IcAfterSize} color={ColorIcon} /> : After}
        </span>
      </button>
    </div>
  );
};

export default ScrollButton;
