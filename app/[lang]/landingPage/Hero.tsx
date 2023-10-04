import React from "react";
import styles from "./Hero.module.scss";
import HeroContent from "./HeroContent";
import HeroImg from "@/public/HeroImg.webp";

function Hero() {
  return (
    <section className="relative flex h-[70vh] w-full flex-col justify-center gap-2 px-5 py-16 font-semibold text-background md:px-24 lg:px-44">
      <HeroContent />
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className={`${styles.bkgVideo} relative h-full w-full`}>
          <video
            className={`z-[-10] h-full w-full object-cover `}
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
