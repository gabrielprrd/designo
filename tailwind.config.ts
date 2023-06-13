import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "light-peach": "#FFAD9B",
        peach: "#E7816B",
        black: "#1D1C1E",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
} satisfies Config;
