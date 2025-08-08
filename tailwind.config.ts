import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", 
        secondary: "#2563EB", 
      },
    },
  },
  plugins: [],
} satisfies Config;
