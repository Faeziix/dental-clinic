"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CheckmarkIcon from "@/components/icons/Checkmark";
import TaskIcon from "@/components/icons/TaskIcon";
import StarIcon from "@/components/icons/StarIcon";
import JourneyBkgPrimary from "@/public/journey/JourneyBackgroundPrimary.png";
import JourneyBkgAccent from "@/public/journey/JourneyBackgroundAccent.png";
import Journey1 from "@/public/journey/Journey1.png";
import Journey2 from "@/public/journey/Journey2.png";
import Journey3 from "@/public/journey/Journey3.png";
import { Variants, motion } from "framer-motion";
import Layers from "./journey/Layers";
import useScrollAnimation from "@/utils/useScrollAnimation";
import { variantGenerator } from "@/utils/animation-variants/variants";
import { useTranslations } from "next-intl";

function Journey({ lang }) {
  const dict = useTranslations("landingPage");
  const [ref, controls] = useScrollAnimation();

  const imageEvenTransitionVariant: Variants = {
    hidden: {
      top: 0,
      left: -16,
    },

    visible: {
      top: -16,
      left: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.1,
        delay: 0.2,
      },
    },
  };

  const imageOddTransitionVariant: Variants = {
    hidden: {
      left: 0,
      top: 0,
    },
    visible: {
      top: -16,
      right: lang === "fa" ? 16 : -16,
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
      title: dict("journey.first.title"),
      icon: <CheckmarkIcon className="w-9 h-9" />,
      image: (
        <>
          <Image
            className="absolute w-[calc(100%-16px)] top-0"
            src={JourneyBkgPrimary}
            alt="JourneyBkgPrimary"
          />
          <motion.div
            className="relative w-full"
            variants={imageOddTransitionVariant}
          >
            <Image
              src={Journey1}
              className="w-[calc(100%-16px)] relative"
              alt="Journey1"
            />
          </motion.div>
        </>
      ),
      description: dict("journey.first.description"),
    },
    {
      title: dict("journey.second.title"),
      icon: <TaskIcon className="w-9 h-9" />,
      image: (
        <>
          <Image
            className="absolute w-[calc(100%-16px)] top-0 ltr:right-0 rtl:left-0 "
            src={JourneyBkgAccent}
            alt="JourneyBkgAccent"
          />
          <motion.div
            className="relative w-full"
            variants={imageEvenTransitionVariant}
          >
            <Image
              className="relative w-[calc(100%-16px)]"
              src={Journey2}
              alt="Journey2"
            />
          </motion.div>
        </>
      ),
      description: dict("journey.second.description"),
    },
    {
      title: dict("journey.third.title"),
      icon: <CheckmarkIcon className="w-9 h-9" />,
      image: (
        <>
          <Image
            className="absolute w-[calc(100%-16px)] top-0"
            src={JourneyBkgPrimary}
            alt="JourneyBkgPrimary"
          />
          <motion.div
            className="relative w-full"
            variants={imageOddTransitionVariant}
          >
            <Image
              src={Journey3}
              className="w-[calc(100%-16px)] relative"
              alt="Journey3"
            />
          </motion.div>
        </>
      ),
      description: dict("journey.first.description"),
    },
  ];

  return (
    <motion.section ref={ref} className="mx-5 md:px-0">
      <motion.h2
        variants={variantGenerator({
          duration: 0.7,
          x: lang === "en" ? "-5%" : "5%",
        })}
        initial="hidden"
        animate={controls}
        className="mb-16"
      >
        {dict("journey.title")}
      </motion.h2>

      <div className="flex flex-col gap-20 max-w-5xl">
        {journey.map((step, i) => (
          <Layers lang={lang} key={i} step={step} i={i} />
        ))}
      </div>
    </motion.section>
  );
}

export default Journey;
