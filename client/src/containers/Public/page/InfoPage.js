import React, { useEffect, useState } from 'react';
import {
  DemoList,
  Header,
  Navigation,
  PriceList,
  ScrollTop,
  Support,
  WhyUs,
} from '..';
import { useDispatch, useSelector } from 'react-redux';
import { PropagateLoader } from 'react-spinners';
import { Loading, PopupSupport } from '../../../components';
import * as actions from '../../../store/action';

const InfoPage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      dispatch(actions.getCategories());
      setIsLoading(true);
    }, 1000);
    //linkRef.current.scrollIntoView({ behivior: 'smooth', block: 'start' });
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <div className="w-screen flex-col items-left bg-white ">
          <div className="w-full flex flex-col justify-center items-center my-[10px] ">
            <PriceList />
            <DemoList />
          </div>
          <ScrollTop position={'bottom-[115px]'} />
          <PopupSupport />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <Loading />
        </div>
      )}
    </>
  );
};

export default InfoPage;
