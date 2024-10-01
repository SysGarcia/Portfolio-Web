/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        CoolVetica: ["CoolVetica", "sans-serif"], // Añade la fuente personalizada aquí
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("flowbite/plugin"), require('tailwindcss-bg-patterns')]
};
