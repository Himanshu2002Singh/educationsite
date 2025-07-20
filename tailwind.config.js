/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'gradient-border': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-border': 'gradient-border 6s ease infinite',
      },
      backgroundImage: {
        'border-gradient': 'linear-gradient(270deg, #8DC63F, #C1272D, #2C2C2C, #8DC63F)',
      },
    },
  },

   plugins: [],

  theme: {
  extend: {
    animation: {
      marquee: 'marquee 15s linear infinite',
    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
}

 
};
