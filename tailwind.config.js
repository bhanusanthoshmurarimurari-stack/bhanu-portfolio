/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offwhite: {
          DEFAULT: '#EBE9E1',
          light: '#F5F4EE',
          dark: '#DCD9CE',
        },
        orange: {
          DEFAULT: '#E43D12', // Vibrant Orange
          50: '#FDF2EE',
          100: '#FBE4DD',
          200: '#F7C4B7',
          300: '#F39D87',
          400: '#EB6947',
          500: '#E43D12',
          600: '#CA340D',
          700: '#A3290A',
          800: '#7D1F08',
          900: '#5A1606',
        },
        rose: {
          DEFAULT: '#D6536D', // Rose Pink
          50: '#FBF0F2',
          100: '#F6DEE3',
          200: '#EEBDC7',
          300: '#E595A5',
          400: '#DE6F84',
          500: '#D6536D',
          600: '#BE3E57',
          700: '#993045',
          800: '#732333',
          900: '#4F1722',
        },
        softpink: {
          DEFAULT: '#FFA2B6', // Soft Pink
          50: '#FFF5F7',
          100: '#FFE9EE',
          200: '#FFD4DE',
          300: '#FFA2B6',
          400: '#FF7B97',
        },
        yellow: {
          DEFAULT: '#EFB11D', // Golden Yellow
          50: '#FEFBF4',
          100: '#FDF5E3',
          200: '#FBE9BE',
          300: '#F7DC94',
          400: '#F3CB5F',
          500: '#EFB11D',
          600: '#D49911',
          700: '#A9780C',
          800: '#7D5708',
        },
        golden: {
          DEFAULT: '#EFB11D',
          400: '#F3CB5F',
          500: '#EFB11D',
          600: '#D49911',
        },
        charcoal: {
          DEFAULT: '#242424', // Dark Charcoal
          soft: '#363636',
          muted: '#5A5A5A',
        },
        // Mapping existing semantic classes to the exact 5-color palette:
        ivory: {
          DEFAULT: '#EBE9E1',
          50: '#F5F4EE',
          100: '#EBE9E1',
          200: '#DCD9CE',
        },
        cream: {
          DEFAULT: '#FFA2B6',
          light: '#FFE9EE',
          dark: '#DCD9CE',
        },
        gold: {
          50: '#FEFBF4',
          100: '#FDF5E3',
          200: '#FBE9BE',
          300: '#FFA2B6',
          400: '#EFB11D',
          500: '#E43D12', // primary CTA & headings
          600: '#CA340D',
          700: '#D6536D',
          800: '#A3290A',
          900: '#5A1606',
        },
        navy: {
          DEFAULT: '#D6536D',
          light: '#DE6F84',
          dark: '#993045',
          900: '#242424',
          950: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 45px -15px rgba(228, 61, 18, 0.08), 0 0 0 1px rgba(228, 61, 18, 0.18)',
        'luxury-hover': '0 30px 60px -15px rgba(228, 61, 18, 0.16), 0 0 0 1px rgba(228, 61, 18, 0.4)',
        'gold-glow': '0 0 35px -5px rgba(239, 177, 29, 0.4)',
        'orange-glow': '0 0 35px -5px rgba(228, 61, 18, 0.4)',
        'rose-glow': '0 0 35px -5px rgba(214, 83, 109, 0.4)',
        'card-soft': '0 10px 30px -10px rgba(36, 36, 36, 0.06)',
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
