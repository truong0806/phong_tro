import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ListNumber } from '../../index';
import { useSearchParams } from 'react-router-dom';

function Pagination({count, posts_limit}) {
  const [arrpage, setArrPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);
  const postLength = process.env.REACT_APP_LIMIT_POST_NUMBER;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let page = searchParams.get('page');
    page && +page !== currentPage && setCurrentPage(+page);
    !page && setCurrentPage(1);
  },[searchParams, currentPage]);

  useEffect(() => {
    let maxPage = Math.ceil(count / postLength);
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
      {!isHideStart && currentPage !== 4 && <ListNumber text={'...'} />}
      {arrpage.length > 0 &&
        arrpage.map((item) => (
          <ListNumber
            number={item}
            key={item}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ))}
      {!isHideEnd && <ListNumber text={'...'} />}
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
