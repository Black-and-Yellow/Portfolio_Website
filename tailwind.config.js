/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Fraunces', 'serif'],
      },
      colors: {
        background: '#f4f0ea', // Creamy off-white
        foreground: '#111111', // Dark text
        ink: '#111111', // Dark for borders and ink sections
        surface: '#ebe5dd', // Slightly darker beige for cards
        card: '#ebe5dd',
        'card-foreground': '#111111',
        popover: '#f4f0ea',
        'popover-foreground': '#111111',
        primary: '#111111',
        'primary-foreground': '#f4f0ea',
        secondary: '#e5e0d8',
        'secondary-foreground': '#111111',
        muted: '#e5e0d8',
        'muted-foreground': '#71717a', // Medium gray for muted text
        accent: '#ea3323', // Vibrant red accent
        'accent-foreground': '#f4f0ea',
        border: '#111111',
        input: '#111111',
        ring: '#ea3323',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'image-reveal': 'imageReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 10s linear infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        imageReveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
}
