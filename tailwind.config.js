/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      heading:["Outfit", "sans-serif"],
     },
     colors:{
      black:"#000", // main text
      white:"#ffffff",
      "dark":"#101418", // button
      primary:"#c2bfbd", // main body
      "secondary-100":"#bbb7b4",// sevices card
      "secondary-200":"#b2b0ae",// divider
      "secondary-300":"#b4bec8", //link color
     }
    },
  },
  plugins: [],
};
