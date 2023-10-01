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
import Link from "next-intl/link";
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
      <div className="mx-auto pb-8 pt-5 ltr:ml-5 rtl:mr-5 md:mr-auto  md:max-w-7xl">
        <div className="flex items-center gap-4 pr-5 md:pr-20 ">
          <Image
            src={TelephoneIcon}
            className="w-10 md:w-min"
            alt="Telephone"
          />
          <h1 className="">{dict("title")}</h1>
        </div>
        <h4 className="pt-6 md:pr-20">{dict("description")}</h4>
      </div>

      <section className="">
        <Image
          src={ContactBanner}
          className="hidden w-full object-cover object-top md:block"
          alt="Contact Banner"
        />
      </section>

      <section className="mb-8 md:-mt-24">
        <div className="mx-5 flex flex-col items-center justify-center gap-16 md:flex-row">
          {contacts.map((contact) => (
            <div key={contact.title} className={style.card}>
              <div className="flex w-full flex-col items-center">
                <div className="mb-10">{contact.icon}</div>
                <h2 className="text-center font-bold">{contact.title}</h2>
              </div>
              <h5 className="text-center">{contact.description}</h5>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 flex flex-col items-center md:flex-row">
        <div
          className={`w-full rounded-lg bg-primary px-5 py-12 text-Neutral md:h-80 md:rounded-none md:pr-48`}
        >
          <div className="mb-4 flex items-center gap-2">
            <Image src={LocationIcon} className="w-6" alt="Location" />
            <h3 className="font-bold">{dict("address.title")}</h3>
          </div>
          <div className="flex gap-2 md:mt-16">
            <h4>{dict("address.description")}</h4>
          </div>
        </div>
        <div className="w-full px-5 md:px-0">
          <div
            className={`relative z-0 h-[36.5rem] w-full max-w-3xl rounded-lg bg-accent py-4 ltr:rounded-bl-lg ltr:rounded-br-lg ltr:rounded-tl-none ltr:rounded-tr-none ltr:px-4 ltr:pl-4 rtl:mr-auto rtl:rounded-bl-lg rtl:rounded-br-lg rtl:rounded-tl-none rtl:rounded-tr-none rtl:pl-4 rtl:pr-4 md:w-full ltr:md:rounded-bl-lg ltr:md:rounded-br-none ltr:md:rounded-tl-lg ltr:md:rounded-tr-none ltr:md:pr-0 rtl:md:rounded-bl-none rtl:md:rounded-br-lg rtl:md:rounded-tl-none rtl:md:rounded-tr-lg rtl:md:pl-0`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d832.9439167393656!2d46.36135513800614!3d38.06218727627918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a1be87093cfd9%3A0xad3c6b856558b5ba!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mG!5e0!3m2!1sen!2sae!4v1690826504853!5m2!1sen!2sae"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="z-20 h-full w-full"
            />
          </div>
        </div>
      </section>
      <section className="mx-5 md:mx-20">
        <h1 className="mb-8">{dict("socials.title")}</h1>
        <h4>{dict("socials.description")}</h4>

        <div className="mx-auto mt-16 flex w-full max-w-sm flex-col justify-center gap-8 md:flex-row">
          <Link
            target="_blank"
            href="https://www.instagram.com/dr.soheila.karimi/"
          >
            <Button
              style={{ direction: "rtl" }}
              className="flex w-full flex-row"
            >
              dr.sohaila.karimi
              <Image
                src={InstagramIcon}
                alt="Instagram"
                style={{ maxWidth: "auto" }}
                className="h-16 w-16 max-w-none"
              />
            </Button>
          </Link>

          <Link href="https://wa.me/98914133321028">
            <Button style={{ direction: "rtl" }} className="flex w-full">
              041-33321028
              <WhatsAppIcon className="h-16 w-16" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page;
