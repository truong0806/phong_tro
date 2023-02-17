import React, { memo } from "react";

const Button = ({
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
  margin
}) => {
  return (
    <button
      type="button"
      className={`py-2 px-2 ${margin} ${bgcolor} ${textColor} ${fontW} ${width} ${height} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      <span>{IcBefor && <IcBefor size={IcBeforSize} />}</span>
      <span>{text}</span>
      <span>{IcAfter && <IcAfter size={IcAfterSize} color={ColorIcon} />}</span>
    </button>
  );
};

export default memo(Button);
