/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'sm':'600px',
      'md':'1050px',
    },
    extend: {
    },
  },
  plugins: [],
}

