import React from "react";
import styles from "./Hero.module.scss";
import Button from "@/components/ui/Buttons";
import Link from "next/link";

function Hero({ dict }) {
  return (
    <section className="py-16 relative text-Neutral h-[70vh] w-full md:px-24 lg:px-44 px-5 flex flex-col justify-center gap-2 font-semibold">
      <h1 className="leading-[3.5rem] max-w-xl">{dict("hero.title")}</h1>
      <h4 className="max-w-md leading-7">{dict("hero.subtitle")}</h4>
      <Link href="/reservation">
        <Button color="primary" size="lg" className="mt-4">
          <span className="w-full text-lg font-bolder grow block">
            {dict("hero.button")}
          </span>
        </Button>
      </Link>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className={`${styles.bkgVideo} relative h-full w-full`}>
          <video
            className="h-full w-full object-cover z-[-10]"
            autoPlay
            muted={true}
            loop
            playsInline
          >
            <source src="/HeroBkg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
