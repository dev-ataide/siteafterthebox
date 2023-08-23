/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#140041",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        blueATB :  "#277DE2 ",
        bgpurpleATB : '#0E002F',
        orangeATB : '#FF7F32',
        bgATB: "radial-gradient(circle at 0% 2%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)",
        bg:'#040C18',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      linearGradientColors: theme => theme("colors"),
    },
    screens: {
      xs: "320px",
      ss: "620px",
      sm: "878px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};


// primary: "#0D002",


// primary:{
//   'bgATB' : ['#0D002B','#277DE2' ] ,
//   'blueATB':  "#277DE2 ",
//   'purpleATB' : '#DEF9FA',
//   'orangeATB' : '#FF7F32',
// }

