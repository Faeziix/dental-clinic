import React from "react";
import Image from "next/image";
import Image1 from "@/public/portolio/image-1.png";
import Image2 from "@/public/portolio/image-2.png";
import Image3 from "@/public/portolio/image-3.png";
import Image4 from "@/public/portolio/image-4.png";
import Image5 from "@/public/portolio/image-5.png";
import Image6 from "@/public/portolio/image-6.png";
import styles from "./portfolio.module.scss";
import Button from "@/components/ui/Buttons";
import ArrowRightIcon from "@/public/ArrowRightIcon.svg";

const items = [
  {
    category: "جرم‌گیری ایرفلو",
    images: [
      [Image1, Image2],
      [Image3, Image4],
      [Image5, Image6],
    ],
  },
  {
    category: "جرم‌گیری ایرفلو",
    images: [
      [Image1, Image2],
      [Image3, Image4],
      [Image5, Image6],
    ],
  },
];

function Page() {
  return (
    <div className="md:mx-20 mx-5">
      <h1 className="py-16">نمونه کار‌ها</h1>

      {items.map((item, i) => (
        <div className="flex flex-col" key={i}>
          <h2 className="mb-8">{item.category}</h2>
          <div className={styles["items-list"]}>
            {item.images.map((images, n) => (
              <div
                key={n}
                className={`${
                  n == 1 ? "bg-accent" : ""
                } flex py-4 px-2 gap-2 md:flex-col`}
              >
                {images.map((image) => (
                  <div key={image.src} className="basis-full grow">
                    <Image src={image} alt="Portfolio Image" />
                  </div>
                ))}
              </div>
            ))}
            <div className="text-center pt-2 md:py-0 row-start-1 md:row-start-auto md:flex-col flex-row w-full flex">
              <h2 className="md:text-bt grow text-primary">Before</h2>
              <h2 className="md:text-bt grow text-primary">After</h2>
            </div>
          </div>
          <Button
            radius="circle"
            size="xl"
            className="relative mx-auto md:mx-0 mt-8 mb-16"
          >
            مشاهده بیشتر
            <Image
              src={ArrowRightIcon}
              alt="Arrow Right Icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Page;
