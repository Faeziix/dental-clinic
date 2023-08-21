import React from "react";
import Image from "next/image";
import InstagramIcon from "@/public/InstagramIcon.png";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import LocationIcon from "@/public/footer/address.svg";
import TelephoneIcon from "@/public/TelephoneIcon.png";
import ContactBanner from "@/public/ContactBanner.png";
import style from "./contact.module.scss";
import Button from "@/components/ui/Buttons";
import Link from "next/link";

const contacts = [
  {
    title: "شماره تماس",
    description: <a href="tel:04133321028">041-33321028</a>,
    icon: <PhoneIcon />,
  },
  {
    title: "ساعات کاری",
    description: (
      <span>
        شنبه تا چهارشنبه 16 تا 21 <br /> پنج‌شنبه‌ها 11تا 15{" "}
      </span>
    ),
    icon: <ClockIcon />,
  },
];

function Page() {
  return (
    <main className="mt-20 min-h-screen">
      <div className="md:max-w-7xl mx-auto mr-5 md:mr-auto">
        <div className="flex pr-5 pt-24 md:pr-20 gap-4 items-center ">
          <Image
            src={TelephoneIcon}
            className="w-10 md:w-min"
            alt="Telephone"
          />
          <h1 className="">ارتباط با ما</h1>
        </div>
        <h3 className="md:pr-20 pt-6 pb-24 p-5">
          برای مشاوره تلفنی اختصاصی و رزرو وقت، کافیست در ساعات کاری با ما تماس
          بگیرید.
        </h3>
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
              <h5>{contact.description}</h5>
            </div>
          ))}
        </div>
      </section>

      <section className=" flex items-center flex-col md:flex-row">
        <div className="md:h-80 text-Neutral px-5 md:pr-48 py-12 bg-primary w-full  ounded-lg md:rounded-bl-none md:rounded-tl-none md:rounded-tr-lg md:rounded-br-lg">
          <div className="flex gap-2 ">
            <Image src={LocationIcon} className="w-6" alt="Location" />
            <h2 className="font-bold text-2xl mb-4">آدرس ما</h2>
          </div>
          <div className="flex gap-2 md:mt-16">
            <h3>
              تبریز، ولیعصر، خیابان پروین اعتصامی، روبروی قنادی پاک، ساختمان
              پزشکان 1، طبقه هفتم، واحد B
            </h3>
          </div>
        </div>
        <div className="bg-accent relative w-[90%] mx-auto mr-auto z-0 py-4 pr-4 pl-4 md:pl-0 max-w-3xl md:w-full rounded-lg md:rounded-bl-none md:rounded-tl-none md:rounded-tr-lg md:rounded-br-lg md:h-[36.5rem]">
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
        <h1 className="mb-8">صفحات مجازی مطب دکتر سهیلا کریمی</h1>
        <h3>
          در خارج از ساعات کاری، در اینستاگرام یا واتس‌اپ پیام دهید. همکاران ما
          در اسرع وقت پاسخگوی شما هستند.
        </h3>

        <div className="flex flex-col md:flex-row gap-8 mt-16 w-full justify-center max-w-sm mx-auto">
          <Link
            target="_blank"
            href="https://www.instagram.com/dr.soheila.karimi/"
          >
            <Button className="flex w-full">
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
