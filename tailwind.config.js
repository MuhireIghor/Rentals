/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,vue,html.ts,jsx}'],
  theme: {
    extend: {
      rotate: {
        200: '200deg'
      },
      colors: {
        'regal-blue': '#243c5a'
      }
    }
  },
  plugins: []
}
