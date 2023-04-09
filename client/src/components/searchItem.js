import React, { memo } from 'react'

const searchItem = ({ IconBefore, IconAfter, text, fontWeight }) => {
  return (
    <div className="bg-[#fff] py-2 px-4 w-full rounded-md text-gray-400 text-[.95rem] cursor-pointer flex items-center justify-between">
      <div className="flex items-center gap-1">
        {IconBefore}

        <span className={fontWeight && 'font-bold text-black'}> {text}</span>
      </div>
      {IconAfter}
    </div>
  )
}

export default memo(searchItem)
