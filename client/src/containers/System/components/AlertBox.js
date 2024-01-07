import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const AlertBox = ({ styleUser, data, boxStyle }) => {
  const location = useLocation();
  const today = new Date();

  const filteredPromotions = data.filter((promo) => {
    const expireDate = new Date(promo.expireday.split('/').reverse().join('-'));
    return expireDate >= today;
  });

  return (
    <div>
      {filteredPromotions?.map((item, index) => {
        if (
          item.page === location.pathname.split('/')[3] &&
          item.styleUser === styleUser
        ) {
          return (
            <div key={index}>
              <div
                className={`px-[1.25rem] mb-[1rem] py-[0.75rem] ${boxStyle}`}
              >
                <h3>{item.h3}</h3>
                <div>
                  {item.content.map((htmlContent, index) => (
                    <p
                      className="mb-[1rem]"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default AlertBox;
