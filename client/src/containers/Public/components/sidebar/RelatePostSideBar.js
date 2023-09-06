import React from 'react';
import 'lazysizes';
import RelatePostItem from './RelatePostItem';
const RelatePostSideBar = ({ content, listNewPostEff, listNew }) => {
  return (
    <div>
      <li
        className={`${
          listNew && listNewPostEff
        } overflow-hidden lg:max-w-[750px]  lg:w-full  gap-8 lg:gap-1  flex lg:flex-col items-center justify-between pb-[10px]`}
        key={'a'}
      >
        {content.length > 0 &&
          content.slice(0, 10).map((item, index) => {
            // const has_video_Class =
            //   ? 'sticky top-0 z-10 bg-secondary1 text-white'
            //   : 'bg-secondary1 text-white'

            return <RelatePostItem 
            listNewPostEff
            listNew item={item} key={index} />;
          })}
      </li>
    </div>
  );
};
export default RelatePostSideBar;
