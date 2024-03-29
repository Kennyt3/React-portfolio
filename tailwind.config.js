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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        ll: '1100px',
        tl: '1200px',
        sl: '500px',
        dl: '400px',
        pl: '900px',
        xl: '1200px',
      },

      colors: {
        bgHeader: '#2C3E50',
        bgPrimary: '#F8F8F8',
        textPrimary: '#333333',
        textHeader: 'white',
        accentPrimary: '#E74C3C',
        accentSecondary: '#3498DB',
      },
    },
  },
  plugins: [],
}
