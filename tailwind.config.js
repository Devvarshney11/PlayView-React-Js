/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        width: '12px', // Set the width of the scrollbar
        track: 'rgba(0, 0, 0, 0.1)', // Set the color of the scrollbar track
        thumb: 'rgba(0, 0, 0, 0.5)', // Set the color of the scrollbar thumb
      },
    },
  },
  plugins: [],
}

