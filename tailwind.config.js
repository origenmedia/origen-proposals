/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E0F29",
        foreground: "#F5F3EC",
        indigo: {
          deep: "#0E0F29",
          light: "#12133A",
        },
        sand: {
          soft: "#F5F3EC",
        },
        gold: {
          origen: "#E2B947",
        },
        gray: {
          graphite: "#2C2C2C",
        },
        copper: {
          base: "#C58940",
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.02em',
        normal: '0',
        wide: '.025em',
        wider: '.15em',
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
