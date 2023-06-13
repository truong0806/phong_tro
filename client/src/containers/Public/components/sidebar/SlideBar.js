import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../store/action';
import ItemSidebar from './ItemSidebar';

function SlideBar({ setLoading }) {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getCategories());
    dispatch(actions.getPosts());
  }, [dispatch]);
  return (
    <div>
      <ItemSidebar header="Danh mục cho thuê" content={categories} />
      <ItemSidebar
        setLoading={setLoading}
        header="Xem theo giá"
        type="priceCode"
        content={prices}
        isDouble
      />
      <ItemSidebar
        setLoading={setLoading}
        type="areaCode"
        header="Xem theo diện tích"
        content={areas}
        isDouble
      />
      <ItemSidebar header="Tin mới đăng" content={posts} isListPost />
      <ItemSidebar header="Bài viết mới" />
      <ItemSidebar header="Có thể bạn quan tâm" />
    </div>
  );
}

export default SlideBar;
