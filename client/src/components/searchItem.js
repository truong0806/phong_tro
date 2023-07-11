import React, { memo } from 'react';

const searchItem = ({
  IconBefore,
  IconAfter,
  text,
  fontWeight,
  onClick,
  defaultText,
  deleteIcon,
}) => {
  const handleDelete = (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling to parent elements
    // Logic to handle the delete icon click event
    console.log('Delete icon clicked!');
  };

  return (
    <div
      onClick={onClick}
      className="bg-[#fff] w-full  text-[13px] py-2 px-3  rounded-md text-gray-400  cursor-pointer flex items-center justify-between"
    >
      <div className="flex items-center gap-1 w-full">
        {IconBefore}
        <span
          className={`${
            fontWeight &&
            'font-bold text-[#007bff]   md:text-black text-[.95rem] '
          } ${
            text === defaultText
              ? ''
              : 'font-bold text-[#007bff]   md:text-black text-[.95rem] '
          } w-[100%] overflow-hidden text-ellipsis whitespace-nowrap text-[.95rem] `}
        >
          {text}
        </span>
      </div>
      <div className={text === defaultText ? '' : 'font-bold text-black'}>
        {text === defaultText ? IconAfter : (
          <span onClick={handleDelete}>{deleteIcon}</span>
        )}
      </div>
    </div>
  );
};

export default memo(searchItem);
