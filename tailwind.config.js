module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      "bg-color": "#F9F8F3",
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
    fontSize: {
      base: ["1rem", "150%"],
      md: ["1.25rem", "140%"],
      lg: ["1.5625rem", "120%"],
      xl: ["1.95rem", "120%"],
      "2xl": ["2.44rem", "100%"],
      "3xl": ["3.05rem", "100%"],
    },
    extend: {
      textColor: {
        "base-color": "#474455",
        light: "#AAA7B9",
        white: "#FFFFFF",
      },
      outline: {
        accent: "#388C9F solid 2px",
      },
      keyframes: {
        "menu-slide-in": {
          "0%": {
            transform: "translateX(0px)",
            transitionTimingFunction: "ease-in",
          },
          "100%": {
            transform: "translateX(300px)",
            transitionTimingFunction: "ease-out",
          },
        },
      },
      animation: {
        "menu-slide-in": "menu-slide-in .5s 1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
