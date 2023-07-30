import React from "react";

function Hero() {
  return (
    <div className="py-16 w-full min-h-[70vh] px-5 h-full flex flex-col justify-center items-center bg-purple-200 gap-4 font-semibold">
      <h1 className="">در تلاشیم برای خلق بهترین لبخند شما</h1>
      <h3 className="">
        لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم
        ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم
      </h3>
      <button className="primary w-32 rounded-3xl">رزرو وقت</button>
    </div>
  );
}

export default Hero;
