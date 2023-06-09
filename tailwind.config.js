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
        secondary: '#505458',
        dark: '#32424a',
        //other colours
        pearl: '#38817a',
        blue: '#3f72af',
        purple: '#b793e6',
        deepPurple: '#512e67',
        red: '#ff6699',
        blood: '#c3195d',
        sky: '#33cccc',
        brown: '#463832',
      },
    },
  },
  plugins: [],
};
