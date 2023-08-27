"use client";
import React from "react";
import Image from "next/image";
import DocImage from "@/public/Doctor-image.jpeg";
import DentistIcon from "@/public/icons/DentistIcon.png";
import { motion } from "framer-motion";
import {
  variantGenerator,
  textVariant,
} from "@/utils/animation-variants/variants";
import useScrollAnimation from "@/utils/useScrollAnimation";

function Introduction({ lang, dict }) {
  const [ref, controls] = useScrollAnimation();

  const photoVariant = variantGenerator({
    duration: 0.7,
    delay: 0.5,
    x: lang === "en" ? -50 : 50,
  });

  const descriptionVariant = variantGenerator({
    duration: 0.7,
    delay: 0.6,
    x: lang === "en" ? -50 : 50,
  });

  return (
    <section ref={ref} className="w-full flex max-w-5xl flex-col gap-4 px-5">
      <motion.div
        variants={variantGenerator({
          duration: 0.7,
          x: lang === "en" ? -100 : 100,
        })}
        initial="hidden"
        animate={controls}
        className="flex items-center gap-2 mb-6"
      >
        <Image src={DentistIcon} alt="Dentist Icon" width={40} />
        <h2>{dict.landingPage.introduction.title}</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4">
        <motion.div
          className="basis-5/12 grow"
          variants={photoVariant}
          initial="hidden"
          animate={controls}
        >
          <Image
            className="rounded-lg w-full"
            src={DocImage}
            alt="Doctor Image"
          />
        </motion.div>
        <motion.p
          variants={descriptionVariant}
          initial="hidden"
          animate={controls}
          className="basis-7/12"
        >
          {dict.landingPage.introduction.subtitle.map((i) => (
            <p className="mb-4">{i}</p>
          ))}
        </motion.p>
      </div>
    </section>
  );
}

export default Introduction;