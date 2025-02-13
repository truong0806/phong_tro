import React, { useEffect, useState } from 'react';
import { DepositHistoryTable } from '../components';
import { usePathname } from '../../../ultils/common/usePathname';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/action';

const DepositHistory = () => {
  const dispatch = useDispatch();
  const pageTitle = usePathname();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      // dispatch(actions.getUser());
      dispatch(actions.getHistoryRecharge());
      setLoading(true);
    }, 1000);
  }, []);
  return (
    <div>
      <div className=" items-center  pb-1 lex justify-between ">
        <h1 className="text-[2rem] mt-2 py-[1rem] ">{pageTitle[0].text}</h1>
        <div className="flex gap-1 justify-end text-[0.9rem]"></div>
      </div>
      <div className="border-b-2"></div>
      <DepositHistoryTable loading={loading} />
    </div>
  );
};

export default DepositHistory;
