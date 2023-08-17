"use client";
import React from "react";
import Image from "next/image";
import QuoteIcon from "@/components/icons/QuoteIcon";
import Button from "@/components/ui/Buttons";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

import localFont from "next/font/local";
import useScrollAnimation from "@/utils/useScrollAnimation";
import { textVariant } from "@/utils/animation-variants/variants";

const myFont = localFont({
  src: "../../public/Digi Anil Bold.ttf",
  display: "swap",
});

const testimonials = [
  "لمینیت‌ها خیلی طبیعی و خوشگل شدن. تو راه خونه، نمیتونستم تو آینه چشم از دندونام بردارم :) خیلی خوب به نظر میرسن. انگار که 10 سال جوون‌تر شدم! خیلی از خانم دکتر و تیم حرفه‌ایشون ممنونم.",
  "من امروز عصب‌کشی انجام دادم پیشتون. عالی بود! با اومدن کنار شما ترس و استرس از دندون‌پزشکی تموم شد. کاش زدتر با شما آشنا میشدم؛ ممنونم از مهربونیتون.",
  "تنها دکتری که درد یا استرس حین خدمات دندان مخصوصا ایمپلنت و عصب‌کشی معنی نداره :)",
];

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

function Testimonials() {
  const [ref, controls] = useScrollAnimation();

  return (
    <div ref={ref} className="max-w-5xl md:px-5">
      <motion.h1
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="pr-5 mb-6"
      >
        نظرات مراجعه‌کنندگان عزیزمون
      </motion.h1>

      <motion.div
        variants={backgroundVariant}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="bg-accent p-8 md:rounded-[2rem]"
      >
        <motion.div
          style={{
            fontFamily: myFont.style.fontFamily,
          }}
          animate={controls}
          variants={lightBackgroundVariant}
          className="bg-[#FFFCFB] border-2 border-solid border-black py-6 px-16 flex flex-col items-center gap-6 rounded-[2rem]"
        >
          {testimonials.map((testimonial) => (
            <div
              style={{
                fontFamily: myFont.style.fontFamily,
              }}
              className="flex w-full flex-col gap-2 rounded-lg"
              key={testimonial}
            >
              <div className="flex">
                <QuoteIcon />
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
              مشاهده بیشتر در هایلایت اینستاگرام
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Testimonials;
