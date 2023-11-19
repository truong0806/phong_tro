import React from 'react';
import { demoData } from '../../../../ultils/constains';

const DemoList = () => {
  const genaralStar = (number) => {
    const star = [];
    for (let i = 0; i < number; i++) {
      star.push(
        <img
          src="https://phongtro123.com/images/mobile/star2.png"
          class="w-[18px]"
        ></img>
      );
    }
    return star;
  };

  return (
    <div className="w-full">
      <section className="py-[50px]">
        <div className="">
          <div className="text-center mb-[50px] text-[2rem] font-bold">
            Minh họa tin đăng
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[1.2rem] min-w-[700px] mx-[300px]">
            {demoData.map((item, index) => {
              return (
                <div
                  id={`targetElement${index}`}
                  className="pt-[10px] mb-[70px]"
                >
                  <div className="mb-[15px] flex flex-col font-bold">
                    {item.title}
                    <div className="flex flex-row">
                      {genaralStar(item.star)}
                    </div>
                  </div>
                  <p
                    className="my-[17px] leading-[1.5]"
                    dangerouslySetInnerHTML={{ __html: item.des }}
                  ></p>
                  {item.images.map((img) => {
                    return <img alt={item.title} src={img}></img>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoList;
