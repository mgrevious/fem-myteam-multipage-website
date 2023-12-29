/** @type {import('tailwindcss').Config} */
import theme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#014E56',
        secondary: '#F67E7E',
        'light-rapture-blue': '#C4FFFE',
        'rapture-blue': '#79C8C7',
        'police-blue': '#2C6269',
        'deep-jungle-green': '#004047',
        'sacramento-state-green': '#012F34',
        'dark-green': '#002529',
      },
      fontFamily: {
        sans: ['"Livvic"', ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
