"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ChildToothIcon from "@/public/icons/ChildToothIcon.png";
import LaminateIcon from "@/components/icons/LaminateIcon";
import ImplantIcon from "@/components/icons/ImplantIcon";
import ServicesGirlImage from "@/public/services/ServicesGirl.png";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Buttons";
import useScrollAnimation from "@/utils/useScrollAnimation";
import Link from "next/link";

const textVariant: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};

const listVariant: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      staggerChildren: 0.2,
      when: "beforeChildren",
      staggerDirection: -1,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
};

const listItemVariant: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
};

const backgroundVariant: Variants = {
  visible: {
    width: "100%",
    transition: {
      duration: 0.5,
      ease: "circOut",
      delay: 0.7,
    },
  },
  hidden: {
    width: "0%",
  },
};

const imageVariant: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.7,
      delay: 1.7,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
};

const services = [
  {
    name: "child",
    link: "/services/children",
    display: "اطفال",
    icon: <Image src={ChildToothIcon} alt="Child Tooth Icon" />,
    text: "متاسفانه برخی والدین به دلیل همکاری نکردن کودک، فرزند خود را به دندان‌پزشکی نمی‌برند که در ادامه باعث بروز مشکلات بزرگی می‌شود. ما با آموزش و تشویق دلبندتان، محیطی دوستانه و آرام برای او ایجاد میکنیم.",
  },
  {
    name: "laminate",
    link: "/services/laminate",
    display: "لمینت",
    icon: <LaminateIcon />,
    text: "برطرف نکردن مشکلات دندان قبل از لمینیت، استفاده از مواد نامرغوب و یا رنگ  نامناسب، زیبایـی دندان‌ها را از بین میبرد. ما به شما کمک می کنیم تا با مشاوره اختصاصی و اصولی با استفاده از بهترین مواد موجود، به لبخند رویایی خود دست بیابید.",
  },
  {
    name: "implant",
    link: "/services/implant",
    display: "ایمپلنت",
    icon: <ImplantIcon />,
    text: "بسیاری از افراد به دلیل ترس از درد ایمپلنت، از اقدام به درمان خودداری می‌کنند. اما طرز انجام ایمپلنت در مجموعه ما با استفاده از تکنیک‌های مدرن،با درد بسیار کمی میباشد.",
  },
];

function Services() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section ref={ref} className="relative w-full">
      <motion.h2
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="mb-4 pr-5 max-w-5xl mx-auto"
      >
        محبوب‌ترین خدمات ما
      </motion.h2>
      <div className="relative mx-10 lg:pl-10 items-end flex">
        <motion.div
          variants={backgroundVariant}
          initial="hidden"
          animate={controls}
          className="absolute lg:rounded-l-3xl rounded-3xl lg:rounded-r-none top-0 bg-accent lg:-right-10 h-full -z-10"
        />

        <motion.div
          variants={listVariant}
          initial="hidden"
          animate={controls}
          className="px-5 lg:px-0 max-w-4xl text-2xl lg:mr-auto lg:ml-6 ml-auto mr-auto h-full w-full py-4 flex flex-col-reverse md:flex-row-reverse gap-4"
        >
          {services.map((service) => (
            <motion.div
              variants={listItemVariant}
              key={service.name}
              className="flex max-w-xl mx-auto flex-col basis-full px-4 py-8 gap-4 items-center justify-between bg-background rounded-lg"
            >
              <div>
                <div className="flex mb-4 text-primary w-full gap-2 items-center">
                  {service.icon}
                  <h3 className="">{service.display}</h3>
                </div>

                <p className="leading-8 text-base text-justify">
                  {service.text}
                </p>
              </div>

              <Link className="w-full" href={service.link}>
                <Button withArrow mode="block">
                  بیشتر بخوانید
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="hidden lg:block lg:w-3/12 h-full"
          variants={imageVariant}
          initial="hidden"
          animate={controls}
        >
          <Image src={ServicesGirlImage} className="" alt="image" />
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
