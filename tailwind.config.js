/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('../public/asserts/Dot Grid.svg')",
      },
      colors: {
        dark_bg: "#161616",
        my_gray: "#252525",
        default_color: "#DBDBDB",
        border_color: "#575757",
        my_orange: "#5DFC6C",
      },
      animation: {
        text: "text 5s ease infinite",
        background: "background 50s ease infinite",
        carousel: "carousel 100s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center right",
          },
        },
        background: {
          "0%": {
            "background-position": "top",
          },

          "50%": {
            "background-position": "bottom",
          },

          "100%": {
            "background-position": "top",
          },
        },
        // carousel: {
        //   "0%": {
        //     transform: "translateZ(0)",
        //   },
        //   "100%": {
        //     transform: "translate3d(calc(100% / 50 * -1),0,0)",
        //   },
        // },
      },
    },
  },
  plugins: [],
};
