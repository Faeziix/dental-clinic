"use client";

import React from "react";
import ToothFamily from "@/public/icons/tooth-family.png";
import Logo from "@/public/logo.png";
import FooterBkg from "@/public/footer/footer-bkg.png";
import Image from "next/image";
import Link from "next-intl/link";
import Phone from "@/public/footer/phone.svg";
import Clock from "@/public/footer/clock.svg";
import Address from "@/public/footer/address.svg";
import { useTranslations } from "next-intl";

function Footer() {
  const dict = useTranslations("footer");

  const ContactUs = [
    {
      name: "Phone",
      title: dict("contactUs.phone.title"),
      display: <a href="tel:04133321028">041-33321028</a>,
      icons: <Image className="h-6 w-6" src={Phone} alt="Phone" />,
    },
    {
      name: "Work Hours",
      title: dict("contactUs.clock.title"),
      display: dict.rich("contactUs.clock.time", {
        item: (text) => <span className="font-bold">{text}</span>,
      }),
      icons: <Image className="h-6 w-6" src={Clock} alt="Clock" />,
    },
    {
      name: "Address",
      title: dict("contactUs.address.title"),
      display: dict("contactUs.address.text"),
      icons: (
        <Image className="w-16 max-w-[20px]" src={Address} alt="Address" />
      ),
    },
  ];

  const quickAccessLinks = [
    {
      name: "laminate",
      link: "/services/laminate",
      display: dict("quick_access.laminate"),
    },
    {
      name: "implant",
      link: "/services/implant",
      display: dict("quick_access.implant"),
    },
    {
      name: "children",
      link: "/services/children",
      display: dict("quick_access.children"),
    },
    {
      name: "Portofolio",
      link: "/portfolio",
      display: dict("quick_access.portfolio"),
    },
  ];

  return (
    <footer className="relative mt-32 px-5 py-20 text-Neutral">
      <section className="mx-auto flex h-full max-w-5xl items-center justify-center">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex basis-3/5 flex-col">
            <div className="mb-4 flex">
              <Image
                className="h-20 w-20 object-contain"
                src={ToothFamily}
                alt="Tooth Family"
              />
              <Image
                className="h-20 w-40 object-contain"
                src={Logo}
                alt="Logo"
              />
            </div>
            <p className="text-base leading-7">{dict("description")}</p>
          </div>

          <div className="flex basis-1/5 flex-col gap-4">
            <h3 className="whitespace-nowrap text-2xl font-bold">
              {dict("quick_access.title")}
            </h3>
            <div className="flex flex-col gap-2">
              {quickAccessLinks.map((link) => (
                <Link
                  className="inline hover:text-purple-300"
                  href={link.link}
                  key={link.name}
                >
                  {link.display}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">{dict("contactUs.title")}</h3>
            <div className="flex flex-col gap-2">
              {ContactUs.map((link) => (
                <div className="flex items-start gap-2" key={link.name}>
                  {link.icons}
                  <div className="flex flex-col">
                    <p>
                      <span className="font-bold">{link.title}</span>:{" "}
                      {link.display}
                    </p>
                  </div>
                </div>
              ))}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.3507139072904!2d46.35871927233857!3d38.06221268976521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a1be87093cfd9%3A0xad3c6b856558b5ba!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mG!5e0!3m2!1sen!2sae!4v1690219711675!5m2!1sen!2sae"
                style={{ border: 0 }}
                className="mt-6"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Image
        src={FooterBkg}
        className="-z-10 object-cover"
        alt="Footer Background"
        fill
      />

      <div className="absolute bottom-0 left-0 w-full bg-blue-950">
        <p className="py-4 text-center text-sm">
          {dict("copyright")} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
