import React from 'react';
import { demoData, priceListContent } from '../../../../ultils/constains';
import { Button } from '../../../../components';
import ScrollButton from '../../../../components/ScrollButton';

const PriceList = () => {
  const scrollButton = [];
  for (let i = 0; i < 5; i++) {
    scrollButton.push(
      <td className="py-[10px] px-[15px]">
        <ScrollButton
          targer={`targetElement${i}`}
          text={'Xem demo'}
          bgcolor={
            'mt-2 w-[100%] bg-[#3961fb] h-[40px] rounded-[5px] text-white font-bold border-[#3961fb] cursor-pointer'
          }
        />
      </td>
    );
  }

  

  return (
    <div className="">
      <h1
        id="targetElement"
        className="text-center flex justify-center items-center text-[2rem] p-10 font-bold"
      >
        Giới thiệu phongtro123.com
      </h1>
      <div className="mx-10 flex flex-col items-center justify-center">
        <section className="p-8 shadow-md">
          <div className="text-[1rem] ">
            {priceListContent[0].content1.map((item, index) => {
              return (
                <p
                  className="my-[14px]"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              );
            })}
          </div>
        </section>
        <section className="py-[50px] flex flex-col items-center justify-center">
          <div className="flex justify-center items-center flex-col mb-[10px]">
            <h1 className="text-center  text-[2rem] p-2 font-bold">
              Bảng giá dịch vụ
            </h1>
            <h2>Áp dụng từ ngày 19/01/2023</h2>
          </div>
          <div className="text-center">
            <div className="m-[14px]">
              <p className="m-[14px]">
                Phongtro123 xin quý khách hàng thân thương được phép điều chỉnh
                giá dịch vụ.
              </p>
              <p>
                VÌ - Giờ đây sau hơn 7 năm chúng tôi mong mỏi hơn sự đồng lòng,
                thấu hiểu từ phía khách hàng thân thương. Chúng tôi luôn mong
                muốn đem lại trải nghiệm tốt hơn, hoàn hảo hơn cho quý khách
                hàng trong suốt thời gian gắn bó. Chúng tôi quyết định điều
                chỉnh giá, để tồn tại và trên cả là phục vụ hết mình vì quý
                khách hàng đã, đang và sẽ đồng hành tại website.
              </p>
            </div>
          </div>
          <table className="w-full mt-5 border-separate border-spacing-x-4  text-[0.95rem]">
            <thead>
              <tr className="h-3">
                <th className="w-1/6  p-4"></th>
                {priceListContent[1]?.columnsPriceList.map((item, index) => {
                  console.log(
                    '🚀 ~ file: PriceList.js:50 ~ {priceListContent[1]?.columnsPriceList.map ~ item:',
                    item
                  );
                  return (
                    <th
                      className={`w-1/6 mx-[10px] h-8 px-[15px] py-[10px] text-white font-bold ${item.style}`}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {priceListContent[1]?.pricesListData.map((item, index) => {
                console.log(
                  '🚀 ~ file: PriceList.js:50 ~ {priceListContent[1]?.columnsPriceList.map ~ item:',
                  item
                );
                return (
                  <tr className="">
                    <td
                      className={` py-[10px] ${item.styleRow} border-b-2 font-bold align-top`}
                      dangerouslySetInnerHTML={{ __html: item.rowTitle }}
                    ></td>
                    <td
                      className={`p-5 ${item.styleRow} border-b-2 align-top`}
                      dangerouslySetInnerHTML={{ __html: item.dataTinVip }}
                    ></td>
                    <td
                      className={`p-5 ${item.styleRow} border-b-2 align-top`}
                      dangerouslySetInnerHTML={{ __html: item.dataTinVip1 }}
                    ></td>
                    <td
                      className={`p-5 ${item.styleRow} border-b-2 align-top`}
                      dangerouslySetInnerHTML={{ __html: item.dataTinVip2 }}
                    ></td>
                    <td
                      className={`p-5 ${item.styleRow} border-b-2 align-top`}
                      dangerouslySetInnerHTML={{ __html: item.dataTinVip3 }}
                    ></td>
                    <td
                      className={`p-5 ${item.styleRow} border-b-2 align-top`}
                      dangerouslySetInnerHTML={{ __html: item.dataTinThuong }}
                    ></td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                {scrollButton}
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      
    </div>
  );
};

export default PriceList;
