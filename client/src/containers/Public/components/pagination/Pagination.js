import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListNumber } from '../../index';
import { useSearchParams } from 'react-router-dom';

function Pagination() {
  const [page] = useSearchParams('page');
  const { count, posts_limit } = useSelector((state) => state.post);
  const [arrpage, setArrPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(+page || 1);
  const [maxPage, setMaxPage] = useState(0);
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);
  const postLength = process.env.REACT_APP_LIMIT_POST_NUMBER;

  useEffect(() => {
    let maxPage = Math.ceil(count / postLength) + 1;
    setMaxPage(maxPage);
    let end = currentPage + 2 > maxPage ? maxPage : currentPage + 2;
    let start = currentPage - 2 <= 1 ? 1 : currentPage - 2;
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false);
    currentPage <= 3 ? setIsHideStart(true) : setIsHideStart(false);
  }, [count, posts_limit, currentPage, postLength, maxPage]);

  return (
    <div
      className={`flex items-center gap-1 justify-center mt-[20px] mb-[50px] `}
    >
      {!isHideStart && (
        <ListNumber number={1} setCurrentPage={setCurrentPage} />
      )}
      {!isHideStart && currentPage !== 4 && <ListNumber number={'...'} />}
      {arrpage.length > 0 &&
        arrpage.map((item) => (
          <ListNumber
            number={item}
            key={item}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
      {!isHideEnd && <ListNumber number={'...'} />}
      {!isHideEnd && (
        <ListNumber
          text="»»"
          number={maxPage}
          setCurrentPage={setCurrentPage}
          type="end"
        />
      )}
    </div>
  );
}

export default Pagination;
