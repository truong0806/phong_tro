import React, { useState } from 'react';
import { DepositHistoryTable } from '../components';
import { usePathname } from '../../../ultils/common/usePathname';

const DepositHistory = () => {
  const pageTitle = usePathname();
  const [loading] = useState(true);
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
