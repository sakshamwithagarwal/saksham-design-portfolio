import localfont from "next/font/local";
import { Open_Sans } from "next/font/google";

export const portfolioFont = localfont({
  src: [
    {
      path: "../public/fonts/Portfolio-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Portfolio Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Portfolio Font.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Portfolio Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Portfolio Light Italic.otf",
      weight: "300",
      style: "italic",
    },
  ],
});

export const minecraft = localfont({ src: "../public/fonts/Minecraft.ttf" });

export const portfolioDuration = localfont({
  src: "../public/fonts/Project-Duration-Font.ttf",
});

export const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
