/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate-500': '#00539C',   
        'slate-700': '#EEA47F', 
        'slate-200': '#E2D1F9',
        'slate-100': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

