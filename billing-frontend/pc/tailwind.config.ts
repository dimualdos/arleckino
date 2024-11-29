import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/pages-flat/**/*.{js,ts,jsx,tsx,mdx}", "./src/shared/**/*.{js,ts,jsx,tsx,mdx}", "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      // => @media (max-width: 1527px) { ... }

      xl: { max: "1260px" },
      // => @media (max-width: 1527px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "480px" },
      // => @media (max-width: 480px) { ... }

      xxs: { max: "370px" },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      container: {
        center: true,
        padding: "24px",
      },
      colors: {
        blue: {
          DEFAULT: "hsl(var(--blue))",
          soft: "hsl(var(--blue-soft))",
          foreground: "hsl(var(--blue-foreground))",
        },
        yellow: {
          soft: "hsl(var(--yellow-soft))",
          foreground: "hsl(var(--yellow-foreground))",
        },
        purple: {
          DEFAULT: "hsl(var(--purple))",
          hard: "hsl(var(--purple-hard))",
          soft: "hsl(var(--purple-soft))",
          foreground: "hsl(var(--purple-foreground))",
        },
        grey: {
          DEFAULT: "hsl(var(--grey))",
          hard: "hsl(var(--grey-hard))",
          "extra-hard": "hsl(var(--grey-extra-hard))",
          soft: "hsl(var(--grey-soft))",
          "extra-soft": "hsl(var(--grey-extra-soft))",
          foreground: "hsl(var(--grey-foreground))",
        },
        valid: "hsl(var(--valid))",

        green: {
          DEFAULT: "hsl(var(--green))",
          soft: "hsl(var(--green-soft))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          muted: "hsl(var(--accent-muted))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        "price-item": "0px 4px 12px rgba(0, 0, 0, 0.25)",
        tooltip: "0px 4px 32px 0px #0000001A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 2px)",
      },
      borderWidth: {
        px: "1px",
        2: "2px",
      },
      maxWidth: {
        "alert-modal": "85%",
      },
      spacing: {
        4.5: "18px",
        15: "60px",
        18: "76px",
        22: "88px",
        26: "104px",
        30: "120px",
        38: "150px",
        42: "170px",
        74: "300px",
        76: "316px",
        84: "350px",
        98: "420px",
      },
      fontSize: {
        xxs: "10px",
        32: "32px",
        48: ["48px", "56px"],
        64: ["64px", "72px"],
      },
      fontFamily: {
        sans: ["var(--gilroy-font)"],
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
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config

export default config
