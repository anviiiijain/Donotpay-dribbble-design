module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange' : '#f6f9fc',
        'pink' : '#e13a8a',
        'violet' : '#871df7',
        'smoke' : '#f6f9fc',
        'purple': {
          '50' : '#d54cf4',
          '100' : '#9b35d0',
          '200': '#bb38c1',
      }
      },
      borderRadius:{
        'default' : '16rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
