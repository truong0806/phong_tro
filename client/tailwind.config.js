/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svg,jsx,ts,tsx}',
    'public/index.html',
    './node_modules/flowbite/**/*.js',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],

  theme: {
    backgroundSize: {
      '50%': '50%',
      '35px': '35px',
    },

    extend: {
      boxShadow: {
        '2xl': '0px 1px 5px 0px rgba(0, 0, 0, 0.25);',
        '3xl': '0 0 0 0.2rem rgba(0,123,255,.25)',
        '4xl': '0 0 20px 0 rgba(0, 0, 0, 0.3)',
      },

      width: {
        1100: '1100px',
      },
      height: {
        70: '70px',
      },
      backgroundColor: {
        primary: '#f5f5f5',
        secondary1: '#1266dd',
        secondary2: '#f73859',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-70': 'rgba(0,0,0,0.7)',
        'title-table': 'rgba(0,0,0,.05)',
      },
      maxWidth: {
        600: '600px',
        1100: '1100px',
      },
      minWidth: {
        200: '200px',
        300: '300px',
      },
      backgroundImage: {
        'support-bg': "url('/src/assets/support-bg.jpg')",
        left_arrow_bg: "url('/src/assets/left-arrow.svg')",
        cirlcle_rec: "url('/src/assets/cirlcle-rec.svg')",
        'star-bg': "url('/src/assets/star2.png')",
        menu: "url('/src/assets/menu.svg')",
        dashboard_user: "url('/src/assets/uicon-dashboard.svg')",
        logo: "url('/src/assets/logo_70.png')",
        mobiMenu: "url('/src/assets/menu-hamburger.svg')",
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      // md: '768px',
      md: { min: '992px' },
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require('flowbite/plugin')],
};
