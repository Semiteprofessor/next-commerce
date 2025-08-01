import type { Config } from "tailwindcss";

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
      
    },
  },
  plugins: [],
};

export default config;
