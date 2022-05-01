module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kipo: ["Kipo", "sans-serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
