module.exports = {
  content: ['./src/**/*.{html,js,tsx,astro}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      sans: ['Exo', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        "text": "#e7e6e5",
        "primary": "#6db4e8",
        "background": "#050202",
      }
    }
  },
}
