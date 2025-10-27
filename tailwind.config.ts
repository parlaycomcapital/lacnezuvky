import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium palette inspired by snus tins and luxury brands
        'metallic': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'brand': {
          'blue': '#A7D8F9',
          'pink': '#F78DA7',
          'orange': '#FF7F50',
          'cream': '#FFF9E6',
          'navy': '#1A1A2E',
        },
        'gradient': {
          'start': '#A7D8F9',
          'end': '#64748b',
        }
      },
      fontFamily: {
        'display': ['Poppins', 'Bebas Neue', 'sans-serif'],
        'body': ['Inter', 'Nunito', 'sans-serif'],
        'mascot': ['Comic Sans MS', 'cursive'],
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #A7D8F9 0%, #64748b 100%)',
        'gradient-hero': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'gradient-card': 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        'gradient-cta': 'linear-gradient(135deg, #FF7F50 0%, #F78DA7 100%)',
      },
      boxShadow: {
        'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'tin': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'glow': '0 0 20px rgba(167, 216, 249, 0.3)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(167, 216, 249, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(167, 216, 249, 0.6)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
