import React from 'react';
import 'lazysizes';
import RelatePostItem from './RelatePostItem';
const RelatePostSideBar = ({ content }) => {
  return (
    <div>
      <li
        className="flex flex-col items-center justify-between  pb-[20px]"
        key={'a'}
      >
        {content.length > 0 &&
          content.slice(0, 10).map((item) => {
            // const has_video_Class =
            //   ? 'sticky top-0 z-10 bg-secondary1 text-white'
            //   : 'bg-secondary1 text-white'

            return <RelatePostItem item={item} />;
          })}
      </li>
    </div>
  );
};
export default RelatePostSideBar;
