/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import icons from '../../../../ultils/icons';
import 'lazysizes';
import * as actions from '../../../../store/action';
import {
  Link,
  createSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RelatePostSideBar from './RelatePostSideBar';
const { BsChevronRight } = icons;
var slug = require('slug');

const ItemSidebar = ({
  header,
  content,
  isDouble,
  isListPost,
  type,
  setLoading,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const formatContent = () => {
    const odd = content?.filter((item, index) => index % 2 !== 0);
    const even = content?.filter((item, index) => index % 2 === 0);
    const formatContent = odd?.map((item, index) => {
      return {
        left: even?.find((item2, index2) => index2 === index),
        right: item,
      };
    });
    return formatContent;
  };

  const handleFilterPost = (code) => {
    setLoading(false);
    dispatch(actions.ClearPostsLimit());
    setLoading(true);
    navigate({
      pathname: location.pathname,
      search: createSearchParams({ [type]: code }).toString(),
    });
  };
  return (
    <div className="border border-[#dedede] shadow-md rounded-md border-solid bg-white p-5 mb-5">
      <section>
        <div className="mb-4 w-full">
          <span className="text-[18.2px] font-bold">{header}</span>
        </div>
        <ul>
          {!isListPost && (
            <div>
              {!isDouble &&
                content?.length > 0 &&
                content?.slice(0, 5).map((item) => {
                  return (
                    <Link
                      to={`/${slug(item.value)}`}
                      className="flex items-center justify-between border-dashed border-b-[1px]"
                      key={item.code}
                    >
                      <h2>
                        <a
                          href="#"
                          className="flex items-center justify-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                        >
                          <BsChevronRight size={14} style={{ opacity: 0.3 }} />
                          {item.value}
                        </a>
                      </h2>

                      <span className="text-xs text-[#aaa]">
                        ({item.count})
                      </span>
                    </Link>
                  );
                })}
              {isDouble && (
                <div className="flex flex-col gap-2">
                  {content?.length > 0 &&
                    formatContent(content).map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="flex items-center justify-around">
                            <li className="flex cursor-pointer flex-1 items-center border-dashed border-b-[1px]">
                              <h2>
                                <a
                                  onClick={() =>
                                    handleFilterPost(item.left.code)
                                  }
                                  href="#"
                                  className="flex   items-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                                >
                                  <BsChevronRight
                                    size={14}
                                    style={{ opacity: 0.3 }}
                                  />
                                  {item.left.value}
                                </a>
                              </h2>
                            </li>
                            <li className="flex flex-1 cursor-pointer items-center justify-between border-dashed border-b-[1px]">
                              <h2>
                                <a
                                  href="#"
                                  onClick={() =>
                                    handleFilterPost(item.right.code)
                                  }
                                  className="flex  items-center gap-1 py-[5px] leading-[1.4rem] font-normal text-sm"
                                >
                                  <BsChevronRight
                                    size={14}
                                    style={{ opacity: 0.3 }}
                                  />
                                  {item.right.value}
                                </a>
                              </h2>
                            </li>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          )}
          {isListPost && <RelatePostSideBar content={content} />}
        </ul>
      </section>
    </div>
  );
};

export default ItemSidebar;
