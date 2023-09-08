/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svg,jsx,ts,tsx}',
    'public/index.html',
    './node_modules/flowbite/**/*.js',"./node_modules/react-tailwindcss-select/dist/index.esm.js" 
  ],

  theme: {
    backgroundSize: {
      '50%': '50%',
      '35px': '35px',
    },

    extend: {
      boxShadow: {
        '3xl': '0 0 0 0.2rem rgba(0,123,255,.25)',
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
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      s: '0',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [require('flowbite/plugin')],
};
