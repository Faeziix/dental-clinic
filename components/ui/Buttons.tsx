import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withArrow?: boolean;
  color?: "primary" | "accent" | "dark" | "neutral";
  size?: "sm" | "md" | "lg" | "xl";
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
    "w-fit",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "group",
    "transition-all",
    "no-underline",
  ],
  {
    variants: {
      color: {
        default: [
          "bg-transparent",
          "text-dark",
          "border-primary",
          "hover:bg-primary",
          "hover:text-Neutral",
        ],
        primary: [
          "bg-primary",
          "text-white",
          "hover:bg-primaryLight",
          "hover:border-primary",
        ],
        accent: ["bg-accent"],
        neutral: [
          "bg-transparent",
          "border-Neutral",
          "text-Neutral",
          "hover:bg-dark",
          "hover:border-primaryLight",
        ],
        dark: ["bg-dark", "text-white"],
      },
      size: {
        sm: ["text-sm", "py-2", "px-5"],
        md: ["text-base", "py-2", "px-10"],
        lg: ["text-lg", "py-2", "px-16"],
        xl: ["text-xl", "py-3", "px-16"],
      },
      mode: {
        default: [""],
        outlined: ["bg-transparent", "text-primary", "border-primary"],
        block: ["w-full"],
      },
      radius: {
        default: ["rounded-2xl"],
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
      size: "md",
      mode: "default",
      radius: "default",
    },
  }
);

const arrowVarient = cva(["arrow", "absolute", "right-4"], {
  variants: {
    color: {
      default: [
        "text-dark border-primary group-hover:before:bg-Neutral group-hover:border-Neutral rtl:-scale-x-100",
      ],
      primary: ["text-primary border-primary group-hover:before:bg-primary"],
      accent: ["text-accent border-accent group-hover:before:bg-accent"],
      neutral: ["text-Neutral border-Neutral group-hover:before:bg-Neutral"],
      dark: ["text-white"],
    },
    size: {
      sm: ["w-3", "h-3"],
      md: ["w-4", "h-4"],
      lg: ["w-5", "h-5"],
      xl: ["w-6", "h-6"],
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

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
      className={cn(
        buttonVarient({ color, size, mode, radius }),
        className,
        withArrow ? "arrow-button" : ""
      )}
    >
      {withArrow ? (
        <>
          <span className="mx-3">{children}</span>
          <span className={cn(arrowVarient({ color, size }))} />
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
