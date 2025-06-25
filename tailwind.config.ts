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
      padding: "75px",
      screens: {
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      boxShadow: {
        button: "0px 10px 20px 0px #00C9A770", // accent turquoise
        indicator: "0px 10px 20px 0px #B2F2BB70", // mint green shadow
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        // Netral & latar
        border: "#EDECF2",
        "gray-light": "#F5F5F5",
        "gray-cool": "#B0BEC5",
        placeholder: "#7D7B91",
        subtitle: "#6B7280",

        // Warna utama klinik
        primary: {
          DEFAULT: "#A0D8EF", // light blue
          dark: "#78C6E0",
          foreground: "#CDEEEF",
        },
        secondary: {
          DEFAULT: "#4A5568",
          dark: "#8BE0A0",
          foreground: "#104D3D",
        },

        // Warna aksen
        accent: {
          DEFAULT: "#00C9A7", // turquoise
          hover: "#00B49C",
          foreground: "#FFFFFF",
        },
        coral: "#FFA69E", // warm soft for callouts

        // Elemen tambahan
        info: "#345995", // navy
        success: "#2ECC71",
        error: "#E74C3C",

        // Backgrounds
        background: "#FFFFFF",
        "gray-section": "#F5F5F5",

        // Tailwind variables (jika kamu pakai CSS variable themes)
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "#E74C3C",
          foreground: "#FFFFFF",
        },
        separator: {
          DEFAULT: "#C0D1D9",
          foreground: "#696481",
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
