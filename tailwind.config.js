/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',  
        'sm': '425px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px', 
      },
    },
  },
  plugins: [],
};
