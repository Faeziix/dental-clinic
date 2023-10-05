"use client";

import React from "react";
import Image from "next/image";
import StarsGroupIcon from "@/components/icons/StarsGroupIcon";
import HeroPic from "@/public/laminate/hero.png";
import Toc from "@/components/ui/Toc";
import OverlayBox from "@/components/sections/OverlayBox";
import PictureCard from "@/components/sections/PictureCard";
import PortfolioPic1 from "@/public/laminate/portfolio1.png";
import PortfolioPic2 from "@/public/laminate/portfolio2.png";
import WhyLaminatePic from "@/public/laminate/why_laminate.png";
import OverlayPic from "@/public/laminate/overlay.png";
import WherePic from "@/public/laminate/where_laminate.png";
import { useLocale, useTranslations } from "next-intl";
import Quote from "@/components/ui/Quote";

function LaminatePage() {
  const dict = useTranslations("Services.laminate");
  const locale = useLocale();

  const toc = [
    {
      title: dict("toc.whatIsLaminate"),
      href: "#what-is-laminate",
    },
    {
      title: dict("toc.whyLaminate"),
      href: "#why-laminate",
    },
    {
      title: dict("toc.damage"),
      href: "#damage",
    },
    {
      title: dict("toc.maintenance"),
      href: "#maintenance",
    },
    {
      title: dict("toc.where"),
      href: "#where",
    },
    {
      title: dict("toc.consultation"),
      href: "#consultation",
    },
  ];

  return (
    <div className="blog">
      <article className="max-w-screen-desktop md:mx-auto">
        <section className="">
          <h1 className="mb-4 text-primary">{dict("title")}</h1>
          <h4 className="text-primary">{dict("subtitle")}</h4>
        </section>

        <section className="flexColRow items-center gap-4">
          <p className="mb-0">{dict("description")}</p>

          <Image
            src={HeroPic}
            className="h-full w-full grow md:w-[160%]"
            alt="Child Picking Pic"
          />
        </section>

        <section>
          <Toc items={toc} />
        </section>

        <section id="what-is-laminate">
          <h2>{dict("sections.whatIsLaminate.title")}</h2>
          <p>{dict("sections.whatIsLaminate.content.point1")}</p>
          <p className="">{dict("sections.whatIsLaminate.content.point2")}</p>

          <div className="my-5">
            <div className="grid w-full grid-cols-2 gap-4">
              <Image
                className="h-full w-full"
                src={PortfolioPic1}
                alt="Portfolio Pic"
              />
              <Image
                className="h-full w-full"
                src={PortfolioPic2}
                alt="Portfolio Pic"
              />
            </div>
            <p className="mt-2 text-center text-primary ">
              {dict("sections.whatIsLaminate.sampleWorkImage")}
            </p>
          </div>

          <p>{dict("sections.whatIsLaminate.content.point3")}</p>
        </section>

        <section id="why-laminate" className="mx-auto">
          <h2 className="">{dict("sections.whyLaminate.title")}</h2>

          <p className="">{dict("sections.whyLaminate.content.point1")}</p>

          <p className="">{dict("sections.whyLaminate.content.point2")}</p>

          <OverlayBox imgsrc={WhyLaminatePic}>
            <ul className="list-inside list-disc">
              <li>{dict("sections.whyLaminate.list.point1")}</li>
              <li>{dict("sections.whyLaminate.list.point2")}</li>
              <li>{dict("sections.whyLaminate.list.point3")}</li>
              <li>{dict("sections.whyLaminate.list.point4")}</li>
            </ul>
          </OverlayBox>
        </section>

        <section id="damage" className="mx-auto">
          <h2 className="">{dict("sections.damage.title")}</h2>
          <p className="">{dict("sections.damage.content.point1")}</p>
          <p className="">{dict("sections.damage.content.point2")}</p>

          <div className="relative mt-6">
            <Quote text={dict("sections.damage.content.point3")} />
          </div>
        </section>

        <section className="mx-auto" id="maintenance">
          <h2 className="">{dict("sections.maintenance.title")}</h2>
          <p className="">{dict("sections.maintenance.content.point1")}</p>
          <p className="">{dict("sections.maintenance.content.point2")}</p>
          <h4 className="mb-2 font-semibold text-primary ">
            {dict("sections.maintenance.content.point3")}
          </h4>

          <ul className="list-inside list-disc ltr:ml-4 rtl:mr-4">
            <li>{dict("sections.maintenance.factorsDiscoloration.point1")}</li>
            <li>{dict("sections.maintenance.factorsDiscoloration.point2")}</li>
            <li>{dict("sections.maintenance.factorsDiscoloration.point3")}</li>
            <li>{dict("sections.maintenance.factorsDiscoloration.point4")}</li>
            <li>{dict("sections.maintenance.factorsDiscoloration.point5")}</li>
          </ul>

          <div className="md:mr-10">
            <PictureCard
              imgSrc={OverlayPic}
              align={locale == "fa" ? "left" : "right"}
            >
              <h4 className="font-bold text-accent">
                {dict("sections.maintenance.stepsPrevent.title")}
              </h4>

              <ol className="list-inside list-decimal">
                <li>{dict("sections.maintenance.stepsPrevent.point1")}</li>
                <li>{dict("sections.maintenance.stepsPrevent.point2")}</li>
                <li>{dict("sections.maintenance.stepsPrevent.point3")}</li>
                <li>{dict("sections.maintenance.stepsPrevent.point4")}</li>
                <li>{dict("sections.maintenance.stepsPrevent.point5")}</li>
                <li>{dict("sections.maintenance.stepsPrevent.point6")}</li>
              </ol>
            </PictureCard>
          </div>
        </section>

        <section id="where" className="mx-auto">
          <h2 className="mb-8">{dict("sections.where.title")}</h2>
          <p className="">{dict("sections.where.content.point1")}</p>
          <p className="">{dict("sections.where.content.point2")}</p>

          <div className="flexColRow mb-5 items-center justify-center gap-4 rounded-lg bg-primary px-5 py-4 md:px-gs">
            <Image src={WherePic} className="w-full" alt="Where" />
            <h3 className="w-fit font-bold text-Neutral">
              {dict("sections.where.content.point3")}
            </h3>
          </div>

          <p className="">{dict("sections.where.content.point4")}</p>
          <p className="">{dict("sections.where.content.point5")}</p>
        </section>
      </article>
    </div>
  );
}

export default LaminatePage;
