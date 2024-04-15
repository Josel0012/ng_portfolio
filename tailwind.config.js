/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#b2d8d8",
          200: "#66b2b2",
          // 300: '#66b2b2', you can skip some colors like this or not even commnet them
          // 400: '',
          500: "#008080",
          700: "#66b2b2",
          900: "#004c4c",
        },
        secondary: {
          100: "##ff9c3c",
          200: "#ff9022",
          300: "#ff8308",
          400: "#ee7600",
          500: "#d56900",
          600: "#bb5d00",
          700: "#a25000",
          800: "#5f2f00",
          900: "#472300",
        },
      },
    },
    keyframes: {
      "open-menu": {
        "0%": { transform: "scaleY(0)" },
        "100%": { transform: "scaleY(1)" },
      },
      "move-forward": {
        "0%": { transform: "translateX(0%)" },
        "30%": { transform: "translateX(40%)" },
      },
      "move-up": {
        "0%": { transform: "translateY(0%)" },
        "30%": { transform: "translateY(40%)" },
      },
    },
    animation: {
      "open-menu": "open-menu 0.5s ease-in-out forwards",
      "move-forward": "move-forward 5s ease-in-out forwards infinite",
      "move-up": "move-up 5s ease-in-out forwards infinite",
    },
  },
  plugins: [],
};
