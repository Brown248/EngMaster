/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Sarabun', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Blue-600
          hover: '#1D4ED8',
          light: '#EFF6FF', // Blue-50
        },
        secondary: '#64748B', // Slate-500
        success: '#10B981',   // Emerald-500
        warning: '#F59E0B',   // Amber-500
        danger: '#EF4444',    // Red-500
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}