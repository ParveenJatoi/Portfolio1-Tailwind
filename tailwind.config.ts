import type { Config } from "tailwindcss";



const config: Config = {
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
      keyframes: { // Ensure keyframes is used here for animations
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        moveText: {
          '0%': { transform: 'translateX(100%)', opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        moveText: 'moveText 10s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;