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
import LocaleChanger from "./LocaleChanger";
import { usePathname } from "next/navigation";

function Header({ lang, dict }) {
  const pathname = usePathname();

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
              <DropdownMenuItem>
                <Link
                  className="w-full block hover:text-background"
                  href="/services/implant"
                >
                  {dict.header.implant}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="w-full block hover:text-background"
                  href="/services/laminate"
                >
                  {dict.header.laminate}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="w-full block hover:text-background"
                  href="/services/children"
                >
                  {dict.header.children}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      ),
      mobileRender: (onClick) => (
        <div className="flex flex-col gap-2">
          <Link
            className="text-2xl my-4 text-Neutral hover:text-purple-100"
            href="/services/implant"
            onClick={onClick}
          >
            {dict.header.implant}
          </Link>
          <Link
            className="text-2xl my-4 text-Neutral hover:text-purple-100"
            href="/services/laminate"
            onClick={onClick}
          >
            {dict.header.laminate}
          </Link>
          <Link
            className="text-2xl my-4 text-Neutral hover:text-purple-100"
            href="/services/children"
            onClick={onClick}
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
        <div className={`flex ${lang == "fa" ? "md:mr-auto" : "md:ml-auto"} `}>
          <div className="hidden md:block mx-4 mt-1">
            <LocaleChanger />
          </div>
          <Link href="/reservation" className={` hidden md:block`}>
            <Button color="primary" size="md">
              {dict.landingPage.hero.button}
            </Button>
          </Link>
        </div>
        <div className="block md:hidden">
          <HamburgerMenu links={Links} />
        </div>
      </div>
    </div>
  );
}

export default Header;
