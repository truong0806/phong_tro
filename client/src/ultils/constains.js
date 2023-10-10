export const path = {
  HOME: '/*',
  HOME__PAGE: ':page',
  AUTH: '/auth',
  REGISTER: 'register',
  FORGOTPASSWORD: 'forgotpassword',
  LOGIN: 'login',
  CHO_THUE_CAN_HO: 'cho-thue-can-ho',
  CHO_THUE_MAT_BANG: 'cho-thue-mat-bang',
  NHA_CHO_THUE: 'nha-cho-thue',
  CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
  TIM_NGUOI_O_GHEP: 'tim-nguoi-o-ghep',
  DETAIL_POST_TITLE__POSTID: 'chi-tiet/:title/:postid',
  SEARCH: 'search',
  SYSTEM: '/quan-ly/*',
  CREATE_NEW_POST: 'dang-tin-moi',
  MANAGE_POST: 'quan-ly-tin-dang',
  EDIT_PROFILE: 'cap-nhat-thong-tin-ca-nhan',
  RECHARGE: 'nap-tien',
  CHANGE_PHONE_NUMBER: 'cap-nhat-thong-tin-ca-nhan/doi-so-dien-thoai',
  CHANGE_PASSWORD: 'cap-nhat-thong-tin-ca-nhan/doi-mat-khau',
  DEPOSIT_HISTORY: 'lich-su-nap-tien',
  PAYMENT_HISTORY: 'lich-su-thanh-toan',
};

export const text = {
  HOME_TITLE: 'Kênh thông tin Phòng Trọ số 1 Việt Nam',
  PAGE_DESCRIPTION:
    'Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.',
  NOTE_ALERT: `Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức năng
  ĐẨY TIN / GIA HẠN / NÂNG CẤP VIP trong mục QUẢN LÝ TIN ĐĂNG để làm
  mới, đẩy tin lên cao thay vì đăng tin mới. Tin đăng trùng nhau sẽ
  không được duyệt.`,
};

export const location = [
  {
    name: 'Phòng trọ Hồ Chí Minh',
    image: 'https://phongtro123.com/images/location_hcm.jpg',
    id: 'hcm',
  },
  {
    name: 'Phòng trọ Hà nội',
    image: 'https://phongtro123.com/images/location_hn.jpg',
    id: 'hn',
  },
  {
    name: 'Phòng trọ Đà Nẵng',
    image: 'https://phongtro123.com/images/location_dn.jpg',
    id: 'dn',
  },
];
export const luuY = [
  'Nội dung phải viết bằng tiếng Việt có dấu',
  'Tiêu đề tin không dài quá 100 kí tự',
  'Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.',
  'Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.',
  'Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!',
];
export const depositMethod = [
  {
    id: 0,
    value: 'Chuyển khoản',
    imgUrl: 'https://phongtro123.com/images/bank-transfer.png',
  },
  {
    id: 1,
    value: 'Thẻ ATM Internet Banking',
    imgUrl: 'https://phongtro123.com/images/payment-method.svg',
  },
  {
    id: 2,
    value: 'Thẻ tín dụng quốc tế',
    imgUrl: 'https://phongtro123.com/images/credit-card.png',
  },
  {
    id: 3,
    value: 'MOMO',
    imgUrl: 'https://phongtro123.com/images/momo.png',
  },
  {
    id: 4,
    value: 'ZaloPay',
    imgUrl: 'https://phongtro123.com/images/zalopay.png',
  },
  {
    id: 5,
    value: 'ShopeePay',
    imgUrl: 'https://phongtro123.com/images/shopeepay2.svg',
  },
  {
    id: 6,
    value: 'Điểm giao dịch, cửa hàng tiện lợi',
    imgUrl: 'https://phongtro123.com/images/online-store.svg',
  },
  {
    id: 7,
    value: 'QQuét mã QRCode',
    imgUrl: 'https://phongtro123.com/images/qr-code.png',
  },
];

export const postTableTitle = [
  {
    title: 'Mã tin',
  },
  {
    title: 'Ảnh đại diện',
  },
  {
    title: 'Tiêu đề',
  },
  {
    title: 'Giá',
  },
  {
    title: 'Ngày bắt đầu',
  },
  {
    title: 'Ngày hết hạn',
  },
  {
    title: 'Trạng thái',
  },
  {
    title: '',
  },
];
