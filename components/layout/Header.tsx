"use client";

import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next-intl/link";
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
import MobileDropdown from "./MobileDropdown";

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
              <DropdownMenuItem>
                <Link
                  className="block w-full hover:text-background"
                  href="/services/implant"
                >
                  {dict.header.implant}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="block w-full hover:text-background"
                  href="/services/laminate"
                >
                  {dict.header.laminate}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="block w-full hover:text-background"
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
        <MobileDropdown
          onClick={onClick}
          menu={[
            {
              title: dict.header.implant,
              href: "/services/implant",
            },
            {
              title: dict.header.laminate,
              href: "/services/laminate",
            },
            {
              title: dict.header.children,
              href: "/services/children",
            },
          ]}
        >
          <span className="px-1 py-2 text-2xl text-Neutral">
            {dict.header.services}
          </span>
        </MobileDropdown>
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
    <div className="fixed top-0 z-20 h-16 w-full bg-background py-2 shadow-xl md:h-20">
      <div className="flex h-full w-full flex-row-reverse items-center justify-between gap-4 px-5 md:flex-row md:justify-center lg:px-16">
        <Link href="/" className={`h-full w-fit ltr:md:mr-auto rtl:md:ml-auto`}>
          <Image className="h-full w-fit" src={Logo} alt="Logo" />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {Links.map((link) => {
            if (link.render) return link.render();

            return (
              <div key={link.name}>
                <Link href={link.link}>{link.display}</Link>
              </div>
            );
          })}
        </div>
        <div className={`flex ${lang == "fa" ? "md:mr-auto" : "md:ml-auto"} `}>
          <div className="mx-4 mt-1 hidden md:block">
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
