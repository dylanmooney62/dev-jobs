const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        violet: '#5964E0',
        'light-violet': '#939BF4',
        'very-dark-blue': '#19202D',
        midnight: '#121721',
        gray: '#9DAEC2',
        'light-gray': '#F4F6F8',
        'dark-gray': '#6E8098 ',
      },
      transition: {
        theme: {
          'transition-property':
            'background-color, border-color, color, fill, stroke',
          'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
          'transition-duration': '10000ms',
        },
      },
    },
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      '5xl': '1.75rem',
      '4xl': '1.5rem',
      '3xl': '1.25rem',
      '2xl': '0.875rem',
    },
  },
  plugins: [],
};
