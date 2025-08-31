module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--bg-primary)",
          text: "var(--text-primary)"
        },
        secondary: {
          background: "var(--bg-secondary)",
          text: "var(--text-secondary)"
        },
        button: {
          background: "var(--button-bg)",
          accent: "var(--button-accent)",
          text: "var(--button-text)"
        }
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};