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
        xsm: '375px',
        slg: '870px',
        xlg: '1250px',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '200%': '200% auto',
      },
      backgroundPosition: {
        'right-center': 'right center',
      },
      colors: {
        textPrimary: 'var(--primary-color)',
        accentPrimary: 'var(--accent-color)',
        accentSecondary: { light: '#3498DB' },
      },
    },
  },
  plugins: [],
}
