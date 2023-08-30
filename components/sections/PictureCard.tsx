import Image from "next/image";
import React from "react";

function PictureCard({ imgSrc, children, align }) {
  return (
    <div className="relative flex flex-col md:items-end items-center ">
      <Image
        src={imgSrc}
        alt="Picture of the author"
        className="relative md:max-w-sm  w-full top-12 -mt-12 -z-10"
      />
      <div
        className={`relative px-10 md:px-0 w-[95%] md:max-w-md  min-w-[300px]
        ${align === "left" ? "md:left-1/3 " : "md:right-1/3"}
      `}
      >
        <div className="rounded-lg border-2 bg-background border-b-4 border-primary py-6 px-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PictureCard;
