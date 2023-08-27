import clsx from "clsx";
import { ClassValue } from "clsx";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const digiFont = localFont({
  src: "../public/Digi Anil Bold.ttf",
  display: "swap",
});
