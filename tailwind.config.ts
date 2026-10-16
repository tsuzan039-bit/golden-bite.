import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { brand: "#FFB02E", ink: "#0B0B0B", card: "#151515" },
    fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] } } },
} satisfies Config;
