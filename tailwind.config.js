module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      display: ["ChulaNarak", "serif"],
      ui: ["IBM Plex Sans Thai", "sans-serif"],
      title: ["Maitree", "serif"],
    },
    screens: {
      'custom': '460px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
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
