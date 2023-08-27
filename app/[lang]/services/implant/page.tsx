"use client";
import React from "react";
import StructurePic from "@/public/implant/structure.png";
import Image from "next/image";
import QuoteIcon from "@/components/icons/QuoteIcon";
import StarsGroupIcon from "@/components/icons/StarsGroupIcon";
import FacePic from "@/public/implant/face.png";
import JawPic from "@/public/implant/jaw.png";
import OverlayBox from "@/components/sections/OverlayBox";
import ServicesPic from "@/public/implant/services.png";
import MaintenancePic from "@/public/implant/maintenance.png";
import Toc from "@/components/ui/Toc";
import { digiFont } from "@/utils/utils";
import { useLocale, useTranslations } from "next-intl";
import { useDictionary } from "../../dictionaries";

function ImplantPage() {
  const dict = useTranslations("Services.implant");
  const locale = useLocale();

  const margin = locale === "fa" ? "md:mr-gs" : "md:ml-gs";

  const advantagesPoints = [
    "point1",
    "point2",
    "point3",
    "point4",
    "point5",
    "point6",
    "point7",
  ];

  const costFactors = ["factor1", "factor2"];

  const toc = [
    {
      title: dict("toc.whatIsImplant"),
      href: "#what-is-implant",
    },
    {
      title: dict("toc.advantages"),
      href: "#advantages",
    },
    {
      title: dict("toc.maintenance"),
      href: "#maintenance",
    },
    {
      title: dict("toc.suitable"),
      href: "#suitable",
    },
    {
      title: dict("toc.pain"),
      href: "#pain",
    },
    {
      title: dict("toc.cost"),
      href: "#cost",
    },
    {
      title: dict("toc.summary"),
      href: "#summary",
    },
  ];

  return (
    <div className="blog">
      <article className="max-w-screen-desktop md:mx-auto">
        <section className={`mx-auto ${margin}`}>
          <h1 className="mb-4 text-primary">{dict("title")}</h1>
          <h4 className="text-primary">{dict("subtitle")}</h4>
        </section>

        <section className="flex gap-4 items-center mx-auto">
          <p className={`mb-0 ${margin}`}>{dict("description")}</p>

          <Image src={JawPic} alt="Jaw Pic" className="hidden md:block" />
        </section>

        <section>
          <Toc items={toc} />
        </section>

        <section id="what-is-implant">
          <h2>{dict("sections.section1.title")}</h2>
          <p>{dict("sections.section1.content.point1")}</p>
          <p className="mb-6">{dict("sections.section1.content.point2")}</p>
          <Image
            className="mb-6 mx-auto"
            src={StructurePic}
            alt="Implant Structure"
          />
          <p>{dict("sections.section1.content.point3")}</p>
        </section>

        <section className="mx-auto" id="advantages">
          <h2 className="md:mx-gs">{dict("sections.section2.title")}</h2>
          <p className="md:mx-gs">{dict("sections.section2.content")}</p>

          <OverlayBox imgsrc={ServicesPic}>
            <h4 className="text-primary leading-6 mb-4 font-bold">
              {dict("sections.section2.list.title")}
            </h4>
            <ul className="list-disc list-inside">
              {advantagesPoints.map((pointKey) => (
                <li key={pointKey}>
                  {dict(`sections.section2.list.points.${pointKey}`)}
                </li>
              ))}
            </ul>
          </OverlayBox>
        </section>

        <section className="mx-auto" id="maintenance">
          <h2 className="md:mx-gs">{dict("sections.section3.title")}</h2>
          <p className="md:mx-gs">{dict("sections.section3.content.point1")}</p>
          <p className="md:mx-gs">{dict("sections.section3.content.point2")}</p>

          <div className="flexColRow gap-4 items-center">
            <Image
              src={MaintenancePic}
              alt="Maintenance Pic"
              className="w-full"
            />
            <h5 className="md:font-medium font-normal md:leading-9 text-dark">
              {dict("sections.section3.content.point3")}
            </h5>
          </div>
        </section>

        <section id="suitable">
          <h2>{dict("sections.section4.title")}</h2>
          <p>{dict("sections.section4.content.point1")}</p>
          <p>
            {dict("sections.section4.content.point2")}
            <span className="underline underline-offset-4">
              {dict("sections.section4.content.point3")}
            </span>
          </p>
        </section>

        <section id="pain" className="mx-auto relative">
          <h2 className="md:mx-gs">{dict("sections.section5.title")}</h2>
          <p className="md:mx-gs">{dict("sections.section5.content.point1")}</p>
          <p className="md:mx-gs">{dict("sections.section5.content.point2")}</p>
          <p className="md:mx-gs">{dict("sections.section5.content.point3")}</p>

          <h3
            style={{ fontFamily: digiFont.style.fontFamily }}
            className="text-center md:leading-[4rem] text-2xl md:text-3xl py-8 my-6 mx-auto text-dark"
          >
            {dict("sections.section5.quote")}
            <div className="flex absolute top-0 right-0">
              <QuoteIcon />
            </div>
            <div className="flex rotate-180 absolute bottom-0 left-0">
              <QuoteIcon />
            </div>
          </h3>

          <p className="md:mx-gs">{dict("sections.section5.content.point4")}</p>
          <p className="md:mx-gs">{dict("sections.section5.content.point5")}</p>
        </section>

        <section id="cost">
          <h2>{dict("sections.section6.title")}</h2>

          <p className="">{dict("sections.section6.paragraph.point1")}</p>
          <ul className="list-disc list-inside mb-4">
            {costFactors.map((pointKey) => (
              <li key={pointKey}>
                {dict(`sections.section6.factors.${pointKey}`)}
              </li>
            ))}
          </ul>
          <p>{dict("sections.section6.paragraph.point2")}</p>

          <div className="mt-7 mx-auto">
            <h3 className="relative text-2xl font-bold text-accent pr-4">
              {dict("sections.section6.quote.content.paragraph")}
              <StarsGroupIcon className="absolute w-10 md:-right-8 -right-4 -top-4" />
            </h3>
          </div>
        </section>

        <section id="summary" className="mx-auto">
          <h2 className="md:mx-gs">{dict("sections.section7.title")}</h2>
          <p className="md:mx-gs">{dict("sections.section7.content.point1")}</p>
          <p className="md:mx-gs mb-5">
            {dict("sections.section7.content.point2")}
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Image src={FacePic} alt="Face Pic" className="" />
            <div className="flex flex-col justify-center">
              <p>{dict("sections.section7.content.point3")}</p>
              <p>{dict("sections.section7.content.point4")}</p>
              <p>{dict("sections.section7.content.point5")}</p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default ImplantPage;
