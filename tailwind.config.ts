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
        "sky-turns-black": {
          "0%, 100%": { backgroundColor: "#272C34" },
          "30%, 70%": { backgroundColor: "#7DDFFC" },
        },
        "sun-goes-down": {
          "0%, 100%": {
            transform: "rotate(70deg)",
            backgroundColor: "#F57209",
          },
          "30%, 70%": {
            transform: "rotate(-28deg)",
            backgroundColor: "#FFEF00",
          },
        },
        "pyramide-shading": {
          "0%, 100%": { backgroundColor: "#272C34" },
          "30%": { backgroundColor: "#F4F4F4" },
          "70%": { backgroundColor: "#DDDADA" },
        },
        "shadow-on-the-floor": {
          "0%, 100%": { transform: "scaleY(0)" },
          "30%": { transform: "scaleY(1)" },
          "55%": { transform: "scaleY(.4)" },
          "75%": { transform: "scaleY(1)" },
        },
        "fading-sand": {
          "0%, 100%": { backgroundColor: "#272C34" },
          "30%, 70%": { backgroundColor: "#F0DE75" },
        },
      },
      animation: {
        line1: "line1 0.7s ease-in-out forwards",
        line2: "line2 0.7s ease-in-out forwards",
        line3: "line3 0.7s ease-in-out forwards",
        "sky-turns-black":
          "sky-turns-black 4s cubic-bezier(.4,0,.49,1) infinite",
        "sun-goes-down": "sun-goes-down 4s cubic-bezier(.4,0,.49,1) infinite",
        "pyramide-shading":
          "pyramide-shading 4s cubic-bezier(.4,0,.49,1) infinite",
        "shadow-on-the-floor":
          "shadow-on-the-floor 4s cubic-bezier(.4,0,.49,1) infinite",
        "fading-sand": "fading-sand 4s cubic-bezier(.4,0,.49,1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
