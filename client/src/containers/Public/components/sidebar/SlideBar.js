import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../store/action';
import ItemSidebar from './ItemSidebar';

function SlideBar({ setLoading, loading, handleLoading }) {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const location = useLocation();
  console.log(
    '🚀 ~ file: SlideBar.js:10 ~ SlideBar ~ location:',
    location.pathname
  );
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPosts());
  }, [dispatch]);
  return (
    <div className="w-full">
      {location.pathname === '/' ? (
        <ItemSidebar
          length={5}
          className={`hidden`}
          header="Danh mục cho thuê"
          content={categories}
        />
      ) : (
        ''
      )}
      <ItemSidebar
        className={`hidden`}
        setLoading={setLoading}
        loading={loading}
        header="Xem theo giá"
        type="priceCode"
        content={prices}
        isDouble
      />
      <ItemSidebar
        className={`hidden`}
        setLoading={setLoading}
        type="areaCode"
        header="Xem theo diện tích"
        content={areas}
        isDouble
      />
      <ItemSidebar
        listNew
        listNewPostEff={`flex-row`}
        header="Tin mới đăng"
        content={posts}
        isListPost
      />
      <ItemSidebar header="Bài viết mới" />
      <ItemSidebar header="Có thể bạn quan tâm" />
    </div>
  );
}

export default SlideBar;
