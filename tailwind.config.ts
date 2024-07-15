import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Laila', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: ['4.5rem', '5.5rem'],
        h2: ['4rem', '5rem'],
        h3: ['3.5rem', '4.5rem'],
        h4: ['3rem', '4rem'],
        h5: ['2.5rem', '3.5rem'],
        h6: ['2rem', '3rem'],
        xl: ['1.5rem', '2.625rem'],
        lg: ['1.25rem', '2.625rem'],
        md: ['1rem', '2rem'],
        sm: ['0.75rem', '1.125rem'],
      },
      colors: {
        gray: {
          300: '#F0F0F0',
          600: '#DBDBDB',
          900: '#2D2D2D'
        },
        black: {
          100: '#000000',
        },
      },
    },
    screens: {
      phone: '768px',
      tablet: '1024px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
export default config;
