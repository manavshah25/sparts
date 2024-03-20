/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {

    },
    screens: {
      'xxs': '240px', // min-width
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'josefin' : ['Josefin sans', 'ui-sans-serif']
    },
    colors:{
      'primary':'#FFA250',
      'light-orange': '#FFE9D6',
      'primary-dark-green': '#465b64',
      'gray-back':'#828282',
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}