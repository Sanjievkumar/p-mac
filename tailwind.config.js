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
        'promac-red': '#D42B2B',
        'promac-dark': '#0a0a0a',
      },
      fontFamily: {
        'display': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
    },
  },
  plugins: [],
}
