"use client";
import React, { useState } from "react";
import Button from "./Buttons";
import Link from "next-intl/link";
import { motion } from "framer-motion";
import useClickOutside from "@/utils/useClickOutside";
import { useLocale } from "next-intl";
import LocaleChanger from "../layout/LocaleChanger";
import { usePathname } from "next-intl/client";

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
  const pathname = usePathname();
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
        className={`fixed right-0 top-0 h-screen w-full bg-black bg-opacity-30 ${
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
        className={`fixed w-2/3 ${
          locale == "fa" ? "right-0" : "left-0"
        } top-0 z-50 h-full max-w-xs bg-primary`}
        ref={ref}
      >
        <div onClick={toggleMenu} className="w-fit px-8 py-5">
          <CrossIcon />
        </div>
        <div className="mt-20 flex h-full flex-col px-5">
          {links.map((link) => {
            if (link.mobileRender)
              return link.mobileRender(() => setIsOpen(false));

            return (
              <Link
                key={link.name}
                className={`my-4 px-1 py-2 text-2xl text-Neutral hover:text-purple-100 ${
                  pathname == link.link && "rounded bg-[hsl(246,54%,32%)]"
                }`}
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
