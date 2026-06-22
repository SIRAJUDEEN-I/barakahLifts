/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3A77EF',
          navy: '#0F172A',
          bg: '#F8FAFC',
          lightBlue: '#DBEAFE',
          text: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(15, 23, 42, 0.08)',
        card: '0 10px 40px -12px rgba(15, 23, 42, 0.12)',
        glow: '0 8px 32px -8px rgba(58, 119, 239, 0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
