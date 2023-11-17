import React, {  useState } from 'react';
import { promotionRechange, depositMethod } from '../../../../ultils/constains';
import { useLocation } from 'react-router-dom';
import AlertBox from '../../components/AlertBox';
import CurrencyInput from 'react-currency-input-field';
import { Button } from '../../../../components';
import icons from '../../../../ultils/icons';
import { apiCreatePayment } from '../../../../service/rechange';

const { FaChevronRight } = icons;

const PageRechargePage = () => {
  const location = useLocation();
  const [payload, setPayload] = useState({
    amount: '',
  });
  const [redirectUrl, setRedirectUrl] = useState(null);
  const dataPaymentMethod = depositMethod?.filter((data) => {
    return (
      data.path ===
      location.pathname.split('/')[location.pathname.split('/').length - 1]
    );
  });
  if (redirectUrl) {
    window.location.href = redirectUrl;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const finalPayload = {
      ...payload,
      bankCode: dataPaymentMethod[0].vnp_BankCode,
    };
    const respones = await apiCreatePayment(finalPayload);
    if (respones.data.err === 0) {
      setRedirectUrl(respones.data.url);
    }
    console.log(
      '🚀 ~ file: PageRechargePage.js:31 ~ handleSubmit ~ respones:',
      respones
    );
  };

  return (
    <div>
      <div className=" items-center  pb-2 mb-3 ">
        <h1 className="text-[2rem] mt-2 py-[1rem]">
          {dataPaymentMethod[0].title}
        </h1>
        <div className="border-b-2"></div>
      </div>
      <AlertBox
        styleUser={'user'}
        data={promotionRechange}
        boxStyle={
          'bg-[#d1ecf1;] text-[#0c5460] border-[1px] rounded-[0.25rem] border-[#bee5eb]'
        }
      />
      <AlertBox
        styleUser={'newuser'}
        data={promotionRechange}
        boxStyle={
          'bg-[#f8d7da;] text-[#721c24] border-[1px] rounded-[0.25rem] border-[#f5c6cb]'
        }
      />
      <div className="flex flex-row mb-[1rem]">
        <div className="w-9/12">
          <form>
            <h3 className="mt-[1.5rem] mb-[1rem]">Chọn số tiền cần nạp</h3>
            <div className="mb-[1rem]">
              <p className="mb-[1rem]">Chọn nhanh số tiền cần nạp</p>
              <div className="flex flex-wrap gap-[1.5rem]">
                <div>
                  <input
                    className="mr-[0.3125rem]"
                    type="radio"
                    name="amount"
                    id="radio50000"
                    value="50000"
                    defaultChecked={true}
                    onChange={(e) => setPayload({ amount: e.target.value })}
                  ></input>
                  <label>50.000 đ</label>
                </div>
                <div>
                  <input
                    className="mr-[0.3125rem]"
                    type="radio"
                    name="amount"
                    id="radio100000"
                    value="100000"
                    onChange={(e) => setPayload({ amount: e.target.value })}
                  ></input>
                  <label>100.000 đ</label>
                </div>
                <div>
                  <input
                    className="mr-[0.3125rem]"
                    type="radio"
                    name="amount"
                    id="radio200000"
                    value="200000"
                    onChange={(e) => setPayload({ amount: e.target.value })}
                  ></input>
                  <label>200.000 đ</label>
                </div>
                <div>
                  <input
                    className="mr-[0.3125rem]"
                    type="radio"
                    name="amount"
                    id="radio500000"
                    value="500000"
                    onChange={(e) => setPayload({ amount: e.target.value })}
                  ></input>
                  <label>500.000 đ</label>
                </div>
                <div>
                  <input
                    className="mr-[0.3125rem]"
                    type="radio"
                    name="amount"
                    id="radio1000000"
                    value="1000000"
                    onChange={(e) => setPayload({ amount: e.target.value })}
                  ></input>
                  <label>1.000.000 đ</label>
                </div>
                <div>
                  <input
                    className="mr-[0.3125rem]"
                    type="radio"
                    name="amount"
                    id="radio20000000"
                    value="2000000"
                    onChange={(e) => setPayload({ amount: e.target.value })}
                  ></input>
                  <label>2.000.000 đ</label>
                </div>
                <div>
                  <input
                    className="mr-[0.3125rem]"
                    type="radio"
                    name="amount"
                    id="radio50000000"
                    value="5000000"
                    onChange={(e) => setPayload({ amount: e.target.value })}
                  ></input>
                  <label>5.000.000 đ</label>
                </div>
              </div>
              <div className="form-group mt-4">
                <p className="mt-[1.5rem] mb-[1rem] font-normal">
                  Hoặc nhập số tiền cần nạp
                </p>
                <div className="flex flex-row">
                  <div className="w-5/12">
                    <div className="flex flex-row">
                      <CurrencyInput
                        className="focus:ring-[rgba(0,123,255,.25)] focus:border-[#80bdff] rounded-l-[0.25rem]  border-[#ced4da] h-full px-[0.75rem] text-[1rem]"
                        id="validation-example-2-field"
                        placeholder="1,234,567"
                        allowDecimals={false}
                        step={10}
                        value={payload?.amount}
                        onValueChange={(value) => {
                          setPayload({ amount: value });
                        }}
                      />
                      <div className="center-xy bg-[#e9ecef] border-[1px] border-[#ced4da] rounded-[0.25rem]">
                        <span className="px-[0.375rem] text-[1rem]">VNĐ</span>
                      </div>
                    </div>
                    <span className="js-price-text hidden"></span>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="w-full">
            <Button
              onClick={(event) => {
                handleSubmit(event);
              }}
              text={'Tiếp tục'}
              IcAfter={FaChevronRight}
              width={
                'w-6/12 bg-[#007bff] hover:bg-[#0069d9] border-[#007bff] text-[#fff] px-[0.75rem] py-[0.375rem]'
              }
            />
          </div>
          {redirectUrl && <a href={redirectUrl}>Payment URL</a>}
        </div>

        <div className="w-3/12 h-[200px] ml-[10px]  flex flex-col">
          <div className="border rounded-sm bg-[#fff] mb-[15px]">
            <div className="p-[1.25rem] ">
              <span className="">Số dư tài khoản</span>
              <h3 className="mt-2 text-[#28a745] text-[1.75rem] font-medium">
                <strong>0đ</strong>
              </h3>
            </div>
          </div>
          <div className="border rounded-sm bg-[#fff]">
            <div className="px-[0.65rem] py-[0.3rem] text-white flex flex-row bg-[#6c757d] mb-[5px] items-center justify-center">
              <span>Lịch sử nạp tiền</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className="border rounded-sm bg-[#fff]">
            <div className="px-[0.65rem] py-[0.3rem] text-white flex flex-row  bg-[#6c757d] mb-[5px] items-center justify-center ">
              <span>Lịch sử thanh toán</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className="border rounded-sm bg-[#fff]">
            <div className="px-[0.65rem] py-[0.3rem] text-white flex flex-row bg-[#6c757d] mb-[5px] items-center justify-center">
              <span>Bảng giá dịch vụ</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="feather feather-chevron-right"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      <AlertBox
        styleUser={'alert'}
        data={promotionRechange}
        boxStyle={
          'my-[3rem] bg-[#f8d7da;] text-[#721c24] border-[1px] rounded-[0.25rem] border-[#f5c6cb]'
        }
      />
    </div>
  );
};

export default PageRechargePage;
