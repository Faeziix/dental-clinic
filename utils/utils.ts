import clsx from "clsx";
import { ClassValue } from "clsx";
import { Indie_Flower } from "next/font/google";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const digiFont = localFont({
  src: "../public/Digi Anil Bold.ttf",
  display: "swap",
});

const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export function getHandWriteFont(locale: string) {
  switch (locale) {
    case "fa":
      return digiFont;
    case "en":
      return indieFlower;
    default:
      return indieFlower;
  }
}
