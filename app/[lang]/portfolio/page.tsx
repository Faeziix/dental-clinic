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
    <div className="mx-5 md:mx-20">
      <h1 className="flex items-center gap-2 py-16">
        <span>
          <ToothIcon />
        </span>
        <span>{dict("title")}</span>
      </h1>
      {items.map((item, i) => (
        <div className="mx-auto flex w-fit flex-col" key={i}>
          <h2 className="mb-4">{item.category}</h2>
          <div className="flex w-fit flex-row md:flex-col-reverse">
            <div className="flex flex-col-reverse rounded-lg bg-primary md:flex-row">
              {item.afterImages.map((image, n) => (
                <div key={n} className={`flex gap-2 px-2 py-2 md:py-4`}>
                  <div key={image.src} className="grow basis-full">
                    <Image src={image} alt="Portfolio Image" />
                  </div>
                </div>
              ))}
              <h2 className="md:text-bt mt-2 grow pr-4 text-center text-Neutral md:mt-0">
                After
              </h2>
            </div>

            <div className="flex flex-col-reverse  md:flex-row">
              {item.beforeImages.map((image, n) => (
                <div key={n} className={`flex gap-2 px-2 py-2 md:py-4`}>
                  <div key={image.src} className="grow basis-full">
                    <Image src={image} alt="Portfolio Image" />
                  </div>
                </div>
              ))}
              <h2 className="md:text-bt mt-2 grow pr-4 text-center text-primary md:mt-0">
                Before
              </h2>
            </div>
          </div>

          <div className="w-fit ltr:ml-auto rtl:mr-auto">
            <Button
              radius="circle"
              size="md"
              className="relative mx-auto mb-16 mt-8 md:mx-0"
              withArrow
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
