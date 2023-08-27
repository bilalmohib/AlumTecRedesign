// utils/fonts.js
import { Inter, Roboto, Montserrat } from "@next/font/google";

export const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const robotoFont = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const montserratFont = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat",
});
