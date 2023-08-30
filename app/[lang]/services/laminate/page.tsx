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

        <section className="flexColRow gap-4 items-center mx-auto">
          <p className="mb-0 md:mr-gs">{dict("description")}</p>

          <Image
            src={HeroPic}
            className="w-full h-full grow md:w-[160%]"
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
            <div className="grid grid-cols-2 gap-4 w-full">
              <Image
                className="w-full h-full"
                src={PortfolioPic1}
                alt="Portfolio Pic"
              />
              <Image
                className="w-full h-full"
                src={PortfolioPic2}
                alt="Portfolio Pic"
              />
            </div>
            <p className="text-center mt-2 text-primary ">
              {dict("sections.whatIsLaminate.sampleWorkImage")}
            </p>
          </div>

          <p>{dict("sections.whatIsLaminate.content.point3")}</p>
        </section>

        <section id="why-laminate" className="mx-auto">
          <h2 className="md:mx-gs">{dict("sections.whyLaminate.title")}</h2>

          <p className="md:mx-gs">
            {dict("sections.whyLaminate.content.point1")}
          </p>

          <p className="md:mx-gs">
            {dict("sections.whyLaminate.content.point2")}
          </p>

          <OverlayBox imgsrc={WhyLaminatePic}>
            <ul className="list-disc list-inside">
              <li>{dict("sections.whyLaminate.list.point1")}</li>
              <li>{dict("sections.whyLaminate.list.point2")}</li>
              <li>{dict("sections.whyLaminate.list.point3")}</li>
              <li>{dict("sections.whyLaminate.list.point4")}</li>
            </ul>
          </OverlayBox>
        </section>

        <section id="damage" className="mx-auto">
          <h2 className="md:mx-gs">{dict("sections.damage.title")}</h2>
          <p className="md:mx-gs">{dict("sections.damage.content.point1")}</p>
          <p className="md:mx-gs">{dict("sections.damage.content.point2")}</p>

          <div className="relative mt-6">
            <StarsGroupIcon className="w-10 absolute md:-right-8 -right-4 -top-4" />
            <p className="md:text-3xl text-2xl text-accent font-medium md:leading-[3rem] leading-9 pr-4">
              {dict("sections.damage.content.point3")}
            </p>
          </div>
        </section>

        <section className="mx-auto" id="maintenance">
          <h2 className="md:mx-gs">{dict("sections.maintenance.title")}</h2>
          <p className="md:mx-gs">
            {dict("sections.maintenance.content.point1")}
          </p>
          <p className="md:mx-gs">
            {dict("sections.maintenance.content.point2")}
          </p>
          <h4 className="md:mx-gs mb-2 text-primary font-semibold">
            {dict("sections.maintenance.content.point3")}
          </h4>

          <ul className="list-disc list-inside md:mx-24">
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
              <h4 className="text-accent font-bold">
                {dict("sections.maintenance.stepsPrevent.title")}
              </h4>

              <ol className="list-decimal list-inside">
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
          <h2 className="mb-8 md:mx-gs">{dict("sections.where.title")}</h2>
          <p className="md:mx-gs">{dict("sections.where.content.point1")}</p>
          <p className="md:mx-gs">{dict("sections.where.content.point2")}</p>

          <div className="flexColRow rounded-lg justify-center items-center px-5 gap-4 md:px-gs py-4 bg-primary mb-5">
            <Image src={WherePic} className="w-full" alt="Where" />
            <h3 className="font-bold text-Neutral w-fit text-center">
              {dict("sections.where.content.point3")}
            </h3>
          </div>

          <p className="md:mx-gs">{dict("sections.where.content.point4")}</p>
          <p className="md:mx-gs">{dict("sections.where.content.point5")}</p>
        </section>
      </article>
    </div>
  );
}

export default LaminatePage;
