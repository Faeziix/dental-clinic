import React from "react";
import Image from "next/image";
import CheckmarkIcon from "@/public/Checkmark.svg";
import TaskIcon from "@/public/TaskIcon.svg";
import StarIcon from "@/public/StarIcon.svg";
import JourneyBkgPrimary from "@/public/JourneyBackgroundPrimary.png";
import JourneyBkgAccent from "@/public/JourneyBackgroundAccent.png";
import Journey1 from "@/public/Journey1.png";
import Journey2 from "@/public/Journey2.png";
import Journey3 from "@/public/Journey3.png";

const journey = [
  {
    title: "آگاهی، شرط اولمونه!",
    icon: <Image className="w-9 h-9" src={CheckmarkIcon} alt="Checkmark" />,
    image: (
      <div className="relative w-[95%]">
        <Image
          className="absolute top-0"
          src={JourneyBkgPrimary}
          alt="JourneyBkgPrimary"
        />
        <Image
          className="relative -top-4 -left-4"
          src={Journey1}
          alt="Journey1"
        />
      </div>
    ),
    description:
      "ابتدا تک‌تک دندان‌هــای و لثه‌هـای شما معاینه می‌شوند. برای شما عکس رادیولوژی می‌نویسیم تا بعد از بررسی، بتوانیم به طور کامل و تخصصی، شما را راهنمایی کرده و مشاوره دهیم.",
  },
  {
    title: "چه کاری برای من مناسب‌تره؟",
    icon: <Image className="w-9 h-9" src={TaskIcon} alt="Task" />,
    image: (
      <div className="relative w-[95%]">
        <Image
          className="absolute right-4 top-0"
          src={JourneyBkgAccent}
          alt="JourneyBkgAccent"
        />
        <Image
          className="relative -top-4 right-0"
          src={Journey2}
          alt="Journey2"
        />
      </div>
    ),
    description:
      "بعد از بررسی عکس رادیولوژی، بر اساس بودجه شما، چند طـرح درمان برایتان می‌نویسیم تا شما بتوانید با خیالی راحت، ‌خدمات دندان‌پزشکی خود را اولویت‌بندی کنید. اگر به موقع برای درمان اقدام کنید، دوره درمان کوتاه‌تر و بدون درد خواهد بود.",
  },
  {
    title: "وقتشه از ته دل بخندی D:",
    icon: <Image className="w-9 h-9" src={StarIcon} alt="Star" />,
    image: (
      <div className="relative w-[95%]">
        <Image
          className="absolute top-0"
          src={JourneyBkgPrimary}
          alt="JourneyBkgPrimary"
        />
        <Image
          className="relative -top-4 -left-4"
          src={Journey3}
          alt="Journey3"
        />
      </div>
    ),
    description:
      "در آخر سفرمون، لبخند هالیوودی خود را با بهترین کیفیت مواد و تجهیزات، بدون درد به دست می‌آورید و شادی رو به اطرافیانتان هدیه می‌دید.",
  },
];

function Journey() {
  return (
    <div className="px-5 md:px-0">
      <h1 className="mb-8">سفر سلامت شما همراه با ما</h1>

      <div className="flex flex-col gap-12 max-w-5xl">
        {journey.map((step, i) => (
          <div
            key={step.title}
            className={`flex flex-col md:gap-8 ${
              i == 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="mb-4">{step.image}</div>

            <div className="flex flex-col max-w-xl gap-2 basis-full">
              <div className="flex items-center gap-2">
                {step.icon}
                <h2 className="h-full">{step.title}</h2>
              </div>
              <p className="">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journey;
