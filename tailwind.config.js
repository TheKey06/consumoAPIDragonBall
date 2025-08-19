/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'Vegetta' : "url('https://dragonball-api.com/planetas/Planeta_Vegeta_en_Dragon_Ball_Super_Broly.webp')",
        'Goku' : "url('https://dragonball-api.com/characters/goku_normal.webp')",
      },
      colors :{
        'light-Blue-Card' : "#9BCDFD",
        'Dark-Blue-Card' : "#1476D3",
        
      }
    },
  },
  plugins: [],
}

