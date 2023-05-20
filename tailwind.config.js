/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'yellow': '#FFE925',
        'blue': '#2563EB',
        'gray': '#475569',
        'red': '#FF0F0F'
      },
      fontFamily: {
        'title': ['Libre Franklin','sans-serif'],
        'subtitle': ['Merriweather Sans', 'sans-serif'],
        'paragraph': ['Numans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

