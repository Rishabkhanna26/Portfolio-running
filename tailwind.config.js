/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './hooks/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // color and gradient utilities built dynamically in components
    { pattern: /(^|\s)(from|via|to|bg|text|border)-(amber|rose|purple|pink|violet|emerald|teal|blue|cyan|orange|green|indigo)-\d{3,4}(?![\w-])/ },
    { pattern: /(^|\s)animate-[a-z-]+/ },
    { pattern: /(^|\s)animation-delay-\d+/ },
    { pattern: /(^|\s)bg-grid-pattern/ }
  ],
  plugins: [],
};
