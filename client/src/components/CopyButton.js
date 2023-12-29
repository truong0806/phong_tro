import React, { useState } from 'react';
import icons from '../ultils/icons';

const { FaRegCopy } = icons;

const CopyButton = ({ valueCopy, text, className, textStyle }) => {
  const [copyNotification, setCopyNotification] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(valueCopy);
    setCopyNotification(true);
    setTimeout(() => {
      setCopyNotification(false);
    }, 1000);
  };

  return (
    <div
      onClick={copyToClipboard}
      className={`${className} cursor-pointer w-full`}
    >
      {copyNotification ? (
        <span
          className={`${
            copyNotification ? '' : 'hidden'
          } tracking-tight text-green-500`}
        >
          Đã copy
        </span>
      ) : (
        <span
          className={`${textStyle} text-ellipsis overflow-hidden w-full flex flex-row gap-1`}
        >
          {text}
          <FaRegCopy />
        </span>
      )}
    </div>
  );
};

export default CopyButton;
