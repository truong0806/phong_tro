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
    let searchParamsObject = {};
    params?.forEach((i) => {
      if (
        Object.keys(searchParamsObject)?.some(
          (item) => item === i[0] && item !== 'page'
        )
      ) {
        searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
      } else {
        searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
      }
    });
    return searchParamsObject;
  };

  const handleChangePage = () => {
    if (!(+number === '...')) {
      setCurrentPage(+number);
      console.log("🚀 ~ file: ListNumber.js:43 ~ handleChangePage ~ number:", number)
      navigate({
        pathname: location.pathname,
        search: createSearchParams(append(entries)).toString(),
      });
    }
  };
  return (
    <div
      className={
        +number === +currentPage
          ? `${active} ${number === '...' ? 'cursor-text' : 'cursor-pointer'}`
          : `${notActive} ${
              number === '...' ? 'cursor-text' : 'cursor-pointer'
            }`
      }
      onClick={handleChangePage}
    >
      {text || number}
    </div>
  );
}

export default ListNumber;
