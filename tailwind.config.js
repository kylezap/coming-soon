import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './src/**/*.{ts,tsx}'
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",  
        screens: {
          "2xl": "1400px"
        }
      },
      extend: {
        colors: {
          brand: {
            green: "#1A4D2E",      // British Racing Green
            gold: "#B79D6B",       // Brushed Gold / Khaki
            cream: "#FAF7F2",      // Warm Cream
            burgundy: "#8B3A3A",   // Muted Burgundy
            charcoal: "#4B4B4B",   // Dark Charcoal
            taupe: "#DCD6C5"       // Light Taupe
          },
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: {
            DEFAULT: "#1A4D2E",
            foreground: "#FFFFFF"
          },
          secondary: {
            DEFAULT: "#B79D6B",
            foreground: "#FFFFFF"
          },
          accent: {
            DEFAULT: "#8B3A3A",
            foreground: "#FFFFFF"
          },
          muted: {
            DEFAULT: "#DCD6C5",
            foreground: "#4B4B4B"
          },
          destructive: {
            DEFAULT: "#DC2626",
            foreground: "#FFFFFF"
          },
          border: "#DCD6C5",
          input: "#DCD6C5",
          ring: "#1A4D2E",
          card: {
            DEFAULT: "#FFFFFF",
            foreground: "#4B4B4B"
          }
        },
        fontFamily: {
          heading: ["Playfair Display", "serif"],
          body: ["Inter", "sans-serif"]
        },
        spacing: {
          xs: "4px",
          sm: "8px",
          md: "16px",
          lg: "24px",
          xl: "32px",
          "2xl": "48px",
          "3xl": "64px"
        },
        borderRadius: {
          sm: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem"
        }
      }
    },
    plugins: [tailwindcssAnimate]
  }
  