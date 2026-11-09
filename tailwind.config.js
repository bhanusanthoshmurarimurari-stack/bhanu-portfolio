/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F3',
          50: '#FDFCF9',
          100: '#FAF8F3',
          200: '#F5F0E6',
        },
        cream: {
          DEFAULT: '#F3EDE2',
          light: '#F8F4EC',
          dark: '#E7DC melt',
        },
        gold: {
          50: '#FBF8F1',
          100: '#F6EEDC',
          200: '#EBDCB9',
          300: '#DFC793',
          400: '#D2B374',
          500: '#C5A46D', // Champagne Gold primary
          600: '#B08E55',
          700: '#8E703E',
          800: '#6E552E',
          900: '#4D3A1F',
        },
        navy: {
          DEFAULT: '#17233B', // Deep Navy
          light: '#233455',
          dark: '#0E1726',
          900: '#17233B',
          950: '#0B111D',
        },
        charcoal: {
          DEFAULT: '#252525',
          soft: '#3A3A3A',
          muted: '#636363',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(23, 35, 59, 0.08), 0 0 0 1px rgba(197, 164, 109, 0.15)',
        'luxury-hover': '0 30px 60px -15px rgba(23, 35, 59, 0.14), 0 0 0 1px rgba(197, 164, 109, 0.35)',
        'gold-glow': '0 0 35px -5px rgba(197, 164, 109, 0.35)',
        'card-soft': '0 10px 30px -10px rgba(23, 35, 59, 0.05)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
