import React from 'react';
import 'lazysizes';
import RelatePostItem from './RelatePostItem';
const RelatePostSideBar = ({ content, listNewPostEff, listNew }) => {
  return (
    <div>
      <li
        className={`${
          listNew && listNewPostEff
        } overflow-auto max-w-[690px] gap-2  flex md:flex-col items-center justify-between pb-[20px]`}
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
