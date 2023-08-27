"use client";
import React from "react";
import QuoteIcon from "@/components/icons/QuoteIcon";
import Button from "@/components/ui/Buttons";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

import useScrollAnimation from "@/utils/useScrollAnimation";
import { digiFont } from "@/utils/utils";
import { variantGenerator } from "@/utils/animation-variants/variants";

const backgroundVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
      delay: 1.4,
      type: "spring",
      stiffness: 300,
      damping: 10,
      duration: 0.7,
    },
  },

  hidden: {
    opacity: 0,
    boxShadow: "0px 0px black",
    y: 0,
  },
};

function Testimonials({ dict, lang }) {
  const [ref, controls] = useScrollAnimation();

  const testimonials = dict.landingPage.testimonials.testimonials;

  return (
    <div ref={ref} className="max-w-5xl md:px-5">
      <motion.h2 initial="hidden" animate={controls} className="pr-5 mb-6">
        {dict.landingPage.testimonials.title}
      </motion.h2>

      <motion.div
        variants={backgroundVariant}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="bg-accent p-8 md:rounded-[2rem]"
      >
        <motion.div
          style={{
            fontFamily: digiFont.style.fontFamily,
          }}
          animate={controls}
          variants={lightBackgroundVariant}
          className="bg-[#FFFCFB] border-2 border-solid border-black py-6 px-16 flex flex-col items-center gap-6 rounded-[2rem]"
        >
          {testimonials.map((testimonial) => (
            <div
              style={{
                fontFamily: digiFont.style.fontFamily,
              }}
              className="flex w-full flex-col gap-2 rounded-lg"
              key={testimonial}
            >
              <div className="flex">
                <QuoteIcon />
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
            className="max-w-xs h-full mt-6 block mx-auto hover:no-underline"
            href="https://www.instagram.com/stories/highlights/17902117297715473/"
          >
            <Button withArrow radius="circle" color="neutral">
              {dict.landingPage.testimonials.button}
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonials;