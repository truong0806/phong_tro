import React from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
  useLocation,
} from 'react-router-dom';

function ListNumber({ text, number, currentPage, setCurrentPage }) {
  const [paramsSearch] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  let entries = paramsSearch.entries();
  const active =
    'px-[18px] py-[15px] mr-[3px] w-[48px] h-[48px] mb-[3px] flex justify-center items-center bg-[#e13427] text-white  rounded-md cursor-pointer';
  const notActive =
    'px-[18px] py-[15px] mr-[3px] w-[48px] h-[48px] mb-[3px] flex justify-center items-center bg-white hover:bg-[#ddd]  rounded-md cursor-pointer';

  const append = (entries) => {
    let params = [];
    paramsSearch.append('page', +number);
    for (let entry of entries) {
      params.push(entry);
    }
    let a = {};
    params?.map((i) => (a = { ...a, [i[0]]: i[1] }));
    return a;
  };

  const handLeChangePage = () => {
    if (!(number === '...')) {
      setCurrentPage(+number);
      navigate({
        pathname: location.pathname,
        search: createSearchParams(append(entries)).toString(),
      });
    }
  };
  return (
    <div
      className={+number === +currentPage ? active : notActive}
      onClick={handLeChangePage}
    >
      {text || number}
    </div>
  );
}

export default ListNumber;
