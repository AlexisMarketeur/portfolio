import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

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
        background: "#fafafa",
        backgroundSecondary: "#f5f5f5",
        primary: "#000000",
        secondary: "#5e636a",

        greenCustom: {
          "50": "#f0fdf4",
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efaa",
          "400": "#4ade7d",
          "500": "#22c55a",
          "600": "#16a346",
          "700": "#15803a",
          "800": "#166531",
          "900": "#14532a",
          "950": "#052e13",
        },

        blueCustom: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdafe",
          "300": "#93c0fd",
          "400": "#60a2fa",
          "500": "#3b8bf6",
          "600": "#257aeb",
          "700": "#1d6dd8",
          "800": "#1e5caf",
          "900": "#1e4c8a",
          "950": "#173154",
        },

        concrete: {
          "50": "#f3f2f3",
          "100": "#edeced",
          "200": "#e0dde0",
          "300": "#cac6ca",
          "400": "#b0aab0",
          "500": "#9c959c",
          "600": "#8c848b",
          "700": "#7e777d",
          "800": "#696468",
          "900": "#565255",
          "950": "#373437",
        },
        copper: {
          "50": "#fbf6f5",
          "100": "#f8ebeb",
          "200": "#f1dadb",
          "300": "#e6bbbd",
          "400": "#d79598",
          "500": "#c46f74",
          "600": "#9f4a54",
          "700": "#913f4b",
          "800": "#7a3743",
          "900": "#69323d",
          "950": "#39181e",
        },
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
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
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
        "infinite-scroll": "infinite-scroll 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), [addVariablesForColors]],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
