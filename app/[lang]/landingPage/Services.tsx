"use client";
import React from "react";
import Image from "next/image";
import ChildToothIcon from "@/public/icons/ChildToothIcon.png";
import LaminateIcon from "@/components/icons/LaminateIcon";
import ImplantIcon from "@/components/icons/ImplantIcon";
import ServicesGirlImage from "@/public/services/ServicesGirl.png";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Buttons";
import useScrollAnimation from "@/utils/useScrollAnimation";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

function Services({ lang }) {
  const dict = useTranslations("landingPage");
  const [ref, controls] = useScrollAnimation();

  const textVariant: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      x: lang === "en" ? "-20px" : "20px",
    },
  };

  const listVariant: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
        staggerDirection: -1,
      },
    },
    hidden: {
      opacity: 0,
      x: lang === "en" ? "-10%" : "10%",
    },
  };

  const listItemVariant: Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
  };

  const backgroundVariant: Variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "circOut",
        delay: 0.3,
      },
    },
    hidden: {
      opacity: 0,
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
        delay: 0.6,
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
      display: dict("services.children.title"),
      icon: <Image src={ChildToothIcon} alt="Child Tooth Icon" />,
      text: dict("services.children.description"),
    },
    {
      name: "laminate",
      link: "/services/laminate",
      display: dict("services.laminate.title"),
      icon: <LaminateIcon />,
      text: dict("services.laminate.description"),
    },
    {
      name: "implant",
      link: "/services/implant",
      display: dict("services.implant.title"),
      icon: <ImplantIcon />,
      text: dict("services.implant.description"),
    },
  ];

  return (
    <section ref={ref} className="relative w-full">
      <div className="mx-5">
        <motion.h2
          variants={textVariant}
          initial="hidden"
          animate={controls}
          className="mx-auto mb-6 max-w-5xl"
        >
          {dict("services.title")}
        </motion.h2>
        <div
          className={`relative flex items-end ${
            lang == "fa" ? "lg:pl-6" : "lg:pr-6"
          }`}
        >
          <motion.div
            variants={backgroundVariant}
            initial="hidden"
            animate={controls}
            className={`absolute top-0 -z-10 h-full w-full bg-accent ${
              lang == "fa"
                ? "rounded-3xl lg:-right-10 lg:rounded-l-3xl lg:rounded-r-none"
                : "rounded-3xl lg:-left-10 lg:rounded-l-none lg:rounded-r-3xl"
            }`}
          />

          <motion.div
            variants={listVariant}
            initial="hidden"
            animate={controls}
            className={`flex h-full w-full max-w-4xl  flex-col-reverse gap-4 px-5 py-4 text-2xl md:flex-row-reverse lg:px-0
${
  lang == "fa"
    ? "ml-auto mr-auto lg:ml-6 lg:mr-auto"
    : "ml-auto mr-auto lg:ml-auto lg:mr-6"
}
`}
          >
            {services.map((service) => (
              <motion.div
                variants={listItemVariant}
                key={service.name}
                className="mx-auto flex max-w-2xl basis-full flex-col items-center justify-between gap-4 rounded-lg bg-background px-4 py-8"
              >
                <div>
                  <div className="mb-4 flex w-full items-center gap-2 text-primary">
                    {service.icon}
                    <h3 className="">{service.display}</h3>
                  </div>

                  <p className="text-base leading-8">{service.text}</p>
                </div>

                <Link className="w-full" href={service.link}>
                  <Button withArrow mode="block" className="px-6 text-primary">
                    <span>{dict("services.button")}</span>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="hidden h-full lg:block lg:w-3/12"
            variants={imageVariant}
            initial="hidden"
            animate={controls}
          >
            <Image
              src={ServicesGirlImage}
              className={lang === "en" ? "-scale-x-100" : ""}
              alt="image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;
