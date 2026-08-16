/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-unbounded)", "sans-serif"],
        sans: ["var(--font-albert-sans)", "sans-serif"],
      },
      colors: {
        'action-lime': '#C9E800',
        'hero-green': '#BECF00',
        'dark-olive': '#151A00',
        'dark-card': '#1E2403',
        'off-white': '#F8FFE6',
        'accent-red': '#FF0000',
        'accent-orange': '#FF8964',
        'accent-blue': '#3B4FFF',
      },
    },
  },
  plugins: [],
};
