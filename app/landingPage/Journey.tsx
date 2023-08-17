"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CheckmarkIcon from "@/components/icons/Checkmark";
import TaskIcon from "@/components/icons/TaskIcon";
import StarIcon from "@/components/icons/StarIcon";
import JourneyBkgPrimary from "@/public/JourneyBackgroundPrimary.png";
import JourneyBkgAccent from "@/public/JourneyBackgroundAccent.png";
import Journey1 from "@/public/Journey1.png";
import Journey2 from "@/public/Journey2.png";
import Journey3 from "@/public/Journey3.png";
import { Variants, motion } from "framer-motion";
import { textVariant } from "@/utils/animation-variants/variants";
import Layers from "./journey/Layers";
import useScrollAnimation from "@/utils/useScrollAnimation";

const imageLeftTransitionVariant: Variants = {
  initial: {
    top: 0,
    left: 0,
  },
  visible: {
    top: -16,
    left: 16,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.1,
      delay: 0.2,
    },
  },
};

const imageRightTransitionVariant: Variants = {
  initial: {
    top: 0,
    left: 0,
  },
  visible: {
    top: -16,
    left: -16,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.1,
      delay: 0.2,
    },
  },
};

const journey = [
  {
    title: "آگاهی، شرط اولمونه!",
    icon: <CheckmarkIcon className="w-9 h-9" />,
    image: (
      <>
        <Image
          className="absolute top-0"
          src={JourneyBkgPrimary}
          alt="JourneyBkgPrimary"
        />
        <motion.div className="relative" variants={imageRightTransitionVariant}>
          <Image src={Journey1} alt="Journey1" />
        </motion.div>
      </>
    ),
    description:
      "ابتدا تک‌تک دندان‌هــای و لثه‌هـای شما معاینه می‌شوند. برای شما عکس رادیولوژی می‌نویسیم تا بعد از بررسی، بتوانیم به طور کامل و تخصصی، شما را راهنمایی کرده و مشاوره دهیم.",
  },
  {
    title: "چه کاری برای من مناسب‌تره؟",
    icon: <TaskIcon className="w-9 h-9" />,
    image: (
      <>
        <Image
          className="absolute right-0 top-0"
          src={JourneyBkgAccent}
          alt="JourneyBkgAccent"
        />
        <motion.div className="relative" variants={imageLeftTransitionVariant}>
          <Image className="relative" src={Journey2} alt="Journey2" />
        </motion.div>
      </>
    ),
    description:
      "بعد از بررسی عکس رادیولوژی، بر اساس بودجه شما، چند طـرح درمان برایتان می‌نویسیم تا شما بتوانید با خیالی راحت، ‌خدمات دندان‌پزشکی خود را اولویت‌بندی کنید. اگر به موقع برای درمان اقدام کنید، دوره درمان کوتاه‌تر و بدون درد خواهد بود.",
  },
  {
    title: "وقتشه از ته دل بخندی D:",
    icon: <StarIcon className="w-9 h-9" />,
    image: (
      <>
        <Image
          className="absolute top-0"
          src={JourneyBkgPrimary}
          alt="JourneyBkgPrimary"
        />
        <motion.div className="relative" variants={imageRightTransitionVariant}>
          <Image src={Journey3} alt="Journey3" />
        </motion.div>
      </>
    ),
    description:
      "در آخر سفرمون، لبخند هالیوودی خود را با بهترین کیفیت مواد و تجهیزات، بدون درد به دست می‌آورید و شادی رو به اطرافیانتان هدیه می‌دید.",
  },
];

function Journey() {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.section ref={ref} className="px-5 md:px-0">
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="mb-16"
      >
        سفر سلامت شما همراه با ما
      </motion.h1>

      <div className="flex flex-col gap-20 max-w-5xl">
        {journey.map((step, i) => (
          <Layers key={i} step={step} i={i} />
        ))}
      </div>
    </motion.section>
  );
}

export default Journey;
