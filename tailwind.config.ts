import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Common
        black: "#000",
        white: "#fff",

        // Primary
        primary: {
          light: "#F14B73",
          DEFAULT: "#EE1E50",
          dark: "#BE1840",
          foreground: "#fff",
        },

        // Secondary
        secondary: {
          light: "#609DDE",
          DEFAULT: "#2288EB",
          dark: "#004EA0",
          foreground: "#fff",
        },

        // Info
        info: {
          light: "#85D3F0",
          DEFAULT: "#33B5E6",
          dark: "#2991B8",
          foreground: "#fff",
        },

        // Success
        success: {
          light: "#7DDAC0",
          DEFAULT: "#26C196",
          dark: "#1E9A78",
          foreground: "#fff",
        },

        // Warning
        warning: {
          light: "#FAB833",
          DEFAULT: "#F9A600",
          dark: "#C78500",
          foreground: "#fff",
        },

        // Error
        error: {
          light: "#E5342F",
          DEFAULT: "#E5342F",
          dark: "#B72A26",
          foreground: "#fff",
        },

        // Grey Scale
        grey: {
          0: "#FFFFFF",
          100: "#F9FAFB",
          200: "#F4F6F8",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#212B36",
          900: "#161C24",
        },

        // Custom Gradients
        gradient: {
          primary: "linear-gradient(145.42deg, #EE1E50, #2288EB 120%)",
          info: "linear-gradient(145.42deg, #85D3F0, #33B5E6 120%)",
          success: "linear-gradient(145.42deg, #7DDAC0, #26C196 120%)",
          warning: "linear-gradient(145.42deg, #FAB833, #F9A600 120%)",
          error: "linear-gradient(145.42deg, #E5342F, #E5342F 120%)",
          background: "radial-gradient(#DBEAFF, #F3DFE0, #DBCFF3, #DBEAFF)",
        },
      },
      boxShadow: {
        // Elevation shadows (like MUI levels)
        z1: "0 3px 6px rgb(48 51 128 / 0.10)",
        z8: "0 8px 16px 0 rgb(0 0 0 / 0.24)",
        z12: "0 0 2px 0 rgb(0 0 0 / 0.24), 0 12px 24px 0 rgb(0 0 0 / 0.24)",
        z16: "0 0 2px 0 rgb(0 0 0 / 0.24), 0 16px 32px -4px rgb(0 0 0 / 0.24)",
        z20: "0 0 2px 0 rgb(0 0 0 / 0.24), 0 20px 40px -4px rgb(0 0 0 / 0.24)",
        z24: "0 0 4px 0 rgb(0 0 0 / 0.24), 0 24px 48px 0 rgb(0 0 0 / 0.24)",

        // Color shadows (mapped from your MUI code)
        primary: "0px 8px 16px rgb(238 30 80 / 0.56)", // palette.primary.main
        secondary: "-4px -4px 20px rgb(34 136 235 / 0.24)", // palette.secondary.main
        info: "0px 8px 16px rgb(51 181 230 / 0.24)", // palette.info.main
        success: "0px 8px 16px rgb(38 193 150 / 0.24)", // palette.success.main
        warning: "0px 8px 16px rgb(249 166 0 / 0.24)", // palette.warning.main
        error: "0px 8px 16px rgb(229 52 47 / 0.24)", // palette.error.main
      },
      borderRadius: {
        DEFAULT: "8px", // equivalent to `shape.borderRadius`
        sm: "12px", // equivalent to `shape.borderRadiusSm`
        md: "16px", // equivalent to `shape.borderRadiusMd`
      },
      fontFamily: {
        sans: ["var(--font-figtree)", ...fontFamily.sans], // uses next/font/google Figtree
      },
      fontWeight: {
        regular: "400",
        medium: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "1.25", fontWeight: "900" }], // 40px → 64px
        h2: ["2rem", { lineHeight: "1.33", fontWeight: "700" }], // 32px → 48px
        h3: ["1.5rem", { lineHeight: "1.5", fontWeight: "700" }], // 24px → 32px
        h4: ["1.25rem", { lineHeight: "1.5", fontWeight: "700" }], // 20px → 24px
        h5: ["1.125rem", { lineHeight: "1.5", fontWeight: "700" }], // 18px → 20px
        h6: ["1.0625rem", { lineHeight: "1.55", fontWeight: "700" }], // 17px → 18px
        subtitle1: ["1rem", { lineHeight: "1.5", fontWeight: "600" }], // 16px
        subtitle2: ["0.875rem", { lineHeight: "1.57", fontWeight: "600" }], // 14px
        body1: ["1rem", { lineHeight: "1.5" }], // 16px
        body2: ["0.75rem", { lineHeight: "1.57" }], // 12px
        caption: ["0.625rem", { lineHeight: "1.5" }], // 10px
        overline: [
          "0.75rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0.1em",
            fontWeight: "700",
          },
        ],
        button: ["0.875rem", { lineHeight: "1.7", fontWeight: "700" }],
      },
      screens: {
        xs: "0px", // optional in Tailwind (usually 'mobile-first')
        sm: "600px",
        md: "900px", // OLD 960
        lg: "1200px", // OLD 1280
        xl: "1536px", // OLD 1920
      },
    },
  },
  plugins: [],
};

export default config;
