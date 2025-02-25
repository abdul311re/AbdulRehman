/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#8E44AD",
        charcoal: "#34495E",
        red: "#C0392B",
        black: "#000000",
        white: "#FFFFFF",
        grey: "#F3F4F0",
        Hex: "#f6f8fa",
        bgport:"#201e1e",
        
      },
      margin: {
        '-50': '-50px',
      },
      fontSize: {
        '7.3xl': '5.5rem',
        '7.5xl': '5.5rem',
        '2.5xl': '2.5rem',
        '1.3xl': '1.3rem',
        '2.7xl': '2.7rem',
        '2.1rem': '2.1rem'
      },
      lineHeight: {
        'extra-loose': '1.4',
      },
      borderRadius: {
        '2.5xl': '2.5rem'
      },
      borderColor: {
        charcoal: "#34495E",
      },
      width:{
        '74rem' :'74rem',
        '50rem' :'50rem',
        '20rem' : '20rem',
      },
      screens:{
        xs:'414px',
         xms:'390px',
      },
    },
  },
  plugins: [],
}
