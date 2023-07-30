import React from "react";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className="py-16 relative text-Neutral h-[70vh] w-full md:px-24 lg:px-44 px-5 flex flex-col justify-center gap-2 font-semibold">
      <h1 className="">در تلاشیم برای خلق بهترین لبخند شما</h1>
      <p className="max-w-md">
        لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم
        ایپسوملورم ایپسوملورم
      </p>
      <button className="primary w-fit px-16 py-4 flex rounded-full mt-11">
        <span className="w-full text-lg font-bolder grow block">رزرو وقت</span>
      </button>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className={`${styles.bkgVideo} relative h-full w-full`}>
          <video
            className="h-full w-full object-cover z-[-10]"
            autoPlay
            muted
            loop
          >
            <source src="/HeroBkg.MP4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
