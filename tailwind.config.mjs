/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Text: "#dde6f0",
        background: "#070b10",
        bg2: "#11151b",
        Primary: "#9cb1d3",
        Secondary: "#5b3272",
        Accent: "#b04eb1",
        card: "#232d38",
      },
      fontFamily: {
        oxygen: ["Oxygen Mono", "sans-serif"],
        oxanium: ["Oxanium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
