/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: [
        "Meiryo",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        "custome-red": {
          100: "#ffcccc",
          200: "#ff9999",
          300: "#ff6666",
          400: "#ff3333",
          500: "#ff0000",
          600: "#cc0000",
          700: "#990000",
          800: "#660000",
          900: "#330000"
        },
      },
    },
    configViewer: {
      typographyExample: 'デジタル文字は、美しく進化する。 Original Typeface'
    }
  },
  plugins: [],
}

