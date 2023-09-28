"use client";
import React from "react";
import Button from "@/components/ui/Buttons";
import Link from "next-intl/link";
import { useTranslations } from "next-intl";

function HeroContent() {
  const dict = useTranslations("landingPage");

  return (
    <div>
      <h1 className=" max-w-xl">{dict("hero.title")}</h1>
      <h4 className="max-w-md leading-7">{dict("hero.subtitle")}</h4>
      <Link href="./reservation">
        <Button color="primary" size="lg" className="mt-4">
          <span className="w-full text-lg font-bolder grow block">
            {dict("hero.button")}
          </span>
        </Button>
      </Link>
    </div>
  );
}

export default HeroContent;
