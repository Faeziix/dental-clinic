"use client";
import React, { useState } from "react";
import Button from "./Buttons";
import Link from "next/link";
import { motion } from "framer-motion";
import useClickOutside from "@/utils/useClickOutside";
import { useLocale } from "next-intl";
import LocaleChanger from "../layout/LocaleChanger";

export type LinksType = {
  links: {
    display: string;
    link: string;
    name: string;
    mobileRender?: () => JSX.Element;
  }[];
};

function HamburgerMenu({ links }: LinksType) {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className="block md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="26"
          viewBox="0 0 35 26"
          fill="none"
        >
          <rect width="34.6667" height="5.2" rx="2.6" fill="#372D95" />
          <rect y="10.4" width="34.6667" height="5.2" rx="2.6" fill="#372D95" />
          <rect y="20.8" width="34.6667" height="5.2" rx="2.6" fill="#372D95" />
        </svg>
      </button>

      <motion.div
        className={`fixed top-0 right-0 w-full h-screen bg-black bg-opacity-30 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      ></motion.div>

      <motion.div
        initial={{ x: locale === "fa" ? "100%" : "-100%" }}
        animate={isOpen ? { x: 0 } : { x: locale === "fa" ? "100%" : "-100%" }}
        transition={{ duration: 0.2 }}
        className={`w-2/3 fixed ${
          locale == "fa" ? "right-0" : "left-0"
        } top-0 max-w-xs bg-primary h-full z-50`}
        ref={ref}
      >
        <div onClick={toggleMenu} className="px-8 py-5 w-fit">
          <CrossIcon />
        </div>
        <div className="flex flex-col px-5 mt-20 h-full">
          {links.map((link) => {
            if (link.mobileRender) return link.mobileRender();

            return (
              <Link
                key={link.name}
                className="text-2xl my-4 text-Neutral hover:text-purple-100"
                href={link.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {link.display}
              </Link>
            );
          })}
          <LocaleChanger />
        </div>
      </motion.div>
    </>
  );
}

function CrossIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <rect
        y="24.5131"
        width="34.6667"
        height="5.2"
        rx="2.6"
        transform="rotate(-45 0 24.5131)"
        fill="#EEECFF"
      />
      <rect
        x="3.67676"
        width="34.6667"
        height="5.2"
        rx="2.6"
        transform="rotate(45 3.67676 0)"
        fill="#EEECFF"
      />
    </svg>
  );
}

export default HamburgerMenu;
