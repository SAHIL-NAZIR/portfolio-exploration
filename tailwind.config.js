module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/hero.png')",
      },
      screens: {
        'xl': {'max': '1279px'},
        'md': {'max': '768px'},
      }
    },
  },
  plugins: [],
}