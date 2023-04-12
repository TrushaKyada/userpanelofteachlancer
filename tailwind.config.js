module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 1px 6px rgba(0, 0, 0, 0.12)',
        '4xl': '0px 2px 6px -2px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
