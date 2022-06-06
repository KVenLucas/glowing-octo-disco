module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['dracula']
  },
  plugins: [require('daisyui')]
}
