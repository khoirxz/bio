module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#b5179e", // strong black
      secondary: "#f72585",
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      primary: "#b5179e", // strong black
      secondary: "#f72585",
    }),
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
