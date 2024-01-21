/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      green: {
        50: '#30AF5B',
        90: '#292C27',
      },
      gray: {
        10: '#EEEEEE',
        20: '#A2A2A2',
        30: '#7B7B7B',
        50: '#585858',
        90: '#141414',
      },
        sec:{
            100:"#493BE4"
        },
      orange: {
        50: '#FF814C',
      },
      blue: {
        70: '#021639',
      },
      yellow: {
        50: '#FEC601',
      },
    },
    screens: {
      'xs': '400px',
      '3xl': '1680px',
      '4xl': '2200px',
    },
    maxWidth: {
      '10xl': '1512px',
    },
    borderRadius: {
      '5xl': '40px',
    },
    fontSize: {
      14: '14px',
    },
    backgroundColor: {
      'main-bg': '#FAFBFB',
      'secondary':'#493BE4'
    },
    borderWidth: {
      1: '1px',
    },
    borderColor: {
      color: 'rgba(0, 0, 0, 0.1)',
    },
    width: {
      400: '400px',
      760: '760px',
      780: '780px',
      800: '800px',
      1000: '1000px',
      1200: '1200px',
      1400: '1400px',
    },
    height: {
      80: '80px',
    },
    minHeight: {
      590: '590px',
    },
  },
  },
  plugins: [],
}