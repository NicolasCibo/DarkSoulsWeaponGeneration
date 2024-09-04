/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'demonsouls': "url('/img/bg-demonsouls.webp')",
      },
    },
  },
  plugins: [],
}

