/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#4f46e5',
          'primary-content': '#ffffff',
          'base-100': '#f8fafc',
          'base-content': '#0f172a',
          neutral: '#334155',
          'neutral-content': '#ffffff',
        },
      },
      {
        dark: {
          primary: '#818cf8',
          'primary-content': '#0f172a',
          'base-100': '#0f172a',
          'base-content': '#f1f5f9',
          neutral: '#1e293b',
          'neutral-content': '#f1f5f9',
        },
      },
    ],
  },
};
