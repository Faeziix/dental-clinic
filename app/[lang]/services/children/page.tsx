"use client";
import React from "react";
import Image from "next/image";
import Checkmark from "@/components/icons/Checkmark";
import localFont from "next/font/local";
import QuoteIcon from "@/components/icons/QuoteIcon";
import StarsGroupIcon from "@/components/icons/StarsGroupIcon";
import OverlayBox from "@/components/sections/OverlayBox";
import ChildPickingPic from "@/public/children/child_picking.png";
import ChildAgePic from "@/public/children/child_age.png";
import ZeroToNinePic from "@/public/children/0-9.png";
import ThreeToSixPic from "@/public/children/3-6.png";
import SadTooth from "./SadTooth";
import People from "@/components/icons/People";
import ChildFearPic from "@/public/children/child_fear.png";
import PictureCard from "@/components/sections/PictureCard";
import FluoridePic from "@/public/children/fluoride.png";
import FishurPic from "@/public/children/fishur.png";
import FiveWaysPic from "@/public/children/5way.png";
import Toc from "@/components/ui/Toc";
import { digiFont } from "@/utils/utils";
import { useLocale, useTranslations } from "next-intl";

function Children() {
  const dict = useTranslations("Services.children");
  const locale = useLocale();

  const sectionsArrays = {
    "why-brush": ["point1", "point2", "point3"],
    "when-brush": ["point1", "point2", "point3"],
    "0-9": ["point1", "point2", "point3", "point4", "point5"],
    "9-12": ["point1", "point2", "point3", "point4"],
    "1-3": ["point1", "point2", "point3"],
    "3-6": ["point1", "point2", "point3"],
    "how-brush": [
      "choose-toothbrush",
      "watch-you-brush",
      "name-teeth",
      "find-plaque-spots",
      "make-rinsing-fun",
    ],
    "why-visit": ["point1", "point2", "point3", "point4", "point5"],
    "how-visit": ["point1", "point2", "point3"],
    fluoride: {
      "fluoride-therapy": ["point1", "point2"],
      "tips-fluoride-therapy": ["point1", "point2", "point3", "point4"],
      "fissure-sealant-therapy": ["point1", "point2", "point3", "point4"],
      "tips-fissure-sealant-therapy": ["point1", "point2", "point3", "point4"],
    },
    parents: ["point1", "point2", "point3", "point4"],
  };

  const toc = [
    {
      title: dict("toc.why-brush"),
      href: "#why-brush",
    },
    {
      title: dict("toc.when-brush"),
      href: "#when-brush",
    },
    {
      title: dict("toc.how-brush"),
      href: "#how-brush",
    },
    {
      title: dict("toc.why-visit"),
      href: "#why-visit",
    },
    {
      title: dict("toc.how-visit"),
      href: "#how-visit",
    },
    {
      title: dict("toc.fluoride"),
      href: "#fluoride",
    },
    {
      title: dict("toc.parents"),
      href: "#parents",
    },
  ];

  return (
    <div className="blog">
      <article className="">
        <section className="">
          <h1 className="mb-4 text-primary">{dict("title")}</h1>
          <h4 className="text-primary">{dict("subtitle")}</h4>
        </section>

        <section className="flexColRow gap-4 items-center mx-auto">
          <p className="mb-0 md:mr-gs">{dict("description")}</p>

          <Image
            src={ChildPickingPic}
            className="w-full h-full grow md:w-[160%]"
            alt="Child Picking Pic"
          />
        </section>

        <section>
          <Toc items={toc} />
        </section>

        <section id="why-brush">
          <h2>{dict("sections.why-brush.title")}</h2>
          <p>{dict("sections.why-brush.content.point1")}</p>
          <p className="mb-6">{dict("sections.why-brush.content.point2")}</p>
          <div className="mb-6 mx-auto w-fit">
            <People />
          </div>
          <p className="">{dict("sections.why-brush.content.point3")}</p>
        </section>

        <section id="when-brush" className="mx-auto">
          <h2 className="md:mx-gs">{dict("sections.when-brush.title")}</h2>

          <div className="flex">
            <div className="flex h-full items-center justify-center md:px-8 px-5 py-4 md:py-0 relative mb-5 bg-primary md:bg-transparent">
              <div className="absolute bg-primary bottom-0 md:top-12 w-full z-0 rounded-lg hidden md:block"></div>
              <Image
                src={ChildAgePic}
                alt="Child Age Pic"
                className="object-cover w-[70%] z-10 hidden md:block"
              />
              <h3 className="text-Neutral font-bold md:text-2xl text-center md:mt-12">
                {dict("sections.when-brush.content.point1")}
              </h3>
            </div>
          </div>

          <p className="md:mx-gs">
            {dict("sections.when-brush.content.point2")}
          </p>

          <p className="md:mx-gs">
            {dict("sections.when-brush.content.point3")}
          </p>
          <p className="md:mx-gs">
            {dict("sections.when-brush.content.point4")}
          </p>
        </section>

        <section className="mx-auto my-6 md:my-10">
          <h3 className="md:mx-gs mb-8">{dict("sections.0-9.title")}</h3>
          <p className="md:mx-gs">{dict("sections.0-9.content.point1")}</p>
          <p className="md:mx-gs">{dict("sections.0-9.content.point2")}</p>

          <div className="flexColRow gap-4 items-center mb-5 relative">
            <Image
              src={ZeroToNinePic}
              alt="Zero To Nine Pic"
              className="w-full"
            />
            <div className="relative">
              <Checkmark
                className={`absolute ${
                  locale == "en" ? "left-0" : "right-0"
                } w-6 h-6 md:top-0`}
              />
              <h4 className="font-medium md:leading-9 text-dark flex indent-7 relative">
                {dict("sections.0-9.content.point3")}
              </h4>
            </div>
          </div>

          <p className="md:mx-gs">{dict("sections.0-9.content.point4")}</p>

          <p className="md:mx-gs underline underline-offset-4">
            {dict("sections.0-9.content.point5")}
          </p>
        </section>

        <section className="my-6 md:my-10">
          <h3 className="mb-8">{dict("sections.9-12.title")}</h3>
          <p>{dict("sections.9-12.content.point1")}</p>
          <p>{dict("sections.9-12.content.point2")}</p>
          <p className="mb-5">{dict("sections.9-12.content.point3")}</p>

          <div className="relative">
            <StarsGroupIcon
              className={`w-10 absolute ${
                locale == "fa" ? "-right-4" : "-left-6"
              } -top-4`}
            />
            <p
              className={`md:text-3xl ${
                locale == "fa" ? "pr-4" : "pl-4"
              } text-2xl md:leading-[3rem] text-accent font-medium`}
            >
              {dict("sections.9-12.content.point4")}
            </p>
          </div>
        </section>

        <section className="my-6 md:my-10">
          <h3 className="mb-8">{dict("sections.1-3.title")}</h3>
          <p>{dict("sections.1-3.content.point1")}</p>
          <p className="mb-5">{dict("sections.1-3.content.point2")}</p>

          <div className="mb-5">
            <Image src={ThreeToSixPic} alt="Three To Six Pic" />
            <h5 className="text-primary text-center mt-2">
              {dict("sections.1-3.image_description")}
            </h5>
          </div>

          <p className="text-center">
            <mark className="bg-accent bg-opacity-25 p-[1px] leading-9 rounded-lg">
              {dict("sections.1-3.content.point3")}
            </mark>
          </p>
        </section>

        <section className="mt-6 md:my-10">
          <h3 className="mb-8">{dict("sections.3-6.title")}</h3>
          <p>{dict("sections.3-6.content.point1")}</p>
          <p className="mb-5">{dict("sections.3-6.content.point2")}</p>
          <p>{dict("sections.3-6.content.point3")}</p>
        </section>

        <section className="mx-auto" id="how-brush">
          <h2 className="md:mx-gs">
            {dict.rich("sections.how-brush.title", {
              gold: (children) => (
                <span className="text-yellow-500">{children}</span>
              ),
            })}
          </h2>

          <OverlayBox imgsrc={FiveWaysPic}>
            <ol className="flex flex-col list-decimal list-inside">
              {sectionsArrays["how-brush"].map((i) => {
                const title = dict(`sections.how-brush.sections.${i}.title`);
                const description = dict(
                  `sections.how-brush.sections.${i}.description`
                );
                return (
                  <>
                    <h4 className="mb-2 font-semibold">
                      <li
                        key={dict(`sections.how-brush.${i}.title`)}
                        className="text-primary"
                      >
                        {title}
                      </li>
                    </h4>
                    <p>{description}</p>
                  </>
                );
              })}
            </ol>
          </OverlayBox>
          <p className="underline-offset-4 underline md:mx-gs">
            {dict("sections.how-brush.content")}
          </p>
        </section>

        <section id="why-visit" className="mx-auto">
          <h2 className="md:mx-gs">{dict("sections.why-visit.title")}</h2>

          <div className="mx-auto w-fit">
            <p
              style={{ fontFamily: digiFont.style.fontFamily }}
              className="mb-5 w-fit md:text-3xl text-2xl md:leading-[3rem] px-4 text-dark text-center font-medium relative "
            >
              {dict.rich("sections.why-visit.quote", {
                p: (children) => (
                  <p className="md:text-3xl text-2xl">{children}</p>
                ),
              })}
              <QuoteIcon className="md:w-10 w-7 inline-block absolute -top-5 -right-0" />
            </p>
          </div>

          <p className="md:mx-gs">
            {dict("sections.why-visit.content.point1")}
          </p>
          <p className="md:mx-gs">
            {dict("sections.why-visit.content.point2")}
          </p>
          <p className="md:mx-gs mb-5">
            {dict("sections.why-visit.content.point3")}
          </p>

          <div className="flexColRow flex-col-reverse md:flex-row justify-center items-center gap-5 mb-5">
            <div className="md:mr-14">
              <p>{dict("sections.why-visit.content.point4")}</p>
              <p>{dict("sections.why-visit.content.point5")}</p>
            </div>

            <div className="md:pr-20">
              <SadTooth dict={dict} />
            </div>
          </div>

          <p className="md:mx-gs font-medium text-2xl leading-[3rem] text-center ">
            <mark className="bg-accent bg-opacity-25 p-[2px] rounded-lg">
              {dict("sections.why-visit.content.point6")}
            </mark>
          </p>
        </section>

        <section id="how-visit">
          <h2>{dict("sections.how-visit.title")}</h2>

          <p>{dict("sections.how-visit.content.point1")}</p>

          <p>{dict("sections.how-visit.content.point2")}</p>

          <Image
            src={ChildFearPic}
            alt="Child Fear Pic"
            className="mx-auto mb-5"
          />

          <p>
            {dict.rich("sections.how-visit.content.point3", {
              a: (children) => (
                <a className="text-primary hover:underline">{children}</a>
              ),
            })}
          </p>
        </section>

        <section id="fluoride" className="mx-auto">
          <h2 className="md:mx-gs">{dict("sections.fluoride.title")}</h2>
          <div className="md:mx-gs">
            <h4 className="font-semibold">
              {dict("sections.fluoride.fluoride-therapy.title")}
            </h4>
            <p>{dict("sections.fluoride.fluoride-therapy.point1")}</p>
            <p className="mb-6">
              {dict("sections.fluoride.fluoride-therapy.point2")}
            </p>
          </div>

          <div className="mb-5">
            <PictureCard
              imgSrc={FluoridePic}
              align={locale == "en" ? "right" : "left"}
            >
              <h4 className="text-accent mb-5 font-semibold">
                {dict("sections.fluoride.tips-fluoride-therapy.title")}
              </h4>

              <ul className="list-disc list-inside">
                {sectionsArrays["fluoride"]["fluoride-therapy"].map((i) => (
                  <li
                    key={dict(`sections.fluoride.fluoride-therapy.${i}`)}
                    className="mb-2"
                  >
                    {dict(`sections.fluoride.fluoride-therapy.${i}`)}
                  </li>
                ))}
              </ul>
            </PictureCard>
          </div>

          <div className="md:mx-gs">
            <h4 className="mb-2 font-semibold">
              {dict("sections.fluoride.fissure-sealant-therapy.title")}
            </h4>
            <p className="">
              {dict("sections.fluoride.fissure-sealant-therapy.point1")}
            </p>
            <p>{dict("sections.fluoride.fissure-sealant-therapy.point2")}</p>
            <p>{dict("sections.fluoride.fissure-sealant-therapy.point3")}</p>
            <p>{dict("sections.fluoride.fissure-sealant-therapy.point4")}</p>
          </div>

          <PictureCard
            align={locale == "en" ? "right" : "left"}
            imgSrc={FishurPic}
          >
            <h4 className="text-accent mb-5 font-medium">
              {dict("sections.fluoride.tips-fissure-sealant-therapy.title")}
            </h4>

            <ul className="list-disc list-inside">
              {sectionsArrays["fluoride"]["fissure-sealant-therapy"].map(
                (i) => (
                  <li
                    key={dict(`sections.fluoride.fissure-sealant-therapy.${i}`)}
                    className="mb-2"
                  >
                    {dict(`sections.fluoride.fissure-sealant-therapy.${i}`)}
                  </li>
                )
              )}
            </ul>
          </PictureCard>
        </section>

        <section id="parent">
          <h2>{dict("sections.parents.title")}</h2>

          <p>{dict("sections.parents.content.point1")}</p>
          <p>{dict("sections.parents.content.point2")}</p>
          <p>{dict("sections.parents.content.point3")}</p>
          <p>{dict("sections.parents.content.point4")}</p>
        </section>
      </article>
    </div>
  );
}

export default Children;
