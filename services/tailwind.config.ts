/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'plumbliss-yellow': '#EFB036',
        'plumbliss-dark-blue': '#3B6790',
        'plumbliss-darker-blue': '#23486A',
        'plumbliss-light-blue': '#4C7B8B',
        'plumbliss-cream': '#F5EEDC',
      },
    },
  },
  plugins: [],
};