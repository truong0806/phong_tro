import React from 'react';

function PopupSearch() {
  return (
    <div>
      <div className="filter-popup js-filter-popup js-filter-popup-estate-type">
        <div className="filter-popup-header">
          <span className="header-label">Chọn loại bất động sản</span>
          {' '}
          <div className="popup-close js-filter-popup-close">Đóng</div>
        </div>
        {' '}
        <div className="filter-popup-content">
          <div id="filter-popup-estate-type-option" className="filter-list-option">
            <ul>
              <li className="selected">Phòng trọ, nhà trọ</li>
              <li className="">Nhà thuê nguyên căn</li>
              <li className="">Cho thuê căn hộ</li>
              <li className="">Cho thuê căn hộ mini</li>
              <li className="">Cho thuê căn hộ dịch vụ</li>
              <li className="">Tìm người ở ghép</li>
              <li className="">Cho thuê mặt bằng</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupSearch;
