import React from "react";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className="py-16 text-Neutral w-full min-h-[70vh] px-44 h-full flex flex-col justify-center gap-2 font-semibold">
      <h1 className="">در تلاشیم برای خلق بهترین لبخند شما</h1>
      <p className="max-w-md">
        لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم
        ایپسوملورم ایپسوملورم
      </p>
      <button className="primary w-fit px-16 py-4 flex rounded-full mt-11">
        <span className="w-full text-lg font-bolder grow block">رزرو وقت</span>
      </button>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className={`${styles.bkgVideo} relative -z-10`}>
          <video className=" object-cover z-[-1]" autoPlay muted loop>
            <source src="/HeroBkg.MP4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
