export const path = {
  HOME: '/',
  HOME__PAGE: ':page',
  AUTH: '/auth',
  REGISTER: 'dang-ky-tai-khoan',
  FORGOTPASSWORD: 'forgotpassword',
  LOGIN: 'dang-nhap-tai-khoan',
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
  MOMO: 'nap-tien/momo',
  BANG_GIA_DICH_VU: 'bang-gia-dich-vu',
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
    header: 'Vui lòng lựa chọn chuyển vào một trong các tài khoản dưới đây',
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
    header: '',
    imgUrl: 'https://phongtro123.com/images/momo.png',
    title: '',
    path: '',
    vnp_BankCode: '',
  },
  {
    id: 5,
    text: 'ZaloPay',
    imgUrl: 'https://phongtro123.com/images/zalopay.png',
    title: '',
    path: '',
    vnp_BankCode: '',
  },
  {
    id: 6,
    text: 'ShopeePay',
    imgUrl: 'https://phongtro123.com/images/shopeepay2.svg',
    title: '',
    path: '',
    vnp_BankCode: '',
  },
  {
    id: 7,
    text: 'Điểm giao dịch, cửa hàng tiện lợi',
    imgUrl: 'https://phongtro123.com/images/online-store.svg',
    title: '',
    path: '',
    vnp_BankCode: '',
  },
  {
    id: 8,
    text: 'Quét mã QRCode',
    imgUrl: 'https://phongtro123.com/images/qr-code.png',
    title: '',
    path: '',
    vnp_BankCode: '',
  },
];
export const dataBank = [
  {
    columnsNameBank: [
      'Ngân hàng',
      'Chủ tài khoản',
      'Số tài khoản',
      'Chi nhánh',
      'Nội dung chuyển khoản',
    ],
    dataBank: [
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
  {
    columnsNameMomo: [
      'Tên tài khoản',
      'Số điện thoại',
      'Nội dung chuyển tiền',
      'Mã QR',
    ],
    dataMomo: [
      {
        id: 0,
        name: 'Nguyễn Thanh Trường',
        phone: '0938134092',
        content: `PT123 NT`,
        qr: 'https://res.cloudinary.com/dyafotrxw/image/upload/v1700371780/w5jlz5rfmexhasl4bf77.jpg',
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

export const priceListContent = [
  {
    content1: [
      'ĐỪNG ĐỂ PHÒNG TRỐNG THÊM BẤT CỨ NGÀY NÀO!, đăng tin ngay tại PHONGTRO123.COM và tất cả các vấn đề sẽ được giải quyết một cách nhanh nhất.',
      'ƯU ĐIỂM PHONGTRO123:',
      '<img style="display: inline-block;float: left;margin-right: 10px;" src="https://phongtro123.com/images/icon-tick-green.svg"></img><strong>Top đầu google</strong> về từ khóa: cho thuê phòng trọ, thuê phòng trọ, phòng trọ hồ chí minh, phòng trọ hà nội, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép…với lưu lượng truy cập (traffic) cao nhất trong lĩnh vực.',
      '<img style="display: inline-block;float: left;margin-right: 10px;" src="https://phongtro123.com/images/icon-tick-green.svg"></img>Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn nhất trong lĩnh vực cho thuê phòng trọ với hơn <strong>103.348</strong> tin trên hệ thống và tiếp tục tăng.',
      '<img style="display: inline-block;float: left;margin-right: 10px;" src="https://phongtro123.com/images/icon-tick-green.svg"></img>Phongtro123.com tự hào có số lượng người dùng lớn nhất trong lĩnh vực cho thuê phòng trọ với hơn <strong>300.000</strong> khách truy cập thường xuyên và hơn <strong>2.500.000</strong> lượt pageview mỗi tháng.',
      '<img style="display: inline-block;float: left;margin-right: 10px;" src="https://phongtro123.com/images/icon-tick-green.svg"></img>Phongtro123.com tự hào được sự tin tưởng sử dụng của hơn <strong>116.998</strong> khách hàng là chủ nhà, đại lý, môi giới đăng tin thường xuyên tại website.',
      '<img style="display: inline-block;float: left;margin-right: 10px;" src="https://phongtro123.com/images/icon-tick-green.svg"></img>Phongtro123.com tự hào ghi nhận <strong>88.879</strong> giao dịch thành công khi sử dụng dịch vụ tại web, mức độ hiệu quả đạt xấp xỉ <strong>85%</strong> tổng tin đăng.',
    ],
  },
  {
    columnsPriceList: [
      {
        title: `<div class='flex flex-col w-full h-full text-left'>
        <span>Tin VIP nổi bật</span>
       <div class='flex flex-row'>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       </div>
        </div>`,
        style: `bg-[#E13427] `,
      },
      {
        title: `<div class='flex flex-col w-full h-full text-left '>
        <span>Tin VIP 1</span>
        <div class='flex flex-row'>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       </div>
        </div>`,
        style: ` bg-[#ea2e9d] `,
      },
      {
        title: `<div class='flex flex-col w-full h-full text-left'>
        <span>Tin VIP 2</span>
        <div class='flex flex-row'>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       </div>
        </div>`,
        style: `bg-[#FF6600]`,
      },
      {
        title: `<div class='flex flex-col w-full h-full text-left'>
        <span>Tin VIP 3</span>
        <div class='flex flex-row'>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       <img src='https://phongtro123.com/images/mobile/star2.png' class="w-[18px]"></img>
       </div>
        </div>`,
        style: `bg-[#007BFF]`,
      },
      {
        title: `<div class='flex flex-col w-full h-full text-left'>
        <span>Tin thường</span>
        <div class='flex flex-row'>
       </div>  
        </div>`,
        style: `bg-[#055699]`,
      },
    ],
    pricesListData: [
      {
        styleRow: `bg-[#f9f9f9] `,
        rowTitle: 'Ưu điểm',
        dataTinVip: `
        <div class="flex flex-col gap-2">
          <span class="">- Lượt xem nhiều gấp <strong>30 lần</strong> so với tin thường</span>
          <span class="">- Ưu việt, tiếp cận <strong>tối đa</strong> khách hàng.</span>
          <span class="">- Xuất hiện vị trí <strong>đầu tiên ở trang chủ</strong></span>
          <span class="">- Đứng <strong>trên tất cả</strong> các loại tin VIP khác</span>
          <span class="">- Xuất hiện <strong>đầu tiên</strong> ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </span>       
        </div>`,
        dataTinVip1: `
        <div class="flex flex-col gap-2">
          <span>- Lượt xem nhiều gấp <strong>15 lần</strong> so với tin thường</span>
          <span>- Tiếp cận <strong>rất nhiều</strong> khách hàng.</span>
          <span>- Xuất hiện sau <strong>VIP NỔI BẬT</strong> và <strong>trước Vip 2, Vip 3, tin thường</strong>.</span>    
          <span>- Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó. </span>
        </div>
        `,
        dataTinVip2: `
        <div class="flex flex-col gap-2">
          <span>- Lượt xem nhiều gấp <strong>10 lần</strong> so với tin thường</span>
          <span>- Tiếp cận khách hàng <strong>rất tốt</strong>.</span>
          <span>- Xuất hiện sau <strong>VIP 1</strong> và <strong>trước VIP 3, tin thường</strong>.</span>       
          <span>- Xuất hiện thêm ở mục tin nổi bật xuyên suốt khu vực chuyên mục đó.</span>
        </div>
        `,
        dataTinVip3: `
        <div class="flex flex-col gap-2">
          <span>- Lượt xem nhiều gấp <strong>5 lần</strong> so với tin thường</span>
          <span>- Tiếp cận khách hàng <strong>tốt</strong>.</span>       
          <span>- Xuất hiện sau <strong>VIP 2</strong> và <strong>trước tin thường</strong>.</span>
        </div>
        `,
        dataTinThuong: `
        <div class="flex flex-col gap-2">
          <span>- Tiếp cận khách hàng <strong>khá tốt</strong>.</span>
          <span>- Xuất hiện <strong>sau các loại tin VIP</strong>.</span>
        </div>
        `,
      },
      {
        styleRow: 'bg-[#f9f9f9] ',
        rowTitle: 'Phù hợp',
        dataTinVip: `- Phù hợp khách hàng là công ty/cá nhân sở hữu hệ thống lớn có từ 15-20 căn phòng/nhà trở lên hoặc phòng trống quá lâu, thường xuyên đang cần cho thuê gấp.`,
        dataTinVip1: `- Phù hợp khách hàng cá nhân/môi giới có 10-15 căn phòng/nhà đang trống thường xuyên, cần cho thuê nhanh nhất.`,
        dataTinVip2: `- Phù hợp khách hàng cá nhân/môi giới có lượng căn trống thường xuyên, cần cho thuê nhanh hơn.`,
        dataTinVip3: `- Phù hợp loại hình phòng trọ chung chủ, KTX ở ghép hay khách hàng có 1-5 căn phòng/nhà cần cho thuê nhanh, tiếp cận khách hàng tốt hơn.`,
        dataTinThuong: `- Phù hợp tất cả các loại hình tuy nhiên lượng tiếp cận khách hàng thấp hơn và cho thuê chậm hơn so với tin VIP.`,
      },
      {
        styleRow: 'bg-[#f9f9f9] ',
        rowTitle: 'Giá ngày',
        dataTinVip: `
        <div class="flex text-left flex-col">
          <span class="text-[1.5rem] font-bold">80.000đ</span>
          <span class="text-[0.8rem]">(Tối thiểu 5 ngày)</span>
        </div>
        `,
        dataTinVip1: `
        <div class="flex text-left flex-col">
          <span class="text-[1.5rem] font-bold">40.000đ</span>
          <span class="text-[0.8rem]"> (Tối thiểu 5 ngày)</span>
        </div>
       `,
        dataTinVip2: `
        <div class="flex text-left flex-col">
          <span class="text-[1.5rem] font-bold">20.000đ</span>
          <span class="text-[0.8rem]"> (Tối thiểu 5 ngày)</span>
        </div>
        `,
        dataTinVip3: `
        <div class="flex text-left flex-col">
          <span class="text-[1.5rem] font-bold">10.000đ</span>
          <span class="text-[0.8rem]"> (Tối thiểu 5 ngày)</span>
        </div>
        `,
        dataTinThuong: `
        <div class="flex text-left flex-col">
          <span class="text-[1.5rem] font-bold">2.000đ</span>
          <span class="text-[0.8rem]"> (Tối thiểu 5 ngày)</span>
        </div>
        `,
      },
      {
        styleRow: 'bg-[#f9f9f9]',
        rowTitle: 'Giá tuần (7 ngày)',
        dataTinVip: `<span class='text-[1.5rem] font-bold '>560.000đ</span>`,
        dataTinVip1: `<span class='text-[1.5rem] font-bold '>280.000đ</span>`,
        dataTinVip2: `<span class='text-[1.5rem] font-bold '>140.000đ</span>`,
        dataTinVip3: `<span class='text-[1.5rem] font-bold '>70.000đ</span>`,
        dataTinThuong: `<span class='text-[1.5rem] font-bold '>14.000đ</span>`,
      },
      {
        styleRow: 'bg-[#f9f9f9]',
        rowTitle: `
       <div class='flex flex-col'>
        <span >Giá tháng (30 ngày)</span>
        <span class='text-[#4caf50] text-[0.8rem]'>Rẻ hơn 10% so với giá ngày</span>
       </div>
        `,
        dataTinVip: `
        <div class='flex flex-col'>
         <span class='text-red-600 line-through'>2.400.000đ</span>
         <span class='text-[#4caf50]'>Giảm 25% chỉ còn</span>
         <span class='text-[1.1rem] font-bold'>1.800.000đ</span>
        </div>`,
        dataTinVip1: `
        <div class='flex flex-col'>
        <span class='text-red-600 line-through'>1.200.000đ</span>
        <span class='text-[#4caf50]'>Giảm 25% chỉ còn</span>
        <span class='text-[1.1rem] font-bold'>900.000đ</span>
        </div>`,
        dataTinVip2: `
        <div class='flex flex-col'>
        <span class='text-red-600 line-through'>600.000đ</span>
        <span class='text-[#4caf50]'>Giảm 25% chỉ còn</span>
        <span class='text-[1.1rem] font-bold'>450.000đ</span>
        </div>`,
        dataTinVip3: `
        <div class='flex flex-col'>
        <span class='text-red-600 line-through'>300.000đ</span>
        <span class='text-[#4caf50]'>Giảm 25% chỉ còn</span>
        <span class='text-[1.1rem] font-bold'>225.000đ</span>
        </div>`,
        dataTinThuong: `
        <div class='flex flex-col'>
        <span class='text-red-600 line-through'>60.000đ</span>
        <span class='text-[#4caf50]'>Giảm 25% chỉ còn</span>
        <span class='text-[1.1rem] font-bold'>45.000đ<span></span>
        </div>`,
      },
      {
        styleRow: 'bg-[#f9f9f9]',
        rowTitle: `Giá đẩy tin`,
        dataTinVip: `40.000 đ`,
        dataTinVip1: `25.000 đ`,
        dataTinVip2: `15.000 đ`,
        dataTinVip3: `10.000 đ`,
        dataTinThuong: `2.000 đ`,
      },
      {
        styleRow: 'bg-[#f9f9f9]',
        rowTitle: `Màu sắc tiêu đề`,
        dataTinVip: `<span class='font-bold text-[#E13427]'>TIÊU ĐỀ MÀU ĐỎ, IN HOA</span>`,
        dataTinVip1: `<span class='font-bold text-[#ea2e9d]'>TIÊU ĐỀ MÀU HỒNG, IN HOA</span>`,
        dataTinVip2: `<span class='font-bold text-[#FF6600]'>TIÊU ĐỀ MÀU CAM, IN HOA</span>`,
        dataTinVip3: `<span class='font-bold text-[#007BFF]'>TIÊU ĐỀ MÀU XANH, IN HOA</span>`,
        dataTinThuong: `<span class='font-bold text-[#055699]'>Tiêu đề màu mặc định, viết thường</span>`,
      },
      {
        styleRow: 'bg-[#f9f9f9]',
        rowTitle: `Tự động duyệt`,
        dataTinVip: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-tick-green.svg"></img></div></div>`,
        dataTinVip1: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-tick-green.svg"></img></div>`,
        dataTinVip2: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-tick-green.svg"></img></div>`,
        dataTinVip3: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-tick-green.svg"></img></div>`,
        dataTinThuong: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
      },
      {
        styleRow: 'bg-[#f9f9f9]',
        rowTitle: `Hiển thị số điện thoại
        ở trang danh sách`,
        dataTinVip: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-tick-green.svg"></img></div>`,
        dataTinVip1: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
        dataTinVip2: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
        dataTinVip3: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
        dataTinThuong: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
      },
      {
        styleRow: 'bg-[#f9f9f9]',
        rowTitle: `Huy hiệu nổi bật`,
        dataTinVip: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-tick-green.svg"></img></div>`,
        dataTinVip1: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
        dataTinVip2: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
        dataTinVip3: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
        dataTinThuong: `<div class='w-full flex items-center justify-center'><img src="https://phongtro123.com/images/icon-x-red.svg"></img></div>`,
      },
    ],
  },
];

export const demoData = [
  {
    title: 'Tin VIP nổi bật',
    star: 5,
    des: ` <span class="text-[#E13427] font-bold">
    TIÊU ĐỀ IN HOA MÀU ĐỎ
  </span>
  , gắn biểu tượng 5 ngôi sao màu vàng và hiển thị to và nhiều
  hình hơn các tin khác. Nằm trên tất cả các tin khác, được
  hưởng nhiều ưu tiên và hiệu quả giao dịch cao nhất.
  <p class="py-[17px]">
    Đồng thời xuất hiện đầu tiên ở mục tin nổi bật xuyên suốt
    khu vực chuyên mục đó
  </p>`,
    images: [
      'https://phongtro123.com/images/demo-vipnoibat.jpg',
      'https://phongtro123.com/images/demo-vipnoibat2.jpg',
    ],
  },
  {
    title: 'Tin VIP 1',
    star: 4,
    des: ` <span class="text-[#ea2e9d] font-bold">
    TIÊU ĐỀ IN HOA MÀU HỒNG
  </span>
  , gắn biểu tượng 4 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP nổi bật, Tin VIP 1 và trên các tin khác.
  `,
    images: ['https://phongtro123.com/images/demo-vip1.jpg'],
  },
  {
    title: 'Tin VIP 2',
    star: 3,
    des: ` <span class="text-[#FF6600] font-bold">
    TIÊU ĐỀ IN HOA MÀU CAM
  </span>
  , gắn biểu tượng 3 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP nổi bật, Tin VIP 1, Tin VIP 2 và trên các tin khác.`,
    images: ['https://phongtro123.com/images/demo-vip2.jpg'],
  },
  {
    title: 'Tin VIP 3',
    star: 2,
    des: ` <span class="text-[#007BFF] font-bold">
    TIÊU ĐỀ IN HOA MÀU XANH
  </span>
  , gắn biểu tượng 2 ngôi sao màu vàng ở tiêu đề tin đăng. Hiển thị sau tin VIP nổi bật, Tin VIP 1, Tin VIP 2, Tin VIP 3 và trên các tin khác.`,
    images: ['https://phongtro123.com/images/demo-vip3.jpg'],
  },
  {
    title: 'Tin thường',
    star: 0,
    des: ` <span class="text-[#055699] font-bold">
    Tiêu đề màu mặc định, viết thường
  </span>
  , Hiển thị sau các tin VIP.`,
    images: ['https://phongtro123.com/images/demo-tinthuong.jpg'],
  },
];
