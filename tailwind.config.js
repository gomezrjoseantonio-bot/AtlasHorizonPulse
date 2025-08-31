/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'brand-navy': '#022D5E',
        'brand-teal': '#2EB0CB',
        
        // Neutral colors
        'text-primary': '#111827',
        'text-secondary': '#6B7280',
        'text-muted': '#9CA3AF',
        'border': '#E5E7EB',
        'bg-base': '#F8FAFC',
        'surface': '#FFFFFF',
        
        // Semantic colors
        'success': '#16A34A',
        'warning': '#F59E0B',
        'error': '#DC2626',
        'info': '#2563EB',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontVariantNumeric: {
        'tabular': 'tabular-nums',
      },
      borderRadius: {
        'DEFAULT': '12px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
    },
  },
  plugins: [],
}