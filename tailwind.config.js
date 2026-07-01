/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0f',           // Background
        'surface': '#111113',        // Cards/surfaces
        'surface-light': '#1a1a1f',  // Elevated surfaces
        'primary': '#3B82F6',        // Primary actions (blue)
        'primary-hover': '#2563EB',  // Hover state
        'secondary': '#06b6d4',      // Secondary accent (cyan)
        'accent': '#8b5cf6',         // Highlight accent (purple)
        'text-primary': '#ffffff',   // Main text
        'text-secondary': '#9ca3af', // Secondary text
        'text-muted': '#6b7280',     // Muted/disabled text
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
