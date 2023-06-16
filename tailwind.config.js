/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx}"],
  purge: [
    // Add your HTML files
    "./lesson4.html",
    // Add your JavaScript files
    "./src/**/*.js",
    // ...
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
