import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ["Courier New", "Courier", "sans-serif"],
      },
      keyframes: {
        line1: {
          "0%, 50%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(1rem) rotate(45deg)" },
        },
        line2: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        line3: {
          "0%, 50%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(-1rem) rotate(-45deg)" },
        },
      },
      animation: {
        line1: "line1 0.7s ease-in-out forwards",
        line2: "line2 0.7s ease-in-out forwards",
        line3: "line3 0.7s ease-in-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
