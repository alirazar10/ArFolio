/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        primary: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "primary-lg": "10px 20px 8px rgba(0, 0, 0, 0.50)",
      },
      backgroundImage: { background: "url('/assets/images/4E6A5969.jpeg')" },
      colors: {
        primary: "#0A192B",
        secondary: "#112240",
        accent: "FF5722",
        "dark-accent": "#081323",
        primary: {
          50: "#D9E5F7",
          100: "#B3CBEF",
          200: "#6897DF",
          300: "#2A68C6",
          400: "#1A407A",
          500: "#0A192F",
          600: "#09162A",
          700: "#081426",
          800: "#06101D",
          900: "#050D19",
        },
        secondary: {
          50: "#F3F4F5",
          100: "#E7E9EC",
          200: "#C4C8CF",
          300: "#A0A7B3",
          400: "#586479",
          500: "#112240",
          600: "#0F1F3A",
          700: "#0A1426",
          800: "#080F1D",
          900: "#050A13",
        },

        accent: {
          50: "#FFF7F4",
          100: "#FFEEE9",
          200: "#FFD5C8",
          300: "#FFBCA7",
          400: "#FF8964",
          500: "#FF5722",
          600: "#E64E1F",
          700: "#993414",
          800: "#73270F",
          900: "#4D1A0A",
        },
        "dark-accent": {
          50: "#F3F3F4",
          100: "#E6E7E9",
          200: "#C1C4C8",
          300: "#9CA1A7",
          400: "#525A65",
          500: "#081323",
          600: "#071120",
          700: "#050B15",
          800: "#040910",
          900: "#02060B",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1024px",
        // => @media (min-width: 1024px) { ... }

        "2xl": "1280px",
        // => @media (min-width: 1280px) { ... }

        "3xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        tall: { raw: "(min-height: 500px)" },
      },
    },
  },
  plugins: [],
};
