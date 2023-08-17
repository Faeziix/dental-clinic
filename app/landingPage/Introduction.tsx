"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import DocImage from "@/public/Doctor-image.jpeg";
import DentistIcon from "@/public/DentistIcon.png";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import {
  variantGenerator,
  textVariant,
} from "@/utils/animation-variants/variants";
import useScrollAnimation from "@/utils/useScrollAnimation";

const photoVariant = variantGenerator({
  duration: 0.7,
  delay: 0.5,
});

const descriptionVariant = variantGenerator({
  duration: 0.7,
  delay: 1,
});

function Introduction() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section ref={ref} className="w-full flex max-w-5xl flex-col gap-4 px-5">
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="flex items-center gap-2 mb-6"
      >
        <Image src={DentistIcon} alt="Dentist Icon" width={40} />
        <h1>دکتر سهیلا کریمی</h1>
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
          من دکتر سهیلا کریمی، خوشحالم که در طی ۵ سال گذشته به بیش از ۵۰۰ زیباجو
          کمک کردم که دندون های سالم‌تر و لبخندی جذاب‌تری داشته باشند. مهم‌ترین
          ویژگی خدمات دندانپزشکی من ارایه بهترین طرح درمان منحصر به فرد هر شخص و
          انجام کار با ضمانت با به‌روزترین تجهیزات و متریال دندانپزشکی است.
          مراجعه‌کننده‌های ما کسانی هستند که به سالم بودن دندان‌هایشان اهمیت می
          دهند و با لبخندی زیباتر می‌خواهند به بهترین خودشان تبدیل شوند.
        </motion.p>
      </div>
    </section>
  );
}

export default Introduction;
