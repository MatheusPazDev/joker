module.exports = {
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        sidebar: "#2f4050",
        sidebarFocus: "#293846",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
