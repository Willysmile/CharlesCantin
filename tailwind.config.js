const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        serif: [
          "Nobile",
          "Mukta Vaani",
          "Cormorant Infant",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      colors: {
        primary_cc: "#47545F",
        secondary_cc: "#AFDEDC",
        white_cc: "#F0F7EE",
        purple_cc: "#C4D7F2",
        green_cc: "#91A8A4",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
