import React, { useState } from 'react';

const CopyButton = ({ valueCopy, text }) => {
  const [copyNotification, setCopyNotification] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(valueCopy);
    setCopyNotification(true);
    setTimeout(() => {
      setCopyNotification(false);
    }, 1000);
  };

  return (
    <div onClick={copyToClipboard} className=" cursor-pointer w-full">
      {copyNotification ? (
        <span
          className={`${
            copyNotification ? '' : 'hidden'
          } tracking-tight text-green-500`}
        >
          Đã copy
        </span>
      ) : (
        <span className={`text-ellipsis overflow-hidden w-full `}>{text}</span>
      )}
    </div>
  );
};

export default CopyButton;
