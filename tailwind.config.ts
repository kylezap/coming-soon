import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1A4D2E',
        'brand-gold': '#B79D6B',
        'brand-cream': '#FAF7F2',
        'brand-burgundy': '#8B3A3A',
        'brand-charcoal': '#4B4B4B',
        'brand-taupe': '#DCD6C5'
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      }
    }
  }
} satisfies Config
