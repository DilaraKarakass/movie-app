/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBE9FE',
          100: '#DEDBFD',
          200: '#BEB7FB',
          300: '#9C92F8',
          400: '#7B6EF6',
          500: '#5A4AF4'
        },
        grey: {
          50: '#EBEEF5',
          100: '#C3C8D4',
          300: '#8E95A9',
          400: '#8996A2',
        }
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      borderRadius: {
        '40': '40px'
      }
    },
  },
  plugins: [],
}

