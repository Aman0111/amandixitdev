import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#111116",
        mist: "#f6f4fb",
        pearl: "#fbf9ff",
        violet: "#8b5cf6",
        rose: "#f472b6",
        aqua: "#36c5f0",
        graphite: "#2c2b33"
      },
      boxShadow: {
        ambient: "0 24px 90px rgba(98, 66, 190, 0.18)",
        glass: "0 18px 70px rgba(28, 24, 45, 0.12)"
      },
      backgroundImage: {
        "premium-radial":
          "radial-gradient(circle at 18% 12%, rgba(244, 114, 182, 0.22), transparent 28%), radial-gradient(circle at 78% 8%, rgba(54, 197, 240, 0.18), transparent 26%), radial-gradient(circle at 50% 52%, rgba(139, 92, 246, 0.18), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
