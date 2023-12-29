import React, { useEffect, useState } from 'react';
import 'lazysizes';
import RelatePostItem from './RelatePostItem';
const RelatePostSideBar = ({
  content,
  listNewPostEff,
  listNew,
  postDetailId,
}) => {
  console.log(
    '🚀 ~ file: RelatePostSideBar.js:10 ~ postDetailId:',
    postDetailId
  );
  const [featuredPostsList, setFeaturedPostsList] = useState([]);

  useEffect(() => {
    setFeaturedPostsList([]);
    if (content.length > 0) {
      content.map((item) => {
        if (item.id !== postDetailId) {
          setFeaturedPostsList((prev) => [...prev, item]);
        }
      });
    }
  }, []);

  return (
    <>
      {featuredPostsList?.length > 0 &&
        featuredPostsList?.slice(0, 10).map((item, index) => {
          // const has_video_Class =
          //   ? 'sticky top-0 z-10 bg-secondary1 text-white'
          //   : 'bg-secondary1 text-white'
          return (
            <li
              className={`${
                listNew && listNewPostEff
              } flex py-[10px] border-b-[1px] border-[#eee]`}
              key={'a'}
            >
              <RelatePostItem
                postDetailId={postDetailId}
                listNewPostEff
                listNew
                item={item}
                key={index}
              />
            </li>
          );
        })}
    </>
  );
};
export default RelatePostSideBar;
