/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
	fontFamily: {
        	'martian-mono': ['Martian Mono', 'monospace'],
      },

    },	  
  },
  plugins: [],
}
