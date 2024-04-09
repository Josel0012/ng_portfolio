/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,js}"],
  darkMode: "class",
  theme: {
    extend: {},
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
