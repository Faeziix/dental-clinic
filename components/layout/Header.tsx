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
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Links = [
  {
    display: "صفحه اصلی",
    link: "/",
    name: "Home",
  },
  {
    display: "خدمات",
    link: "/services",
    name: "Services",
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <a>خدمات</a>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem className="text-right w-full">
              <Link className="w-full block" href="/services/implant">
                ایمپلنت
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-right w-full">
              <Link className="w-full block" href="/services/laminate">
                لمینیت
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-right w-full">
              <Link className="w-full block" href="/services/children">
                اطفال
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    ),
    mobileRender: () => (
      <div className="flex flex-col gap-2">
        <Link className="text-2xl my-4 text-Neutral" href="/services/implant">
          ایمپلنت
        </Link>
        <Link className="text-2xl my-4 text-Neutral" href="/services/laminate">
          لمینیت
        </Link>
        <Link className="text-2xl my-4 text-Neutral" href="/services/children">
          اطفال
        </Link>
      </div>
    ),
  },
  {
    display: "نمونه کارها",
    link: "/portfolio",
    name: "Portfolio",
  },
  {
    display: "ارتباط با ما",
    link: "/contact",
    name: "Contact",
  },
];

function Header() {
  return (
    <div className="md:h-20 h-16 fixed top-0 z-20 bg-background py-2 w-full shadow-xl">
      <div className="flex gap-4 flex-row-reverse md:flex-row justify-center items-center h-full w-full lg:px-16 px-5">
        <Link href="/" className="mr-auto ml-0 md:ml-auto h-full md:mr-0 w-fit">
          <Image className="h-full w-full" src={Logo} alt="Logo" />
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
          className="md:mr-auto mr-0 ml-auto md:ml-0 hidden md:block"
        >
          <Button color="primary" size="md">
            رزرو وقت
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
