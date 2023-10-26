"use client";
import React from "react";
import Image from "next/image";
import DocImage from "@/public/Doctor-image.jpeg";
import DentistIcon from "@/public/icons/DentistIcon.png";
import { motion } from "framer-motion";
import { variantGenerator } from "@/utils/animation-variants/variants";
import useScrollAnimation from "@/utils/useScrollAnimation";
import { useTranslations } from "next-intl";

function Introduction({ lang }) {
  const dict = useTranslations("landingPage");
  const [ref, controls] = useScrollAnimation();

  const photoVariant = variantGenerator({
    duration: 0.3,
    delay: 0.1,
    x: lang === "en" ? -40 : 40,
  });

  const descriptionVariant = variantGenerator({
    duration: 0.3,
    delay: 0.2,
    x: 0,
  });

  return (
    <section ref={ref} className="flex w-full max-w-5xl flex-col gap-4 px-5">
      <motion.div
        variants={variantGenerator({
          duration: 0.3,
          x: lang === "en" ? -40 : 40,
        })}
        initial="hidden"
        animate={controls}
        className="mb-2 flex items-center gap-2 md:mb-8"
      >
        <Image src={DentistIcon} alt="Dentist Icon" width={40} />
        <h2>{dict("introduction.title")}</h2>
      </motion.div>

      <div className="flex flex-col gap-4 md:flex-row">
        <motion.div
          className="grow basis-5/12"
          variants={photoVariant}
          initial="hidden"
          animate={controls}
        >
          <Image
            className="w-full rounded-lg"
            src={DocImage}
            alt="Doctor Image"
          />
        </motion.div>
        <motion.div className="basis-7/12">
          {[1, 2, 3].map((i) => (
            <motion.p
              variants={descriptionVariant}
              initial="hidden"
              animate={controls}
              key={i}
              className="mb-4"
            >
              {dict(`introduction.description.point${i}`)}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Introduction;
