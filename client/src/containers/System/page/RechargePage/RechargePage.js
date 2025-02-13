import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { depositMethod } from '../../../../ultils/constains';
import { usePathname } from '../../../../ultils/common/usePathname';
import DialogWithAgree from '../../components/DialogWithAgree';
import AccountBalance from '../../components/AccountBalance';

const RechargePage = () => {
  const pageTitle = usePathname();
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState('');
  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">{pageTitle[0].text}</h1>
        <div className="border-b-2"></div>
      </div>
      <div className="w-full flex flex-row mb-[60px]">
        <div className="w-[70%] h-[200px">
          <h3 className="mt-[3rem] mb-[1rem] text-[1.75rem] font-medium">
            Mời bạn chọn phương thức nạp tiền
          </h3>
          <div className="flex flex-wrap  gap-8 basis-1/3 ">
            {depositMethod?.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleClickOpenDialog();
                    setItem(item);
                  }}
                  className="group w-[28%] border rounded-sm mb-[20px] h-[161px] hover:border-[#0074e4] hover:shadow-4xl "
                >
                  <Link
                    to={`${item.path}`}
                    className="w-full h-full text-center flex flex-col"
                  >
                    <div className="h-[120px] w-full flex items-center justify-center ">
                      <img
                        alt="avatar"
                        className="max-w-[160px] max-h-[60px] align-middle"
                        src={item.imgUrl}
                      ></img>
                    </div>
                    <div className="w-full px-0 py-[10px] font-bold text-center bg-[#eee] group-hover:bg-[#0074e4] group-hover:text-white">
                      {item.text}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <AccountBalance />
      </div>
      {open && <DialogWithAgree setOpen={setOpen} open={open} item={item} />}
    </div>
  );
};

export default RechargePage;
