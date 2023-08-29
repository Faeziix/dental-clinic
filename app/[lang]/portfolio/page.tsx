"use client";
import React from "react";
import Image from "next/image";
import Before1 from "@/public/portolio/image-1.png";
import After1 from "@/public/portolio/image-2.png";
import Before2 from "@/public/portolio/image-3.png";
import After2 from "@/public/portolio/image-4.png";
import Before3 from "@/public/portolio/image-5.png";
import After3 from "@/public/portolio/image-6.png";

import CleaningBefore1 from "@/public/portolio/Cleansing/Before 1.png";
import CleaningAfter1 from "@/public/portolio/Cleansing/After 1.png";
import CleaningBefore2 from "@/public/portolio/Cleansing/Before 2.png";
import CleaningAfter2 from "@/public/portolio/Cleansing/After 2.png";
import CleaningBefore3 from "@/public/portolio/Cleansing/Before 3.png";
import CleaningAfter3 from "@/public/portolio/Cleansing/After 3.png";

import OrtoBefore1 from "@/public/portolio/Orto/Before 1.png";
import OrtoAfter1 from "@/public/portolio/Orto/After 1.png";
import OrtoBefore2 from "@/public/portolio/Orto/Before 2.png";
import OrtoAfter2 from "@/public/portolio/Orto/After 2.png";
import OrtoBefore3 from "@/public/portolio/Orto/Before 3.png";
import OrtoAfter3 from "@/public/portolio/Orto/After 3.png";

import Button from "@/components/ui/Buttons";
import ToothIcon from "@/components/icons/ToothIcon";
import { useTranslations } from "next-intl";

function Page() {
  const dict = useTranslations("portfolio");

  const items = [
    {
      category: dict("laminate"),
      afterImages: [After1, After2, After3],
      beforeImages: [Before1, Before2, Before3],
    },
    {
      category: dict("orthodontics"),
      afterImages: [OrtoAfter1, OrtoAfter2, OrtoAfter3],
      beforeImages: [OrtoBefore1, OrtoBefore2, OrtoBefore3],
    },
    {
      category: dict("airflow"),
      afterImages: [CleaningAfter1, CleaningAfter2, CleaningAfter3],
      beforeImages: [CleaningBefore1, CleaningBefore2, CleaningBefore3],
    },
  ];

  return (
    <div className="md:mx-20 mx-5">
      <h1 className="py-16 flex gap-2 items-center">
        <span>
          <ToothIcon />
        </span>
        <span>{dict("title")}</span>
      </h1>
      {items.map((item, i) => (
        <div className="flex mx-auto w-fit flex-col" key={i}>
          <h2 className="mb-4 text-center">{item.category}</h2>
          <div className="flex flex-row md:flex-col-reverse w-fit">
            <div className="flex bg-primary rounded-lg flex-col-reverse md:flex-row">
              {item.afterImages.map((image, n) => (
                <div key={n} className={`flex md:py-4 py-2 px-2 gap-2`}>
                  <div key={image.src} className="basis-full grow">
                    <Image src={image} alt="Portfolio Image" />
                  </div>
                </div>
              ))}
              <h2 className="md:text-bt mt-2 md:mt-0 pr-4 text-center grow text-Neutral">
                After
              </h2>
            </div>

            <div className="flex flex-col-reverse  md:flex-row">
              {item.beforeImages.map((image, n) => (
                <div key={n} className={`flex md:py-4 py-2 px-2 gap-2`}>
                  <div key={image.src} className="basis-full grow">
                    <Image src={image} alt="Portfolio Image" />
                  </div>
                </div>
              ))}
              <h2 className="md:text-bt mt-2 md:mt-0 pr-4 text-center grow text-primary">
                Before
              </h2>
            </div>
          </div>

          <div className="w-fit mx-auto">
            <Button
              radius="circle"
              size="sm"
              className="relative mx-auto md:mx-0 mt-8 mb-16"
            >
              {dict("button")}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
