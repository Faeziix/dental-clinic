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
import ImplantEng from "@/public/implant/implant-eng.jpg";
import Toc from "@/components/ui/Toc";
import { getHandWriteFont } from "@/utils/utils";
import { useLocale, useTranslations } from "next-intl";
import Quote from "@/components/ui/Quote";

function ImplantPage() {
  const dict = useTranslations("Services.implant");
  const locale = useLocale();

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
      <article className="max-w-screen-desktop">
        <section>
          <h1 className="mb-4 text-primary">{dict("title")}</h1>
          <h4 className="text-primary">{dict("subtitle")}</h4>
        </section>

        <section className="flex items-center gap-4 ">
          <p className="mb-0">{dict("description")}</p>

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
            className="mx-auto mb-6"
            src={locale === "fa" ? StructurePic : ImplantEng}
            alt="Implant Structure"
          />
          <p>{dict("sections.section1.content.point3")}</p>
        </section>

        <section id="advantages">
          <h2>{dict("sections.section2.title")}</h2>
          <p>{dict("sections.section2.content")}</p>

          <OverlayBox imgsrc={ServicesPic}>
            <h4 className="mb-4 font-bold leading-6 text-primary">
              {dict("sections.section2.list.title")}
            </h4>
            <ul className="list-inside list-disc">
              {advantagesPoints.map((pointKey) => (
                <li key={pointKey}>
                  {dict(`sections.section2.list.points.${pointKey}`)}
                </li>
              ))}
            </ul>
          </OverlayBox>
        </section>

        <section id="maintenance">
          <h2>{dict("sections.section3.title")}</h2>
          <p>{dict("sections.section3.content.point1")}</p>
          <p>{dict("sections.section3.content.point2")}</p>

          <div className="flexColRow items-center gap-4">
            <Image
              src={MaintenancePic}
              alt="Maintenance Pic"
              className="w-full"
            />
            <h5 className="font-normal text-dark md:font-medium md:leading-9">
              {dict("sections.section3.content.point3")}
            </h5>
          </div>
        </section>

        <section id="suitable">
          <h2>{dict("sections.section4.title")}</h2>
          <p>{dict("sections.section4.content.point1")}</p>
          <p>{dict("sections.section4.content.point2")}</p>
          <p className="underline underline-offset-4">
            {dict("sections.section4.content.point3")}
          </p>
        </section>

        <section id="pain" className=" relative">
          <h2>{dict("sections.section5.title")}</h2>
          <p>{dict("sections.section5.content.point1")}</p>
          <p>{dict("sections.section5.content.point2")}</p>
          <p>{dict("sections.section5.content.point3")}</p>

          <h3
            style={{
              fontFamily: getHandWriteFont(locale).style.fontFamily,
            }}
            className="my-6 py-8 text-center text-2xl text-dark md:text-3xl md:leading-[4rem]"
          >
            {dict("sections.section5.quote")}
            <div className="absolute left-0 top-0 flex">
              <QuoteIcon />
            </div>
          </h3>

          <p>{dict("sections.section5.content.point4")}</p>
          <p>{dict("sections.section5.content.point5")}</p>
        </section>

        <section id="cost">
          <h2>{dict("sections.section6.title")}</h2>

          <p className="">{dict("sections.section6.paragraph.point1")}</p>
          <ul className="mb-4 list-inside list-disc">
            {costFactors.map((pointKey) => (
              <li key={pointKey}>
                {dict(`sections.section6.factors.${pointKey}`)}
              </li>
            ))}
          </ul>
          <p>{dict("sections.section6.paragraph.point2")}</p>

          <div className="mt-7 ">
            <Quote text={dict("sections.section6.quote.content.paragraph")} />
          </div>
        </section>

        <section id="summary" className="">
          <h2>{dict("sections.section7.title")}</h2>
          <p>{dict("sections.section7.content.point1")}</p>
          <p className="mb-5">{dict("sections.section7.content.point2")}</p>

          <div className="flex flex-col gap-4 md:flex-row">
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
