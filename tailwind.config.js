/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        '"Barlow Semi Condensed"',
        "sans-serif",
      ] /* Replaces the default sans with the imported font */,
    },
    extend: {
      screens: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
