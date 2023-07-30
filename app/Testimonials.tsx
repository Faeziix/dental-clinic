import React from "react";
import Image from "next/image";
import QuoteIcon from "@/public/QuoteIcon.svg";
import Button from "@/components/ui/Buttons";
import ArrowRightIcon from "@/public/ArrowRightIcon.svg";
import Link from "next/link";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../public/Digi Anil Bold.ttf",
  display: "swap",
});

const testimonials = [
  "لمینیت‌ها خیلی طبیعی و خوشگل شدن. تو راه خونه، نمیتونستم تو آینه چشم از دندونام بردارم :) خیلی خوب به نظر میرسن. انگار که 10 سال جوون‌تر شدم! خیلی از خانم دکتر و تیم حرفه‌ایشون ممنونم.",
  "من امروز عصب‌کشی انجام دادم پیشتون. عالی بود! با اومدن کنار شما ترس و استرس از دندون‌پزشکی تموم شد. کاش زدتر با شما آشنا میشدم؛ ممنونم از مهربونیتون.",
  "تنها دکتری که درد یا استرس حین خدمات دندان مخصوصا ایمپلنت و عصب‌کشی معنی نداره :)",
];

function Testimonials() {
  return (
    <div className="max-w-5xl md:px-5">
      <h1 className="pr-5 mb-6">نظرات مراجعه‌کنندگان عزیزمون</h1>
      <div className="bg-accent p-4 md:rounded-[2rem]">
        <div
          style={{
            fontFamily: myFont.style.fontFamily,
          }}
          className="bg-Neutral p-4 flex flex-col items-center gap-4 rounded-[2rem]"
        >
          {testimonials.map((testimonial) => (
            <div
              style={{
                fontFamily: "Digi Anil Bold",
              }}
              className="flex w-full flex-col gap-2 rounded-lg"
              key={testimonial}
            >
              <div className="flex">
                <Image src={QuoteIcon} alt="Quote Icon" />
                <Image src={QuoteIcon} alt="Quote Icon" />
              </div>
              <h2 className="leading-9 lg:leading-10">{testimonial}</h2>
            </div>
          ))}
        </div>
        <Link
          className="max-w-xs h-full mt-6 block mx-auto"
          href="https://www.instagram.com/stories/highlights/17902117297715473/"
        >
          <Button radius="circle" mode="block" color="neutral">
            مشاهده بیشتر در هایلایت اینستاگرام
            <Image
              src={ArrowRightIcon}
              alt="Arrow Right Icon"
              className="absolute top-1/2 transform -translate-y-1/2 invert"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Testimonials;
