"use client";
import React from "react";
import Image from "next/image";
import InstagramIcon from "@/public/icons/InstagramIcon.png";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import LocationIcon from "@/public/footer/address.svg";
import TelephoneIcon from "@/public/icons/TelephoneIcon.png";
import ContactBanner from "@/public/contact-us/ContactBanner.png";
import style from "./contact.module.scss";
import Button from "@/components/ui/Buttons";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function Page() {
  const dict = useTranslations("contact");
  const locale = useLocale();

  const contacts = [
    {
      title: dict("cards.contactNumber"),
      description: <a href="tel:04133321028">041-33321028</a>,
      icon: <PhoneIcon />,
    },
    {
      title: dict("cards.opening"),
      description: (
        <span>
          {dict("cards.hours.h1")}
          <br /> {dict("cards.hours.h2")}
        </span>
      ),
      icon: <ClockIcon />,
    },
  ];

  function addressClassName() {
    if (locale === "en") {
      return "md:rounded-br-none md:rounded-tr-none md:rounded-bl-lg md:rounded-tl-lg";
    } else {
      return "md:rounded-bl-none md:rounded-tl-none md:rounded-br-lg md:rounded-tr-lg";
    }
  }

  function mapClassName() {
    if (locale === "en") {
      return "md:rounded-bl-lg md:rounded-tl-lg";
    } else {
      return "md:rounded-br-lg md:rounded-tr-lg";
    }
  }

  return (
    <main className="mt-20 min-h-screen">
      <div className="md:max-w-7xl mx-auto mr-5 md:mr-auto">
        <div className="flex pr-5 pt-24 md:pr-20 gap-4 items-center ">
          <Image
            src={TelephoneIcon}
            className="w-10 md:w-min"
            alt="Telephone"
          />
          <h1 className="">{dict("title")}</h1>
        </div>
        <h4 className="md:pr-20 pt-6 pb-24 p-5">{dict("description")}</h4>
      </div>

      <section className="">
        <Image
          src={ContactBanner}
          className="w-full object-cover object-top hidden md:block"
          alt="Contact Banner"
        />
      </section>

      <section className="mb-32 md:-mt-24">
        <div className="flex flex-col items-center md:flex-row justify-center gap-16 mx-5">
          {contacts.map((contact) => (
            <div key={contact.title} className={style.card}>
              <div className="w-full flex flex-col items-center">
                <div className="mb-10">{contact.icon}</div>
                <h2 className="font-bold text-center">{contact.title}</h2>
              </div>
              <h5 className="text-center">{contact.description}</h5>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center flex-col md:flex-row">
        <div
          className={`md:h-80 text-Neutral px-5 md:pr-48 py-12 bg-primary w-full rounded-lg rtl:rounded-bl-none rtl:rounded-tl-none rtl:md:rounded-tr-lg rtl:md:rounded-br-lg ltr:md:rounded-bl-none ltr:md:rounded-tl-none ltr:md:rounded-tr-lg ltr:md:rounded-br-lg`}
        >
          <div className="flex gap-2 items-center">
            <Image src={LocationIcon} className="w-6" alt="Location" />
            <h3 className="font-bold">{dict("address.title")}</h3>
          </div>
          <div className="flex gap-2 md:mt-16">
            <h4>{dict("address.description")}</h4>
          </div>
        </div>
        <div
          className={`bg-accent relative w-[90%] mx-auto rtl:mr-auto rtl:pr-4 rtl:pl-4 rtl:md:pl-0 ltr:pl-4 ltr:px-4 ltr:md:pr-0 z-0 py-4 max-w-3xl md:w-full rounded-lg rtl:rounded-bl-lg rtl:rounded-tl-lg rtl:rounded-tr-lg rtl:rounded-br-lg ltr:rounded-bl-lg ltr:rounded-tl-lg ltr:rounded-tr-none ltr:rounded-br-none h-[36.5rem]`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d832.9439167393656!2d46.36135513800614!3d38.06218727627918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a1be87093cfd9%3A0xad3c6b856558b5ba!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mG!5e0!3m2!1sen!2sae!4v1690826504853!5m2!1sen!2sae"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full z-20"
          />
        </div>
      </section>
      <section className="md:mx-20 py-20 mx-5 mt-32">
        <h1 className="mb-8">{dict("socials.title")}</h1>
        <h4>{dict("socials.description")}</h4>

        <div className="flex flex-col md:flex-row gap-8 mt-16 w-full justify-center max-w-sm mx-auto">
          <Link
            target="_blank"
            href="https://www.instagram.com/dr.soheila.karimi/"
          >
            <Button className="flex w-full flex-row">
              dr.sohaila.karimi
              <Image
                src={InstagramIcon}
                alt="Instagram"
                style={{ maxWidth: "auto" }}
                className="w-16 h-16 max-w-none"
              />
            </Button>
          </Link>

          <Link href="https://wa.me/98914133321028">
            <Button className="flex w-full">
              041-33321028
              <WhatsAppIcon className="w-16 h-16" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page;
