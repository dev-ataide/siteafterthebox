/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        title: "#140041",
        paragraph:"#a08f86",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        blueATB :  "#277DE2 ",
        bgpurpleATB : '#fff',
        orangeATB : '#eb5d1e',
        bgNav:'#140041',
      },
      fontFamily: {
        poppins: ["Raleway", "sans-serif"],
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

