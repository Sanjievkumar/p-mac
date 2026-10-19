/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#1B4332',
        'mint': '#D8F3DC',
        'navy': '#0A2540',
        'promac-blue': '#0B4F8A',
        'promac-red': '#E31E24',
        'promac-dark': '#0a0a0a',
        'imesa-blue': '#0d447b',
      },
      fontFamily: {
        'sans': ['"Montserrat"', 'sans-serif'],
        'display': ['"Montserrat"', 'sans-serif'],
        'body': ['"Montserrat"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
    },
  },
  plugins: [],
}
