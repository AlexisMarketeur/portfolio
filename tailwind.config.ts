import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#F3F2F3",
        primary: "#000000",
        secondary: "#5e636a",
        red: "#EC9688",
      },
      borderRadius: {
        lg: "20px",
        md: "10px",
        sm: "30px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideUp: {
          from: { transform: "translateY(100%)", opacity: "1" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        appear: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 3s linear infinite",
        appears: "appear 0.8s ease-in-out forwards",
        appears1: "appear 0.3s ease-in-out 1.6s forwards",
        appears2: "appear 0.3s ease-in-out 1.9s forwards",
        appears3: "appear 0.3s ease-in-out 2.2s forwards",
        appears4: "appear 0.3s ease-in-out 2.5s forwards",
        slideUp1: "slideUp 1s cubic-bezier(0.45, 0.64, 0.12, 1) 0s both",
        slideUp2: "slideUp 0.8s cubic-bezier(0.45, 0.64, 0.12, 1) 0.3s both",
        slideUp3: "slideUp 0.7s cubic-bezier(0.45, 0.64, 0.12, 1) 0.6s both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
