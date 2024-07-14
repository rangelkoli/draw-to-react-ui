/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: [  
      'transition',
      'justify-content',
      'justify-center', // Add other classes you need here
      /^bg-/,
      /^text-/,
    ], // Adjust according to the classes you are using
    },
  },
}

