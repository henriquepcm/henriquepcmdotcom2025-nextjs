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
        henriquepcmdarkpurple: "var(--henriquepcm-dark-purple)",
        henriquepcmbasepurple: "var(--henriquepcm-base-purple)",
        henriquepcmlightpurple: "var(--henriquepcm-light-purple)",
        henriquepcmpink: "var(--henriquepcm-pink)",
        henriquepcmgreen: "var(--henriquepcm-green)",
        henriquepcmorange: "var(--henriquepcm-orange)",
      },
    },
  },
  plugins: [],
} satisfies Config;
