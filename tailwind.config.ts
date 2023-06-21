import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "very-light-peach": "#FDF3F0",
        "light-peach": "#FFAD9B",
        peach: "#E7816B",
        black: "#1D1C1E",
        "dark-grey": "#333136",
        "light-grey": "#F1F3F5",
      },
      backgroundImage: {
        "hero-pattern-home":
          "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        "pattern-call-to-action":
          "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
        "pattern-two-circles":
          "url(/assets/shared/desktop/bg-pattern-two-circles.svg)",
        "pattern-three-circles":
          "url(/assets/shared/desktop/bg-pattern-three-circles.svg)",
        "pattern-small-circle":
          "url(/assets/shared/desktop/bg-pattern-small-circle.svg)",
        "pattern-leaf": "url('/assets/shared/desktop/bg-pattern-leaf.svg')",
        "web-design-transfer":
          "url(/assets/web-design/desktop/image-transfer.jpg)",
        "pattern-hero-about-desktop":
          "url(/assets/about/desktop/bg-pattern-hero-about-desktop.svg)",
        "pattern-hero-about-mobile":
          "url(/assets/about/mobile/bg-pattern-hero-about-mobile.svg)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
} satisfies Config;
