/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['cupcake'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
};
