import {
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  spacing,
} from './tailwind.tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      boxShadow,
      borderRadius,
      spacing,
      fontFamily,
      fontSize,
    },
  },
};
