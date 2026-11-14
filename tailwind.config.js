/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#080B10',
        charcoal: {
          DEFAULT: '#121824',
          light: '#1A2234',
          dark: '#0D121B',
          glass: 'rgba(18, 24, 36, 0.7)',
        },
        gold: {
          light: '#F5D77F',
          DEFAULT: '#D4AF37',
          dark: '#B38F24',
          accent: '#C59B27',
        },
        halan: '#F3EFE6',
        slate: {
          muted: '#94A3B8',
        },
        tigris: {
          light: '#38BDF8',
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['Tajawal', 'Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5D77F 50%, #C59B27 100%)',
        'gold-glow': 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(8,11,16,0) 70%)',
        'teal-glow': 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(8,11,16,0) 70%)',
      }
    },
  },
  plugins: [],
}
