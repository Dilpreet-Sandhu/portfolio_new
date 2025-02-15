import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation : {
        scroll : "scroll 10s linear infinite"
      },
      keyframes : {
        scroll : {
          from : {transform : "translateX(100%)"},
          to : {transform : "translateX(-100%)"}
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
