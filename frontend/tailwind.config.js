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
        inputColor : '#EEEEEE',
        footerBgColor : '#F9F9F9',
        footerBgColor2 : '#393939',
        favColor : "#261D8E",
      },

      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
  
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
  
        md_lg: { max: "867px" },
        // => @media (max-width: 867px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
  
        sm: { max: "500px" },
        // => @media (max-width: 639px) { ... }
      },

    },
  },
  plugins: [],
}