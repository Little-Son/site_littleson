module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'topography': "url('/assets/patterns/topography.svg')",
       'tic-tac-toe': "url('/assets/patterns/tic-tac-toe.svg')",
       'bubbles': "url('/assets/patterns/bubbles.svg')",
       'overlapping-circles': "url('/assets/patterns/overlapping-circles.svg')",
       'polka-dots': "url('/assets/patterns/polka-dots.svg')"
      })
    },
    borderWidth: {
      0:'0px',
      thin: '1px',
      2:'2px',
      4:'4px',
      8: '8px',
      10:'10px'
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
