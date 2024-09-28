import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '720px', 
        lg: '960px', 
        xl: '1140px', 
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#6B6874",
        grey: "#e0dfe7",
        neutral: "#6b6874"
      },
    },
  },
  plugins: [],
};
export default config;
