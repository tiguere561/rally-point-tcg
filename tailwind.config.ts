import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark background
        'dark-bg': '#0a0a0f',
        'dark-surface': '#1a1a2e',
        'dark-card': '#16162a',

        // Neon accents
        'neon-cyan': '#00f0ff',
        'neon-purple': '#b347ff',
        'neon-pink': '#ff2d7b',

        // Text colors
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0b8',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-cyan-lg': '0 0 40px rgba(0, 240, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(179, 71, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 45, 123, 0.3)',
        'neon-pink-lg': '0 0 40px rgba(255, 45, 123, 0.5)',
      },
      backgroundColor: {
        'gradient-gamer': 'linear-gradient(135deg, #0a0a0f 0%, #16162a 50%, #1a1a2e 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
