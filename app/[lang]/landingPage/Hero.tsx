"use client";
import React from "react";
import styles from "./Hero.module.scss";
import Button from "@/components/ui/Buttons";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("./Video"), { ssr: false });

function Hero() {
  const dict = useTranslations("landingPage");

  return (
    <section className="py-16 relative text-background h-[70vh] w-full md:px-24 lg:px-44 px-5 flex flex-col justify-center gap-2 font-semibold">
      <h1 className=" max-w-xl">{dict("hero.title")}</h1>
      <h4 className="max-w-md leading-7">{dict("hero.subtitle")}</h4>
      <Link href="./reservation">
        <Button color="primary" size="lg" className="mt-4">
          <span className="w-full text-lg font-bolder grow block">
            {dict("hero.button")}
          </span>
        </Button>
      </Link>

      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className={`${styles.bkgVideo} relative h-full w-full`}>
          <Video />
        </div>
      </div>
    </section>
  );
}

export default Hero;
