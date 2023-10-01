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
      <p className="max-w-md mt-2">{dict("hero.subtitle")}</p>
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
