/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 4%)",
        foreground: "hsl(40 15% 93%)",
        surface: "hsl(0 0% 8%)",
        border: "hsl(0 0% 100% / 0.08)",
        accent: "hsl(38 75% 60%)",
        "accent-foreground": "hsl(0 0% 4%)",
        "muted-foreground": "hsl(0 0% 53%)",
      },
      fontFamily: {
        display: ["'DM Serif Display'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "9xl": ["9rem", { lineHeight: "0.95" }],
        "10xl": ["10rem", { lineHeight: "0.95" }],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
