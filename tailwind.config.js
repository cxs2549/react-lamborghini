module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandYellow: '#fdd874',
        brandBlack: '#131313'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
