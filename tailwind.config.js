/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d7f9',
          300: '#9ab4f5',
          400: '#6b8ef0',
          600: '#1e3a8a',
          700: '#1e3058',
          800: '#162040',
          900: '#0f1628',
        },
      },
    },
  },
  plugins: [],
}
