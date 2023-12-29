const menuManager = [
  {
    id: 1,
    text: 'Đăng tin cho thuê',
    path: 'dang-tin-moi',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="color"
        height="15"
        viewBox="0 0 24 24"
        width="15"
      >
        <path
          d="m17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75z"
          fill="#2196f3"
        />
        <path
          d="m17.25 21c-.552 0-1-.448-1-1v-5.5c0-.552.448-1 1-1s1 .448 1 1v5.5c0 .552-.448 1-1 1z"
          fill="#fff"
        />
        <path
          d="m20 18.25h-5.5c-.552 0-1-.448-1-1s.448-1 1-1h5.5c.552 0 1 .448 1 1s-.448 1-1 1z"
          fill="#fff"
        />
        <path
          d="m23.98 3.66v.04c0 .97-.38 1.9-1.07 2.59l-1.94 1.98-5.25-5.22 1.92-1.96c.69-.7 1.62-1.1 2.61-1.11.98.03 1.92.38 2.63 1.08.7.69 1.1 1.61 1.1 2.6z"
          fill="#f44336"
        />
        <path
          d="m5.15 18.79-2.59-2.59c-.06.07-.11.14-.14.23l-2.38 6.56c-.09.28-.03.58.18.79.14.14.33.22.53.22.09 0 .17-.01.26-.04l6.56-2.38c.09-.03.16-.08.23-.14z"
          fill="#ffe082"
        />
        <path
          d="m8.5 17.25c0 1.04.18 2.04.52 2.97l-1.22 1.22-2.65-2.65 3.61-3.65c-.17.67-.26 1.38-.26 2.11z"
          fill="#ffb300"
        />
        <path
          d="m20.97 8.27-.75.75c-.93-.34-1.93-.52-2.97-.52-.75 0-1.48.1-2.18.28l3.18-3.21 2.71 2.69z"
          fill="#ffb300"
        />
        <path
          d="m18.25 5.57-3.18 3.21c-3.1.8-5.54 3.25-6.31 6.36l-3.61 3.65-2.59-2.59.08-.08 12.53-12.52.55-.55z"
          fill="#ffc107"
        />
        <path
          d="m17.25 10.5c-3.723 0-6.75 3.027-6.75 6.75s3.027 6.75 6.75 6.75v-3c-.553 0-1-.447-1-1v-1.75h-1.75c-.553 0-1-.447-1-1s.447-1 1-1h1.75v-1.75c0-.553.447-1 1-1z"
          fill="#1d83d4"
        />
        <path
          d="m17.25 18.25h-1v1.75c0 .553.447 1 1 1zm0-4.75c-.553 0-1 .447-1 1v1.75h1z"
          fill="#dedede"
        />
        <path
          d="m17.25 16.25h-1-1.75c-.553 0-1 .447-1 1s.447 1 1 1h1.75 1z"
          fill="#dedede"
        />
        <path
          d="m20.97 8.27-.75.75c-.93-.34-1.93-.52-2.97-.52-.75 0-1.48.1-2.18.28l3.18-3.21 2.71 2.69z"
          fill="#ffb300"
        />
        <path
          d="m22.91 1.09-4.568 4.568 2.628 2.612 1.94-1.979c.69-.69 1.07-1.62 1.07-2.59v-.041c0-.976-.388-1.883-1.07-2.57z"
          fill="#d43a2f"
        />
        <path
          d="m5.18 18.82-4.96 4.96c.14.14.33.22.53.22l.26-.04 6.56-2.38c.09-.03.16-.08.23-.14z"
          fill="#dec371"
        />
        <path
          d="m8.727 15.273-3.547 3.547 2.62 2.62 1.22-1.221c-.34-.93-.52-1.93-.52-2.97 0-.681.078-1.346.227-1.976z"
          fill="#de9c00"
        />
      </svg>
    ),
  },
  {
    id: 2,
    text: 'Quản lý tin đăng',
    path: 'quan-ly-tin-dang',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="15"
        viewBox="0 0 128 128"
        width="15"
      >
        <g>
          <path d="m20.823 14.226h86.354v107.468h-86.354z" fill="#f45858" />
          <path d="m31.211 24.088h65.579v87.273h-65.579z" fill="#dfeef4" />
          <path
            d="m81.483 24.088v-13.4a4.379 4.379 0 0 0 -4.383-4.382h-26.2a4.379 4.379 0 0 0 -4.379 4.379v13.4z"
            fill="#3ea2e5"
          />
          <path d="m41.653 59.861h15.727v15.727h-15.727z" fill="#f2da30" />
          <path d="m41.653 85.611h15.727v15.727h-15.727z" fill="#f2da30" />
          <path d="m41.653 34.111h15.727v15.727h-15.727z" fill="#f2da30" />
          <g fill="#6d7a84">
            <path d="m86.347 43.725h-20.695a1.75 1.75 0 0 1 0-3.5h20.695a1.75 1.75 0 0 1 0 3.5z" />
            <path d="m86.347 69.475h-20.695a1.75 1.75 0 0 1 0-3.5h20.695a1.75 1.75 0 1 1 0 3.5z" />
            <path d="m86.347 95.225h-20.695a1.75 1.75 0 0 1 0-3.5h20.695a1.75 1.75 0 1 1 0 3.5z" />
            <path d="m49.528 45.635a1.745 1.745 0 0 1 -1.237-.513l-2.633-2.633a1.75 1.75 0 1 1 2.475-2.474l1.395 1.395 10.65-10.649a1.75 1.75 0 0 1 2.475 2.474l-11.887 11.887a1.745 1.745 0 0 1 -1.238.513z" />
            <path d="m49.528 71.385a1.745 1.745 0 0 1 -1.237-.513l-2.633-2.633a1.75 1.75 0 0 1 2.475-2.474l1.395 1.395 10.65-10.649a1.75 1.75 0 0 1 2.475 2.474l-11.887 11.887a1.745 1.745 0 0 1 -1.238.513z" />
            <path d="m49.528 97.135a1.745 1.745 0 0 1 -1.237-.513l-2.633-2.633a1.75 1.75 0 0 1 2.475-2.474l1.395 1.395 10.65-10.649a1.75 1.75 0 1 1 2.475 2.474l-11.887 11.887a1.745 1.745 0 0 1 -1.238.513z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: 3,
    text: 'Nạp tiền',
    path: 'nap-tien',
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 -4 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.0909 0H2.90909C1.30244 0 0 1.30244 0 2.90909V20.3636C0 21.9703 1.30244 23.2727 2.90909 23.2727H29.0909C30.6976 23.2727 32 21.9703 32 20.3636V2.90909C32 1.30244 30.6976 0 29.0909 0Z"
          fill="url(#paint0_radial_103_1394)"
        />
        <g fill="mix-blend-mode:soft-light">
          <g fill="mix-blend-mode:soft-light">
            <path d="M32 4.36365H0V10.1818H32V4.36365Z" fill="#000000" />
          </g>
        </g>
        <g fill="mix-blend-mode:soft-light">
          <g fill="mix-blend-mode:soft-light">
            <path
              d="M26.9088 16H22.5451C22.1435 16 21.8179 16.3256 21.8179 16.7273V18.1818C21.8179 18.5835 22.1435 18.9091 22.5451 18.9091H26.9088C27.3104 18.9091 27.6361 18.5835 27.6361 18.1818V16.7273C27.6361 16.3256 27.3104 16 26.9088 16Z"
              fill="white"
            />
          </g>
        </g>
        <g fill="mix-blend-mode:soft-light">
          <g fill="mix-blend-mode:soft-light">
            <path
              d="M8.00009 19.3787C7.86359 19.5335 7.71234 19.6721 7.54633 19.7947C7.38032 19.9173 7.20327 20.0211 7.01519 20.106C6.82709 20.1909 6.63218 20.255 6.43043 20.2985C6.22869 20.3419 6.02463 20.3636 5.81827 20.3636C5.723 20.3636 5.62795 20.3589 5.53314 20.3496C5.43832 20.3402 5.34419 20.3263 5.25074 20.3077C5.15729 20.2891 5.06498 20.266 4.9738 20.2383C4.88263 20.2107 4.79303 20.1786 4.705 20.1422C4.61698 20.1057 4.53096 20.065 4.44694 20.0201C4.36291 19.9752 4.28128 19.9263 4.20207 19.8733C4.12285 19.8204 4.04641 19.7637 3.97276 19.7033C3.89911 19.6428 3.8286 19.5789 3.76123 19.5115C3.69386 19.4442 3.62996 19.3737 3.56951 19.3C3.50907 19.2264 3.45238 19.1499 3.39945 19.0707C3.34652 18.9915 3.29759 18.9099 3.25268 18.8258C3.20777 18.7418 3.16708 18.6558 3.13062 18.5678C3.09416 18.4797 3.0621 18.3901 3.03444 18.299C3.00679 18.2078 2.98366 18.1155 2.96508 18.022C2.94649 17.9286 2.93253 17.8345 2.92319 17.7396C2.91385 17.6448 2.90918 17.5498 2.90918 17.4545C2.90918 17.3592 2.91385 17.2642 2.92319 17.1694C2.93253 17.0745 2.94649 16.9804 2.96508 16.887C2.98366 16.7935 3.00679 16.7012 3.03444 16.61C3.0621 16.5189 3.09416 16.4293 3.13062 16.3412C3.16708 16.2532 3.20777 16.1672 3.25268 16.0832C3.29759 15.9991 3.34652 15.9175 3.39945 15.8383C3.45238 15.7591 3.50907 15.6826 3.56951 15.609C3.62996 15.5353 3.69386 15.4648 3.76123 15.3975C3.8286 15.3301 3.89911 15.2662 3.97276 15.2057C4.04641 15.1453 4.12285 15.0886 4.20207 15.0357C4.28128 14.9827 4.36291 14.9338 4.44694 14.8889C4.53096 14.844 4.61698 14.8033 4.705 14.7669C4.79303 14.7304 4.88263 14.6983 4.9738 14.6707C5.06498 14.643 5.15729 14.6199 5.25074 14.6013C5.34419 14.5827 5.43832 14.5688 5.53314 14.5594C5.62795 14.5501 5.723 14.5454 5.81827 14.5454C6.02463 14.5454 6.22869 14.5671 6.43043 14.6105C6.63218 14.654 6.82709 14.7181 7.01519 14.803C7.20327 14.888 7.38032 14.9917 7.54633 15.1143C7.71234 15.2369 7.86359 15.3755 8.00009 15.5303C8.13658 15.3755 8.28784 15.2369 8.45385 15.1143C8.61986 14.9917 8.79691 14.888 8.98499 14.803C9.17308 14.7181 9.368 14.654 9.56975 14.6105C9.77149 14.5671 9.97554 14.5454 10.1819 14.5454C10.2772 14.5454 10.3722 14.5501 10.467 14.5594C10.5619 14.5688 10.656 14.5827 10.7494 14.6013C10.8429 14.6199 10.9352 14.643 11.0264 14.6707C11.1175 14.6983 11.2071 14.7304 11.2952 14.7669C11.3832 14.8033 11.4692 14.844 11.5532 14.8889C11.6373 14.9338 11.7189 14.9827 11.7981 15.0357C11.8773 15.0886 11.9538 15.1453 12.0274 15.2057C12.1011 15.2662 12.1716 15.3301 12.2389 15.3975C12.3063 15.4648 12.3702 15.5353 12.4307 15.609C12.4911 15.6826 12.5478 15.7591 12.6007 15.8383C12.6537 15.9175 12.7026 15.9991 12.7475 16.0832C12.7924 16.1672 12.8331 16.2532 12.8696 16.3412C12.906 16.4293 12.9381 16.5189 12.9657 16.61C12.9934 16.7012 13.0165 16.7935 13.0351 16.887C13.0537 16.9804 13.0677 17.0745 13.077 17.1694C13.0863 17.2642 13.091 17.3592 13.091 17.4545C13.091 17.5498 13.0863 17.6448 13.077 17.7396C13.0677 17.8345 13.0537 17.9286 13.0351 18.022C13.0165 18.1155 12.9934 18.2078 12.9657 18.299C12.9381 18.3901 12.906 18.4797 12.8696 18.5678C12.8331 18.6558 12.7924 18.7418 12.7475 18.8258C12.7026 18.9099 12.6537 18.9915 12.6007 19.0707C12.5478 19.1499 12.4911 19.2264 12.4307 19.3C12.3702 19.3737 12.3063 19.4442 12.2389 19.5115C12.1716 19.5789 12.1011 19.6428 12.0274 19.7033C11.9538 19.7637 11.8773 19.8204 11.7981 19.8733C11.7189 19.9263 11.6373 19.9752 11.5532 20.0201C11.4692 20.065 11.3832 20.1057 11.2952 20.1422C11.2071 20.1786 11.1175 20.2107 11.0264 20.2383C10.9352 20.266 10.8429 20.2891 10.7494 20.3077C10.656 20.3263 10.5619 20.3402 10.467 20.3496C10.3722 20.3589 10.2772 20.3636 10.1819 20.3636C9.97554 20.3636 9.77149 20.3419 9.56975 20.2985C9.368 20.255 9.17308 20.1909 8.98499 20.106C8.79691 20.0211 8.61986 19.9173 8.45385 19.7947C8.28784 19.6721 8.13658 19.5335 8.00009 19.3787Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_103_1394"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1.09411 23.2727) rotate(143.02) scale(38.6884 53.1966)"
          ></radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    text: 'Lịch sử nạp tiền',
    path: '/system/recharge-history',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="15"
        height="15"
      >
        <path
          d="M137,12.59A115.4,115.4,0,0,0,22.047,118.25H9.11A5.569,5.569,0,0,0,4.287,126.6l23.676,41a5.569,5.569,0,0,0,9.646,0l23.672-41a5.569,5.569,0,0,0-4.823-8.354H44.437a93.125,93.125,0,1,1,30.95,79.54,11.14,11.14,0,0,0-14.77,16.68,115.085,115.085,0,0,0,76.42,28.94h.07A115.41,115.41,0,1,0,137,12.59Z"
          fill="#fc5d3d"
        />
        <path
          d="M154.69,133.67a11.233,11.233,0,0,0,11.24,11.24h24.65v24.3a5.433,5.433,0,0,1-5.44,5.44H85.66a5.431,5.431,0,0,1-5.43-5.44V89.78a8.415,8.415,0,0,0,8.66,8.41h96.25a5.439,5.439,0,0,1,5.44,5.44v18.8H165.93A11.237,11.237,0,0,0,154.69,133.67Z"
          fill="#72c1e8"
        />
        <path
          d="M190.582,86.791v16.84a5.44,5.44,0,0,0-5.438-5.438H88.889a8.422,8.422,0,1,1-.245-16.84h96.5A5.44,5.44,0,0,1,190.582,86.791Z"
          fill="#afafaf"
        />
        <path
          d="M191.53,122.43h-25.6a11.24,11.24,0,1,0,0,22.48h25.6a2.723,2.723,0,0,0,2.72-2.72V125.15A2.723,2.723,0,0,0,191.53,122.43Z"
          fill="#afafaf"
        />
        <path
          d="M137.107,234.91a106.779,106.779,0,0,1-56.113-15.855,2.5,2.5,0,1,1,2.624-4.256,101.94,101.94,0,0,0,155.349-86.738v-.135A101.917,101.917,0,0,0,35.5,119.371a2.5,2.5,0,1,1-4.982-.415,106.916,106.916,0,0,1,213.449,8.97v.135A106.842,106.842,0,0,1,137.107,234.91ZM74.03,208.09,69.786,204.3a2.6,2.6,0,0,0-3.6.076h0a2.6,2.6,0,0,0,.152,3.819l4.593,3.826a2.5,2.5,0,0,0,3.1-3.93Z"
          fill="#ffcbc2"
        />
        <path
          d="M178.5,164.5h-4a2.5,2.5,0,0,1,0-5h4a2.5,2.5,0,0,1,0,5Zm-14,0H92a2.5,2.5,0,0,1-2.5-2.5V112.5a2.5,2.5,0,0,1,5,0v47h70a2.5,2.5,0,0,1,0,5Z"
          fill="#c5e5ff"
        />
        <path d="M57.8,197.09a13.613,13.613,0,0,0,1.161,19.25,117.6,117.6,0,0,0,78.08,29.57h.069a117.6,117.6,0,0,0,87.36-38.77,2.52,2.52,0,0,0-.17-3.54,2.574,2.574,0,0,0-3.529.18,113.135,113.135,0,0,1-83.661,37.13h-.069A112.579,112.579,0,0,1,62.279,212.6,8.64,8.64,0,0,1,73.73,199.66,95.639,95.639,0,1,0,199.349,55.42a2.566,2.566,0,0,0-3.52.27,2.493,2.493,0,0,0,.27,3.53,90.639,90.639,0,1,1-119.05,136.7A13.655,13.655,0,0,0,57.8,197.09Z" />
        <path d="M191.869,52.64a2.5,2.5,0,0,0-.65-3.48,2.556,2.556,0,0,0-3.469.64,2.5,2.5,0,1,0,4.119,2.84Z" />
        <path d="M137,10.09A117.913,117.913,0,0,0,19.77,115.75H9.109a8.078,8.078,0,0,0-6.99,12.11L25.8,168.85a8.064,8.064,0,0,0,13.971.01l23.679-41.01a8.072,8.072,0,0,0-6.989-12.1H47.25A90.683,90.683,0,0,1,180.089,48.21a2.564,2.564,0,0,0,3.391-1.02,2.5,2.5,0,0,0-1.011-3.38,95.682,95.682,0,0,0-140.52,74.18,2.508,2.508,0,0,0,2.491,2.76H56.46a3.075,3.075,0,0,1,2.659,4.6l-23.679,41a3.059,3.059,0,0,1-5.31,0l-23.681-41a3.017,3.017,0,0,1-.42-1.52,3.1,3.1,0,0,1,3.08-3.08h12.94a2.519,2.519,0,0,0,2.491-2.29C29.344,60.8,78.407,15.09,137.109,15.09a112.942,112.942,0,0,1,95.48,173.14,2.5,2.5,0,0,0,4.23,2.67,117.444,117.444,0,0,0,18.15-62.85v-.01A117.852,117.852,0,0,0,137,10.09Z" />
        <path d="M227.009,196.26a2.5,2.5,0,1,0,3.511-.48A2.561,2.561,0,0,0,227.009,196.26Z" />
        <path d="M88.643,78.848A10.891,10.891,0,0,0,77.737,89.707c-.011.381-.007,30-.007,30.383a2.5,2.5,0,0,0,5,0V98.95a12.1,12.1,0,0,0,6.119,1.74h96.3a2.956,2.956,0,0,1,2.926,2.943c0,.012,0,.022,0,.034V119.93h-22.15a13.74,13.74,0,0,0,0,27.48h22.15v21.81a2.94,2.94,0,0,1-2.929,2.93H85.659a2.94,2.94,0,0,1-2.929-2.93V140.08a2.5,2.5,0,0,0-5,0v29.14a7.954,7.954,0,0,0,7.929,7.93H185.15a7.941,7.941,0,0,0,7.929-7.93V147.144a5.213,5.213,0,0,0,3.671-4.954V125.15a5.216,5.216,0,0,0-3.671-4.958c0-31.221,0-2.18,0-33.4a7.946,7.946,0,0,0-7.93-7.944ZM191.529,124.93a.222.222,0,0,1,.221.22v17.04a.214.214,0,0,1-.221.21h-25.6a8.735,8.735,0,1,1,0-17.47Zm-3.453-38.138v9.459a8.081,8.081,0,0,0-2.93-.562H88.891a5.923,5.923,0,1,1-.248-11.841h96.5A2.941,2.941,0,0,1,188.076,86.792Z" />
        <path d="M80.23,132.59a2.5,2.5,0,1,0-2.5-2.51A2.51,2.51,0,0,0,80.23,132.59Z" />
        <path d="M164.329,133.08a2.508,2.508,0,0,0,2.5,2.5H169.5a2.5,2.5,0,0,0,0-5h-2.671A2.508,2.508,0,0,0,164.329,133.08Z" />
      </svg>
    ),
  },
  {
    id: 5,
    text: 'Thông tin cá nhân',
    path: 'cap-nhat-thong-tin-ca-nhan',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 1024 1024"
        className="icon"
        version="1.1"
      >
        <path
          d="M512 661.3c-117.6 0-213.3-95.7-213.3-213.3S394.4 234.7 512 234.7 725.3 330.4 725.3 448 629.6 661.3 512 661.3z m0-341.3c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128-57.4-128-128-128z"
          fill="#5F6379"
        />
        <path
          d="M837 862.9c-15.7 0-30.8-8.7-38.2-23.7C744.3 729.5 634.4 661.3 512 661.3s-232.3 68.1-286.8 177.9c-10.5 21.1-36.1 29.7-57.2 19.2s-29.7-36.1-19.2-57.2C217.8 662.3 357 576 512 576s294.2 86.3 363.2 225.2c10.5 21.1 1.9 46.7-19.2 57.2-6.1 3-12.6 4.5-19 4.5z"
          fill="#5F6379"
        />
        <path
          d="M512 1002.7c-270.6 0-490.7-220.1-490.7-490.7S241.4 21.3 512 21.3s490.7 220.1 490.7 490.7-220.1 490.7-490.7 490.7z m0-896c-223.5 0-405.3 181.8-405.3 405.3S288.5 917.3 512 917.3 917.3 735.5 917.3 512 735.5 106.7 512 106.7z"
          fill="#3688FF"
        />
      </svg>
    ),
  },
  {
    id: 6,
    text: 'Tin đã lưu',
    path: '/system/saved-post',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        height="15"
        viewBox="0 0 512.007 512.007"
        width="15"
      >
        <g>
          <g id="_x32_1_favorite">
            <path
              d="m380.125 59.036c-59.77 0-109.664 42.249-121.469 98.51-.608 2.899-4.703 2.901-5.312 0-11.805-56.261-61.699-98.51-121.469-98.51-114.106 0-167.756 141.01-82.508 216.858l193.339 172.02c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z"
              fill="#fe646f"
            />
            <g>
              <path
                d="m380.125 59.036c-6.912 0-13.689.572-20.293 1.658 99.376 15.991 141.363 144.168 61.527 215.2l-185.996 165.487 7.343 6.533c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z"
                fill="#fd4755"
              />
            </g>
          </g>
          <g>
            <g id="_x32_1_favorite_2_">
              <g>
                <path
                  d="m380.125 59.036c-59.77 0-109.664 42.249-121.469 98.51-.608 2.899-4.703 2.901-5.312 0-11.805-56.261-61.699-98.51-121.469-98.51-114.106 0-167.756 141.01-82.508 216.858l193.339 172.02c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z"
                  fill="#fe646f"
                />
              </g>
              <g>
                <g>
                  <path
                    d="m380.125 59.036c-6.912 0-13.689.572-20.293 1.658 99.376 15.991 141.363 144.168 61.527 215.2l-185.996 165.487 7.343 6.533c7.58 6.744 19.009 6.744 26.589 0l193.339-172.02c85.248-75.848 31.598-216.858-82.509-216.858z"
                    fill="#fd4755"
                  />
                </g>
              </g>
              <g>
                <path d="m237.72 453.517c-204.315-181.786-197.402-175.776-197.402-175.776-25.999-24.984-40.318-58.201-40.318-93.533 0-46.48 24.63-91.702 65.906-115.47 3.589-2.067 8.174-.833 10.242 2.757 2.067 3.589.833 8.175-2.757 10.242-36.017 20.74-58.391 60.004-58.391 102.471 0 31.212 12.683 60.588 35.711 82.717 0 0-6.881-5.996 196.979 175.386 2.292 2.039 5.242 3.161 8.309 3.161 3.066 0 6.018-1.123 8.31-3.162l61.917-55.089c3.095-2.753 7.835-2.477 10.588.618s2.477 7.835-.618 10.588l-61.917 55.09c-10.431 9.281-26.148 9.263-36.559 0zm119.643-76.458c-2.067 0-4.124-.849-5.606-2.515-2.753-3.095-2.477-7.835.618-10.588l105.273-93.665c21.815-19.409 35.132-44.369 38.513-72.181.001-.006.001-.012.002-.018 7.637-62.927-37.915-131.557-116.038-131.557-54.879 0-102.877 38.923-114.129 92.55-1.005 4.79-5.116 8.135-9.997 8.135s-8.991-3.346-9.996-8.136c-11.252-53.626-59.25-92.549-114.128-92.549-9.633 0-19.082 1.076-28.084 3.198-4.033.952-8.07-1.548-9.021-5.579-.951-4.032 1.547-8.07 5.579-9.021 10.128-2.388 20.735-3.598 31.525-3.598 55.699 0 105.463 35.109 124.125 87.792 18.71-52.817 68.567-87.792 124.125-87.792 84.905 0 139.884 74.56 130.929 148.362 0 .007-.001.015-.002.022-3.829 31.494-18.847 59.703-43.433 81.578l-105.273 93.665c-1.429 1.272-3.209 1.897-4.982 1.897z" />
              </g>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
];

export default menuManager;
