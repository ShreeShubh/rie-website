/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#150539",
        "custom-pink": "#EC3C70",
      },
      fontFamily: {
        averta: ["Averta", "sans-serif"],
        avertalight: ["Averta Light", "sans-serif"],
      },
      boxShadow: {
        custom: "4px 4px 0px 0px rgba(255, 255, 255, 1)",
        customAbout: "-2px 1px 51px 18px rgba(128,128,128,0.75)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
