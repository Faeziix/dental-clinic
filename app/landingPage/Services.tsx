import React from "react";
import Image from "next/image";
import ChildToothIcon from "@/public/ChildToothIcon.png";
import LaminateIcon from "@/public/LaminateIcon.svg";
import ImplantIcon from "@/public/ImplantIcon.svg";
import ArrowRightIcon from "@/public/ArrowRightIcon.svg";
import ServicesGirlImage from "@/public/ServicesGirl.png";

const services = [
  {
    name: "child",
    display: "اطفال",
    icon: <Image src={ChildToothIcon} alt="Child Tooth Icon" />,
    text: "متاسفانه برخی والدین به دلیل همکاری نکردن کودک، فرزند خود را به دندان‌پزشکی نمی‌برند که در ادامه باعث بروز مشکلات بزرگی می‌شود. ما با آموزش و تشویق دلبندتان، محیطی دوستانه و آرام برای او ایجاد میکنیم.",
  },
  {
    name: "laminate",
    display: "لمینت",
    icon: <Image src={LaminateIcon} alt="Laminate Icon" />,
    text: "برطرف نکردن مشکلات دندان قبل از لمینیت، استفاده از مواد نامرغوب و یا رنگ  نامناسب، زیبایـی دندان‌ها را از بین میبرد. ما به شما کمک می کنیم تا با مشاوره اختصاصی و اصولی با استفاده از بهترین مواد موجود، به لبخند رویایی خود دست بیابید.",
  },
  {
    name: "implant",
    display: "ایمپلنت",
    icon: <Image src={ImplantIcon} alt="Implant Icon" />,
    text: "بسیاری از افراد به دلیل ترس از درد ایمپلنت، از اقدام به درمان خودداری می‌کنند. اما طرز انجام ایمپلنت در مجموعه ما با استفاده از تکنیک‌های مدرن،با درد بسیار کمی میباشد.",
  },
];

function Services() {
  return (
    <div className="relative w-full">
      <h1 className="mb-4 pr-5 max-w-5xl mx-auto">محبوب‌ترین خدمات ما</h1>
      <div className="relative lg:mr-10 lg:ml-[5%] items-end flex">
        <div className="absolute lg:rounded-3xl top-0 bg-accent w-full lg:w-[105%] lg:-right-[5%] h-full -z-10"></div>
        <div className="px-5 lg:px-0 max-w-4xl text-2xl lg:mr-auto lg:ml-6 ml-auto mr-auto h-full w-full py-4 flex flex-col md:flex-row-reverse gap-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex max-w-xl mx-auto flex-col basis-full px-4 py-8 gap-4 items-center justify-between bg-Neutral rounded-lg"
            >
              <div>
                <div className="flex mb-4 text-primary w-full gap-2 items-center">
                  {service.icon}
                  <h2 className="">{service.display}</h2>
                </div>

                <p className="leading-8 text-base text-justify">
                  {service.text}
                </p>
              </div>

              <button className="w-full text-lg lg:text-xl font-semibold relative rounded-3xl border-primary border-2 border-solid">
                <Image
                  className="absolute  top-1/2 transform -translate-y-1/2"
                  src={ArrowRightIcon}
                  alt="Arrow Right Icon"
                />
                بیشتر بخوانید
              </button>
            </div>
          ))}
        </div>
        <Image
          src={ServicesGirlImage}
          className="hidden lg:block lg:w-3/12 h-full"
          alt="image"
        />
      </div>
    </div>
  );
}

export default Services;
