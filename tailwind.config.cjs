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
      sans: ['Inter Variable', 'sans-serif'],
      serif: ['IBM Plex Mono', 'serif'],
      mono: ['JetBrains Mono Variable', 'monospace'],
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
        "text": "#181818",
        "primary": "#4fc4cf",
        "background": "#fffffe",
      }
    }
  },
}
