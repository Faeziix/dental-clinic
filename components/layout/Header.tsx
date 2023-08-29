"use client";

import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../ui/HamburgerMenu";
import Button from "../ui/Buttons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function Header({ lang, dict }) {
  const Links = [
    {
      display: dict.header.home,
      link: "/",
      name: "Home",
    },
    {
      display: dict.header.services,
      link: "/services",
      name: "Services",
      render: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <a>{dict.header.services}</a>
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem className="text-right w-full">
                <Link className="w-full block" href="/services/implant">
                  {dict.header.implant}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-right w-full">
                <Link className="w-full block" href="/services/laminate">
                  {dict.header.laminate}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-right w-full">
                <Link className="w-full block" href="/services/children">
                  {dict.header.children}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      ),
      mobileRender: () => (
        <div className="flex flex-col gap-2">
          <Link className="text-2xl my-4 text-Neutral" href="/services/implant">
            {dict.header.implant}
          </Link>
          <Link
            className="text-2xl my-4 text-Neutral"
            href="/services/laminate"
          >
            {dict.header.laminate}
          </Link>
          <Link
            className="text-2xl my-4 text-Neutral"
            href="/services/children"
          >
            {dict.header.children}
          </Link>
        </div>
      ),
    },
    {
      display: dict.header.portfolio,
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      display: dict.header.contact,
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div className="md:h-20 h-16 fixed top-0 z-20 bg-background py-2 w-full shadow-xl">
      <div className="flex gap-4 flex-row-reverse md:flex-row md:justify-center justify-between items-center h-full w-full lg:px-16 px-5">
        <Link
          href="/"
          className={`${
            lang == "fa" ? "md:ml-auto" : "md:mr-auto"
          } h-full w-fit`}
        >
          <Image className="h-full w-fit" src={Logo} alt="Logo" />
        </Link>
        <div className="md:flex hidden gap-6 items-center">
          {Links.map((link) => {
            if (link.render) return link.render();
            return (
              <Link href={link.link} key={link.name}>
                {link.display}
              </Link>
            );
          })}
        </div>
        <Link
          href="/reservation"
          className={`${
            lang == "fa" ? "md:mr-auto" : "md:ml-auto"
          } hidden md:block`}
        >
          <Button color="primary" size="md">
            {dict.landingPage.hero.button}
          </Button>
        </Link>
        <div className="block md:hidden">
          <HamburgerMenu links={Links} />
        </div>
      </div>
    </div>
  );
}

export default Header;
