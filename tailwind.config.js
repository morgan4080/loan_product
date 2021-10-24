const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      green: colors.green,
      gray: colors.trueGray,
      red: colors.pink
    },
    extend: {
      height: {
        xx: '12%',
        xs: '10%',
        xss: '6.66%'
      },
      width: {
        xx: '14%',
        xs: '10%',
        xss: '6.66%'
      }
    }
  },
  variants: {
    extend: {
      ringOffsetWidth: ['hover', 'active', 'focus'],
      ringOpacity: ['hover', 'active', 'focus']
    },
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: [require('@tailwindcss/forms')]
}
