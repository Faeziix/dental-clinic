"use client";
import React from "react";
import Button from "@/components/ui/Buttons";
import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import { Variants, motion } from "framer-motion";

function HeroContent() {
  const dict = useTranslations("landingPage");
  const lang = useLocale();

  const itemVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: lang === "en" ? "-20px" : "20px",
    },
  };

  const listVariant: Variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div variants={listVariant} initial="hidden" animate="visible">
      <motion.h1 variants={itemVariants} className=" max-w-xl">
        {dict("hero.title")}
      </motion.h1>
      <motion.p variants={itemVariants} className="mt-2 max-w-md">
        {dict("hero.subtitle")}
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link href="./reservation">
          <Button color="primary" size="lg" className="mt-4">
            <span className="font-bolder block w-full grow text-lg">
              {dict("hero.button")}
            </span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
