import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Ostov palette
        base: '#141824',
        'base-deep': '#0e1119',
        light: '#9fa8da',
        anchor: '#d4a5a5',
        cream: '#e6dcc2',
        'cream-dim': '#c9c0a8',
        steel: '#7a8599',
        amber: '#c8a878'
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.025em',
        tight: '-0.015em'
      },
      fontSize: {
        // Custom display scale for Fraunces
        'display-xl': ['clamp(3.5rem, 8vw, 7.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }]
      }
    }
  },
  plugins: []
};

export default config;
