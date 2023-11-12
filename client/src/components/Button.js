import { memo } from 'react';

function Button({
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
  padding,bfIcon,After,onKeyDown
}) {
  return (
    <button
      type="button"
      className={` px-2 ${margin}  ${padding} ${bgcolor} ${textColor} ${fontW} ${width} ${height} outline-none rounded-md  lg:flex items-center justify-center gap-1`}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className={bfIcon}>{IcBefor && <IcBefor size={IcBeforSize} />}</span>
      <span>{text}</span>
      <span>{IcAfter ? <IcAfter size={IcAfterSize} color={ColorIcon} /> : After}</span>
    </button>
  );
}

export default memo(Button);
