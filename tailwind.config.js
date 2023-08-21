/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,js}', './*.html'],
  theme: {
    colors: {
      primary: '#dcc1ab',
      secondary: '#f5f0ec',
      tertiary: '#1b5b31',
      'tertiary-light': '#206b3a',
      dark: '#111',
      white: '#fff',
      transparent: 'transparent',
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.20s ease-in forwards',
      },
    },
  },
};
