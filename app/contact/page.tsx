import React from "react";
import Image from "next/image";
import InstagramIcon from "@/public/instagram icon.svg";
import PhoneIcon from "@/public/footer/phone.svg";
import ClockIcon from "@/public/footer/clock.svg";
import LocationIcon from "@/public/footer/address.svg";
import TelephoneIcon from "@/public/TelephoneIcon.png";
import ContactBanner from "@/public/ContactBanner.png";

const contacts = [
  {
    title: "شماره تماس",
    description: <a href="tel:04133321028">041-33321028</a>,
    icon: <Image src={PhoneIcon} className="invert w-10" alt="Phone" />,
  },
  {
    title: "ساعات کاری",
    description: "شنبه تا چهارشنبه 16 تا 21 پنج‌شنبه‌ها 11تا 15 ",
    icon: <Image src={ClockIcon} className="w-10 invert" alt="Clock" />,
  },
  // {
  //   title: "اینستاگرام",
  //   description: (
  //     <a href="https://www.instagram.com/dr.soheila.karimi/">
  //       @dr.soheila.karimi
  //     </a>
  //   ),
  //   icon: <Image className="w-10" src={InstagramIcon} alt="Instagram" />,
  // },
];

function Page() {
  return (
    <main className="mt-20 min-h-screen">
      <div className="flex pr-5 pt-24 md:pr-20 gap-4 items-center">
        <Image src={TelephoneIcon} className="w-10 md:w-min" alt="Telephone" />
        <h1 className="">ارتباط با ما</h1>
      </div>

      <h3 className="md:pr-20 pt-6 pb-24 p-5">
        برای مشاوره تلفنی اختصاصی و رزرو وقت، کافیست در ساعات کاری با ما تماس
        بگیرید.
      </h3>

      <section className="before:content-[''] before:absolute relative before:w-full before:h-full before:bg-black before:bg-opacity-50">
        <Image
          src={ContactBanner}
          className="w-full h-[33rem] object-cover object-top "
          alt="Contact Banner"
        />
      </section>

      <section>
        <div className="flex justify-center gap-16">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="flex max-w-[24rem] px-20 py-8 pb-24 text-center bg-lightBlue 
                shadow-md shadow-zinc-300 w-full rounded-lg relative -top-24 flex-col gap-2 items-center"
            >
              <div className="mb-10">{contact.icon}</div>
              <h3 className="font-bold text-primary mb-12">{contact.title}</h3>
              <h5>{contact.description}</h5>
            </div>
          ))}
        </div>
      </section>

      <section className=" flex items-center mt-12">
        <div className="h-80 text-Neutral pr-20 pt-12 bg-primary w-full">
          <div className="flex gap-2 ">
            <Image src={LocationIcon} className="w-6" alt="Location" />
            <h3 className="font-bold">آدرس ما</h3>
          </div>
          <div className="flex gap-2 mt-16">
            <h5>
              تبریز، ولیعصر، خیابان پروین اعتصامی، روبروی قنادی پاک، ساختمان
              پزشکان 1، طبقه هفتم، واحدB
            </h5>
          </div>
        </div>
        <div className="bg-accent relative mr-auto z-0 py-4 pr-4 max-w-[75rem] w-full rounded-tr-lg rounded-br-lg h-[36.5rem]">
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
      </section>
    </main>
  );
}

export default Page;
