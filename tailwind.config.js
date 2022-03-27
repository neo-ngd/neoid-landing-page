const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: '#2f2f2f',
      gray2: '#f9f9f9',
      green: '#81db36',
    },
    fontFamily: {
      sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      mono: defaultTheme.fontFamily.mono,
    },
    screens: {
      xl: '1280px',
    },
  },
  corePlugins: {
    preflight: false,
  },
};
