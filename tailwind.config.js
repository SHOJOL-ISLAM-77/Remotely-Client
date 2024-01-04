/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
  ],
  theme: { 
    extend: {
      colors: {
        "primary": "#3BC391", 
        "secondary": "#535DA1",
      },
      fontFamily: {
        'noto': ['Noto Serif', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}




