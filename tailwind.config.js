/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{js,ts,jsx,tsx,mdx}', // Aggressive scan for all relevant files
  ],
  theme: {
    colors: {
      primary: 'rgb(0, 122, 204)', // Vivanet Blue
      'primary-foreground': 'rgb(255, 255, 255)', // White text for primary
      secondary: 'rgb(128, 191, 64)', // Vivanet Green
      'secondary-foreground': 'rgb(0, 0, 0)', // Black text for secondary
      // Keep other default Tailwind colors if needed, or define them here
      // For now, only primary and secondary are explicitly defined
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      emerald: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
      },
      teal: {
        200: '#99f6e4',
        600: '#0d9488',
      },
      red: {
        50: '#fef2f2',
        300: '#ef4444',
        400: '#f87171',
        600: '#dc2626',
      },
      yellow: {
        400: '#facc15',
      },
    },
    extend: {
      // Any other extensions can go here
    },
  },
  plugins: [],
}