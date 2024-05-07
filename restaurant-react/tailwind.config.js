/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        palette: {
          background: "#1E152A",
          foreground: "#FEFDFF",
          shadow: "#6A7B76",
          dim: "#2C2A4A",
          opaque: "#080708",
          highlight: "#F7DD72",
          spotlight: "#FF8552",
          ultraviolet: "#4F518C",
        },
      },
    },
    utilities: {
      '.text-white': { color: 'white' },
    },
  },
  plugins: [],
};
