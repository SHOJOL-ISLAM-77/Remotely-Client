/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        "primary": "#3BC391", 
        "headingcolor": "#1E1E1E",
        "text-color": "#4E4E4E",
        "bgShade": "#F5FCFF",
        "dribble": "#E62872",
        "body": "#1C1E53",
      },
      fontFamily: {
        'caveat': ['Caveat', 'cursive'],
        'cinzel': ['Cinzel Decorative', 'serif'],
        'noto': ['Noto Serif', 'serif'],
        'openSans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

