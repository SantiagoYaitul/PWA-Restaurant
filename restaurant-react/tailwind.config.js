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
      animation: {
        "flip": "flip 1s ease-out",
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)', opacity: 1 },
          '50%': { transform: 'rotateY(90deg)', opacity: 0.2 },
          '100%': { transform: 'rotateY(180deg)', opacity: 0 }
        }
      },
    },
  },
  plugins: [],
};
