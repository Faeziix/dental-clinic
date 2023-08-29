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
import { useTranslations } from "next-intl";

function Services({ lang }) {
  const dict = useTranslations("landingPage");
  const [ref, controls] = useScrollAnimation();

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
      x: lang === "en" ? "-10%" : "10%",
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
      x: lang === "en" ? "-10%" : "10%",
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
          className="mb-6 max-w-5xl mx-auto"
        >
          {dict("services.title")}
        </motion.h2>
        <div
          className={`relative items-end flex ${
            lang == "fa" ? "lg:pl-6" : "lg:pr-6"
          }`}
        >
          <motion.div
            variants={backgroundVariant}
            initial="hidden"
            animate={controls}
            className={`absolute top-0 bg-accent h-full -z-10 ${
              lang == "fa"
                ? "lg:-right-10 lg:rounded-l-3xl rounded-3xl lg:rounded-r-none"
                : "lg:-left-10 lg:rounded-r-3xl rounded-3xl lg:rounded-l-none"
            }`}
          />

          <motion.div
            variants={listVariant}
            initial="hidden"
            animate={controls}
            className={`px-5 lg:px-0 max-w-4xl text-2xl  h-full w-full py-4 flex flex-col-reverse md:flex-row-reverse gap-4
${
  lang == "fa"
    ? "lg:mr-auto lg:ml-6 ml-auto mr-auto"
    : "lg:ml-auto lg:mr-6 ml-auto mr-auto"
}
`}
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

                  <p className="leading-8 text-base">{service.text}</p>
                </div>

                <Link className="w-full" href={service.link}>
                  <Button withArrow mode="block">
                    {dict("services.button")}
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
