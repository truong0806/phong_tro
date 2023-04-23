import React from 'react'

const PopupSearch = () => {
  return (
    <div>
      <div class="filter-popup js-filter-popup js-filter-popup-estate-type">
        <div class="filter-popup-header">
          <span class="header-label">Chọn loại bất động sản</span>{' '}
          <div class="popup-close js-filter-popup-close">Đóng</div>
        </div>{' '}
        <div class="filter-popup-content">
          <div id="filter-popup-estate-type-option" class="filter-list-option">
            <ul>
              <li class="selected">Phòng trọ, nhà trọ</li>
              <li class="">Nhà thuê nguyên căn</li>
              <li class="">Cho thuê căn hộ</li>
              <li class="">Cho thuê căn hộ mini</li>
              <li class="">Cho thuê căn hộ dịch vụ</li>
              <li class="">Tìm người ở ghép</li>
              <li class="">Cho thuê mặt bằng</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupSearch
