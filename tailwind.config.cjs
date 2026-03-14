module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5f7ff",
          500: "#7c5cff",
        },
        accent: "#c8f566",
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        mono:  ["DM Mono", "Courier New", "monospace"],
        sans:  ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
