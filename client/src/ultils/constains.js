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
  PAYMENT_WITH_INTERNET_BANKING: 'nap-tien/atm-internet-banking',
  PAY_BY_CREADIT_CARD: 'nap-tien/the-tin-dung',
  VNPAY_QR: 'nap-tien/vnpay-qr',
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
    text: 'Chuyển khoản',
    imgUrl: 'https://phongtro123.com/images/bank-transfer.png',
    title: '',
    path: '',
    vnp_BankCode: '',
  },
  {
    id: 1,
    text: 'Thẻ ATM Internet Banking',
    imgUrl: 'https://phongtro123.com/images/payment-method.svg',
    title: 'Thẻ ngân hàng nội địa (ATM Internet Banking)',
    path: 'atm-internet-banking',
    vnp_BankCode: 'VNBANK',
  },
  {
    id: 2,
    text: 'Thẻ tín dụng quốc tế',
    imgUrl: 'https://phongtro123.com/images/credit-card.png',
    title: 'Thẻ tín dụng quốc tế',
    path: 'the-tin-dung',
    vnp_BankCode: 'INTCARD',
  },
  {
    id: 3,
    text: 'VNPAY QR',
    imgUrl:
      'https://res.cloudinary.com/dyafotrxw/image/upload/v1700113119/v4ysvjcmwgavrop8y45h.webp',
    title: 'Thanh toán qua ứng dụng hỗ trợ VNPAYQR',
    path: 'vnpay-qr',
    vnp_BankCode: 'VNPAYQR',
  },
  {
    id: 4,
    text: 'MOMO',
    imgUrl: 'https://phongtro123.com/images/momo.png',
    title: '',
    path: 'momo',
    vnp_BankCode: '',
  },
  {
    id: 5,
    text: 'ZaloPay',
    imgUrl: 'https://phongtro123.com/images/zalopay.png',
    title: '',
    path: 'zalo',
    vnp_BankCode: '',
  },
  {
    id: 6,
    text: 'ShopeePay',
    imgUrl: 'https://phongtro123.com/images/shopeepay2.svg',
    title: '',
    path: 'shopeepay',
    vnp_BankCode: '',
  },
  {
    id: 7,
    text: 'Điểm giao dịch, cửa hàng tiện lợi',
    imgUrl: 'https://phongtro123.com/images/online-store.svg',
    title: '',
    path: 'cua-hang-tien-loi',
    vnp_BankCode: '',
  },
  {
    id: 8,
    text: 'Quét mã QRCode',
    imgUrl: 'https://phongtro123.com/images/qr-code.png',
    title: '',
    path: 'qr-code',
    vnp_BankCode: '',
  },
];
export const dataBank = [
  {
    columnsName: [
      'Ngân hàng',
      'Chủ tài khoản',
      'Số tài khoản',
      'Chi nhánh',
      'Nội dung chuyển khoản',
    ],
    data: [
      {
        id: 0,
        bankName: `<strong style="color: red">VIETCOMBANK</strong>
    - NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN NGOẠI THƯƠNG VIỆT NAM`,
        accountOwner: 'Công ty TNHH LBKCORP',
        accountNumber: '0071001050516',
        branch: 'CN HỒ CHÍ MINH',
        Content: `Nội dung chuyển khoản, bạn ghi rõ: `,
      },
      {
        id: 1,
        bankName: `<strong style="color: red">ACB</strong> - NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN Á CHÂU`,
        accountOwner: 'Công ty TNHH LBKCORP',
        accountNumber: '150590888',
        branch: 'Đông Sài Gòn',
        Content: `Nội dung chuyển khoản, bạn ghi rõ: `,
      },
    ],
  },
];
export const promotionRechange = [
  {
    id: 0,
    expireday: '20/11/2023',
    page: 'atm-internet-banking',
    styleUser: 'user',
    h3: 'Khuyến mãi áp dụng từ ngày 10/11/2023 - 15/11/2023',
    content: [
      'Tặng thêm <strong>+15%</strong> cho giá trị nạp từ 100.000đ đến dưới 500.000đ',
      'Tặng thêm <strong>+20%</strong> cho giá trị nạp từ 500.000đ đến dưới 1.000.000đ',
      'Tặng thêm <strong>+30%</strong> cho giá trị nạp từ 1.000.000đ',
    ],
  },
  {
    id: 1,
    expireday: '25/11/2023',
    page: 'atm-internet-banking',
    styleUser: 'newuser',
    h3: 'Đối với tài khoản mới đăng kí',
    content: [
      'Tặng thêm <strong>+50%</strong> cho lần nạp đầu tiên tối thiểu 100.000đ trong vòng 5 ngày sau khi đăng tí tài khoản.',
    ],
  },
  {
    id: 2,
    expireday: '25/11/2023',
    page: 'atm-internet-banking',
    styleUser: 'alert',
    h3: '',
    content: [
      'Lưu ý quan trọng: Trong quá trình thanh toán, bạn vui lòng <strong>KHÔNG ĐÓNG TRÌNH DUYỆT</strong>.',
      'Nếu gặp khó khăn trong quá trình thanh toán, xin liên hệ 0999999999 để chúng tôi hỗ trợ bạn.',
    ],
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
