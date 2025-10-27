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
        'sky-blue': '#B8E3F0',
        'soft-pink': '#FF9BBE',
        'warm-orange': '#FF6B4A',
        'cream': '#FFF9E6',
        'deep-navy': '#1A1A2E',
      },
      fontFamily: {
        'display': ['Comic Sans MS', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
