module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        firstColor : '#5463FF',
        secondColor : '#261D8E',
        thirdColor : '#113C5E',
        navBg : '#F9F9F9',
        menuColor : '#898989',
      },

      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },

    },
  },
  plugins: [],
}