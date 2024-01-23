import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ["Courier New", "Courier", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
