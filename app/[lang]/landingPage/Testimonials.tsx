"use client";
import React from "react";
import QuoteIcon from "@/components/icons/QuoteIcon";
import Button from "@/components/ui/Buttons";
import Link from "next-intl/link";
import { Variants, motion } from "framer-motion";

import useScrollAnimation from "@/utils/useScrollAnimation";
import { getHandWriteFont } from "@/utils/utils";
import { useTranslations } from "next-intl";

const backgroundVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

const lightBackgroundVariant: Variants = {
  visible: {
    opacity: 1,
    y: -10,
    boxShadow: "0px 10px black",
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 300,
      damping: 10,
      duration: 0.5,
    },
  },

  hidden: {
    opacity: 0,
    boxShadow: "0px 0px black",
    y: 0,
  },
};

function Testimonials({ lang }) {
  const dict = useTranslations("landingPage");
  const [ref, controls] = useScrollAnimation();

  const testimonials = [1, 2, 3].map((i) => dict(`testimonials.t${i}`));

  return (
    <div ref={ref} className="max-w-5xl md:px-5">
      <motion.h2
        initial="hidden"
        animate={controls}
        className={`${lang == "fa" ? "pr-5" : "pl-5"} mb-4`}
      >
        {dict("testimonials.title")}
      </motion.h2>

      <motion.div
        variants={backgroundVariant}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="bg-accent px-5 py-8 md:rounded-[2rem]"
      >
        <motion.div
          style={{
            fontFamily: getHandWriteFont(lang).style.fontFamily,
          }}
          animate={controls}
          variants={lightBackgroundVariant}
          className="flex flex-col items-center gap-6 rounded-[2rem] border-2 border-solid border-black bg-background px-5 py-6 md:px-16"
        >
          {testimonials.map((testimonial) => (
            <div
              style={{
                fontFamily: getHandWriteFont(lang).style.fontFamily,
              }}
              className="flex w-full flex-col gap-2 rounded-lg"
              key={testimonial}
            >
              <div className="flex">
                <QuoteIcon fill="#EE6F2B" />
              </div>
              <h3 className="leading-9 lg:leading-[3rem]">{testimonial}</h3>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 5,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut", delay: 1.4 }}
        >
          <Link
            className="mx-auto mt-6 block h-full max-w-xs hover:no-underline"
            href="https://www.instagram.com/stories/highlights/17902117297715473/"
          >
            <Button
              withArrow
              radius="circle"
              mode="block"
              color="neutral"
              size="sm"
            >
              {dict("testimonials.button")}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
