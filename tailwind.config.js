module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '15': '15%',
        '25': '25%',
        '50': '50%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
