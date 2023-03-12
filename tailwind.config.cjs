/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primaryLight: '#abdbe3',
          secondaryLight: '#abdbe3',
          primaryDark: '#161616',
          secondaryDark: '#1f1e1f',
        },
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        default: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
      fontFamily: {},
      fontSize: {},
    },
  },
  plugins: [],
};
