import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import icons from '../../../../ultils/icons';
import { apiGetPostWithLabel } from '../../../../service';
import slug from 'slug';
const { RiHeartLine, RiHeartFill } = icons;

const ListPostWithLabel = () => {
  const location = useLocation();
  const [listPostLabel, setListPostLabel] = useState([]);
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const { posts_detail } = useSelector((state) => state.post);
  useEffect(() => {
    setListPostLabel([]);
  }, [location.pathname]);

  function removeDuplicateItems(data) {
    const uniqueItems = [];
    const seenIds = new Set();

    for (const item of data) {
      const itemId = item.id;
      if (!seenIds.has(itemId)) {
        uniqueItems.push(item);
        seenIds.add(itemId);
      }
    }

    return uniqueItems;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiGetPostWithLabel({
          label: posts_detail[0]?.labels?.value,
        });
        res.data.response.rows.map((post) => {
          if (post.id !== posts_detail[0]?.id) {
            setListPostLabel((prev) => [...prev, post]);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [posts_detail]);
  return (
    <div>
      {removeDuplicateItems(listPostLabel).length > 0 && (
        <section className="p-[20px] mb-[50px] -full bg-white border rounded-[8px] border-[#dedede]">
          <h1 className="text-[1.5rem] font-bold mb-[15px]">
            {posts_detail[0]?.labels?.value}
          </h1>
          <ul>
            {removeDuplicateItems(listPostLabel).length > 0 &&
              removeDuplicateItems(listPostLabel)
                ?.slice(0, 10)
                .map((post, index) => {
                  const image = JSON.parse(post?.images?.image);
                  return (
                    <li
                      key={index}
                      className="py-[15px] border-t-[1px] border-[#ddd] flex"
                    >
                      <figure className="relative w-[170px] h-[160px] ">
                        <Link to={`/chi-tiet/${slug(post?.title)}/${post?.id}`}>
                          <img
                            className="rounded-[3px] w-full h-full object-cover"
                            src={`${image[0]}`}
                          ></img>
                        </Link>
                        <span className="absolute pointer-events-none text-[0.9rem] bottom-2 left-[5px] rounded text-[#fff] py-[3px] px-[5px] bg-[rgba(0,0,0,0.5)]">
                          {`${image.length} ảnh`}
                        </span>
                        <span
                          onMouseEnter={() => {
                            setIsHoverHeart(true);
                          }}
                          onMouseLeave={() => {
                            setIsHoverHeart(false);
                          }}
                          className="z-5 absolute pointer-events-none text-[0.9rem] bottom-2 right-[5px] rounded text-[#fff] py-[3px] px-[5px] "
                        >
                          {isHoverHeart ? (
                            <RiHeartFill size={20} color="red" />
                          ) : (
                            <RiHeartLine size={20} />
                          )}
                        </span>
                      </figure>
                      <div className="w-[70%] relative ml-[15px] ">
                        <h3 className="text-[1rem] font-bold mb-[10px] whitespace-normal ">
                          <Link
                            to={`/chi-tiet/${slug(post?.title)}/${post?.id}`}
                            className="text-[#055699] text-init hover:underline"
                          >
                            {`${post.title}`}
                          </Link>
                        </h3>
                        <div className="h-[20px] mb-[10px]">
                          <span className="text-[1.2rem] font-bold text-[#16c784] mr-[20px] float-left">
                            {`${post.attributes.price}`}
                          </span>
                          <span className="mr-[20px] float-left">18m²</span>
                          <span className="mr-[20px] float-left">
                            <Link className="hover:underline">
                              {`${posts_detail[0]?.labels?.value}`}
                            </Link>
                          </span>
                          <time className="text-[0.9rem] text-[#aaa] mr-0 float-right">
                            Hôm nay
                          </time>
                        </div>
                        <div className="mb-[10px]">
                          <p className="text-[#8a8d91] h-[65px] line-clamp-3 overflow-hidden my-[10px]">
                            {`${JSON.parse(post.description)}`}
                          </p>
                        </div>
                        <div className="text-[#8a8d91] flex flex-row items-center ">
                          <img
                            src="https://phongtro123.com/images/default-user.png"
                            className="rounded-[50%] w-[30px] h-[30px] mr-[5px]"
                          ></img>
                          <span className="">{post?.users?.name}</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ListPostWithLabel;
