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

const photoVariant = variantGenerator({
  duration: 0.7,
  delay: 0.7,
});

const descriptionVariant = variantGenerator({
  duration: 0.7,
  delay: 1.4,
});

function Introduction() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 0px -50% 0px",
  });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

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
        <motion.div variants={photoVariant} initial="hidden" animate={controls}>
          <Image
            className="rounded-lg max-w-[27rem] w-full"
            src={DocImage}
            alt="Doctor Image"
          />
        </motion.div>
        <motion.p
          variants={descriptionVariant}
          initial="hidden"
          animate={controls}
        >
          دکتر سهیلا کریمی فارغ التحصیل دانشگاه
        </motion.p>
      </div>
    </section>
  );
}

export default Introduction;
