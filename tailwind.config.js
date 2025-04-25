/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.html"], // Add paths to your HTML or components
    theme: {
        extend: {
          fontFamily: {
            sans: ['Poppins', 'sans-serif'],
          },
        },
      },
    plugins: [require("daisyui")], // Ensure DaisyUI is included
  }
  