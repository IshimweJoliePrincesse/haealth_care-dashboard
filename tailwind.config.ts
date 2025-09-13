import type { Config } from "tailwindcss";

const config: Config = {
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
        customAsh: "#F6F7F8",
        customWhite: "#FFFFFF",
        activeState: "#01F0D0",
        activeState2: "#D8FCF7",
        activeState3: "#F6F7F8",
        respRateBg: "#E0F3FA",
        tempBg: "#FFE6E9",
        heartRateBg: "#FFE6F1",
        chartBg: "#F4F0FE",
        systolicBg: "#E66FD2",
        diastolicBg: "#8C6FE6",
      },
    },
  },
  plugins: [],
};
export default config;
