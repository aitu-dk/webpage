const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // custom colours
      colors: {
        "accent": "var(--accent)",
        "accent-dark": "var(--accent-dark)",
        "accent-light": "var(--accent-light)",
        "background": "var(--background)",
        "background-secondary": "var(--background-secondary)",
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "tertiary": "var(--tertiary)",
        "border": "var(--border)",
      },
      // custom fonts
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      // custom gradient
      backgroundImage: {
        // https://uigradients.com
        "red-bottom": "linear-gradient(to bottom, #cb2d3e, #ef473a)",
        "red-right": "linear-gradient(to right, #cb2d3e, #ef473a)",
        "bliss": "linear-gradient(to right, #552383, #88BCE9)",
      },
      // custom box shadow
      boxShadow: {
        accent: "0 0 20px 5px #cb2d3e",
        "accent-small": "0 0 10px 3px #cb2d3e",
      },
    },
  },
  plugins: [
  ]
};
