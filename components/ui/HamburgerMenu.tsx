"use client";
import React, { useState } from "react";
import Button from "./Buttons";
import Link from "next/link";

export type LinksType = {
  links: {
    display: string;
    link: string;
    name: string;
  }[];
};

function HamburgerMenu({ links }: LinksType) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className="block md:hidden "
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

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 right-0 w-full max-w-md h-screen bg-black bg-opacity-30 z-50`}
      >
        <div className="w-2/3 bg-primary h-full">
          <div onClick={toggleMenu} className="p-5">
            <CrossIcon />
          </div>
          <div className="flex flex-col pr-5 mt-20 h-full">
            {links.map((link) => (
              <Link
                key={link.name}
                className="text-2xl w-20 my-4 text-Neutral"
                href={link.link}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <p className="w-full">{link.display}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
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
