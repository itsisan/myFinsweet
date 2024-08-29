/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        loadingAnimation: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("daisyui")],
  daisyui: {
    themes: [],
  },
};
