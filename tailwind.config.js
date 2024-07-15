/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inika': ['Inika']
      },
      colors: {
        custom: {
          'primary': '#E4F4DC',
          'btn-primary': '#4ECCA3',
          'btn-txt': '#FFF',
          'font-primary': '#393E46',
        }
      },
    },
  },
  plugins: [],
}

