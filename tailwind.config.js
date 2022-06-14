/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        max: "208px 208px 208px 208px",
        mid: "208px 208px",
        low: "208px",
      },
    },
  },
  plugins: [],
};
