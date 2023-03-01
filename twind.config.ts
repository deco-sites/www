import type { Options } from "$fresh/plugins/twind.ts";
import { theme } from "twind";
import typography from "twind-typography";

const options: Omit<Options, "selfURL"> = {
  plugins: {
    "scroll-smoth": { "scroll-behavior": "smooth" },
    "scroll-snap-x": { "scroll-snap-type": "x mandatory" },
    "snap-center": { "scroll-snap-align": "center" },
    "aspect-16/10": { "aspect-ratio": "16 / 10" },
    ...typography({ className: "prose" }),
  },
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#FF4500",
              fontWeight: "700",
              fontSize: "52px",
              fontFamily: theme("fontFamily", ["sans"]),
            },
            h2: {
              marginTop: "28px",
              marginBottom: "28px",
              color: theme("colors", ["secondary-dark"]),
              fontFamily: theme("fontFamily", ["sans"]),
              fontWeight: "500",
            },
            h3: {
              marginTop: "28px",
              marginBottom: "16px",
              color: theme("colors", ["secondary-dark"]),
              fontFamily: theme("fontFamily", ["sans"]),
              fontWeight: "600",
            },
            color: theme("colors", ["primary-dark"]),
            a: {
              color: theme("colors", ["primary-green-light"]),
            },
            strong: {
              color: theme("colors", ["primary-dark"]),
            },
            span: {
              color: theme("colors", ["secondary-dark"]),
            },
          },
        },
      },
      outline: {
        "deco-green-light": [
          "2px solid #2EAE80",
          "0px",
        ],
        "deco-red-light": [
          "2px solid #FF6E6E",
          "0px",
        ],
      },
      animation: {
        grow: "grow 250ms ease-in forwards",
        shake: "shake 250ms ease-in-out",
      },
      fontSize: {
        "hero-large": ["84.15px", "100%"],
        "hero-medium": ["63.13px", "100%"],
        "hero-small": ["47.36px", "100%"],
        "display": ["35.53px", "100%"],
        "heading": ["26.65px", "130%"],
        "title": ["20px", "110%"],
        "body-strong": ["15px", "160%"],
        "body-regular": ["15px", "160%"],
        "caption-strong": ["12px", "120%"],
        "caption-regular": ["12px", "120%"],
      },
      fontWeight: {
        "hero-large": "600",
        "hero-medium": "500",
        "hero-small": "600",
        "display": "600",
        "heading": "600",
        "title": "600",
        "body-strong": "600",
        "body-regular": "400",
        "caption-strong": "600",
        "caption-regular": "400",
      },
      keyframes: {
        grow: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "9999px", opacity: "1" },
        },
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
      },
      backgroundImage: {
        radial:
          "radial-gradient(circle closest-corner at 99.5%, var(--tw-gradient-from), var(--tw-gradient-to))",
        "radial-dark":
          "radial-gradient(farthest-side at 100%, var(--tw-gradient-from), var(--tw-gradient-to))",
      },
      borderColor: {
        "default": "#D4DBD7",
        "subdued": "#66736C",
        "critical": "#C64729",
        "warning": "#856A1E",
        "positive": "#1A7346",
        "hightlight": "#2E6ED9",

        "interactive-default": "#D4DBD7",
        "interactive-hovered": "#212523",
        "interactive-disabled": "#A8B4AD",

        "selected-default": "#000000",
        "selected-hovered": "#252524",

        // Dark
        "dark-default": "#525252",
        "dark-subdued": "#C6C6C6",
        "dark-critical": "#D98470",
        "dark-warning": "#F6D579",
        "dark-positive": "#59DA99",
        "dark-hightlight": "#76A5F4",

        "dark-interactive-default": "#D4DBD7",
        "dark-interactive-hovered": "#F4F4F4",
        "dark-interactive-disabled": "rgba(248, 249, 245, 0.35)",

        "dark-selected-default": "#F4F4F4",
        "dark-selected-hovered": "rgba(244, 244, 244, 0.9)",
      },
      boxShadow: {
        // TODO: Stop using this shadow
        "dark": "1px 1px 2px rgba(0, 0, 0, 0.2);",

        /** New design system foundations */
        "low":
          "0px 4px 8px rgba(0, 0, 0, 0.03), 0px 2px 4px rgba(0, 0, 0, 0.2)",
        "medium":
          "0px 4px 4px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.07)",
        "high":
          "0px 4px 8px rgba(0, 0, 0, 0.15), 0px 8px 32px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        // TODO: Stop using these colors
        primary: "#2FD180",
        "primary-dark": "#003232",
        "primary-darker": "#002020",
        "secondary-dark": "#113032",
        "primary-light": "#C5FFE9",
        "primary-green-light": "#2EAE80",
        "primary-green-dark": "#177151",
        "custom-brown": "#f8f5f1",
        "custom-gray": "#f4f4f4",
        "primary-red": "#D10923",
        "primary-red-light": "#DA262B",
        "primary-red-dark": "#A1061A",
        "deco-black": "#252525",
        "deco-light-gray": "#F4F4F4",
        "deco-medium-gray": "#DFDFDF",
        "deco-dark-gray": "#898989",
        "deco-darker-gray": "#393939",
        "deco-bg-green": "#C5FFE9",
        "deco-medium-green": "#23AB6E",
        "deco-dark-green": "#113131",
        "deco-brand-red": "#FF6E6E",

        /** New design system foundations */

        // Surfaces
        "default": "#FFFFFF",
        "subdued": "#F8F9F5",
        "critical": "#FFE9E6",
        "warning": "#FFF8E6",
        "positive": "#EAFAF2",
        "notification": "#FF6E6E",

        "interactive-default": "#000000",
        "interactive-hovered": "#212523",
        "interactive-disabled": "#F8F9F5",
        "interactive-quiet-default": "#FFFFFF",
        "interactive-quiet-hovered": "#F8F9F5",
        "interactive-special-default": "#1A7346",
        "interactive-special-hovered": "#145836",
        "interactive-critical-default": "#C64729",
        "interactive-critical-hovered": "#9E3C11",

        "selected-default": "#F8F9F5",
        "selected-hovered": "#EBEDE6",

        "overlay-default": "rgba(0, 0, 0, 0.5)",
        "overlay-hovered": "rgba(0, 0, 0, 0.6)",

        "decorative-one": "#113032",
        "decorative-two": "#803737",
        "decorative-three": "#3D3080",

        // Focus
        "focus-default": "#FF6E6E",

        // Dark
        // Surfaces
        "dark-default": "#161616",
        "dark-subdued": "#262626",
        "dark-critical": "#FFE9E6",
        "dark-warning": "#FFF8E6",
        "dark-positive": "#EAFAF2",
        "dark-notification": "#FF6E6E",

        "dark-interactive-default": "#FFFFFF",
        "dark-interactive-hovered": "#F8F9F5",
        "dark-interactive-disabled": "#F8F9F526",
        "dark-interactive-quiet-default": "#161616",
        "dark-interactive-quiet-hovered": "rgba(248, 249, 245, 0.15)",
        "dark-interactive-special-default": "#1A7346",
        "dark-interactive-special-hovered": "#145836",
        "dark-interactive-critical-default": "#C64729",
        "dark-interactive-critical-hovered": "#9E3C11",

        "dark-selected-default": "rgba(141, 141, 141, 0.2)",
        "dark-selected-hovered": "rgba(141, 141, 141, 0.32)",

        "dark-overlay-default": "rgba(0, 0, 0, 0.5)",
        "dark-overlay-hovered": "rgba(0, 0, 0, 0.6)",

        "dark-decorative-one": "#113032",
        "dark-decorative-two": "#803737",
        "dark-decorative-three": "#3D3080",

        // Focus
        "dark-focus-default": "#FF6E6E",
      },
      textColor: {
        "default": "#000000",
        "subdued": "#66736C",
        "hovered": "#212523",
        "disabled": "#66736C",
        "critical": "#B44125",
        "warning": "#856A1E",
        "positive": "#1A7346",
        "hightlight": "#2E6ED9",

        "interactive-default": "#F4F4F4",
        "interactive-hovered": "rgba(244, 244, 244, 0.9)",

        "brand": "#2FD180",

        // Dark
        "dark-default": "#F4F4F4",
        "dark-subdued": "#C6C6C6",
        "dark-hovered": "rgba(244, 244, 244, 0.9)",
        "dark-disabled": "rgba(255, 255, 255, 0.5)",
        "dark-critical": "#D98470",
        "dark-warning": "#F6D579",
        "dark-positive": "#59DA99",
        "dark-hightlight": "#76A5F4",

        "dark-interactive-default": "#000000",
        "dark-interactive-hovered": "#212523",

        "dark-brand": "#2FD180",
      },
    },
    fontFamily: {
      sans: ["Albert Sans", "sans-serif"],
      serif: ["serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
};

export default options;
