"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import InstagramImage from "@/components/icons/InstagramIconOrange";
import BeforeAfterPic from "@/public/instagram/Post-beforeafter.jpg";
import ImplantPic from "@/public/instagram/Post-Implant-aftercare.jpg";
import AirflowPic from "@/public/instagram/Post-Airflow.jpg";
import YellowTeethPic from "@/public/instagram/Post-Yellowteeth.jpg";
import { useTranslations } from "next-intl";

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

function Instagram({}) {
  const dict = useTranslations("landingPage");
  return (
    <div className="px-5 max-w-5xl w-full">
      <h2 className="mb-4">{dict("instagram.title")}</h2>
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
                fill
                className="object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
      <h4 className="text-center mb-2">{dict("instagram.description")}</h4>
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
