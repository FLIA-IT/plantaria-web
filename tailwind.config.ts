import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        'cream-deep': 'var(--color-cream-deep)',
        mauve: 'var(--color-mauve)',
        sage: 'var(--color-sage)',
        charcoal: 'var(--color-charcoal)',
        olive: 'var(--color-olive)',
        'olive-deep': 'var(--color-olive-deep)',
        petal: 'var(--color-petal)',
        'petal-soft': 'var(--color-petal-soft)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

