/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0A7E8C',
          accent: '#FFC107'
        }
      },
    },
    plugins: [],
  };
  