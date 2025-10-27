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
        // Dark mode premium palette
        'dark': {
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
          950: '#0D1117',
        },
        'night': {
          'bg': '#0D1117',
          'surface': '#1E232B',
          'card': '#161B22',
          'border': '#30363D',
          'text': '#C5C8CE',
          'text-light': '#8B949E',
          'text-dark': '#F0F6FC',
        },
        'neon': {
          'pink': '#FF6FA5',
          'orange': '#FF914D',
          'blue': '#A7D8F9',
          'green': '#7EE787',
          'purple': '#D2A8FF',
        },
        'brand': {
          'primary': '#FF6FA5',
          'secondary': '#FF914D',
          'accent': '#A7D8F9',
          'text': '#F0F6FC',
          'muted': '#8B949E',
        }
      },
      fontFamily: {
        'display': ['Rubik', 'Bebas Neue', 'sans-serif'],
        'body': ['Inter', 'Nunito Sans', 'sans-serif'],
        'mascot': ['Comic Sans MS', 'cursive'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0D1117 0%, #1E232B 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0D1117 0%, #1E232B 50%, #161B22 100%)',
        'gradient-card': 'linear-gradient(145deg, #161B22 0%, #1E232B 100%)',
        'gradient-cta': 'linear-gradient(135deg, #FF6FA5 0%, #FF914D 100%)',
        'gradient-glow': 'linear-gradient(135deg, #FF6FA5 0%, #A7D8F9 50%, #FF914D 100%)',
        'particle-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 111, 165, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'dark': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'neon-pink': '0 0 20px rgba(255, 111, 165, 0.3), 0 0 40px rgba(255, 111, 165, 0.1)',
        'neon-blue': '0 0 20px rgba(167, 216, 249, 0.3), 0 0 40px rgba(167, 216, 249, 0.1)',
        'neon-orange': '0 0 20px rgba(255, 145, 77, 0.3), 0 0 40px rgba(255, 145, 77, 0.1)',
        'glow-card': '0 0 30px rgba(255, 111, 165, 0.1), 0 0 60px rgba(255, 111, 165, 0.05)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'particle': 'particle 8s ease-in-out infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-20px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 111, 165, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 111, 165, 0.6)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-neon': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 111, 165, 0.3), 0 0 40px rgba(255, 111, 165, 0.1)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 111, 165, 0.5), 0 0 60px rgba(255, 111, 165, 0.2)',
            transform: 'scale(1.02)'
          },
        },
        particle: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-40px) translateX(-5px)' },
          '75%': { transform: 'translateY(-20px) translateX(-10px)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
