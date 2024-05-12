/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear-100':
          'linear-gradient(268deg, #1237F6 -22.24%, #09F4F4 57.33%)',
        'gradient-linear-200':
          'linear-gradient(91deg, rgba(24, 185, 207, 0.90) -2.14%, #68F 103.54%)',
        'gradient-linear-300':
          'linear-gradient(99deg, #002CC7 -39.51%, rgba(24, 185, 207, 0.90) 116.85%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontSize: {
        sm: '1.4rem',
        base: '1.6rem',
        lg: '1.8rem',
        xl: '2.4rem',
        '2xl': '2.8rem',
        '3xl': '3.6rem',
        '4xl': '4.8rem',
        '5xl': '5.4rem',
        clamp: 'clamp(8rem, 12vw, 15rem)',
      },

      spacing: {
        1: '0.5rem',
        2: '1rem',
        3: '1.5rem',
        4: '2rem',
        5: '2.5rem',
        6: '3rem',
        7: '3.5rem',
        8: '4rem',
        9: '4.5rem',
        10: '5rem',
      },

      borderWidth: {
        0: '0',
        1: '0.1rem',
        2: '0.2rem',
        3: '0.3rem',
        4: '0.4rem',
        5: '0.5rem',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'red-hat': ["'Red Hat Display'", 'sans-serif'],
      },

      colors: {
        'blue-300': 'rgba(29, 228, 255, 0.90)',
        'blue-400': 'rgb(126, 146, 217)',
        'blue-500': 'rgba(38, 50, 67, 1)',
        'blue-700': 'rgba(34, 40, 49, 1)',
        'gray-100': 'rgba(204, 214, 246, 1)',
        'gray-200': 'rgba(204, 213, 243, 1)',
        'gray-300': 'rgb(178, 185, 207)',
        white: '#fff',
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
