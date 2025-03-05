/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#0EA5E9',
        secondary: '#94A3B8',
        surface: '#1E293B',
        border: '#334155',
      },
    },
  },
  plugins: [],
};