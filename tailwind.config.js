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
        first: '#e4f9f5',
        second: '#30e3ca',
        third: '#11999e',
        fourth: '#40514e',
        //text colours
        primary: '#212121',
        secondary: '#757575',
        divider: '#BDBDBD',
        icons: '#000000',
      },
    },
  },
  plugins: [],
};
