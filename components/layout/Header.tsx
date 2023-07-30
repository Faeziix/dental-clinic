import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../ui/HamburgerMenu";

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
  {
    display: "درباره ما",
    link: "/about",
    name: "About",
  },
];

function Header() {
  return (
    <div className="h-20 fixed top-0 z-10 bg-Neutral py-2 w-full">
      <div className="flex flex-row-reverse md:flex-row justify-center items-center h-full w-full px-5">
        <Image
          className="mr-auto ml-0 md:ml-auto md:mr-0 h-full w-min"
          src={Logo}
          alt="Logo"
        />
        <div className="md:flex hidden gap-6 items-center">
          {Links.map((link) => (
            <Link href={link.link} key={link.name}>
              {link.display}
            </Link>
          ))}
        </div>
        <button className="px-10 bg-primary w-fit text-Neutral rounded-full hidden md:block py-2 mr-auto font-bold">
          رزرو وقت
        </button>
        <div className="block md:hidden">
          <HamburgerMenu links={Links} />
        </div>
      </div>
    </div>
  );
}

export default Header;
