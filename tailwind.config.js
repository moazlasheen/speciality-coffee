/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#F7F4EF',
          200: '#F0EBE3',
          300: '#E4DDD2',
          400: '#D1C8BA',
          500: '#BFB4A3',
        },
        midnight: {
          50: '#E8ECF2',
          100: '#B8C3D6',
          200: '#6B7FA3',
          300: '#2E4468',
          400: '#152A4A',
          500: '#0A1628',
          600: '#060E1A',
        },
        terra: {
          50: '#FDF0EB',
          100: '#F2C4B0',
          200: '#D98E6E',
          300: '#C75B3A',
          400: '#A84A2E',
          500: '#8A3C25',
        },
        rose: {
          50: '#F5EDEE',
          100: '#E0CDD1',
          200: '#CBA8AF',
          300: '#B8848F',
          400: '#9A6B76',
          500: '#7D555F',
        },
        teal: {
          50: '#EBF2F2',
          100: '#C2D8D9',
          200: '#85ADAF',
          300: '#4A7C7E',
          400: '#3A6264',
          500: '#2B4A4C',
        },
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h4': ['clamp(1.1rem, 2vw, 1.35rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
