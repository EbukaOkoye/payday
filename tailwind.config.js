/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeMain: '#FC8900',
        blueMain: '#1C468A',
        greyBg: '#F2F5FA',
        textGray: '#919EAB',
        inputBg: '#F9FAFB',
        navText: '#838383',
        paragraphText: '#A4A4A4',
        lightBlue: '#A7BBDC',
        transparentBlue: '#F0F3FA',
        transparentOrange: '#FFFAF5',
        greenMain: '#2FBA3B',
        transparentGreen: '#C5FFCA',
        mainBlack: '#000000',
        grey: '#637381'
      }
    },
  },
  plugins: [],
}

