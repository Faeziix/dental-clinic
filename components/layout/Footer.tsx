import React from "react";
import ToothFamily from "@/public/icons/tooth-family.png";
import Logo from "@/public/logo.png";
import FooterBkg from "@/public/footer/footer-bkg.png";
import Image from "next/image";
import Link from "next/link";
import Phone from "@/public/footer/phone.svg";
import Clock from "@/public/footer/clock.svg";
import Address from "@/public/footer/address.svg";

const quickAccessLinks = [
  {
    name: "laminate",
    link: "/services/laminate",
    display: "لمینت",
  },
  {
    name: "implant",
    link: "/services/implant",
    display: "ایمپلنت",
  },
  {
    name: "children",
    link: "/services/children",
    display: "اطفال",
  },
  {
    name: "Portofolio",
    link: "/portfolio",
    display: "نمونه کارها",
  },
];

const ContactUs = [
  {
    name: "Phone",
    title: "شماره تماس",
    display: <a href="tel:04133321028">04133321028</a>,
    icons: <Image className="w-6 h-6" src={Phone} alt="Phone" />,
  },
  {
    name: "Work Hours",
    title: "ساعات کاری",
    display: "شنبه تا چهارشنبه 16 تا 21 - پنج‌شنبه‌ها 11تا 15",
    icons: <Image className="w-6 h-6" src={Clock} alt="Clock" />,
  },
  {
    name: "Address",
    title: "آدرس",
    display:
      "تبریز، ولیعصر، خیابان پروین اعتصامی، روبروی قنادی پاک، ساختمان پزشکان 1، طبقه هفتم، واحدB",
    icons: <Image className="w-12" src={Address} alt="Address" />,
  },
];

function Footer() {
  return (
    <footer className="relative mt-32 px-5 py-20 text-Neutral">
      <section className="flex h-full max-w-5xl mx-auto items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col basis-3/5">
            <div className="flex mb-4">
              <Image
                className="w-20 object-contain h-20"
                src={ToothFamily}
                alt="Tooth Family"
              />
              <Image
                className="h-20 object-contain w-40"
                src={Logo}
                alt="Logo"
              />
            </div>
            <p>
              مطب دندانپزشکی دکتر سهیلا کریمی، واقع در ولیعصر تبریز با بهره‌گیری
              از جدیدترین امکانات روز دنیا در خدمت شما عزیزان خواهد بود. این
              مطب، علاوه بر اینکه جایی مناسب برای درمان شماست، آسودگی خاطر شما
              را از نظر دسترسی همیشگی تأمین خواهد کرد.
            </p>
          </div>

          <div className="flex gap-4 flex-col basis-1/5">
            <h3 className="text-2xl whitespace-nowrap font-bold">
              دسترسی سریع
            </h3>
            <div className="flex gap-2 flex-col">
              {quickAccessLinks.map((link) => (
                <Link
                  className="hover:text-purple-300 inline"
                  href={link.link}
                  key={link.name}
                >
                  {link.display}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <h3 className="text-2xl font-bold">ارتباط با ما</h3>
            <div className="flex gap-2 flex-col">
              {ContactUs.map((link) => (
                <div className="flex gap-2 items-baseline" key={link.name}>
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
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Image
        src={FooterBkg}
        className="object-cover -z-10"
        alt="Footer Background"
        fill
      />

      <div className="bg-blue-950 absolute bottom-0 w-full left-0">
        <p className="text-center py-4 text-sm">
          کلیه حقوق این سایت برای مطب دکتر سهیلا کریمی محفوظ می‌باشد. ©
        </p>
      </div>
    </footer>
  );
}

export default Footer;
