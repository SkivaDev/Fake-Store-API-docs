import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM_Plex: ["IBM Plex Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "black": "#000000",
        "aqua-green": "#00f4b9",
        "midnight-blue": "#0b101f",
        "lavender-gray": "#9391cc",
        "deep-blue": "#101b2e",
        "sky-blue": "#a3dffd",
        "pale-cyan": "#a8e1ea",
        "indigo-black": "#110d25",
        "light-gray": "#abb1b8",
        "medium-gray": "#d7d7db",
        "dark-purple": "#1b173a",
        "deep-purple": "#25224f",
        "slate-purple": "#322f69",
        "stormy-blue": "#364669",
        "royal-purple": "#413e87",
        "bright-orange": "#febe49",
        "placehold-search": "#7f8497",
        "search-dark": "#3A3A3A",
        "emphasis-200": "#444950",
        "pre-background": "#23262f",
      },
      colors: {
        "black": "#000000",
        "aqua-green": "#00f4b9",
        "midnight-blue": "#0b101f",
        "lavender-gray": "#9391cc",
        "deep-blue": "#101b2e",
        "sky-blue": "#a3dffd",
        "pale-cyan": "#a8e1ea",
        "indigo-black": "#110d25",
        "light-gray": "#abb1b8",
        "medium-gray": "#d7d7db",
        "dark-purple": "#1b173a",
        "deep-purple": "#25224f",
        "slate-purple": "#322f69",
        "stormy-blue": "#364669",
        "royal-purple": "#413e87",
        "bright-orange": "#febe49",
        "placehold-search": "#7f8497",
        "search-dark": "#3A3A3A",
        "emphasis-200": "#444950",
        "nav-purple": "#b7b5dd"
      },
      borderColor: {
        "light-border": "rgb(30, 41, 59)",
        "lavender-gray": "#9391cc",
      },
      transitionProperty: {
        'max-height': 'max-height',
      }
    },
  },
  plugins: [],
};
export default config;
