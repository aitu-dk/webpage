/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // custom colours
      colors: {
        "light-bg": "##f9fafb",
        "dark-bg": "#000000",
        accent: "#9A4FBA",
      },
      // custom fonts
      fontFamily: {
        logo: "Righteous",
        sans: ["DM Sans", "sans-serif"],
      },
      // custom gradient
      backgroundImage: {
        // https://uigradients.com
        amethyst: "linear-gradient(to right, #9d50bb, #6e48aa)",
      },
      // custom box shadow
      boxShadow: {
        "light-accent": "0 0 20px 5px #552585",
        "dark-accent": "0 0 20px 5px #9A4FBA",
      },
    },
  },
  plugins: [],
};
