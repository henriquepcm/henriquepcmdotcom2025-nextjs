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
        brandbackground: "var(--brand-background)",
        brandsurface: "var(--brand-surface)",
        brandprimary: "var(--brand-primary)",
        brandsecondary: "var(--brand-secondary)",
        brandtextprimary: "var(--brand-text-primary)",
        brandtextsecondary: "var(--brand-text-secondary)",
        brandsuccess: "var(--brand-success)",
        brandwarning: "var(--brand-warning)",
        branderror: "var(--brand-error)",
        brandinfo: "var(--brand-info)",
        brandborder: "var(--brand-border)",
        brandshadow: "var(--brand-black)",
        brandoverlay: "var(--brand-overlay)",
        brandaccent: "var(--brand-accent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
