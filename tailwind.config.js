module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ["ChulaNarak", "serif"],
      ui: ["IBM Plex Sans Thai", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addBase, addComponents, theme, variants, addUtilities }) {
      addBase([
        {
          "@font-face": {
            fontFamily: "ChulaNarak",
            fontWeight: "400",
            fontStyle: "normal",
            fontDisplay: "swap",
            src: 'url("/assets/fonts/ChulaNarak Regular.woff2") format("woff2")',
          },
        },
      ]);
    },
  ],
};
