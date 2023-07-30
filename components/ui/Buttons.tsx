import React from "react";
import Image from "next/image";
import ArrowRightIcon from "@/public/ArrowRightIcon.svg";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";
import ArrowRight from "../icons/ArrowRight";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withArrow?: boolean;
  color?: "primary" | "accent" | "dark" | "neutral";
  size?: "small" | "medium";
  mode?: "default" | "outlined" | "block";
  radius?: "default" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "circle";
}

const buttonVarient = cva(
  [
    "font-semibold",
    "border-2",
    "border-solid",
    "border-transparent",
    "rounded-lg",
    "relative",
    "whitespace-nowrap",
    "text-center",
  ],
  {
    variants: {
      color: {
        default: ["bg-transparent", "text-dark", "border-dark"],
        primary: ["bg-primary", "text-white", "hover:bg-primary-light"],
        // **or**
        // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
        accent: ["bg-accent"],
        neutral: ["bg-transparent", "border-Neutral", "text-Neutral"],
        dark: ["bg-dark", "text-white"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-3", "px-6"],
        xl: ["text-xl", "py-4", "px-8"],
      },
      mode: {
        default: [""],
        outlined: ["bg-transparent", "text-primary", "border-primary"],
        block: ["w-full"],
      },
      radius: {
        default: ["rounded-lg"],
        circle: ["rounded-full"],
        sm: ["rounded-sm"],
        md: ["rounded-md"],
        lg: ["rounded-lg"],
        xl: ["rounded-xl"],
        "2xl": ["rounded-2xl"],
        "3xl": ["rounded-3xl"],
      },
    },
    defaultVariants: {
      color: "default",
      size: "medium",
      mode: "default",
      radius: "default",
    },
  }
);

function Button({
  children,
  className,
  withArrow,
  color,
  size,
  mode,
  radius,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVarient({ color, size, mode, radius }), className)}
    >
      {children}
    </button>
  );
}

export default Button;
