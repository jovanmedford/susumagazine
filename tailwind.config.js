module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bgColor: "#F9F8F3",
      primary: {
        100: "#ece6f9",
        300: "#B0A4EA",
        500: "#7762DA",
        700: "#3D27A5",
        900: "#201457",
      },
      secondary: {
        100: "#DFF7C0",
        300: "#A2E845",
        500: "#6EB116",
        700: "#4F7E10",
        900: "#1F3206",
      },
      accent: {
        100: "#E8F5F7",
        300: "#A6D7E2",
        500: "#4FB0C6",
        700: "#296F7F",
        900: "#0B1E23",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Lora", "serif"],
    },
    extend: {
      textColor: {
        base: "#474455",
        light: "#AAA7B9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
