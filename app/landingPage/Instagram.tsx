import React from "react";
import Link from "next/link";
import Image from "next/image";
import InstagramImage from "@/components/icons/InstagramIconOrange";
import BeforeAfterPic from "@/public/Post-beforeafter.jpg";
import ImplantPic from "@/public/Post-Implant-aftercare.jpg";
import AirflowPic from "@/public/Post-Airflow.jpg";
import YellowTeethPic from "@/public/Post-Yellowteeth.jpg";

const posts = [
  {
    name: "before_after",
    src: BeforeAfterPic,
    link: "https://www.instagram.com/p/CgkO3ARF1k_/",
  },
  {
    name: "implant",
    src: ImplantPic,
    link: "https://www.instagram.com/p/Crqx_UquqQy/",
  },
  {
    name: "airflow",
    src: AirflowPic,
    link: "https://www.instagram.com/p/Cd6EcZVgzAE/",
  },
  {
    name: "yellow_teeth",
    src: YellowTeethPic,
    link: "https://www.instagram.com/p/CtZjJebOZyj/",
  },
];

function Instagram() {
  return (
    <div className="px-5 max-w-5xl w-full">
      <h1 className="mb-4">اینستاگرام ما</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center justify-center items-center flex-wrap gap-2 mb-4">
        {posts.map((post) => (
          <div
            key={post.name}
            className="max-w-[15rem] relative w-full aspect-square"
          >
            <Link href={post.link} target="_blank">
              <Image
                src={post.src}
                alt="Instagram Post"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </div>
        ))}
      </div>
      <h3 className="text-center mb-2">
        برای اطلاعات جـامع و کــاربردی و همچنین اطلاع از تخفیفات، ما را در
        اینستاگرام دنبال کنید.
      </h3>
      <Link
        className="flex justify-center gap-2 text-accent hover:text-orange-700"
        target="_blank"
        href="https://www.instagram.com/dr.soheila.karimi/"
      >
        dr.soheila.karimi
        <InstagramImage />
      </Link>
    </div>
  );
}

export default Instagram;
