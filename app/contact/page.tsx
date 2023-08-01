import React from "react";
import Image from "next/image";
import InstagramIcon from "@/public/instagram icon.svg";
import PhoneIcon from "@/public/footer/phone.svg";
import ClockIcon from "@/public/footer/clock.svg";
import LocationIcon from "@/public/footer/address.svg";

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
  {
    title: "اینستاگرام",
    description: (
      <a href="https://www.instagram.com/dr.soheila.karimi/">
        @dr.soheila.karimi
      </a>
    ),
    icon: <Image className="w-10" src={InstagramIcon} alt="Instagram" />,
  },
];

function Page() {
  return (
    <main className="mt-20 min-h-screen">
      <h1 className="p-5 md:p-20">ارتباط با ما</h1>
      <section className="grid grid-cols-1 mr-20 mt-6 gap-4 md:grid-cols-[auto_auto_auto]">
        {contacts.map((contact) => (
          <div key={contact.title} className="flex gap-2">
            <div>{contact.icon}</div>
            <div className="flex flex-col">
              <h4 className="font-bold">{contact.title}</h4>
              <h5>{contact.description}</h5>
            </div>
          </div>
        ))}
      </section>
      <section className="md:mx-20 py-20 mx-5">
        <div className="flex gap-2">
          <div>
            <Image src={LocationIcon} className="w-10 invert" alt="Location" />
          </div>
          <div>
            <h3 className="font-bold">آدرس ما</h3>
            <div className="flex gap-2 mb-6">
              <h5>
                تبریز، ولیعصر، خیابان پروین اعتصامی، روبروی قنادی پاک، ساختمان
                پزشکان 1، طبقه هفتم، واحدB
              </h5>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d832.9439167393656!2d46.36135513800614!3d38.06218727627918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a1be87093cfd9%3A0xad3c6b856558b5ba!2z2LPYp9iu2KrZhdin2YYg2b7Ysti02qnYp9mG!5e0!3m2!1sen!2sae!4v1690826504853!5m2!1sen!2sae"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-96"
        />
      </section>
    </main>
  );
}

export default Page;
