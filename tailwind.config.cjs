/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // custom colours
      colors: {
        accent: "#9a4fba",
        accentDark: "#1f1025",
        accentLight: "#cda7dd",
        background: "#000000",
        primary: "#ffffff",
        secondary: "#adb5bd",
        tertiary: "#6c757d",
      },
      // custom fonts
      fontFamily: {
        logo: "Righteous",
        sans: ["DM Sans", "sans-serif"],
      },
      // custom gradient
      backgroundImage: {
        // https://uigradients.com
        "amethyst-top": "linear-gradient(to top, #9d50bb, #6e48aa)",
        "amethyst-right": "linear-gradient(to right, #9d50bb, #6e48aa)",
        "aitu": "linear-gradient(to right, #552383, #88BCE9)",
      },
      // custom box shadow
      boxShadow: {
        accent: "0 0 20px 5px #9A4FBA",
        "accent-small": "0 0 10px 3px #9A4FBA",
      },
    },
  },
  plugins: [],
};
