const { BsTranslate } = require('react-icons/bs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary800: 'rgb(8 145 178)',
        primary800: 'rgb(183,92,255)',
        primary900: 'rgb(245 245 220)',
        primary100: '#282c34',
        primary200: 'rgb(178, 185, 207)',
        primary300: 'rgb(204, 213, 243)',
        primary400: 'rgb(24, 185, 207)',
        primary500: '#f5f5dc',
      },
      keyframes: {
        dropdown: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-100px)',
          },

          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        goup: {
          '0%': {
            opacity: 1,
            transform: 'translateY(0)',
          },

          '100%': {
            opacity: 0,
            transform: 'translateY(-100px)',
          },
        },
      },
      // keyframes: {
      //   },
      // },

      animation: {
        dropdown: 'dropdown 0.5s ease-in-out',
        goup: 'goup 0.5s ease-in-out',
      },
      height: {
        25: '100px',
      },
      borderRadius: {
        '2.5xl': '20px',
      },
      screens: {
        xmd: '940px',
      },
    },
  },
  plugins: [],
}
