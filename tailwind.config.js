/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://ik.imagekit.io/a2gpaui9b/NNN%20gifts/image-1920x1080(2).jpg?updatedAt=1720023313047')",
      },
      backgroundSize: {
        'full': '100% 100%',
      },
    },
  },
  plugins: [],
}
