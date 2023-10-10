import React, { useState } from 'react';
import DepositHistoryTable from '../components/DepositHistory/DepositHistoryTable';

const PaymentHistory = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <div className=" items-center  pb-1 lex justify-between ">
        <h1 className="text-[2rem] mt-2 py-[1rem] ">Lịch sử nạp tiền</h1>
        <div className="flex gap-1 justify-end text-[0.9rem]"></div>
      </div>
      <div className="border-b-2"></div>
      <DepositHistoryTable loading={loading} />
    </div>
  );
};

export default PaymentHistory;
