/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "#0A0F1E",
        surface: "#111827",
        primary: "#2563EB",
        cyan: "#06B6D4",
        "text-primary": "#F9FAFB",
        "text-secondary": "#94A3B8",
      },
    },
  },
  plugins: [],
};
