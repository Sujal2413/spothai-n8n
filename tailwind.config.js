module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#f1c40f",
        success: "#2ecc71",
        error: "#e74c3c",
        warning: "#f7dc6f",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
  variants: {
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
};