/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 'public/index.html'],
  theme: {
    extend: {
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
      },
      MaxWidth: {
        600: '600px',
        1100: '1100px',
      },
      backgroundImage: {
        'support-bg': "url('/src/assets/support-bg.jpg')",
        'star-bg': "url('/src/assets/star2.png')",
        'menu': "url('/src/assets/menu.svg')",
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
    },
  },
  plugins: [],
}
