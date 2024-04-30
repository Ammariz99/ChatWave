/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primaryColorHue : "252",
        colorDarkLightForMode: "15%",
        colorLightForMode: "92%",
        colorWhiteForMode: "100%",
        white: "hsl(0, 0%, var(colorWhiteForMode))",
        light: "hsl(252, 30%, var(colorLightForMode))",
        gray: "hsl(252, 15%, 60%)",
        primary: "hsl(252, 75%, 60%)",
        secondary: "hsl(252, 100%, 90%)",
        success: "hsl(120, 95%, 60%)",
        danger: "hsl(0, 95%, 60%)",
        dark: "hsl(252, 30%, var(colorDarkLightForMode))",
        black: "hsl(252, 30%, 8%)",
        customPink: "#ff2770",
      },
      borderRadius: {
        "2rem": "2rem",
        card: "1rem",
      },
      padding: {
        search: "0.6rem 1rem",
        card: "1rem",
        btn: "0.6rem 2rem",
      },
    },
  },
  plugins: [],
};
