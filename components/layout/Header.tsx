import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../ui/HamburgerMenu";
import Button from "../ui/Buttons";

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
    <div className="md:h-20 h-16 fixed top-0 z-20 bg-background py-2 w-full shadow-xl">
      <div className="flex gap-4 flex-row-reverse md:flex-row justify-center items-center h-full w-full lg:px-16 px-5">
        <Link href="/" className="mr-auto ml-0 md:ml-auto h-full md:mr-0 w-fit">
          <Image className="h-full w-full" src={Logo} alt="Logo" />
        </Link>
        <div className="md:flex hidden gap-6 items-center">
          {Links.map((link) => (
            <Link href={link.link} key={link.name}>
              {link.display}
            </Link>
          ))}
        </div>
        <Button
          color="primary"
          className="md:mr-auto mr-0 ml-auto md:ml-0 hidden md:block"
          size="md"
        >
          رزرو وقت
        </Button>
        <div className="block md:hidden">
          <HamburgerMenu links={Links} />
        </div>
      </div>
    </div>
  );
}

export default Header;
