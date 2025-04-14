// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          synth: {
            bg: '#0f0c29',
            pink: '#FF00FF',
            blue: '#00FFFF',
            purple: '#8E2DE2',
            orange: '#FF6A00',
          },
        },
      },
    },
    plugins: [],
  };
  