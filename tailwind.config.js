/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: '#00c2ff',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0,194,255,0.35)'
      }
    },
  },
  plugins: [],
}
