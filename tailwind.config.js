/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        //background colours
        first: '#bad7df',
        second: '#ffe2e2',
        third: '#fbe8d3',
        fourth: '#99ddcc',
        //text colours
        primary: '#212121',
        secondary: '#928a97',
        green: '#008891',
        divider: '#3f72af',
        indigo: '#4d606e',
        dark: '#32424a',
        icons: '#222831',
        //button colours
        purple: '#b793e6',
      },
    },
  },
  plugins: [],
};
