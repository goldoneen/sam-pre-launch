module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2rem": "2rem",
        "4rem": "4rem",
        "5.5rem": "5.5rem",
        "2.8rem": "2.82rem",
        "55px":"3.43rem"
      },
      colors: {
        primary: "#1C1C1E",
        secondary: "#7F8FA5",
        darkgray: "#292A4B",
        blue1: "#2F93FF",
        gray1: "#21223B",
        gray2: "#14152B",
      },
      fontFamily: {
        "montserrat-regular": "montserrat-regular",
        "manrope-medium": "manrope-medium",
        "manrope-semibold": "manrope-semibold",
        "manrope-extrabold": "manrope-extrabold",
        "archivo-regular": "archivo-regular",
        "archivo-medium": "archivo-medium",
        "archivo-semibold": "archivo-semibold",
      },
      boxShadow: {
        "3xl": "0px 4px 5px 2px #0000000D",
      },
    },
  },
  plugins: [],
};
