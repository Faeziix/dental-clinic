"use client";
import React from "react";
import Link from "next-intl/link";
import Image from "next/image";
import InstagramImage from "@/components/icons/InstagramIconOrange";
import BeforeAfterPic from "@/public/instagram/Post-beforeafter.jpg";
import ImplantPic from "@/public/instagram/Post-Implant-aftercare.jpg";
import AirflowPic from "@/public/instagram/Post-Airflow.jpg";
import YellowTeethPic from "@/public/instagram/Post-Yellowteeth.jpg";
import { useTranslations } from "next-intl";
import { Variants, motion } from "framer-motion";
import { variantGenerator } from "@/utils/animation-variants/variants";
import useScrollAnimation from "@/utils/useScrollAnimation";

const posts = [
  {
    name: "before_after",
    src: BeforeAfterPic,
    link: "https://www.instagram.com/p/CgkO3ARF1k_/",
  },
  {
    name: "implant",
    src: ImplantPic,
    link: "https://www.instagram.com/p/Crqx_UquqQy/",
  },
  {
    name: "airflow",
    src: AirflowPic,
    link: "https://www.instagram.com/p/Cd6EcZVgzAE/",
  },
  {
    name: "yellow_teeth",
    src: YellowTeethPic,
    link: "https://www.instagram.com/p/CtZjJebOZyj/",
  },
];

function Instagram({ lang }) {
  const [ref, controls] = useScrollAnimation();

  const listVariant: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    hidden: {
      opacity: 0,
      x: lang === "en" ? "-20px" : "20px",
    },
  };

  const listItemVariant: Variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  const descriptionVariant = variantGenerator({
    duration: 0.3,
    delay: 1,
    x: 0,
  });

  const linkVariant = variantGenerator({
    duration: 0.3,
    delay: 1.3,
    x: 0,
  });

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
      x: lang === "en" ? "-20px" : "20px",
    },
  };

  const dict = useTranslations("landingPage");

  return (
    <div ref={ref} className="w-full max-w-5xl px-5">
      <motion.h2
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="mb-4"
      >
        {dict("instagram.title")}
      </motion.h2>
      <motion.div
        variants={listVariant}
        initial="hidden"
        animate={controls}
        className="mb-4 grid grid-cols-2 flex-wrap items-center justify-center justify-items-center gap-2 lg:grid-cols-4"
      >
        {posts.map((post) => (
          <motion.div
            variants={listItemVariant}
            key={post.name}
            className="relative aspect-square w-full max-w-[15rem] rounded-lg"
          >
            <Link href={post.link} target="_blank">
              <Image
                src={post.src}
                alt="Instagram Post"
                fill
                className="rounded-lg object-cover"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
      <motion.h4
        variants={descriptionVariant}
        initial="hidden"
        animate={controls}
        className="mb-2 text-center"
      >
        {dict("instagram.description")}
      </motion.h4>
      <motion.div variants={linkVariant} initial="hidden" animate={controls}>
        <Link
          variants={linkVariant}
          initial="hidden"
          animate={controls}
          className="flex items-center justify-center gap-2 text-accent"
          style={{ direction: "rtl" }}
          target="_blank"
          href="https://www.instagram.com/dr.soheila.karimi/"
        >
          dr.soheila.karimi
          <InstagramImage />
        </Link>
      </motion.div>
    </div>
  );
}

export default Instagram;
