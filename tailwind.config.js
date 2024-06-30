/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crime: "#FFF9D0",
        lightBlue: "#CAF4FF",
        mediumBlue: "#A0DEFF",
        hardBlue: "#5AB2FF",
      },

      animation: {
        hiddenBottom: "hidden 0.5s linear both",
        showBottom: "show 0.5s linear both 1s",
      },
      keyframes: {
        hidden: {
          "0%": { opacity: "1", transform: "translateY(0px)" },
          "100%": { opacity: "0", transform: "translateY(50px)" },
        },
        show: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
    },
  },
  plugins: [],
};
