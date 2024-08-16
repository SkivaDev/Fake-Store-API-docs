import type { Config } from "tailwindcss";

const config: Config = {
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
        "dark-purple": "#1b173a",
        "deep-purple": "#25224f",
        "slate-purple": "#322f69",
        "stormy-blue": "#364669",
        "royal-purple": "#413e87",
        "bright-orange": "#febe49"
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
        "dark-purple": "#1b173a",
        "deep-purple": "#25224f",
        "slate-purple": "#322f69",
        "stormy-blue": "#364669",
        "royal-purple": "#413e87",
        "bright-orange": "#febe49"
      },
      borderColor: {
        "light-border": "rgb(30, 41, 59)"
       }
    },
  },
  plugins: [],
};
export default config;
