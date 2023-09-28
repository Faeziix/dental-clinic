import React from "react";
import styles from "./Hero.module.scss";
import HeroContent from "./HeroContent";
import HeroImg from "@/public/HeroImg.webp";

function Hero() {
  return (
    <section className="py-16 relative text-background h-[70vh] w-full md:px-24 lg:px-44 px-5 flex flex-col justify-center gap-2 font-semibold">
      <HeroContent />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className={`${styles.bkgVideo} relative h-full w-full`}>
          <video
            className={`h-full w-full object-cover z-[-10] `}
            autoPlay
            muted={true}
            loop
            playsInline
            poster={HeroImg.src}
          >
            <source src="/HeroBkg.webm" type="video/webm" />
            <source src="/HeroBkg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
